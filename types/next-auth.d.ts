import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session extends DefaultSession {
    groups: string[];
    id_token: string;
    external_id: string;
  }
}
