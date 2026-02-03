import React from "react";

/**
 * Next.js SEO-Friendly Loading State
 * This renders on the server while the page content is being prepared,
 * providing immediate visual feedback for "reloads" and transitions.
 */
export default function Loading() {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-cream transition-opacity duration-300">
            <div className="flex flex-col items-center gap-6">
                {/* Modern Pulse Spinner */}
                <div className="relative flex items-center justify-center">
                    <div className="w-16 h-16 border-[3px] border-primary/5 rounded-full" />
                    <div className="absolute w-16 h-16 border-[3px] border-t-accent rounded-full animate-spin shadow-[0_0_15px_rgba(255,107,53,0.1)]" />
                    <div className="absolute w-2 h-2 bg-primary rounded-full animate-pulse" />
                </div>

                {/* Subtle Branding */}
                <div className="flex items-center gap-1 opacity-20 select-none pointer-events-none">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">AHMD</span>
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-accent italic">LUTHU</span>
                </div>
            </div>
        </div>
    );
}
