import clientPromise from "@/mongoDb/MongoDB";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { Login } from "@/app/login/loginService";
import { LoginTypeToken } from "@/app/login/loginType";

const prisma = new PrismaClient();
export const authOption: NextAuthOptions = {
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const user = {
          id: "1",
          name: "Srinivasan",
          email: "vasan4649@gmail.com",
          password: "rs2ssvvmm",
          isAdmin: true,
        };
        if (user) {
          const res = await Login(credentials as LoginTypeToken);
          console.log(res, "res123");
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
};
const handeler = NextAuth(authOption);

export { handeler as GET, handeler as POST };
