import { Menu, Bell } from "lucide-react";

interface AdminHeaderProps {
    onMenuClick: () => void;
}

export default function AdminHeader({ onMenuClick }: AdminHeaderProps) {
    return (
        <header className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-gray-100 h-16 px-4 md:px-8 flex items-center justify-between z-10">
            {/* Left: Mobile Toggle & Page Title */}
            <div className="flex items-center gap-4">
                <button
                    onClick={onMenuClick}
                    className="p-2 -ml-2 text-gray-600 hover:bg-gray-100 rounded-lg md:hidden"
                >
                    <Menu className="w-6 h-6" />
                </button>
                <h1 className="text-lg font-semibold text-gray-800 hidden md:block">Dashboard Overview</h1>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-4">
                <button className="p-2 text-gray-400 hover:text-[var(--primary)] hover:bg-[var(--soft-bg)] rounded-full transition-colors relative">
                    <Bell className="w-5 h-5" />
                    <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                </button>
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[var(--primary)] to-[var(--accent)] flex items-center justify-center text-white text-xs font-bold shadow-sm">
                    A
                </div>
            </div>
        </header>
    );
}
