const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
require('dotenv').config({ path: '.env.local' });

async function debugSchema() {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
    const supabase = createClient(url, key);

    const tables = ['leads', 'contacts', 'subscriptions'];
    let output = '';

    for (const table of tables) {
        const { data, error } = await supabase.from(table).select('*').limit(1);
        if (data && data.length > 0) {
            output += `${table}_cols: ${Object.keys(data[0]).join(',')}\n`;
            output += `${table}_sample: ${JSON.stringify(data[0])}\n\n`;
        } else {
            output += `${table}: empty\n\n`;
        }
    }

    fs.writeFileSync('schema_debug_final.txt', output);
}

debugSchema();
