import { createSupabaseServer } from "@/lib/supabase-server";

export default async function AdminDashboard() {
    const supabase = await createSupabaseServer();

    const [{ count: totalLeads }, { count: pending }, { count: completed }, { count: subscribers }] =
        await Promise.all([
            supabase.from("leads").select("*", { count: "exact", head: true }),
            supabase.from("contacts").select("*", { count: "exact", head: true }).eq("status", "new"),
            supabase.from("contacts").select("*", { count: "exact", head: true }).eq("status", "done"),
            supabase.from("subscriptions").select("*", { count: "exact", head: true }),
        ]);

    return (
        <div>
            {/* UI unchanged – only data fixed */}
            <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <Stat title="Total Leads" value={totalLeads ?? 0} />
                <Stat title="Pending" value={pending ?? 0} />
                <Stat title="Completed" value={completed ?? 0} />
                <Stat title="Subscribers" value={subscribers ?? 0} />
            </div>
        </div>
    );
}

function Stat({ title, value }: { title: string; value: number }) {
    return (
        <div className="rounded-xl bg-white shadow p-6">
            <p className="text-gray-500">{title}</p>
            <p className="text-3xl font-bold">{value}</p>
        </div>
    );
}
