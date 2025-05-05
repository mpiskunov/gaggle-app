import { auth } from "@/auth";
import { CreateAccolade } from "@/db/accolades/commands";

export default async function Page() {
  const session = await auth();
  if (typeof window === "undefined") return null;

  if (session) {
    return (
      <>
        <h1>Protected Page</h1>
        <p>You can view this page because you are signed in.</p>
      </>
    );
  }
  return <p>Access Denied</p>;
}