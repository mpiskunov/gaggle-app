import Authentik from "next-auth/providers/authentik";
import NextAuth from "next-auth";
import type { Provider } from "next-auth/providers";

const providers: Provider[] = [
  Authentik({
    authorization: { params: { scope: "openid email profile offline_access" } },
  }),
];
export const { auth, handlers, signIn, signOut } = NextAuth({
  callbacks: {
    async jwt({ token, account, profile }) {
      if (account) {
        token.external_id = profile?.sub;
        token.groups = profile?.groups;
      }
      return token;
    },
    async session({ session, token }) {
      session.external_id = token.external_id;
      session.groups = token.groups;
      return session;
    },
  },
  events: {
    async signIn(msg) {
      console.log("signIn Event", msg);
    },
  },
  providers: providers,
});
