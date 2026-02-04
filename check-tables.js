const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
require('dotenv').config({ path: '.env.local' });

async function checkTables() {
    console.log("Starting checkTables...");
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    let output = `Report:\nURL: ${url}\nKey Length: ${key ? key.length : 0}\n`;

    try {
        const supabase = createClient(url, key, {
            auth: { persistSession: false }
        });

        output += "Checking 'leads' table...\n";
        const { count, error: leadsError } = await supabase.from('leads').select('*', { count: 'exact', head: true });

        if (leadsError) {
            output += `leads Error: ${JSON.stringify(leadsError)}\n`;
            if (leadsError.cause) output += `Cause: ${JSON.stringify(leadsError.cause)}\n`;
        } else {
            output += `leads Table: EXISTS. Count: ${count}\n`;
        }

    } catch (e) {
        output += `Exception: ${e.message}\nCause: ${e.cause}\nStack: ${e.stack}\n`;
    }

    fs.writeFileSync('table_status.txt', output);
    console.log("Done. Wrote table_status.txt");
}

checkTables();
