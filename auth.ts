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
  providers: providers,
  // pages: {
  //   signIn: "/signin2",
  // },
});
export const providerMap = providers
  .map((provider) => {
    if (typeof provider === "function") {
      const providerData = provider();
      return { id: providerData.id, name: providerData.name };
    } else {
      return { id: provider.id, name: provider.name };
    }
  })
  .filter((provider) => provider.id !== "credentials");
