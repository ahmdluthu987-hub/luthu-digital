const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
require('dotenv').config({ path: '.env.local' });

async function checkTables() {
    console.log("Starting checkTables Permutations...");
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    let output = `Report:\nURL: ${url}\n`;

    const supabase = createClient(url, key, {
        auth: { persistSession: false }
    });

    // Test 1: HEAD (Original)
    try {
        output += "Test 1: HEAD + Count\n";
        const { count, error } = await supabase.from('leads').select('*', { count: 'exact', head: true });
        if (error) output += `Error: ${JSON.stringify(error)}\n`;
        else output += `Success. Count: ${count}\n`;
    } catch (e) { output += `Exception: ${e.message}\n`; }

    // Test 2: GET (No Head)
    try {
        output += "Test 2: GET + Count\n";
        const { data, count, error } = await supabase.from('leads').select('*', { count: 'exact', head: false }).limit(1);
        if (error) output += `Error: ${JSON.stringify(error)}\n`;
        else output += `Success. Count: ${count}. Data Length: ${data ? data.length : 0}\n`;
    } catch (e) { output += `Exception: ${e.message}\n`; }

    // Test 3: Simple GET
    try {
        output += "Test 3: Simple GET (No Count)\n";
        const { data, error } = await supabase.from('leads').select('*').limit(1);
        if (error) output += `Error: ${JSON.stringify(error)}\n`;
        else output += `Success. Data: ${JSON.stringify(data)}\n`;
    } catch (e) { output += `Exception: ${e.message}\n`; }

    fs.writeFileSync('table_status_perm.txt', output);
    console.log("Done. Wrote table_status_perm.txt");
}

checkTables();
