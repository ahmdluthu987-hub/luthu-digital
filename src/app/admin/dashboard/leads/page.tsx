import { createAdminClient } from "@/lib/supabase-server";
import { Mail, Phone, Calendar, Search, ArrowLeft, TrendingUp } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Chatbot Leads | Admin",
};

export default async function LeadsPage() {
    const supabase = createAdminClient();

    const { data: leads, error } = await supabase
        .from("leads")
        .select("*")
        .order("created_at", { ascending: false });

    if (error) console.error("Error fetching leads:", error);
    const leadsList = leads || [];

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
                    <h1 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">Chatbot Leads</h1>
                    <p className="text-muted-foreground mt-1 text-sm md:text-base">Direct inquiries from the AI assistant</p>
                </div>
                <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-xs sm:text-sm font-bold flex items-center gap-2 border border-blue-100">
                    <TrendingUp className="w-4 h-4" />
                    {leadsList.length} Total Leads
                </div>
            </div>

            {leadsList.length === 0 ? (
                <div className="text-center py-12 bg-white rounded-[20px] shadow-sm border border-gray-100">
                    <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-foreground">No leads found</h3>
                    <p className="text-gray-500 mt-2">Chatbot submissions will appear here.</p>
                </div>
            ) : (
                <div className="bg-white rounded-[20px] shadow-sm border border-gray-100 overflow-hidden">
                    {/* Desktop Headers */}
                    <div className="hidden md:grid grid-cols-[2fr_2fr_1fr_1fr] gap-6 p-4 lg:p-5 bg-gray-50/50 border-b border-gray-100 text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                        <div>Lead Name</div>
                        <div>Contact Details</div>
                        <div>Service Interest</div>
                        <div className="text-right">Date</div>
                    </div>

                    <div className="divide-y divide-gray-100">
                        {leadsList.map((lead) => (
                            <div key={lead.id} className="group p-4 lg:p-5 hover:bg-gray-50/50 transition-colors">
                                {/* Desktop Layout */}
                                <div className="hidden md:grid grid-cols-[2fr_2fr_1fr_1fr] gap-4 items-center">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold shrink-0 text-sm">
                                            {lead.name.charAt(0).toUpperCase()}
                                        </div>
                                        <div>
                                            <span className="font-bold text-sm text-foreground">{lead.name}</span>
                                            <p className="text-[10px] text-muted-foreground/70 uppercase tracking-wider mt-0.5">Verified Lead</p>
                                        </div>
                                    </div>

                                    <div className="space-y-1">
                                        <div className="flex items-center gap-2 text-sm text-foreground/80">
                                            <Mail className="w-3.5 h-3.5 text-gray-400" /> {lead.email}
                                        </div>
                                        {lead.phone && (
                                            <div className="flex items-center gap-2 text-sm text-foreground/80">
                                                <Phone className="w-3.5 h-3.5 text-gray-400" /> {lead.phone}
                                            </div>
                                        )}
                                    </div>

                                    <div>
                                        <span className="px-2.5 py-1 rounded-full bg-accent/10 text-accent text-[10px] font-bold uppercase tracking-wide">
                                            {lead.service || 'General'}
                                        </span>
                                    </div>

                                    <div className="flex items-center justify-end gap-2 text-sm text-gray-500">
                                        <Calendar className="w-3.5 h-3.5 opacity-50" />
                                        {new Date(lead.created_at).toLocaleDateString()}
                                    </div>
                                </div>

                                {/* Mobile Card Layout */}
                                <div className="md:hidden space-y-4">
                                    <div className="flex justify-between items-start">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold shrink-0 text-sm">
                                                {lead.name.charAt(0).toUpperCase()}
                                            </div>
                                            <div>
                                                <p className="font-bold text-sm text-foreground">{lead.name}</p>
                                                <p className="text-[10px] text-muted-foreground/70 uppercase tracking-wider">Verified Lead</p>
                                            </div>
                                        </div>
                                        <span className="px-2 py-0.5 rounded-full bg-accent/10 text-accent text-[10px] font-bold uppercase tracking-wide">
                                            {lead.service || 'General'}
                                        </span>
                                    </div>

                                    <div className="pl-[52px] space-y-2">
                                        <div className="flex items-center gap-2 text-sm text-foreground/80">
                                            <Mail className="w-3.5 h-3.5 text-gray-400" /> {lead.email}
                                        </div>
                                        {lead.phone && (
                                            <div className="flex items-center gap-2 text-sm text-foreground/80">
                                                <Phone className="w-3.5 h-3.5 text-gray-400" /> {lead.phone}
                                            </div>
                                        )}
                                    </div>

                                    <div className="pt-3 border-t border-gray-50 flex justify-end items-center text-xs text-gray-400">
                                        <Calendar className="w-3.5 h-3.5 mr-1.5 opacity-50" />
                                        {new Date(lead.created_at).toLocaleDateString()}
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
