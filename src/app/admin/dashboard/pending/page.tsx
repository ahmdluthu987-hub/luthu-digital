"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Check, Mail, User, MessageSquare, Calendar } from "lucide-react";

interface Contact {
    id: string;
    name: string;
    email: string;
    message: string;
    created_at: string;
}

/**
 * Pending Messages Page
 * Displays messages with status 'new' and allows marking them as 'done'
 * Simple and mobile-friendly table layout for beginners
 */
export default function PendingMessagesPage() {
    const [messages, setMessages] = useState<Contact[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchPendingMessages();
    }, []);

    const fetchPendingMessages = async () => {
        try {
            setLoading(true);
            // 1. Fetch messages where status is 'new' from Supabase 'contacts' table
            const { data, error } = await supabase
                .from("contacts")
                .select("*")
                .eq("status", "new")
                .order("created_at", { ascending: false });

            if (error) throw error;
            setMessages(data || []);
        } catch (error) {
            console.error("Error fetching messages:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleMarkAsDone = async (id: string) => {
        try {
            // 2. Update status to 'done' in Supabase contacts table
            const { error } = await supabase
                .from("contacts")
                .update({ status: "done" })
                .eq("id", id);

            if (error) throw error;

            // 3. Remove from local screen instantly
            setMessages((prev) => prev.filter((msg) => msg.id !== id));
            alert("Status updated to DONE successfully!");
        } catch (error) {
            alert("Failed to update status");
        }
    };

    return (
        <div className="space-y-6">
            {/* Header section with count badge */}
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-[var(--primary)] text-balance">Pending Inquiries</h1>
                <div className="bg-orange-100 text-orange-700 px-4 py-1 rounded-full text-sm font-bold flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
                    {messages.length} Pending
                </div>
            </div>

            {loading ? (
                // Loading skeleton
                <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="h-32 bg-gray-200 rounded-2xl animate-pulse"></div>
                    ))}
                </div>
            ) : messages.length === 0 ? (
                // Empty state when no pending messages
                <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-dashed border-gray-300">
                    <Check className="w-12 h-12 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-medium text-gray-900">All caught up!</h3>
                    <p className="text-gray-500 mt-2">There are no new messages at this time.</p>
                </div>
            ) : (
                // Mobile-friendly table-like list
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    {/* Desktop Table Header */}
                    <div className="hidden md:grid grid-cols-[1fr_1fr_2fr_1fr_auto] gap-4 p-5 bg-slate-50 border-b border-gray-100 font-bold text-[var(--primary)] text-xs uppercase tracking-widest">
                        <div>Customer</div>
                        <div>Contact</div>
                        <div>Message</div>
                        <div>Date Received</div>
                        <div className="text-right">Action</div>
                    </div>

                    {/* List of messages */}
                    <div className="divide-y divide-gray-100">
                        {messages.map((msg) => (
                            <div
                                key={msg.id}
                                className="grid grid-cols-1 md:grid-cols-[1fr_1fr_2fr_1fr_auto] gap-4 p-5 md:items-center hover:bg-slate-50/50 transition-colors"
                            >
                                {/* Name */}
                                <div className="flex flex-col gap-1">
                                    <span className="md:hidden text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Customer Name</span>
                                    <span className="font-semibold text-gray-900 flex items-center gap-2">
                                        <User className="w-4 h-4 md:hidden text-gray-400" />
                                        {msg.name}
                                    </span>
                                </div>

                                {/* Email */}
                                <div className="flex flex-col gap-1">
                                    <span className="md:hidden text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Email</span>
                                    <span className="text-gray-600 truncate flex items-center gap-2 text-sm">
                                        <Mail className="w-4 h-4 md:hidden text-gray-400" />
                                        {msg.email}
                                    </span>
                                </div>

                                {/* Message Content */}
                                <div className="flex flex-col gap-1 overflow-hidden">
                                    <span className="md:hidden text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Inquiry Message</span>
                                    <p className="text-gray-700 text-sm italic border-l-2 border-slate-200 pl-3 py-1">
                                        "{msg.message}"
                                    </p>
                                </div>

                                {/* Date */}
                                <div className="flex flex-col gap-1">
                                    <span className="md:hidden text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Date</span>
                                    <span className="text-gray-500 text-xs flex items-center gap-2">
                                        <Calendar className="w-4 h-4 md:hidden text-gray-400" />
                                        {new Date(msg.created_at).toLocaleDateString()}
                                    </span>
                                </div>

                                {/* Mark as Done Button */}
                                <div className="md:text-right pt-2 md:pt-0">
                                    <button
                                        onClick={() => handleMarkAsDone(msg.id)}
                                        className="flex w-full md:w-auto items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all shadow-sm active:scale-95"
                                    >
                                        <Check className="w-4 h-4" />
                                        Mark as Done
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
