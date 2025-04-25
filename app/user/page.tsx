import { auth, signIn } from "@/auth";
//import { CreateUser } from "@/db/users/commands";
export default async function Page() {
  const session = await auth();
  if (!session) return <></>;
  //var result = await CreateUser("Papa", "John", "m@mag.com", "lskjflj");
  // console.log(result);
  return <pre>{JSON.stringify(session, null, 2)}</pre>;
}
