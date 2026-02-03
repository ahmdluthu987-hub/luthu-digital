const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://xydlnncytzheguzxlcxv.supabase.co';
const serviceKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh5ZGxubmN5dHpoZWd1enhsY3h2Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MDAyMDA5MywiZXhwIjoyMDg1NTk2MDkzfQ.p7Kg9UwZdp5_egFNidtxZ0Snzhgr1Zk9D3P0TfdbXFU';

const supabase = createClient(supabaseUrl, serviceKey);

async function checkUsers() {
    console.log("Fetching users...");
    const { data: { users }, error: userError } = await supabase.auth.admin.listUsers();

    if (userError) {
        console.error("Error fetching users:", userError);
        return;
    }

    console.log(`Found ${users.length} users.`);

    const { data: profiles, error: profileError } = await supabase
        .from('profiles')
        .select('*');

    if (profileError) {
        console.error("Error fetching profiles:", profileError);
        return;
    }

    console.log("Users and Roles:");
    console.table(users.map(u => {
        const profile = profiles.find(p => p.id === u.id);
        return {
            email: u.email,
            id: u.id,
            role: profile ? profile.role : 'NO PROFILE ROW',
            created_at: u.created_at
        };
    }));
}

checkUsers();
