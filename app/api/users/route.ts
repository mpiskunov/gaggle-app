import { auth } from "@/auth";
import { query } from "@/db";
import { NextResponse } from "next/server";

export const GET = auth(async function GET(req) {
  if (!req.auth) return NextResponse.json({ message: "Not authenticated" }, { status: 401 });
  const result = await query("SELECT * FROM gaggle_users LIMIT 5", []);
  console.log(result.rows);
  return NextResponse.json(result.rows);
});

export const POST = auth(async function POST(request: Request) {
  //const res = await request.json();
  return Response.json({ yo: "wazzup" });
});
