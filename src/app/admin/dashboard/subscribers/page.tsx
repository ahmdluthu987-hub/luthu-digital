import { createAdminClient } from "@/lib/supabase-server";
import { Mail, Calendar, Users, ShieldCheck, ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Subscribers | Admin",
};

export default async function SubscribersPage() {
    const supabase = createAdminClient();

    const { data: subscribers, error } = await supabase
        .from("subscriptions")
        .select("*")
        .order("created_at", { ascending: false });

    if (error) console.error("Error fetching subscribers:", error);
    const subsList = subscribers || [];

    return (
        <div className="pb-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-6">
                <div>
                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                        <Link href="/admin/dashboard" className="hover:text-primary transition-colors flex items-center gap-1 text-xs sm:text-sm">
                            <ArrowLeft className="w-4 h-4" /> Back to Dashboard
                        </Link>
                    </div>
                    <h1 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">Newsletter Subscribers</h1>
                    <p className="text-muted-foreground mt-1 text-sm md:text-base">Users subscribed to your updates</p>
                </div>
                <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-xs sm:text-sm font-bold flex items-center gap-2 border border-primary/20">
                    <Users className="w-4 h-4" />
                    {subsList.length} Active Subscribers
                </div>
            </div>

            {subsList.length === 0 ? (
                <div className="text-center py-12 bg-white rounded-[20px] shadow-sm border border-gray-100">
                    <Mail className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-foreground">No subscribers yet</h3>
                    <p className="text-gray-500 mt-2">New newsletter signups will appear here.</p>
                </div>
            ) : (
                <div className="bg-white rounded-[20px] shadow-sm border border-gray-100 overflow-hidden">
                    {/* Desktop Headers */}
                    <div className="hidden md:grid grid-cols-[3fr_2fr_1fr] gap-6 p-4 lg:p-5 bg-gray-50/50 border-b border-gray-100 text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                        <div>Subscriber Email</div>
                        <div>Date Subscribed</div>
                        <div className="text-right">Status</div>
                    </div>

                    <div className="divide-y divide-gray-100">
                        {subsList.map((sub) => (
                            <div key={sub.id} className="group p-4 lg:p-5 hover:bg-gray-50/50 transition-colors cursor-default">
                                {/* Desktop Layout */}
                                <div className="hidden md:grid grid-cols-[3fr_2fr_1fr] gap-4 items-center">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary shrink-0 transition-transform group-hover:scale-110">
                                            <Mail className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-sm text-foreground">{sub.email}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-500">
                                        <Calendar className="w-3.5 h-3.5 opacity-50" />
                                        {new Date(sub.created_at).toLocaleDateString()}
                                    </div>
                                    <div className="text-right flex justify-end">
                                        <span className="flex items-center gap-1.5 px-2.5 py-1 bg-green-50 text-green-700 text-[10px] font-bold rounded-full uppercase border border-green-100">
                                            <ShieldCheck className="w-3 h-3" />
                                            Active
                                        </span>
                                    </div>
                                </div>

                                {/* Mobile Layout */}
                                <div className="md:hidden flex flex-col gap-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-9 h-9 rounded-full bg-primary/5 flex items-center justify-center text-primary shrink-0">
                                            <Mail className="w-4 h-4" />
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <p className="font-semibold text-sm text-foreground truncate">{sub.email}</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center text-[10px] sm:text-xs">
                                        <p className="text-gray-400 flex items-center gap-1">
                                            <Calendar className="w-3 h-3 opacity-50" />
                                            {new Date(sub.created_at).toLocaleDateString()}
                                        </p>
                                        <span className="px-2 py-0.5 bg-green-50 text-green-700 font-bold rounded-full border border-green-100 uppercase tracking-wider">
                                            Active
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
