import Credentials from "next-auth/providers/credentials";
// import bcrypt from "bcrypt";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import db from "@/lib/db";  // MySQL connection

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    GithubProvider({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) { 
        console.log("Received credentials:", credentials);
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Missing credentials");
        }

        // Query the database for the user with the provided email
        const [rows] = await db.execute(
          'SELECT * FROM users WHERE user_email = ?',
          [credentials.email]
        );

        const foundUser = rows[0];

        if (!foundUser) {
          throw new Error("User not found");
        }

        // Compare the password using bcrypt
        const isValidPassword = credentials.password === foundUser.password;

        if (!isValidPassword) {
          throw new Error("Invalid password");
        }

        // Return user information including their selected plan
        return {
          id: foundUser.id,
          email: foundUser.user_email,
          selectedPlanId: foundUser.selected_plan_id, // Include the selected plan ID 
          website1: foundUser.website1,
          website2: foundUser.website2
        };
      },
    }),
  ],
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.selectedPlanId = user.selectedPlanId; // Add the selected plan ID to the token
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.selectedPlanId = token.selectedPlanId; // Include the selected plan ID in the session
      }
      return session;
    },
  },
  debug: process.env.NODE_ENV !== "production",
};