//export { auth as middleware } from "@/auth";

import { auth } from "@/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  // if (!req.auth) {
  //   const newUrl = new URL("/signin", req.nextUrl.origin);
  //   newUrl.searchParams.append("callbackUrl", req.nextUrl.pathname);
  //   return Response.redirect(newUrl);
  // }
  //console.log("req", req);
  return NextResponse.next();
});

export const config = {
  matcher: ["/user/:path*"],
};
