"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export const ContactInfoMotion = ({ children }: { children: React.ReactNode }) => (
    <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="space-y-8"
    >
        {children}
    </motion.div>
);

export const ContactBadgeMotion = ({ children }: { children: React.ReactNode }) => (
    <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-sm font-bold uppercase tracking-widest"
    >
        {children}
    </motion.div>
);

export const ContactFormWrapperMotion = ({ children }: { children: React.ReactNode }) => (
    <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="relative"
    >
        {children}
    </motion.div>
);

export const ContactFormContentMotion = ({ children, status }: { children: React.ReactNode; status: string }) => (
    <AnimatePresence mode="wait">
        <motion.div
            key={status === "success" ? "success" : "form"}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
        >
            {children}
        </motion.div>
    </AnimatePresence>
);
