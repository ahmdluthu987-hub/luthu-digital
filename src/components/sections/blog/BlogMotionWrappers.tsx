"use client";

import React from "react";
import { motion } from "framer-motion";

export const BlogHeaderMotion = ({ children }: { children: React.ReactNode }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-4"
    >
        {children}
    </motion.div>
);

export const BlogLinkMotion = ({ children }: { children: React.ReactNode }) => (
    <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
    >
        {children}
    </motion.div>
);

export const BlogCardMotion = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
    <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5 }}
        className="group flex flex-col h-full bg-white rounded-[2rem] overflow-hidden border border-primary/5 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
    >
        {children}
    </motion.article>
);
