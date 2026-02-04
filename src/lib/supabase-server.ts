import { createServerClient } from '@supabase/ssr';
import { createClient as createSupabaseJsClient } from '@supabase/supabase-js';
import { cookies } from 'next/headers';

export const createAdminClient = () => {
    return createSupabaseJsClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_ROLE_KEY!,
        {
            auth: {
                persistSession: false,
                autoRefreshToken: false,
                detectSessionInUrl: false
            },
            // Force higher timeout and disable some overhead
            global: {
                fetch: (url, options) => {
                    return fetch(url, { ...options, signal: options?.signal || AbortSignal.timeout(15000) });
                }
            }
        }
    );
};



export async function createClient() {
    const cookieStore = await cookies();

    const isService = !!process.env.SUPABASE_SERVICE_ROLE_KEY;
    console.log("createSupabaseServer: Using " + (isService ? "SERVICE_ROLE_KEY" : "ANON_KEY"));

    return createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                getAll() {
                    return cookieStore.getAll()
                },
                setAll(cookiesToSet) {
                    try {
                        cookiesToSet.forEach(({ name, value, options }) =>
                            cookieStore.set(name, value, options)
                        )
                    } catch {
                        // The `setAll` method was called from a Server Component.
                        // This can be ignored if you have middleware refreshing
                        // user sessions.
                    }
                },
            },
        }
    );
}

export const createSupabaseServer = createClient;
