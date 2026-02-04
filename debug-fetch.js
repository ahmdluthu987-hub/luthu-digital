const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

async function debugFetch() {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    console.log("URL:", url);

    try {
        const res = await fetch(`${url}/rest/v1/leads?select=*&head=true`, {
            headers: {
                'apikey': key,
                'Authorization': `Bearer ${key}`
            }
        });

        console.log("Status:", res.status);
        if (!res.ok) {
            const text = await res.text();
            try {
                const json = JSON.parse(text);
                console.log("Error Code:", json.code);
                console.log("Error Message:", json.message);
                console.log("Error Details:", json.details);
                console.log("Error Hint:", json.hint);
            } catch (e) {
                console.log("Raw Text:", text);
            }
        } else {
            console.log("Success. Range:", res.headers.get('content-range'));
        }
    } catch (e) {
        console.error("Direct Fetch Error:", e);
    }
}

debugFetch();
