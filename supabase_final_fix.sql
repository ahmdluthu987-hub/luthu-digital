-- 🚨 RUN THIS IN SUPABASE SQL EDITOR TO FIX THE REDIRECT ISSUE 🚨
-- 1. Enable RLS on profiles (ensuring security)
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
-- 2. Allow users to read their OWN profile
-- This fixes the middleware check: .eq("id", session.user.id)
DROP POLICY IF EXISTS "Users can view own profile" ON profiles;
CREATE POLICY "Users can view own profile" ON profiles FOR
SELECT USING (auth.uid() = id);
-- 3. Allow users to update their OWN profile (optional but recommended)
DROP POLICY IF EXISTS "Users can update own profile" ON profiles;
CREATE POLICY "Users can update own profile" ON profiles FOR
UPDATE USING (auth.uid() = id);
-- 4. Allow Service Role (Admin API) full access
-- This ensures server-side scripts and actions work
DROP POLICY IF EXISTS "Service role can do everything" ON profiles;
CREATE POLICY "Service role can do everything" ON profiles TO service_role USING (true) WITH CHECK (true);
-- 5. VERIFICATION
-- After running this, the "permission denied" error in middleware will stop.