const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

async function debugSchema() {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
    const supabase = createClient(url, key);

    const tables = ['leads', 'contacts', 'subscriptions'];

    for (const table of tables) {
        const { data, error } = await supabase.from(table).select('*').limit(1);
        if (data && data.length > 0) {
            console.log(`${table}_cols: ${Object.keys(data[0]).join(',')}`);
        } else {
            console.log(`${table}: empty`);
        }
    }
}

debugSchema();
