const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
require('dotenv').config({ path: '.env.local' });

async function verifyAll() {
    console.log("Starting Verification...");
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    let report = `VERIFICATION REPORT\nURL: ${url}\n-------------------\n`;

    const tables = ['leads', 'contacts', 'subscriptions', 'profiles'];

    // 1. ANON KEY
    report += "\n[ TEST 1: ANON KEY ]\n";
    const supabaseAnon = createClient(url, anonKey, { auth: { persistSession: false } });

    for (const table of tables) {
        try {
            const { count, error } = await supabaseAnon.from(table).select('*', { count: 'exact', head: true });
            if (error) {
                report += `[${table}] ❌ FAILED: ${error.code} - ${error.message}\n`;
            } else {
                report += `[${table}] ✅ SUCCESS (Count: ${count})\n`;
            }
        } catch (e) {
            report += `[${table}] ❌ EXCEPTION: ${e.message}\n`;
        }
    }

    // 2. SERVICE KEY
    if (serviceKey) {
        report += "\n[ TEST 2: SERVICE KEY ]\n";
        const supabaseService = createClient(url, serviceKey, { auth: { persistSession: false } });

        for (const table of tables) {
            try {
                const { count, error } = await supabaseService.from(table).select('*', { count: 'exact', head: true });
                if (error) {
                    report += `[${table}] ❌ FAILED: ${error.code} - ${error.message}\n`;
                } else {
                    report += `[${table}] ✅ SUCCESS (Count: ${count})\n`;
                }
            } catch (e) {
                report += `[${table}] ❌ EXCEPTION: ${e.message}\n`;
            }
        }
    } else {
        report += "\n[ TEST 2: SERVICE KEY ] SKIPPED (Missing)\n";
    }

    fs.writeFileSync('verification_report.txt', report);
    console.log("Done. Wrote verification_report.txt");
}

verifyAll();
