const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
require('dotenv').config({ path: '.env.local' });

async function debugFail() {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    const supabase = createClient(url, key, { auth: { persistSession: false } });

    let report = "FAILURE ANALYIS:\n";

    try {
        const { count, error } = await supabase.from('leads').select('*', { count: 'exact', head: true });
        if (error) {
            report += `Code: ${error.code}\nMessage: ${error.message}\nHint: ${error.hint || 'None'}\nDetails: ${error.details || 'None'}\n`;
        } else {
            report += "SUCCESS (Unexpectedly)\n";
        }
    } catch (e) {
        report += `Exception: ${e.message}\n`;
    }

    // Also try Service Key just to compare
    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (serviceKey) {
        const supabaseService = createClient(url, serviceKey, { auth: { persistSession: false } });
        const { error } = await supabaseService.from('leads').select('*', { count: 'exact', head: true });
        report += `Service Key Check: ${error ? 'FAILED' : 'SUCCESS'}\n`;
    }

    fs.writeFileSync('fail_report.txt', report);
}

debugFail();
