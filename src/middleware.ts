import type { NextRequest } from "next/server";
import { cookies } from "next/headers";

import { NextResponse } from "next/server";
export function middleware(request: NextRequest) {
  const biscuitCookieStore = cookies();
  const token = biscuitCookieStore.get("accessToken");
  console.log(token?.value);
  return NextResponse.redirect(new URL("/user/login", request.url));
}
export const config = {
  matcher: ["/uploadBook/:path*"],
};
