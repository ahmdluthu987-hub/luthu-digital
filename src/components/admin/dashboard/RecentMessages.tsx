import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Message {
    id: string;
    name: string;
    message: string;
    status: string;
    created_at: string;
}

interface RecentMessagesProps {
    messages: Message[];
}

export default function RecentMessages({ messages }: RecentMessagesProps) {
    return (
        <div className="flex flex-col">
            <div className="flex justify-between items-end mb-4 h-6">
                <h2 className="text-lg font-bold text-foreground">Recent Messages</h2>
                <Link href="/admin/dashboard/pending" className="text-xs sm:text-sm font-bold text-primary hover:underline flex items-center gap-1">
                    View All <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                </Link>
            </div>

            <div className="bg-white rounded-[20px] shadow-sm border border-gray-100 overflow-hidden flex flex-col w-full">
                {messages && messages.length > 0 ? (
                    <div className="overflow-y-auto lg:max-h-[420px] divide-y divide-gray-100 custom-scrollbar">
                        {messages.map((msg) => (
                            <div key={msg.id} className="p-4 sm:p-5 hover:bg-gray-50/50 transition-colors flex items-center justify-between gap-3 sm:gap-4 group">
                                <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary font-bold shrink-0 text-xs sm:text-sm">
                                        {msg.name?.charAt(0).toUpperCase()}
                                    </div>
                                    <div className="min-w-0">
                                        <p className="font-bold text-xs sm:text-sm text-foreground truncate">{msg.name}</p>
                                        <p className="text-[11px] sm:text-xs text-foreground/50 truncate italic">&quot;{msg.message}&quot;</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 shrink-0">
                                    <span className={`text-[10px] px-2 py-0.5 sm:py-1 rounded-full font-bold uppercase ${msg.status === 'new' ? 'bg-orange-50 text-orange-600' : 'bg-green-50 text-green-600'}`}>
                                        {msg.status}
                                    </span>
                                    <Link href={`/admin/dashboard/${msg.status === 'new' ? 'pending' : 'completed'}`} className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors hidden sm:block">
                                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="py-12 flex flex-col items-center justify-center text-center p-6 bg-gray-50/30">
                        <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-3">
                            <ArrowRight className="w-5 h-5 text-gray-300" />
                        </div>
                        <p className="text-sm font-medium text-foreground">All caught up!</p>
                        <p className="text-xs text-gray-400 mt-1">No new messages to review.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
