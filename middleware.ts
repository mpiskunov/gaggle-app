//export { auth as middleware } from "@/auth";

import { auth } from "@/auth";

export default auth((req) => {
  if (!req.auth) {
    const newUrl = new URL("/signin", req.nextUrl.origin);
    newUrl.searchParams.append("callbackUrl", req.nextUrl.pathname);
    return Response.redirect(newUrl);
  }
});

export const config = {
  matcher: ["/user/:path*"],
};
