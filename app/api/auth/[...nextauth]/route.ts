import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const prisma = new PrismaClient()
export const authOption:NextAuthOptions={
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID!,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        })
      ],
      session:{
        strategy:'jwt'
      }
}
const handeler=NextAuth(authOption);

export {handeler as GET,handeler as POST}