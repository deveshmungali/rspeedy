"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { WebsiteOwner } from "@/components/svg";
import { Icon } from "@iconify/react";
import { Checkbox } from "@/components/ui/checkbox";
import googleIcon from "@/public/images/auth/google.png";
import facebook from "@/public/images/auth/facebook.png";
import twitter from "@/public/images/auth/twitter.png";
import GithubIcon from "@/public/images/auth/github.png";
import { useMediaQuery } from "@/hooks/use-media-query";

// Site Verification Component
const VerifySite = ({ querySite, setUserData, setError }) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Get the query string from the URL
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const site = urlParams.get("site");

      if (site) {
        fetch(`/api/user/site-verify?site=${site}`)
          .then((response) => response.json())
          .then((data) => {
            if (data.error) {
              setError(data.error);
              setUserData(null);
              alert('Website not registered, please login!')
            } else {
              console.log(data);
              window.close();
              setUserData(data);
              setError("");
            }
          })
          .catch((err) => {
            console.error("Error fetching user data:", err);
            setError("Something went wrong");
          });
      }
    }
  }, [querySite]);

  return null; // This component doesn't need to render anything.
};

const LogInForm = () => {
  const [isPending, startTransition] = React.useTransition();
  const [passwordType, setPasswordType] = React.useState("password");
  const isDesktop2xl = useMediaQuery("(max-width: 1530px)");
  const [querySite, setQuerySite] = useState("");
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");

  const togglePasswordType = () => {
    setPasswordType((prevType) => (prevType === "text" ? "password" : "text"));
  };

  const schema = z.object({
    email: z.string().email({ message: "Your email is invalid." }),
    password: z.string().min(4),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    mode: "all",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    startTransition(async () => {
      let response = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });
      if (response?.ok) {
        toast.success("Login Successful");




        fetch(`/api/user/user-site-check?email=${data.email}`)
          .then((response) => response.json())
          .then((data) => {
            if (data.error) {

              console.log(data);

              // setError(data.error);
              // setUserData(null);
              // alert('Website not registered, please login!')

              
              window.location.assign("/setup-wizard");
            } else {
              console.log(data);

              
              if(data.website_1 || data.website_2){
                window.location.assign("/speed");
              }else{
                window.location.assign("/setup-wizard");
              }
              // window.close();
              // setUserData(data);
              // setError("");

            }
          })
          .catch((err) => {
            console.error("Error fetching user data:", err);
            setError("Something went wrong");
          });






      
        reset();
      } else if (response?.error) {
        toast.error(response?.error);
      }
    });
  };

  return (
    <div className="w-full py-10">
      {/* Verify the site */}
      <VerifySite querySite={querySite} setUserData={setUserData} setError={setError} />

      <Link href="/dashboard" className="inline-block">
        <WebsiteOwner className="h-20 w-[300px] 2xl:w-[200px] 2xl:h-14 text-primary" />
      </Link>
      <div className="2xl:mt-8 mt-6 2xl:text-3xl text-2xl font-bold text-default-900">
        Hey, Hello 👋
      </div>
      <div className="2xl:text-lg text-base text-default-600 2xl:mt-2 leading-6">
        Enter the information you entered while registering.
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-5 2xl:mt-7">
        <div>
          <Label htmlFor="email" className="mb-2 font-medium text-default-600">
            Email
          </Label>
          <Input
            disabled={isPending}
            {...register("email")}
            type="email"
            id="email"
            className={cn("", {
              "border-destructive": errors.email,
            })}
            size={!isDesktop2xl ? "xl" : "lg"}
          />
        </div>
        {errors.email && <div className="text-destructive mt-2">{errors.email.message}</div>}

        <div className="mt-3.5">
          <Label htmlFor="password" className="mb-2 font-medium text-default-600">
            Password
          </Label>
          <div className="relative">
            <Input
              disabled={isPending}
              {...register("password")}
              type={passwordType}
              id="password"
              className="peer"
              size={!isDesktop2xl ? "xl" : "lg"}
              placeholder=" "
            />
            <div
              className="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 cursor-pointer"
              onClick={togglePasswordType}
            >
              {passwordType === "password" ? (
                <Icon icon="heroicons:eye" className="w-5 h-5 text-default-400" />
              ) : (
                <Icon icon="heroicons:eye-slash" className="w-5 h-5 text-default-400" />
              )}
            </div>
          </div>
        </div>
        {errors.password && <div className="text-destructive mt-2">{errors.password.message}</div>}

        <div className="mt-5 mb-8 flex flex-wrap gap-2">
          <div className="flex-1 flex items-center gap-1.5">
            <Checkbox size="sm" className="border-default-300 mt-[1px]" id="isRemebered" />
            <Label
              htmlFor="isRemebered"
              className="text-sm text-default-600 cursor-pointer whitespace-nowrap"
            >
              Remember me
            </Label>
          </div>
          <Link href="/auth/forgot" className="flex-none text-sm text-primary">
            Forget Password?
          </Link>
        </div>
        <Button className="w-full" disabled={isPending} size={!isDesktop2xl ? "lg" : "md"}>
          {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {isPending ? "Loading..." : "Sign In"}
        </Button>
      </form>

      <div className="mt-6 xl:mt-8 flex flex-wrap justify-center gap-4">
        {/* Social login buttons */}
        <Button type="button" size="icon" variant="outline" className="rounded-full border-default-300 hover:bg-transparent" disabled={isPending} onClick={() => signIn("google", { callbackUrl: "/dashboard" })}>
          <Image src={googleIcon} alt="google" className="w-5 h-5" />
        </Button>
        <Button type="button" size="icon" variant="outline" className="rounded-full border-default-300 hover:bg-transparent" disabled={isPending} onClick={() => signIn("github", { callbackUrl: "/dashboard", redirect: false })}>
          <Image src={GithubIcon} alt="github" className="w-5 h-5" />
        </Button>
        <Button type="button" size="icon" variant="outline" className="rounded-full border-default-300 hover:bg-transparent">
          <Image src={facebook} alt="facebook" className="w-5 h-5" />
        </Button>
        <Button type="button" size="icon" variant="outline" className="rounded-full border-default-300 hover:bg-transparent">
          <Image src={twitter} alt="twitter" className="w-5 h-5" />
        </Button>
      </div>

      <div className="mt-5 2xl:mt-8 text-center text-base text-default-600">
        Don't have an account?{" "}
        <Link href="/auth/register" className="text-primary">
          {" "}
          Sign Up{" "}
        </Link>
      </div>
    </div>
  );
};

export default LogInForm;
