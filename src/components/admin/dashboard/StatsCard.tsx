import Link from "next/link";
import { ArrowRight, LucideIcon } from "lucide-react";

interface StatsCardProps {
    title: string;
    value: number;
    href: string;
    icon: LucideIcon;
    color: string;
    subtext: string;
}

export default function StatsCard({ title, value, href, icon: Icon, color, subtext }: StatsCardProps) {
    // Helper to get color classes
    const getColorClasses = (colorName: string) => {
        switch (colorName) {
            case 'primary': return { bg: 'bg-primary', text: 'text-primary-foreground', icon: 'text-white' };
            case 'blue': return { bg: 'bg-blue-50', text: 'text-blue-600', icon: 'text-blue-600' };
            case 'orange': return { bg: 'bg-orange-50', text: 'text-orange-600', icon: 'text-orange-600' };
            case 'green': return { bg: 'bg-green-50', text: 'text-green-600', icon: 'text-green-600' };
            default: return { bg: 'bg-gray-50', text: 'text-gray-600', icon: 'text-gray-600' };
        }
    };

    const colors = getColorClasses(color);

    return (
        <Link
            href={href}
            className="group bg-white p-4 sm:p-5 lg:p-6 rounded-[20px] shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 h-full"
        >
            <div className="flex justify-between items-start mb-3 sm:mb-4">
                <div className={`p-2.5 sm:p-3 rounded-2xl ${colors.bg} group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${colors.icon}`} />
                </div>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300 group-hover:text-primary transition-colors" />
            </div>
            <div>
                <p className="text-2xl sm:text-3xl font-bold text-foreground">{value}</p>
                <p className="text-xs sm:text-sm font-semibold text-foreground/60 mt-1">{title}</p>
                <p className="text-[10px] text-gray-400 mt-1.5 uppercase tracking-widest">{subtext}</p>
            </div>
        </Link>
    );
}
