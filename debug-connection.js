const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

async function debugConnection() {
    console.log("Node Version:", process.version);
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!url || !key) {
        console.error("Missing env vars");
        return;
    }

    console.log("Testing connection to:", url);

    try {
        const supabase = createClient(url, key, {
            auth: { persistSession: false }
        });

        const start = Date.now();
        const { count, error } = await supabase
            .from('leads')
            .select('*', { count: 'exact', head: true });

        const duration = Date.now() - start;
        console.log(`Duration: ${duration}ms`);

        if (error) {
            console.error("Supabase Error:", error);
        } else {
            console.log("Success! Count:", count);
        }

    } catch (err) {
        console.error("Critical Fetch Error:", err);
        if (err.cause) console.error("Cause:", err.cause);
    }
}

debugConnection();
