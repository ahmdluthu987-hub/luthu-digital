"use client";

import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { LogOut } from "lucide-react";

export default function LogoutButton() {
    const router = useRouter();

    const handleLogout = async () => {
        // 1. Sign out from Supabase (clears session cookies)
        await supabase.auth.signOut();
        // 2. Redirect to login
        router.push("/admin/login");
        router.refresh();
    };

    return (
        <button
            onClick={handleLogout}
            className="mt-8 w-full text-left px-4 py-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-600 transition-colors flex items-center gap-2 font-medium"
        >
            <LogOut className="w-4 h-4" />
            Logout
        </button>
    );
}
