import { NextResponse } from "next/server";
export function middleware(request: Request) {
  return NextResponse.redirect(new URL("/user/login", request.url));
}
export const config = {
  matcher: ["/uploadBook/:path*"],
};
