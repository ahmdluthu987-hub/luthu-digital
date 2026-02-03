"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

/**
 * Admin Login Page
 * Handles Supabase Auth only. Role verification is done on the Server in /admin/dashboard
 */
export default function AdminLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            // 1. Sign in with Supabase Auth (Email & Password)
            const { error: authError } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (authError) throw authError;

            // 2. Success: Redirect to Dashboard
            // Authorization (Admin Role Check) happens on the server in /admin/dashboard/layout.tsx
            router.replace("/admin/dashboard");
            router.refresh(); // Refresh to ensure server components run fresh checks
        } catch (error: any) {
            setError(error.message || "Login failed. Please check your credentials.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-[var(--soft-bg)] bg-grid-slate-900/[0.02]">
            <div className="max-w-md w-full glass-card rounded-2xl p-8 shadow-xl border border-white/20">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-[var(--primary)]">Admin Login</h1>
                    <p className="text-gray-500 mt-2">Access the administration panel</p>
                </div>

                {error && (
                    <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-100 text-red-600 text-sm animate-in fade-in slide-in-from-top-2">
                        {error}
                    </div>
                )}

                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-[var(--primary)] mb-1">Email Address</label>
                        <input
                            type="email"
                            placeholder="admin@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent outline-none transition-all"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-[var(--primary)] mb-1">Password</label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent outline-none transition-all"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-[var(--primary)] text-white py-3 rounded-xl font-semibold hover:bg-[var(--primary-light)] transition-all transform active:scale-[0.98] disabled:opacity-50 shadow-lg flex items-center justify-center gap-2"
                    >
                        {loading ? (
                            <>
                                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                Verifying...
                            </>
                        ) : (
                            "Sign In"
                        )}
                    </button>
                </form>

                <p className="mt-8 text-center text-xs text-gray-400 uppercase tracking-widest">
                    Secure Admin Access
                </p>
            </div>
        </div>
    );
}
