import { createAdminClient } from "@/lib/supabase-server";
import {
    MessageSquare,
    Users,
    CheckCircle2,
    TrendingUp,
} from "lucide-react";
import DashboardHeader from "@/components/admin/dashboard/DashboardHeader";
import StatsCard from "@/components/admin/dashboard/StatsCard";
import RecentMessages from "@/components/admin/dashboard/RecentMessages";
import SubscribersPanel from "@/components/admin/dashboard/SubscribersPanel";
import LeadsTable from "@/components/admin/dashboard/LeadsTable";

export const dynamic = "force-dynamic";

export const metadata = {
    title: "Executive Dashboard | Admin",
};

export default async function AdminDashboard() {
    const supabase = createAdminClient();

    // Fetch data concurrently for performance
    const [
        leadsRes,
        pendingRes,
        completedRes,
        subsRes,
        recentContacts,
        recentLeads,
        recentSubs
    ] = await Promise.all([
        supabase.from("leads").select("*", { count: "exact", head: true }),
        supabase.from("contacts").select("*", { count: "exact", head: true }).eq("status", "new"),
        supabase.from("contacts").select("*", { count: "exact", head: true }).eq("status", "done"),
        supabase.from("subscriptions").select("*", { count: "exact", head: true }),
        supabase.from("contacts").select("*").order("created_at", { ascending: false }).limit(5),
        supabase.from("leads").select("*").order("created_at", { ascending: false }).limit(5),
        supabase.from("subscriptions").select("*").order("created_at", { ascending: false }).limit(10),
    ]);

    const stats = [
        {
            title: "Total Leads",
            value: leadsRes.count ?? 0,
            href: "/admin/dashboard/leads",
            icon: TrendingUp,
            color: "blue",
            subtext: "Chatbot submissions"
        },
        {
            title: "Pending",
            value: pendingRes.count ?? 0,
            href: "/admin/dashboard/pending",
            icon: MessageSquare,
            color: "orange",
            subtext: "Waiting for reply"
        },
        {
            title: "Completed",
            value: completedRes.count ?? 0,
            href: "/admin/dashboard/completed",
            icon: CheckCircle2,
            color: "green",
            subtext: "Archived messages"
        },
        {
            title: "Subscribers",
            value: subsRes.count ?? 0,
            href: "/admin/dashboard/subscribers",
            icon: Users,
            color: "primary",
            subtext: "Newsletter signups"
        },
    ];

    return (
        <div className="pb-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <DashboardHeader />

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6">
                {stats.map((stat) => (
                    <StatsCard key={stat.title} {...stat} />
                ))}
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* Left Column: Messages & Leads */}
                <div className="lg:col-span-2 space-y-6">
                    <RecentMessages messages={recentContacts.data || []} />
                    <LeadsTable leads={recentLeads.data || []} />
                </div>

                {/* Right Column: Subscribers */}
                <div className="lg:col-span-1">
                    <SubscribersPanel
                        subscribers={recentSubs.data || []}
                        totalCount={subsRes.count ?? 0}
                    />
                </div>
            </div>
        </div>
    );
}
