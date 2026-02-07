"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export const CertMotion = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => {
    const shouldReduceMotion = useReducedMotion();
    return (
        <motion.div
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.5 }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export const CertBadgeMotion = ({ children }: { children: React.ReactNode }) => {
    const shouldReduceMotion = useReducedMotion();
    return (
        <motion.div
            initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-primary/5 shadow-sm"
        >
            {children}
        </motion.div>
    );
};

export const CertGridMotion = ({ children }: { children: React.ReactNode }) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
                hidden: { opacity: 0 },
                show: {
                    opacity: 1,
                    transition: {
                        staggerChildren: 0.1,
                        delayChildren: 0.1
                    }
                }
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
            {children}
        </motion.div>
    );
};

export const CertCardMotion = ({ children }: { children: React.ReactNode }) => {
    const shouldReduceMotion = useReducedMotion();
    return (
        <motion.article
            variants={{
                hidden: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 }
            }}
            whileHover={shouldReduceMotion ? {} : { y: -8 }}
            className="group bg-white rounded-[2.5rem] p-10 shadow-xl shadow-primary/5 flex flex-col items-center text-center transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10"
        >
            {children}
        </motion.article>
    );
};
