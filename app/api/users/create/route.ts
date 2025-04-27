import { auth } from "@/auth";
import { CreateUser } from "@/db/users/commands";
import { CreateUserDTO } from "@/models/dtos/user";
import { NextResponse } from "next/server";
// export const POST = auth(async function POST(req) {
//   console.log(req.auth);
//   if (!req.auth) return NextResponse.json({ message: "Not authenticated" }, { status: 401 });
//   const userDto: CreateUserDTO = await req.json();
//   var result = await CreateUser(userDto.firstName, userDto.lastName, userDto.email, userDto.externalId);

//   if (result.length == 0) {
//     return NextResponse.json({ error: "User not created." }, { status: 400 });
//   }
//   return NextResponse.json({ userId: result[0]["id"] }, { status: 201 });
// });

export const POST = auth(async function POST(req) {
  //console.log("req.auth", req.auth);
  if (req.auth) return NextResponse.json(req.auth);
  return NextResponse.json({ message: "Not authenticated" }, { status: 401 });
});
