import Link from "next/link";
import { createClient } from "@/lib/supabase-server";
import { redirect } from "next/navigation";
import AdminLayoutShell from "@/components/admin/AdminLayoutShell";

/**
 * Admin Layout (Server Component)
 * Protects ALL child routes (Dashboard, Pending, etc.)
 * Checks session and role on the server.
 */
export default async function AdminLayout({ children }: { children: React.ReactNode }) {
    const supabase = await createClient();

    // 1. Check if user is logged in
    const { data: { user }, error: userError } = await supabase.auth.getUser();

    if (userError || !user) {
        // Not logged in -> Redirect to login
        redirect("/admin/login");
    }

    // 2. Check if user is an admin
    // We query the 'profiles' table where id matches the user's id
    const { data: profile, error: profileError } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", user.id)
        .single();

    // 3. Handle Non-Admin Users
    // If no profile found, or role is not 'admin' -> Redirect to Home
    // We redirect to Home ('/') instead of Login to prevent infinite redirect loops
    // (Login -> Dashboard -> Login loop)
    if (profileError || !profile || profile.role !== "admin") {
        redirect("/");
    }



    return <AdminLayoutShell>{children}</AdminLayoutShell>;
}
