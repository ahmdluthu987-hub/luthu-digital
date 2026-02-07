"use client";

import React from "react";
import { motion } from "framer-motion";

export const AboutContentMotion = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut", delay }}
    >
        {children}
    </motion.div>
);

export const AboutStatMotion = ({ children, index }: { children: React.ReactNode; index: number }) => (
    <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.6 }}
        whileHover={{ y: -4, transition: { duration: 0.3 } }}
        className={`group relative p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/5 backdrop-blur-sm hover:backdrop-blur-md transition-all duration-500 overflow-hidden cursor-pointer ${index === 2 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
        role="article"
    >
        {children}
    </motion.div>
);

export const AboutButtonMotion = ({ children }: { children: React.ReactNode }) => (
    <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="group relative w-full sm:w-auto px-8 py-4 bg-white text-primary rounded-full font-bold text-base sm:text-lg flex items-center justify-center gap-3 overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.4)] shadow-lg active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 cursor-pointer"
        aria-label="View detailed portfolio and contact information"
    >
        {children}
    </motion.button>
);
