import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { expectedToken, PLAYBOOK_COOKIE } from "@/lib/playbook-auth";

export async function proxy(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // Login page is always accessible so the user can authenticate.
  if (path === "/playbook/login") {
    return NextResponse.next();
  }

  const cookie = request.cookies.get(PLAYBOOK_COOKIE)?.value;
  const expected = await expectedToken();

  if (cookie && expected && cookie === expected) {
    return NextResponse.next();
  }

  const loginUrl = new URL("/playbook/login", request.url);
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ["/playbook", "/playbook/:path*", "/playbook-vendedora.pdf"],
};
