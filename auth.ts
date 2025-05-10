import Authentik from "next-auth/providers/authentik";
import NextAuth from "next-auth";
import type { Provider } from "next-auth/providers";
import { GetUserFromIdentityProvider } from "./apis/identity";
import { GetUserByExternalId } from "./db/gaggle_users/queries";
import { CreateGaggleUser } from "./db/gaggle_users/commands";

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
        console.log(profile);
        token.picture = profile?.picture; // this gets populated in the signIn callback
      }
      return token;
    },
    async session({ session, token }) {
      session.external_id = token.external_id;
      session.groups = token.groups;
      return session;
    },
    async signIn({ user, account, profile }) {
      var userFromDb = await GetUserByExternalId(profile?.sub ?? "");
      if (profile) {
        if (userFromDb) {
          profile.picture = userFromDb.avatar;
        } else {
          const email = profile.email ?? "none";
          var result = await GetUserFromIdentityProvider(email);
          var userId = await CreateGaggleUser({
            firstName: profile.name!.split(" ")[0],
            lastName: profile.name!.split(" ")[1],
            email: profile.email!,
            externalUserlId: profile.sub!,
            createdBy: process.env.SYSTEM_GUID!,
            avatar: result.results[0].avatar,
          });
          console.log(`created user: ${userId}`);
          profile.picture = result.results[0].avatar;
        }
      }

      return true;
    },
  },
  events: {
    async signIn(msg) {},
  },
  providers: providers,
});
