import { createClient } from "@/lib/supabase-server";
import { redirect } from "next/navigation";
import { Mail, Clock, CheckCircle, Users } from "lucide-react";
import StatCard from "@/components/admin/StatCard";

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
        await supabase.auth.signOut();
        redirect("/admin/login");
    }

    // 4. Fetch Stats (Server-Side)
    const [totalRes, pendingRes, completedRes] = await Promise.all([
        supabase.from("contacts").select("*", { count: "exact", head: true }),
        supabase.from("contacts").select("*", { count: "exact", head: true }).eq("status", "new"),
        supabase.from("contacts").select("*", { count: "exact", head: true }).eq("status", "done")
    ]);

    // Placeholder for subscribers until table is implemented
    const subscribersCount = 0;

    // Calculate trends (mock logic for demo purposes, can be real later)
    const stats = {
        total: totalRes.count || 0,
        pending: pendingRes.count || 0,
        completed: completedRes.count || 0,
        subscribers: subscribersCount
    };

    return (
        <div>
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-800">Dashboard Overview</h1>
                <p className="text-gray-500 mt-1">Welcome back, here's what's happening today.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <StatCard
                    title="Total Leads"
                    value={stats.total}
                    icon={Mail}
                    trend="+12% vs last month"
                />
                <StatCard
                    title="Pending"
                    value={stats.pending}
                    icon={Clock}
                    trend={stats.pending > 0 ? "Needs Action" : "All Good"}
                />
                <StatCard
                    title="Completed"
                    value={stats.completed}
                    icon={CheckCircle}
                />
                <StatCard
                    title="Subscribers"
                    value={stats.subscribers}
                    icon={Users}
                />
            </div>

            {/* Quick Actions / Recent Activity Section can go here */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">Quick Setup Guide</h3>
                    <div className="space-y-4">
                        <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl">
                            <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                                <Mail className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-blue-900">Check Pending Leads</h4>
                                <p className="text-sm text-blue-700 mt-1">You have {stats.pending} pending inquiries waiting for a response.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-4 bg-green-50 rounded-xl">
                            <div className="bg-green-100 p-2 rounded-lg text-green-600">
                                <CheckCircle className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-green-900">Mark as Completed</h4>
                                <p className="text-sm text-green-700 mt-1">Keep your inbox zero by marking leads as done.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
