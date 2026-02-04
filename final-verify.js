const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
require('dotenv').config({ path: '.env.local' });

async function verifyCritical() {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    let report = `FINAL CHECK\n`;
    const tables = ['leads', 'contacts', 'subscriptions'];
    const supabase = createClient(url, key, { auth: { persistSession: false } });

    for (const table of tables) {
        try {
            const { count, error } = await supabase.from(table).select('*', { count: 'exact', head: true });
            if (error) {
                report += `[${table}] ❌ FAILED\n`;
            } else {
                report += `[${table}] ✅ SUCCESS (Count: ${count})\n`;
            }
        } catch (e) {
            report += `[${table}] ❌ EXCEPTION\n`;
        }
    }
    fs.writeFileSync('final_status.txt', report);
}

verifyCritical();
