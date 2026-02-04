const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

async function debugConnection() {
    console.log("Node Version:", process.version);
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    // Try to find service role key for admin verification, fallback to anon
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    const isServiceRole = !!process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!url || !key) {
        console.error("Missing env vars (URL or Key)");
        return;
    }

    console.log("Testing connection to:", url);
    console.log("Using Service Role Key:", isServiceRole);

    try {
        const supabase = createClient(url, key, {
            auth: { persistSession: false },
            global: {
                headers: isServiceRole ? { 'Authorization': `Bearer ${key}` } : undefined
            }
        });

        const start = Date.now();
        // Use 'leads' table if admin, otherwise maybe just check a public table or handle error gracefully
        const { count, error } = await supabase
            .from('leads')
            .select('*', { count: 'exact', head: true });

        const duration = Date.now() - start;
        console.log(`Duration: ${duration}ms`);

        if (error) {
            console.error("Supabase Error:", error);
            if (!isServiceRole && (error.code === '42501' || error.message.includes('permission'))) {
                console.log("NOTE: This is expected if using Anon Key and RLS is enabled on 'leads'. Connection is likely fine.");
            }
        } else {
            console.log("Success! Count:", count);
        }

    } catch (err) {
        console.error("Critical Fetch Error:", err);
        if (err.cause) console.error("Cause:", err.cause);
    }
}

debugConnection();
