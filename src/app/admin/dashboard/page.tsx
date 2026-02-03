import { createClient } from "@/lib/supabase-server";
import { redirect } from "next/navigation";
import { Mail, Clock, CheckCircle } from "lucide-react";

/**
 * Admin Dashboard Overview (Server Component)
 * Securely fetches statistics on the server
 */
export default async function DashboardPage() {
    // 1. Initialize Server Client
    const supabase = await createClient();

    // 2. Authenticate User
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
        redirect("/admin/login");
    }

    // 3. Authorization: Check Admin Role
    const { data: profile } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", user.id)
        .single();

    if (!profile || profile.role !== "admin") {
        // If not admin, kick them out and clear session to prevent redirect loop
        await supabase.auth.signOut();
        redirect("/admin/login");
    }

    // 4. Fetch Stats (Server-Side)
    // using Promise.all for faster parallel fetching
    const [totalRes, pendingRes, completedRes] = await Promise.all([
        supabase.from("contacts").select("*", { count: "exact", head: true }),
        supabase.from("contacts").select("*", { count: "exact", head: true }).eq("status", "new"),
        supabase.from("contacts").select("*", { count: "exact", head: true }).eq("status", "done")
    ]);

    const stats = {
        total: totalRes.count || 0,
        pending: pendingRes.count || 0,
        completed: completedRes.count || 0,
    };

    const statCards = [
        {
            label: "Total Messages",
            value: stats.total,
            icon: Mail,
            color: "text-blue-600",
            bg: "bg-blue-50"
        },
        {
            label: "Pending (New)",
            value: stats.pending,
            icon: Clock,
            color: "text-orange-600",
            bg: "bg-orange-50"
        },
        {
            label: "Completed",
            value: stats.completed,
            icon: CheckCircle,
            color: "text-green-600",
            bg: "bg-green-50"
        },
    ];

    return (
        <div>
            <h1 className="text-3xl font-bold text-[var(--primary)] mb-8">Dashboard Overview</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {statCards.map((card) => (
                    <div
                        key={card.label}
                        className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center space-x-4 transition-transform hover:scale-[1.02]"
                    >
                        <div className={`${card.bg} p-4 rounded-xl`}>
                            <card.icon className={`w-8 h-8 ${card.color}`} />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-500">{card.label}</p>
                            <p className="text-3xl font-bold text-gray-900">{card.value}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-12 p-8 glass-card rounded-2xl border border-white/20">
                <h3 className="text-xl font-semibold mb-4 text-[var(--primary)]">Welcome, Admin</h3>
                <p className="text-gray-600 max-w-2xl">
                    Use the navigation on the left to manage pending inquiries. You can mark messages as completed once you've handled them.
                </p>
                <div className="mt-4 p-4 bg-emerald-50 border border-emerald-100 rounded-lg text-emerald-700 text-sm">
                    <span className="font-semibold">Security Active:</span> You are viewing this page because you are verified as an Admin by the server.
                </div>
            </div>
        </div>
    );
}
