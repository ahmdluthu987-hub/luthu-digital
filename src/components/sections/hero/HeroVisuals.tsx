"use client";

import React from "react";
import Image from "next/image";
import { useScroll, useTransform, m } from "framer-motion";
import { BarChart3, Target } from "lucide-react";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const HeroVisuals = () => {
    const isMobile = useMediaQuery("(max-width: 768px)");
    const { scrollY } = useScroll();

    // Parallax effects - disable on mobile for performance
    const y1 = useTransform(scrollY, [0, 500], [0, isMobile ? 0 : 100]);
    const y2 = useTransform(scrollY, [0, 500], [0, isMobile ? 0 : -150]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <>
            {/* Background elements */}
            <m.div
                style={{ y: y1, opacity }}
                className="absolute top-[-10%] right-[-10%] w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-primary/5 rounded-full blur-[90px] md:blur-[140px] pointer-events-none animate-pulse-slow"
            />
            <m.div
                style={{ y: y2, opacity }}
                className="absolute bottom-[-10%] left-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-accent/5 rounded-full blur-[80px] md:blur-[120px] pointer-events-none animate-pulse-slow-delay"
            />

            {/* Right: Portrait & Interactive Elements - Spanning 5 columns */}
            <div className="lg:col-span-5 relative w-full h-[350px] min-[400px]:h-[450px] md:h-[550px] lg:h-[700px] flex items-center justify-center lg:justify-end mt-8 lg:mt-0">
                <m.div
                    initial={isMobile ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 1.2,
                        ease: [0.16, 1, 0.3, 1]
                    }}
                    className="relative w-full max-w-[400px] lg:max-w-full h-full flex items-center justify-center"
                >
                    {/* Main Image */}
                    <div className="relative w-full h-full z-10">
                        <Image
                            src="/ai-digital-marketing-expert-kannur.webp"
                            alt="Ahmed Luthu Kannur - Digital Marketing Expert"
                            fill
                            priority
                            fetchPriority="high"
                            loading="eager"
                            className="object-contain object-bottom drop-shadow-2xl"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                            quality={85}
                            placeholder="empty"
                        />
                    </div>

                    {/* Floating Analytics Card */}
                    <m.div
                        animate={isMobile ? {} : { y: [0, -12, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-[15%] lg:top-[20%] left-[-10px] sm:left-0 lg:-left-6 z-20 p-3 lg:p-4 bg-white/90 backdrop-blur-xl rounded-2xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
                    >
                        <div className="p-2.5 bg-primary/10 rounded-xl text-primary">
                            <BarChart3 className="w-6 h-6 lg:w-7 lg:h-7" />
                        </div>
                    </m.div>

                    {/* Floating Target Card */}
                    <m.div
                        animate={isMobile ? {} : { y: [0, 12, 0] }}
                        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute bottom-[20%] lg:bottom-[25%] right-[-10px] sm:right-0 lg:-right-4 z-20 p-3 lg:p-4 bg-white/90 backdrop-blur-xl rounded-2xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
                    >
                        <div className="p-2.5 bg-accent/10 rounded-xl text-accent">
                            <Target className="w-6 h-6 lg:w-7 lg:h-7" />
                        </div>
                    </m.div>

                    {/* Background Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,var(--color-primary)_0%,transparent_70%)] opacity-10 pointer-events-none -z-10" />
                </m.div>
            </div>
        </>
    );
};

export default HeroVisuals;
