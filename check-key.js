require('dotenv').config({ path: '.env.local' });
console.log("Service Key Exists:", !!process.env.SUPABASE_SERVICE_ROLE_KEY);
