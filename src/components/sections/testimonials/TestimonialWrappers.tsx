"use client";

import React from "react";
import { motion } from "framer-motion";

export const TestimonialHeaderMotion = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5 }}
    >
        {children}
    </motion.div>
);

export const TestimonialBadgeMotion = ({ children }: { children: React.ReactNode }) => (
    <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-primary/5 text-primary text-xs font-bold uppercase tracking-widest shadow-sm"
    >
        {children}
    </motion.div>
);

export const TestimonialCardMotion = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5 }}
        whileHover={{ y: -5 }}
        className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl shadow-primary/5 border border-primary/5 flex flex-col relative group transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10"
    >
        {children}
    </motion.div>
);

export const TrustIndicatorMotion = ({ children }: { children: React.ReactNode }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="bg-white border border-primary/5 rounded-[3rem] p-10 lg:p-16 shadow-2xl shadow-primary/5 text-center max-w-5xl mx-auto relative overflow-hidden group"
    >
        {children}
    </motion.div>
);

export const TestimonialCTAMotion = ({ children }: { children: React.ReactNode }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-center mt-20 lg:mt-32"
    >
        {children}
    </motion.div>
);
