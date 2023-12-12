import { UserCredentialsConfig } from "./../../../commen/CommenTypeDefination";
import clientPromise from "@/mongoDb/MongoDB";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth, { NextAuthOptions, RequestInternal } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { connect } from "@/utils/connection";
import * as bcrypt from "bcryptjs";
import { AdminState } from "@/redux/actions/userSlice";
import { store } from "@/redux/store/store";
import { NextResponse } from "next/server";

interface CustomRequestInternal extends RequestInternal {
  session: {
    [key: string]: any; // Define the session properties as needed
  };
}

export const authOption: NextAuthOptions = {
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),

    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "Email" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password",
        },
      },

      async authorize(credentials) {
        try {
          const body: any = credentials;
          const { Adminuser } = await connect();

          // Find user by email
          const user = await Adminuser.findOne({ email: body.username });
          console.log(user, "user");
          if (user) {
            // Compare hashed password
            const isPasswordMatch = await bcrypt.compare(
              body.password,
              user.password
            );

            if (isPasswordMatch) {
              // Passwords match, you can proceed with authentication
              console.log("Authentication successful!");
              await store.dispatch(AdminState(true));
              const additionalUserData = {
                id: user._id,
                email: user.email,
                // Add other user data properties if needed
              };
              return additionalUserData;
            } else {
              // Passwords do not match
              console.log("Incorrect password");
              return Promise.reject({
                success: false,
                error: "Incorrect password",
              });
            }
          } else {
            // User not found
            console.log("User not found");
            return Promise.reject({ success: false, error: "User not found" });
          }
        } catch (error) {
          console.error("Error:", error);
          return Promise.reject({
            success: false,
            error: "Internal server error",
          });
        }
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      session.user = token as any;
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
};
const handeler = NextAuth(authOption);

export { handeler as GET, handeler as POST };
