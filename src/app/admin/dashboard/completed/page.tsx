import { createAdminClient } from "@/lib/supabase-server";
import { Calendar, CheckCircle2, MessageSquare, ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Completed Messages | Admin",
};

export default async function CompletedMessagesPage() {
    const supabase = createAdminClient();

    const { data: messages, error } = await supabase
        .from("contacts")
        .select("*")
        .eq("status", "done")
        .order("created_at", { ascending: false });

    if (error) console.error("Error fetching completed messages:", error);
    const messageList = messages || [];

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
                    <h1 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">Completed Messages</h1>
                    <p className="text-muted-foreground mt-1 text-sm md:text-base">Archive of responded inquiries</p>
                </div>
                <div className="bg-green-50 text-green-700 px-4 py-2 rounded-full text-xs sm:text-sm font-bold flex items-center gap-2 shadow-sm border border-green-100">
                    <CheckCircle2 className="w-4 h-4" />
                    {messageList.length} Completed
                </div>
            </div>

            {messageList.length === 0 ? (
                <div className="text-center py-12 bg-white rounded-[20px] shadow-sm border border-gray-100">
                    <MessageSquare className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-foreground">No completed messages</h3>
                    <p className="text-gray-500 mt-2">Messages marked as &apos;Done&apos; will appear here.</p>
                </div>
            ) : (
                <div className="bg-white rounded-[20px] shadow-sm border border-gray-100 overflow-hidden">
                    {/* Desktop Headers */}
                    <div className="hidden md:grid grid-cols-[2fr_2fr_4fr_1fr] gap-6 p-6 bg-gray-50/50 border-b border-gray-100 text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                        <div>Customer</div>
                        <div>Contact</div>
                        <div>Message</div>
                        <div className="text-right">Date</div>
                    </div>

                    <div className="divide-y divide-gray-100">
                        {messageList.map((msg) => (
                            <div key={msg.id} className="group p-5 md:p-6 hover:bg-gray-50/50 transition-colors cursor-default">
                                {/* Desktop Layout */}
                                <div className="hidden md:grid grid-cols-[2fr_2fr_4fr_1fr] gap-4 items-center">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600 font-bold shrink-0 text-sm">
                                            {msg.name.charAt(0).toUpperCase()}
                                        </div>
                                        <div>
                                            <p className="font-bold text-sm text-foreground">{msg.name}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-foreground/80">
                                        <span className="truncate">{msg.email}</span>
                                    </div>
                                    <div className="text-sm text-foreground/70 italic text-muted-foreground/90 max-w-md truncate">
                                        &quot;{msg.message}&quot;
                                    </div>
                                    <div className="text-xs text-gray-400 text-right flex flex-col items-end gap-1">
                                        <span>{new Date(msg.created_at).toLocaleDateString()}</span>
                                        <span className="px-2 py-0.5 bg-green-50 text-green-600 text-[10px] font-bold rounded-full uppercase border border-green-100">
                                            Done
                                        </span>
                                    </div>
                                </div>

                                {/* Mobile Layout */}
                                <div className="md:hidden space-y-4">
                                    <div className="flex justify-between items-start">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600 font-bold shrink-0 text-sm">
                                                {msg.name.charAt(0).toUpperCase()}
                                            </div>
                                            <div>
                                                <p className="font-bold text-sm text-foreground">{msg.name}</p>
                                                <p className="text-xs text-muted-foreground">{msg.email}</p>
                                            </div>
                                        </div>
                                        <span className="px-2 py-0.5 bg-green-50 text-green-600 text-[10px] font-bold rounded-full uppercase border border-green-100">
                                            Done
                                        </span>
                                    </div>

                                    <div className="bg-gray-50 p-3 rounded-lg text-sm italic text-gray-600 border border-gray-100">
                                        &quot;{msg.message}&quot;
                                    </div>

                                    <div className="pt-2 flex justify-end text-xs text-gray-400">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="w-3 h-3" />
                                            {new Date(msg.created_at).toLocaleDateString()}
                                        </div>
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
