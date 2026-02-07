"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export const FAQHeaderMotion = ({ children }: { children: React.ReactNode }) => (
    <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-8"
    >
        {children}
    </motion.div>
);

export const FAQItemMotion = ({ children, index }: { children: React.ReactNode; index: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.05 }}
        className="group transition-colors duration-300"
    >
        {children}
    </motion.div>
);

export const FAQAnswerMotion = ({ children, isExpanded }: { children: React.ReactNode; isExpanded: boolean }) => (
    <AnimatePresence>
        {isExpanded && (
            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
            >
                {children}
            </motion.div>
        )}
    </AnimatePresence>
);

export const FAQFooterMotion = ({ children }: { children: React.ReactNode }) => (
    <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="pt-12 flex flex-wrap gap-x-8 gap-y-3 opacity-30"
    >
        {children}
    </motion.div>
);
