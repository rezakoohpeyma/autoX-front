import { NextRequest, NextResponse } from "next/server";
import { TOKEN } from "@/features/auth/lib/token";
import { routes } from "@/config/routes";

export default function proxy(request: NextRequest) {
  const token = request.cookies.get(TOKEN)?.value;
  const { pathname } = request.nextUrl;
  const isAuthenticated = !!token;
  const isAuthPage = pathname.startsWith("/sign") || pathname === '/sign-in' || pathname === '/sign-up';
  if (isAuthPage)
    if (isAuthenticated) {
      return NextResponse.redirect(new URL(routes.dashboard, request.url));
    }
  if (!isAuthenticated && !isAuthPage) {
    return NextResponse.redirect(new URL(routes.signIn, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/sign-in', '/sign-up', '/dashboard'],
};
