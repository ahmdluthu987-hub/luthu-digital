import { LucideIcon } from 'lucide-react';

interface StatCardProps {
    title: string;
    value: string | number;
    icon: LucideIcon;
    trend?: string;
}

export default function StatCard({ title, value, icon: Icon, trend }: StatCardProps) {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-[var(--soft-bg)] rounded-xl text-[var(--primary)]">
                    <Icon className="w-6 h-6" />
                </div>
                {trend && (
                    <span className="text-xs font-medium px-2 py-1 bg-green-50 text-green-600 rounded-full">
                        {trend}
                    </span>
                )}
            </div>
            <div>
                <h3 className="text-gray-400 text-sm font-medium uppercase tracking-wide mb-1">{title}</h3>
                <p className="text-3xl font-bold text-gray-800">{value}</p>
            </div>
        </div>
    );
}
