import { auth, signIn } from "@/auth";
import { query } from "@/db";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await auth();
  const headersList = await headers();
  if (!session) void redirect("/signin");

  const result = await query("SELECT * FROM gaggle_users LIMIT 5", []);
  console.log(result.rows);

  return <pre>{JSON.stringify(session, null, 2)}</pre>;
}
