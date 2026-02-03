"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, MessageSquare, Users, CheckCircle, X } from "lucide-react";
import LogoutButton from "./LogoutButton";

interface AdminSidebarProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

export default function AdminSidebar({ isOpen, setIsOpen }: AdminSidebarProps) {
    const pathname = usePathname();

    const menuItems = [
        { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
        { name: "Pending", href: "/admin/dashboard/pending", icon: MessageSquare },
        { name: "Completed", href: "/admin/dashboard/completed", icon: CheckCircle },
        { name: "Subscribers", href: "/admin/dashboard/subscribers", icon: Users },
    ];

    return (
        <>
            {/* Mobile Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/20 z-20 md:hidden backdrop-blur-sm"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Sidebar Container */}
            <aside
                className={`fixed top-0 left-0 h-full w-64 bg-white border-r border-gray-100 shadow-xl z-30 transform transition-transform duration-300 md:translate-x-0 md:static md:shadow-none flex flex-col
                ${isOpen ? "translate-x-0" : "-translate-x-full"}
                `}
            >
                {/* Logo Area */}
                <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-[var(--primary)] flex items-center gap-2">
                        <span className="w-2 h-6 bg-[var(--accent)] rounded-full"></span>
                        Admin
                    </h2>
                    {/* Close Button (Mobile Only) */}
                    <button
                        onClick={() => setIsOpen(false)}
                        className="p-2 text-gray-400 hover:text-gray-600 md:hidden"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Navigation Items */}
                <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
                    {menuItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = pathname === item.href;

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium ${isActive
                                        ? "bg-[var(--soft-bg)] text-[var(--primary)] shadow-sm"
                                        : "text-gray-600 hover:bg-gray-50 hover:text-[var(--primary)]"
                                    }`}
                            >
                                <Icon className={`w-5 h-5 ${isActive ? "text-[var(--accent)]" : "text-gray-400"}`} />
                                {item.name}
                            </Link>
                        );
                    })}
                </nav>

                {/* Footer Area */}
                <div className="p-4 border-t border-gray-100 bg-gray-50/50">
                    <div className="mb-4 px-4">
                        <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-1">Signed in as</p>
                        <p className="text-sm font-semibold text-gray-700 truncate">Admin</p>
                    </div>
                    <LogoutButton />
                </div>
            </aside>
        </>
    );
}
