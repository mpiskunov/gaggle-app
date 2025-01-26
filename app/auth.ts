import type { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from "next";
import type { NextAuthOptions } from "next-auth";
import { getServerSession } from "next-auth";

export const authConfig = {
  callbacks: {
    async jwt({ token, account, profile }) {
      // this is where I can access all my jwt properties
      if (account) {
        //console.log("profile", profile);
        token.accessToken = account.access_token;
        token.id = profile?.sub;
        token.groups = profile?.groups;
        // token.isAdmin = profile?.isAdmin;
        // token.gaggle_power_user = profile?.gaggle_power_user;
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      session.groups = token.groups;
      // session.gaggle_power_user = token.gaggle_power_user;
      return session;
    },
  },
  providers: [
    {
      id: "authentik",
      name: "authentik",
      type: "oauth",
      wellKnown: `${process.env.AUTH_DOMAIN}/golf-gaggle/.well-known/openid-configuration`,
      userinfo: `${process.env.AUTH_DOMAIN}/userinfo/`,
      authorization: { params: { scope: "openid email profile offline_access user:attributes" } }, // user:attributes is custom
      idToken: true,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      profile(profile) {
        return {
          id: profile.sub,
          name: profile.name ?? profile.preferred_username,
          email: profile.email,
          image: profile.picture,
          preferred_username: profile.preferred_username,
          isAdmin: profile.isAdmin,
          gaggle_power_user: profile.gaggle_power_user,
        };
      },
    },
  ],
} satisfies NextAuthOptions;

// Use it in server contexts
export function auth(...args: [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]] | [NextApiRequest, NextApiResponse] | []) {
  return getServerSession(...args, authConfig);
}
