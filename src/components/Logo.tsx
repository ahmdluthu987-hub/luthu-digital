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
        lg: "text-4xl",
    };

    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            className={`font-black tracking-tight select-none cursor-pointer flex items-center ${sizeClasses[size]} ${className}`}
        >
            <span className={`${inverse ? "text-white" : "text-primary"} tracking-[-0.02em]`}>AHMD</span>
            <span className="text-accent tracking-[-0.02em]">LUTHU</span>
        </motion.div>
    );
};

export default Logo;
