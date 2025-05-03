import { auth } from "@/auth";
import { CreateAccolade, UpdateAccolade } from "@/db/accolades/commands";
export default async function Page() {
  const session = await auth();
  if (!session) return <></>;

  var result = await UpdateAccolade({
    id: "774a3a7c-2db9-4285-af94-0573ceaa24f8",
    name: "cool ffffff here",
    updatedBy: "40b50928-cefd-41ae-816b-b6b1173456b1",
  });
  console.log("result", result);
  return <pre>{JSON.stringify(session, null, 2)}</pre>;
}
