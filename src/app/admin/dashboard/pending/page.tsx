"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Check, Mail, User, MessageSquare, Calendar } from "lucide-react";
import LoadingSkeleton from "@/components/admin/LoadingSkeleton";

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
            const { error } = await supabase
                .from("contacts")
                .update({ status: "done" })
                .eq("id", id);

            if (error) throw error;

            setMessages((prev) => prev.filter((msg) => msg.id !== id));
        } catch (error) {
            alert("Failed to update status");
        }
    };

    return (
        <div className="space-y-6">
            {/* Header section with count badge */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">Pending Inquiries</h1>
                    <p className="text-gray-500 text-sm mt-1">Manage new messages from potential clients</p>
                </div>
                {!loading && (
                    <div className="bg-orange-50 text-orange-700 px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 self-start sm:self-auto shadow-sm border border-orange-100">
                        <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
                        {messages.length} Pending
                    </div>
                )}
            </div>

            {loading ? (
                // Loading State
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden p-6 space-y-4">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="flex gap-4 items-center">
                            <LoadingSkeleton className="w-12 h-12 rounded-full" />
                            <div className="flex-1 space-y-2">
                                <LoadingSkeleton className="h-4 w-1/3" />
                                <LoadingSkeleton className="h-3 w-1/2" />
                            </div>
                        </div>
                    ))}
                </div>
            ) : messages.length === 0 ? (
                // Empty State
                <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-dashed border-gray-200">
                    <div className="bg-green-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Check className="w-8 h-8 text-green-500" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">All caught up!</h3>
                    <p className="text-gray-500 mt-2">There are no new pending messages.</p>
                </div>
            ) : (
                // Messages List (Modern Table/Cards)
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    {/* Desktop Headers */}
                    <div className="hidden md:grid grid-cols-[2fr_2fr_3fr_1fr_auto] gap-6 p-6 bg-gray-50/50 border-b border-gray-100 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                        <div>Customer</div>
                        <div>Contact</div>
                        <div>Message</div>
                        <div>Date</div>
                        <div className="text-right">Action</div>
                    </div>

                    <div className="divide-y divide-gray-100">
                        {messages.map((msg) => (
                            <div
                                key={msg.id}
                                className="grid grid-cols-1 md:grid-cols-[2fr_2fr_3fr_1fr_auto] gap-4 p-6 hover:bg-gray-50/50 transition-colors group"
                            >
                                {/* Name */}
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-[var(--soft-bg)] flex items-center justify-center text-[var(--primary)] font-bold shrink-0">
                                        {msg.name.charAt(0).toUpperCase()}
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">{msg.name}</p>
                                        <span className="md:hidden text-xs text-gray-400">Customer</span>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-center gap-2 text-gray-600 text-sm">
                                    <Mail className="w-4 h-4 text-gray-400 md:hidden" />
                                    <span className="truncate">{msg.email}</span>
                                </div>

                                {/* Message */}
                                <div className="text-gray-600 text-sm leading-relaxed">
                                    <span className="md:hidden font-bold text-xs text-gray-400 block mb-1">Message</span>
                                    <p className="line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                                        "{msg.message}"
                                    </p>
                                </div>

                                {/* Date */}
                                <div className="text-sm text-gray-500 whitespace-nowrap flex items-center gap-2 md:block">
                                    <Calendar className="w-4 h-4 md:hidden" />
                                    {new Date(msg.created_at).toLocaleDateString()}
                                </div>

                                {/* Action */}
                                <div className="flex justify-end items-center mt-2 md:mt-0">
                                    <button
                                        onClick={() => handleMarkAsDone(msg.id)}
                                        className="flex items-center gap-2 bg-white border border-gray-200 hover:border-green-500 hover:text-green-600 text-gray-600 px-4 py-2 rounded-lg text-sm font-medium transition-all shadow-sm active:scale-95 whitespace-nowrap"
                                        title="Mark as Done"
                                    >
                                        <Check className="w-4 h-4" />
                                        <span className="md:hidden lg:inline">Mark Done</span>
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
