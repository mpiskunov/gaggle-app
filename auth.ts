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
        var user = await GetUserByExternalId(profile?.sub ?? "");
        token.picture = user?.avatar;
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
      var user = await GetUserByExternalId(msg.profile?.sub ?? "");
      if (user) {
        //console.log("user exists");
      } else {
        //console.log("user does not exist");
        const email = msg.user.email ?? "none";
        var result = await GetUserFromIdentityProvider(email);
        var userId = await CreateGaggleUser({
          firstName: msg.user.name!.split(" ")[0],
          lastName: msg.user.name!.split(" ")[1],
          email: msg.user.email!,
          externalUserlId: msg.profile!.sub!,
          createdBy: process.env.SYSTEM_GUID!,
          avatar: result.results[0].avatar,
        });
        console.log(`created user: ${userId}`);
      }
    },
  },
  providers: providers,
});
