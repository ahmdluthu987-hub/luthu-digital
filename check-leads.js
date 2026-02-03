/* eslint-disable @typescript-eslint/no-require-imports */
require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

/**
 * BEST PRACTICE: Checking Lead Count in Supabase
 * 
 * Recommended (Dashboard): 
 * SELECT count(*) FROM leads;
 * 
 * Alternative (Node.js):
 * This script demonstrates the best way to fetch the count using the Supabase client.
 */

async function getLeadCount() {
    console.log('--- Supabase Leads Counter ---');

    // 1. Configuration Check
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;

    // SECURITY NOTE: 
    // - Use ANON KEY for frontend/public operations (subject to RLS).
    // - Use SERVICE_ROLE_KEY for admin/backend scripts (bypasses RLS).
    // NEVER expose your SERVICE_ROLE_KEY in frontend code or commit it to GitHub.
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    const isServiceRole = !!process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !supabaseKey) {
        console.error('Error: Missing SUPABASE_URL or SUPABASE_KEY in .env.local');
        return;
    }

    console.log(`Using: ${isServiceRole ? 'SERVICE_ROLE_KEY (Bypassing RLS)' : 'ANON_KEY (Filtered by RLS)'}`);

    // 2. Initialize Client
    const supabase = createClient(supabaseUrl, supabaseKey);

    // 3. Fetch Count
    // Best practice: Use { count: 'exact', head: true } to fetch ONLY the count without returning rows.
    const { count, error } = await supabase
        .from('leads')
        .select('*', { count: 'exact', head: true });

    // 4. Handle Results
    if (error) {
        console.error('Supabase Error:', error.message);
        if (error.code === '42P01') console.log('Tip: Check if table name is "leads" or "lead".');
        if (error.code === '42501') console.log('Tip: RLS might be blocking this request with the current key.');
        return;
    }

    console.log('---------------------------');
    console.log(`Total Leads: ${count}`);
    console.log('---------------------------');
}

getLeadCount();
