import type { NextAuthConfig } from "next-auth"
import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { db } from "./db/schema"
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

    redirect: async ({ baseUrl }) => {
      return baseUrl + '/console/dashboard'
    },
  }
} satisfies NextAuthConfig

export const { 
  handlers, 
  auth, 
  signOut 
} = NextAuth({...authConfig, trustHost: true})