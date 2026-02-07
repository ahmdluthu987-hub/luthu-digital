"use client";

import React from "react";
import { m, useScroll, useTransform } from "framer-motion";
import { BarChart3, Target } from "lucide-react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import LazyMotionWrapper from "@/components/utils/LazyMotionWrapper";

export const HeroVisualsClient = () => {
    const isMobile = useMediaQuery("(max-width: 768px)");
    const { scrollY } = useScroll();

    // Parallax effects - disable on mobile for performance
    const y1 = useTransform(scrollY, [0, 500], [0, isMobile ? 0 : 100]);
    const y2 = useTransform(scrollY, [0, 500], [0, isMobile ? 0 : -150]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <LazyMotionWrapper>
            {/* Background Glows */}
            <m.div
                style={{ y: y1, opacity }}
                className="absolute top-[-10%] right-[-10%] w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-primary/5 rounded-full blur-[90px] md:blur-[140px] pointer-events-none animate-pulse-slow"
            />
            <m.div
                style={{ y: y2, opacity }}
                className="absolute bottom-[-10%] left-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-accent/5 rounded-full blur-[80px] md:blur-[120px] pointer-events-none animate-pulse-slow-delay"
            />

            {/* Floating Cards */}
            <div className="absolute inset-0 z-20 pointer-events-none">
                {/* Floating Analytics Card */}
                <m.div
                    animate={isMobile ? {} : { y: [0, -12, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[15%] lg:top-[20%] left-[-10px] sm:left-0 lg:-left-6 p-3 lg:p-4 bg-white/90 backdrop-blur-xl rounded-2xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] pointer-events-auto"
                >
                    <div className="p-2.5 bg-primary/10 rounded-xl text-primary">
                        <BarChart3 className="w-6 h-6 lg:w-7 lg:h-7" />
                    </div>
                </m.div>

                {/* Floating Target Card */}
                <m.div
                    animate={isMobile ? {} : { y: [0, 12, 0] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-[20%] lg:bottom-[25%] right-[-10px] sm:right-0 lg:-right-4 p-3 lg:p-4 bg-white/90 backdrop-blur-xl rounded-2xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] pointer-events-auto"
                >
                    <div className="p-2.5 bg-accent/10 rounded-xl text-accent">
                        <Target className="w-6 h-6 lg:w-7 lg:h-7" />
                    </div>
                </m.div>
            </div>
        </LazyMotionWrapper>
    );
};
