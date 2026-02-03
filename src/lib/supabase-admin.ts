import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseServiceRoleKey) {
    console.warn(
        'Missing Supabase Admin Environment Variables. Ensure process.env.SUPABASE_SERVICE_ROLE_KEY is set.'
    )
}

/**
 * Supabase client for server-side operations.
 * Bypasses Row Level Security (RLS) by using the Service Role Key.
 * NEVER use this in client-side code.
 */
export const supabaseAdmin = createClient(
    supabaseUrl || '',
    supabaseServiceRoleKey || '', // This MUST be the Service Role Key, NOT the Anon Key
    {
        auth: {
            autoRefreshToken: false,
            persistSession: false,
            detectSessionInUrl: false,
        },
    }
)
