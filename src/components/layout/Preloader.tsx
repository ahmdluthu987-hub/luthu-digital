"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Preloader = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // SEO Friendly: Skip preloader for bots/crawlers - Run once on mount
        const isBot = /bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent);
        if (isBot) {
            setTimeout(() => setIsLoading(false), 0);
        }
    }, []);

    useEffect(() => {
        if (!isLoading) return;

        // Prevent scrolling while loading
        document.body.style.overflow = "hidden";

        const startTime = Date.now();
        const duration = 500; // Total duration in ms

        const interval = setInterval(() => {
            const elapsed = Date.now() - startTime;
            const targetProgress = Math.min((elapsed / duration) * 100, 100);

            setProgress(targetProgress);

            if (targetProgress >= 100) {
                clearInterval(interval);
                setTimeout(() => {
                    setIsLoading(false);
                    document.body.style.overflow = "auto";
                }, 150);
            }
        }, 16); // ~60fps

        return () => {
            clearInterval(interval);
            document.body.style.overflow = "auto";
        };
    }, [isLoading]);

    return (
        <AnimatePresence mode="wait">
            {isLoading && (
                <motion.div
                    key="preloader"
                    id="page-preloader"
                    role="progressbar"
                    aria-busy="true"
                    aria-label="Loading page content"
                    initial={{ opacity: 1 }}
                    exit={{
                        y: "-100%",
                        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
                    }}
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-primary"
                >
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                        style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}
                    />

                    <div className="relative z-10 flex flex-col items-center">
                        {/* Logo Animation */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="flex items-center gap-1 mb-8"
                        >
                            <span className="text-4xl md:text-6xl font-black text-white tracking-tighter">AHMD</span>
                            <span className="text-4xl md:text-6xl font-black text-accent tracking-tighter italic">LUTHU</span>
                            <motion.div
                                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-accent ml-1"
                            />
                        </motion.div>

                        {/* Tagline */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.6 }}
                            transition={{ delay: 0.2 }}
                            className="text-white/60 text-[10px] md:text-xs uppercase tracking-[0.5em] font-bold mb-12"
                        >
                            AI-Powered Marketing Excellence
                        </motion.p>

                        {/* Progress Bar Container */}
                        <div className="w-48 md:w-64 h-[2px] bg-white/10 rounded-full overflow-hidden relative">
                            <motion.div
                                className="absolute inset-y-0 left-0 bg-accent transition-all duration-300 ease-out"
                                style={{ width: `${progress}%` }}
                            />
                        </div>

                        {/* Percentage */}
                        <motion.span
                            className="mt-4 text-white/40 font-mono text-[10px] tracking-widest uppercase font-bold"
                        >
                            {Math.round(progress)}%
                        </motion.span>
                    </div>

                    {/* Decorative Glows */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;
