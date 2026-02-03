const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://xydlnncytzheguzxlcxv.supabase.co';
const serviceKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh5ZGxubmN5dHpoZWd1enhsY3h2Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MDAyMDA5MywiZXhwIjoyMDg1NTk2MDkzfQ.p7Kg9UwZdp5_egFNidtxZ0Snzhgr1Zk9D3P0TfdbXFU';

const supabase = createClient(supabaseUrl, serviceKey, {
    auth: {
        autoRefreshToken: false,
        persistSession: false
    }
});

async function setAdmin() {
    console.log("Fetching users...");
    const { data: { users }, error: userError } = await supabase.auth.admin.listUsers();

    if (userError) {
        console.error("Error fetching users:", userError);
        return;
    }

    if (users.length === 0) {
        console.error("No users found!");
        return;
    }

    const user = users[0];
    console.log(`Found User: ${user.email} (ID: ${user.id})`);

    console.log("Updating profile to admin...");

    // Explicitly upsert the profile with admin role
    const { data, error } = await supabase
        .from('profiles')
        .upsert({
            id: user.id,
            role: 'admin',
            updated_at: new Date().toISOString()
            // Add other fields if necessary, but usually ID and role are enough if others are nullable
        }, { onConflict: 'id' })
        .select();

    if (error) {
        console.error("Error updating profile:", error);

        // Fallback: Try INSERT if upsert fails (though upsert handles insert)
        // Or specific RLS bypass check.
        // It's possible the 'profiles' table has a Trigger that fails?
    } else {
        console.log("SUCCESS: User profile updated to 'admin'.");
        console.log(data);
    }
}

setAdmin();
