const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

async function debugSchema() {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
    const supabase = createClient(url, key);

    const tables = ['leads', 'contacts', 'subscriptions'];
    const results = {};

    for (const table of tables) {
        const { data, error } = await supabase.from(table).select('*').limit(1);
        if (error) {
            results[table] = { error: error.message };
        } else if (data && data.length > 0) {
            results[table] = { columns: Object.keys(data[0]), sample: data[0] };
        } else {
            results[table] = { message: 'Empty' };
        }
    }

    console.log(JSON.stringify(results, null, 2));
}

debugSchema();
