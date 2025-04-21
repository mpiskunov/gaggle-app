import { auth } from "@/auth";
import { query } from "@/db";

export default async function Page() {
  const session = await auth();

  const result = await query("SELECT * FROM gaggle_users LIMIT 5", []);
  console.log(result.rows);

  return <pre>{JSON.stringify(session, null, 2)}</pre>;
}
