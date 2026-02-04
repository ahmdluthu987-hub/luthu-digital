import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;

    // Allow login page always
    if (pathname.startsWith("/admin/login")) {
        return NextResponse.next();
    }

    // Only check if user is logged in (cookie exists)
    // We check for commonly used Supabase cookie names or the specific project one if known.
    // The user provided code checks "sb-access-token" or "sb-refresh-token".
    // However, default @supabase/ssr might uses `sb-<ref>-auth-token`.
    // But trusting the user's snippet for now as "FINAL VERSION".
    const hasSession =
        req.cookies.get("sb-access-token") ||
        req.cookies.get("sb-refresh-token") ||
        // Fallback for standard supabase-js v2 cookies just in case
        Array.from(req.cookies.getAll()).some((c) => c.name.startsWith("sb-") && c.name.endsWith("-auth-token"));

    if (!hasSession) {
        return NextResponse.redirect(new URL("/admin/login", req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/admin/:path*"],
};
