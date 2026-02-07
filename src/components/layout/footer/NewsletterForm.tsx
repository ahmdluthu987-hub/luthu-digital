"use client";

import React, { useState } from "react";
import { CheckCircle2, Loader2, ChevronRight } from "lucide-react";

export const NewsletterForm = () => {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error" | "conflict">("idle");
    const [message, setMessage] = useState("");

    const handleSubscribe = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;
        setStatus("loading");
        setMessage("");

        try {
            const response = await fetch('/api/subscribe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (response.status === 409) {
                setStatus("conflict");
                setMessage(data.message);
                return;
            }

            if (!response.ok) {
                throw new Error(data.error || "Something went wrong.");
            }

            setStatus("success");
            setMessage(data.message);
            setEmail("");

            setTimeout(() => {
                setStatus("idle");
                setMessage("");
            }, 5000);

        } catch (error) {
            console.error("Newsletter error:", error);
            setStatus("error");
            setMessage("Something went wrong. Please try again later.");
        }
    };

    return (
        <form onSubmit={handleSubscribe} className="relative w-full">
            <div className="relative flex flex-col gap-3">
                <div className="relative w-full">
                    <input
                        type="email"
                        placeholder="Your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={status === "loading" || status === "success"}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 h-12 text-sm focus:outline-none focus:ring-2 focus:ring-accent transition-all placeholder:text-white/20 text-white disabled:opacity-50"
                        required
                        aria-label="Email address for subscription"
                    />
                </div>
                <button
                    type="submit"
                    disabled={status === "loading" || status === "success"}
                    className="w-full h-12 bg-accent rounded-xl flex items-center justify-center gap-2 hover:bg-accent/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium focus:outline-none focus:ring-2 focus:ring-white/20"
                    aria-label="Subscribe"
                >
                    {status === "loading" ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                    ) : status === "success" ? (
                        <>
                            <CheckCircle2 className="w-5 h-5" />
                            <span>Subscribed!</span>
                        </>
                    ) : (
                        <>
                            <span>Subscribe</span>
                            <ChevronRight className="w-4 h-4" />
                        </>
                    )}
                </button>
            </div>

            {status === "conflict" && (
                <p className="text-amber-400 text-xs mt-3 text-left animate-in fade-in slide-in-from-top-1">
                    {message}
                </p>
            )}
            {status === "error" && (
                <p className="text-red-400 text-xs mt-3 text-left animate-in fade-in slide-in-from-top-1">
                    {message}
                </p>
            )}
        </form>
    );
};
