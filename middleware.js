import { NextResponse } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

let defaultLocale = "en";
let locales = ["bn", "en", "ar"];

// Get the preferred locale, similar to above or using a library
function getLocale(request) {
  const acceptedLanguage = request.headers.get("accept-language") ?? undefined;
  let headers = { "accept-language": acceptedLanguage };
  let languages = new Negotiator({ headers }).languages();

  return match(languages, locales, defaultLocale); // -> 'en-US'
}

export function middleware(request) {
  const pathname = request.nextUrl.pathname;
  
  // Step 1: Check if the request is missing a locale in the URL
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);
    return NextResponse.redirect(new URL(`/${locale}/${pathname}`, request.url));
  }

  // Step 2: Handle authentication
  const token = request.cookies.get('authToken'); // Assumes you store a token in a cookie called 'authToken'
  
  // If the user is not authenticated and they are trying to access a restricted page
  if (!token && pathname === '/auth/logout') {
    // Redirect to the logout page with the correct locale
    const locale = getLocale(request);
    return NextResponse.redirect(new URL(`/${locale}/panel/wordpressspeedy/en`, request.url));
  }

  // Additional redirection logic can be added here if necessary
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, assets, api)
    "/((?!api|assets|docs|.*\\..*|_next).*)",
  ],
};
