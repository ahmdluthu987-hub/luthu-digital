import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { createServerClient } from "@supabase/ssr";

export async function middleware(req: NextRequest) {
    // Create an initial response that will be modified if cookies are refreshed
    let res = NextResponse.next({
        request: {
            headers: req.headers,
        },
    });

    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                getAll() {
                    return req.cookies.getAll();
                },
                setAll(cookiesToSet) {
                    cookiesToSet.forEach(({ name, value, options }) => req.cookies.set(name, value));
                    res = NextResponse.next({
                        request: req,
                    });
                    cookiesToSet.forEach(({ name, value, options }) =>
                        res.cookies.set(name, value, options)
                    );
                },
            },
        }
    );

    const {
        data: { session },
    } = await supabase.auth.getSession();

    const pathname = req.nextUrl.pathname;

    // ✅ Allow login page ALWAYS
    if (pathname.startsWith("/admin/login")) {
        return res;
    }

    // 🔒 Protect ALL other /admin routes
    if (pathname.startsWith("/admin")) {
        if (!session) {
            return NextResponse.redirect(
                new URL("/admin/login", req.url)
            );
        }
    }

    return res;
}

export const config = {
    matcher: ["/admin/:path*"],
};
