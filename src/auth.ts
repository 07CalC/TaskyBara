import type { NextAuthConfig } from "next-auth"
import NextAuth, { AuthError } from "next-auth"
import Google from "next-auth/providers/google"
import { db, users } from "./db/schema"
import Github from "next-auth/providers/github"
import { DrizzleAdapter } from "@auth/drizzle-adapter"


export const authConfig = {
  adapter: DrizzleAdapter(db),
  providers: [Google({
    clientId: process.env.AUTH_GOOGLE_CLIENT_ID!,
    clientSecret: process.env.AUTH_GOOGLE_CLIENT_SECRET!
  })],
  session:{
    strategy: "jwt"
  },
  callbacks: {
    session: async ({ session, token }) => {
      session.user.id = token.sub!
      return session
    },
    // signIn: async({ user: userProvider, account, profile }) => {
    //   try{
    //     if(account?.provider === "google" || account?.provider === "github"){
    //       setUser({
    //         id: userProvider.id,
    //         name: userProvider?.name ?? "",
    //         email: userProvider?.email ?? "",
    //         image: userProvider?.image ?? ""
    //       })
    //       return true
    //     }
    //     return false
    //   }

    //   catch (error: AuthError | any) {
    //     throw new AuthError("failed to sign in", error)
    //   }
    // }, 
    redirect: async ({ url, baseUrl }) => {
      return baseUrl + '/dashboard'
    },
  }
} satisfies NextAuthConfig

export const { 
  handlers, 
  auth, 
  signOut 
} = NextAuth(authConfig)