import Link from "next/link";
import { Mail, ArrowRight } from "lucide-react";

interface Subscriber {
    id: string;
    email: string;
    created_at: string;
}

interface SubscribersPanelProps {
    subscribers: Subscriber[];
    totalCount: number;
}

export default function SubscribersPanel({ subscribers, totalCount }: SubscribersPanelProps) {
    return (
        <div className="flex flex-col">
            <div className="flex justify-between items-end mb-4 h-6">
                <h2 className="text-lg font-bold text-foreground">Subscribers</h2>
                <Link href="/admin/dashboard/subscribers" className="text-xs sm:text-sm font-bold text-primary hover:underline flex items-center gap-1">
                    View All ({totalCount}) <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                </Link>
            </div>
            <div className="bg-white rounded-[20px] shadow-sm border border-gray-100 overflow-hidden flex flex-col w-full">
                {subscribers && subscribers.length > 0 ? (
                    <div className="overflow-y-auto lg:max-h-[420px] divide-y divide-gray-100 custom-scrollbar">
                        {subscribers.map((sub) => (
                            <div key={sub.id} className="p-4 sm:p-5 hover:bg-gray-50/50 transition-colors flex items-center gap-3 group">
                                <div className="p-2 bg-primary/5 rounded-full shrink-0 group-hover:scale-110 transition-transform">
                                    <Mail className="w-4 h-4 text-primary" />
                                </div>
                                <div className="min-w-0">
                                    <p className="text-xs sm:text-sm font-semibold text-foreground truncate">{sub.email}</p>
                                    <p className="text-[10px] text-gray-400">{new Date(sub.created_at).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="py-12 flex flex-col items-center justify-center text-center p-6 bg-gray-50/30">
                        <Mail className="w-10 h-10 text-gray-200 mb-3" />
                        <p className="text-sm font-medium text-foreground">No subscribers yet</p>
                    </div>
                )}
            </div>
        </div>
    );
}
