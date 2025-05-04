import { auth } from "@/auth";
import { GetAllAccolades } from "@/db/accolades/queries";
export default async function Page() {
  const session = await auth();
  if (!session) return <></>;

  var result = await GetAllAccolades();
  console.log("result", result);
  return <pre>{JSON.stringify(result, null, 2)}</pre>;
}
