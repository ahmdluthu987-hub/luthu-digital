import Link from "next/link";
import { createClient } from "@/lib/supabase-server";
import { redirect } from "next/navigation";
import LogoutButton from "@/components/admin/LogoutButton";
import { LayoutDashboard, MessageSquare } from "lucide-react";

/**
 * Admin Layout (Server Component)
 * Protects ALL child routes (Dashboard, Pending, etc.)
 * Checks session and role on the server.
 */
export default async function AdminLayout({ children }: { children: React.ReactNode }) {
    const supabase = await createClient();

    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
        redirect("/admin/login");
    }

    // Role Check for the entire Layout
    const { data: profile } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", user.id)
        .single();

    if (!profile || profile.role !== "admin") {
        await supabase.auth.signOut();
        redirect("/admin/login");
    }

    return (
        <div className="min-h-screen bg-[var(--soft-bg)] flex flex-col md:flex-row">
            {/* Sidebar */}
            <aside className="w-full md:w-64 bg-white border-r border-gray-100 p-6 flex flex-col shadow-sm z-10">
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-[var(--primary)] flex items-center gap-2">
                        <span className="w-2 h-8 bg-[var(--accent)] rounded-full"></span>
                        Admin Panel
                    </h2>
                </div>

                <nav className="flex-1 space-y-2">
                    <Link
                        href="/admin/dashboard"
                        className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-[var(--soft-bg)] hover:text-[var(--primary)] transition-all font-medium"
                    >
                        <LayoutDashboard className="w-5 h-5" />
                        Dashboard
                    </Link>
                    <Link
                        href="/admin/dashboard/pending"
                        className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-[var(--soft-bg)] hover:text-[var(--primary)] transition-all font-medium"
                    >
                        <MessageSquare className="w-5 h-5" />
                        Pending Messages
                    </Link>
                </nav>

                <div className="border-t border-gray-100 pt-4">
                    <p className="text-xs text-gray-400 mb-2 uppercase tracking-wider font-bold">Account</p>
                    <div className="px-4 py-2 bg-gray-50 rounded-lg mb-2">
                        <p className="text-xs text-gray-500 font-mono truncate">{user.email}</p>
                    </div>
                    <LogoutButton />
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-4 md:p-8 overflow-y-auto">
                <div className="max-w-6xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
                    {children}
                </div>
            </main>
        </div>
    );
}
