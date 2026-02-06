"use client";

import React from "react";
import { motion } from "framer-motion";

interface LogoProps {
    className?: string;
    size?: "sm" | "md" | "lg";
    inverse?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "", size = "md", inverse = false }) => {
    const sizeClasses = {
        sm: "text-lg",
        md: "text-2xl",
        lg: "text-3xl md:text-4xl",
    };

    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            className={`font-black tracking-tighter select-none cursor-pointer flex items-center leading-none ${sizeClasses[size]} ${className}`}
        >
            <span className={`${inverse ? "text-white" : "text-primary"} tracking-[-0.04em]`}>AHMED</span>
            <span className="text-accent tracking-[-0.04em] italic">LUTHU</span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent ml-1 mb-1 animate-pulse" />
        </motion.div>
    );
};

export default Logo;

