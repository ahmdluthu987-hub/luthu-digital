import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { createServerClient } from "@supabase/ssr";

export async function middleware(req: NextRequest) {
    const res = NextResponse.next();

    // allow login always
    if (req.nextUrl.pathname === "/admin/login") return res;

    if (req.nextUrl.pathname.startsWith("/admin")) {
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
                        cookiesToSet.forEach(({ name, value, options }) =>
                            res.cookies.set(name, value, options)
                        );
                    },
                },
            }
        );

        const { data: { session } } = await supabase.auth.getSession();
        if (!session) {
            return NextResponse.redirect(new URL("/admin/login", req.url));
        }
    }

    return res;
}

export const config = { matcher: ["/admin/:path*"] };
