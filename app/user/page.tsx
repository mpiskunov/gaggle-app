import { auth } from "@/auth";
export default async function Page() {
  const session = await auth();
  if (!session) return <></>;

  // var result = await
  //   console.log("result", result);
  return <pre>{JSON.stringify(session, null, 2)}</pre>;
}
