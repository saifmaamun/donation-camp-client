import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });
  const { pathname } = request.nextUrl;

  const role = token?.role;

  // role checking

  if (role === "admin" && pathname.startsWith("/dashboard/admin")) {
    return NextResponse.next();
  }

  return NextResponse.redirect(`https://donation-camp-client.vercel.app/`);
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/dashboard/admin/:page*",
};
