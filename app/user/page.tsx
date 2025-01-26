import { getServerSession } from "next-auth/next";
import { authConfig } from "../auth";

export default async function Page() {
  const session = await getServerSession(authConfig);
  console.log(session);
  return <pre>{JSON.stringify(session, null, 2)}</pre>;
}
