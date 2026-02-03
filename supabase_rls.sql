-- 1. Enable RLS on tables
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
-- 2. CONTACTS TABLE POLICIES
-- Allow anyone (anon) to send messages
CREATE POLICY "Allow public insert" ON contacts FOR
INSERT TO public WITH CHECK (true);
-- Allow Admins to View Messages
CREATE POLICY "Allow admins to view messages" ON contacts FOR
SELECT TO authenticated USING (
        EXISTS (
            SELECT 1
            FROM profiles
            WHERE profiles.id = auth.uid()
                AND profiles.role = 'admin'
        )
    );
-- Allow Admins to Update Messages (Mark as done)
CREATE POLICY "Allow admins to update messages" ON contacts FOR
UPDATE TO authenticated USING (
        EXISTS (
            SELECT 1
            FROM profiles
            WHERE profiles.id = auth.uid()
                AND profiles.role = 'admin'
        )
    );
-- Allow Admins to Delete Messages
CREATE POLICY "Allow admins to delete messages" ON contacts FOR DELETE TO authenticated USING (
    EXISTS (
        SELECT 1
        FROM profiles
        WHERE profiles.id = auth.uid()
            AND profiles.role = 'admin'
    )
);
-- 3. PROFILES TABLE POLICIES
-- Allow users to read their own profile (Required for Role Check)
CREATE POLICY "Allow users to read own profile" ON profiles FOR
SELECT TO authenticated USING (auth.uid() = id);