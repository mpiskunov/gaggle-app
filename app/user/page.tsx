import { auth } from "@/auth";
import { CreateUserDTO } from "@/models/dtos/user";
import { headers } from "next/headers";
import { CreateUser } from "@/db/users/commands";
export default async function Page() {
  const session = await auth();
  if (!session) return <></>;
  //console.log(session);
  // const userDto: CreateUserDTO = {
  //   firstName: "Jacob",
  //   lastName: "Eknaian",
  //   email: "jake@golfgaggle.com",
  //   externalId: "lkjasdfoirgsoij09gjgr",
  // };
  // var result = await CreateUser(userDto.firstName, userDto.lastName, userDto.email, userDto.externalId);
  // console.log(result);
  return <pre>{JSON.stringify(session, null, 2)}</pre>;
}
