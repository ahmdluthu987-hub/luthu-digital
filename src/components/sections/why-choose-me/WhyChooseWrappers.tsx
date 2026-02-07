"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export const WhyChooseMotion = ({ children, delay = 0, className = "", initialY = 20 }: { children: React.ReactNode; delay?: number; className?: string; initialY?: number }) => {
    const shouldReduceMotion = useReducedMotion();

    return (
        <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: initialY }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay, duration: 0.5 }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export const WhyChooseImageMotion = ({ children }: { children: React.ReactNode }) => {
    const shouldReduceMotion = useReducedMotion();
    return (
        <motion.div
            initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto max-w-[500px] lg:max-w-none"
        >
            {children}
        </motion.div>
    );
};
