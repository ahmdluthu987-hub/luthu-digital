"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { BarChart3, Target, MoveRight } from "lucide-react";

/**
 * Marquee component for the hero keyword strip.
 */
const StarIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 33 32"
        fill="currentColor"
        className="w-[18px] h-[18px] md:w-[24px] md:h-[24px] flex-shrink-0 text-accent/40"
    >
        <path d="M16.5 0L18.7627 13.7373L32.5 16L18.7627 18.2627L16.5 32L14.2373 18.2627L0.5 16L14.2373 13.7373L16.5 0Z" />
    </svg>
);

const List = ({ keywords }: { keywords: string[] }) => (
    <div className="flex items-center gap-6 md:gap-12 whitespace-nowrap px-4">
        {keywords.map((word, index) => (
            <div key={index} className="flex items-center gap-6 md:gap-12">
                <span className="text-primary/70 text-[10px] md:text-sm font-bold uppercase tracking-[0.2em]">
                    {word}
                </span>
                <StarIcon />
            </div>
        ))}
    </div>
);

/**
 * Marquee component for the hero keyword strip.
 */
const KeywordMarquee = () => {
    const keywords = [
        "Growth Strategy", "SEO", "Performance Marketing", "SMM", "AI Marketing", "Lead Generation", "Brand Scaling"
    ];

    return (
        <div className="w-full bg-white/50 backdrop-blur-sm py-4 md:py-6 overflow-hidden flex select-none border-t border-primary/5">
            <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                    duration: 40,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="flex shrink-0 items-center"
            >
                <List keywords={keywords} />
                <List keywords={keywords} />
            </motion.div>
        </div>
    );
};

const Hero = () => {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollY } = useScroll();

    // Parallax effects
    const y1 = useTransform(scrollY, [0, 500], [0, 100]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <section
            ref={containerRef}
            className="relative min-h-[100dvh] flex flex-col bg-cream overflow-hidden pt-24 md:pt-28 lg:pt-32"
        >
            {/* Background elements */}
            <div className="absolute inset-0 z-0 bg-grid-slate-900/[0.02] pointer-events-none" />

            <motion.div
                style={{ y: y1, opacity }}
                className="absolute top-[-5%] right-[-5%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-primary/5 rounded-full blur-[80px] md:blur-[120px] pointer-events-none"
            />
            <motion.div
                style={{ y: y2, opacity }}
                className="absolute bottom-[-5%] left-[-5%] w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-accent/5 rounded-full blur-[70px] md:blur-[100px] pointer-events-none"
            />

            <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10 flex-grow flex flex-col">
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-0 flex-grow items-center">

                    {/* Left: Content */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 md:space-y-8"
                    >
                        {/* Badge */}
                        <motion.div
                            variants={itemVariants}
                            className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-primary/5 border border-primary/10 shadow-sm"
                        >
                            <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-accent animate-pulse" />
                            <span className="text-[8px] min-[375px]:text-[10px] md:text-xs font-black tracking-[0.1em] md:tracking-[0.2em] text-primary/80 uppercase">
                                AI-Driven Marketing Growth · Kerala
                            </span>
                        </motion.div>

                        {/* Title */}
                        <div className="space-y-3 md:space-y-4">
                            <motion.h1
                                variants={itemVariants}
                                className="text-[40px] min-[375px]:text-5xl sm:text-6xl md:text-7xl lg:text-[80px] xl:text-[90px] 2xl:text-[100px] font-black text-primary leading-[1] min-[375px]:leading-[0.95] lg:leading-[0.9] tracking-tighter"
                            >
                                Ahmed <br />
                                <span className="text-primary/90">Luthu</span>
                            </motion.h1>

                            <motion.p
                                variants={itemVariants}
                                className="text-sm min-[375px]:text-base sm:text-lg md:text-2xl lg:text-3xl font-medium text-primary/80 flex flex-wrap items-center justify-center lg:justify-start gap-x-2 md:gap-x-3"
                            >
                                Accelerating ROI with
                                <span className="relative inline-block text-accent">
                                    AI-Powered Precision
                                    <motion.span
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "100%" }}
                                        transition={{ delay: 0.8, duration: 1.2, ease: "circOut" }}
                                        className="absolute -bottom-2 left-0 h-[3px] md:h-[4px] bg-accent/40 rounded-full"
                                    />
                                </span>
                            </motion.p>
                        </div>

                        {/* Description */}
                        <motion.p
                            variants={itemVariants}
                            className="text-sm md:text-xl text-foreground/60 font-medium max-w-[95%] sm:max-w-lg mx-auto lg:mx-0 leading-relaxed"
                        >
                            I help modern brands dominate their niche through data-led Performance Marketing,
                            Precision SEO, and AI-accelerated Social Media strategies.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            variants={itemVariants}
                            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto px-2 sm:px-0"
                        >
                            <motion.button
                                whileHover={{ scale: 1.02, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                className="w-full sm:w-auto px-8 py-4 md:px-10 md:py-5 bg-primary text-white rounded-xl md:rounded-2xl font-bold text-base md:text-lg flex items-center justify-center gap-3 shadow-xl md:shadow-2xl shadow-primary/20 group relative overflow-hidden"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    Start Your Growth
                                    <MoveRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </span>
                                <div className="absolute inset-0 bg-primary-light translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.02, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                                className="w-full sm:w-auto px-8 py-4 md:px-10 md:py-5 bg-white text-primary border border-primary/10 rounded-xl md:rounded-2xl font-bold text-base md:text-lg flex items-center justify-center gap-3 shadow-lg shadow-black/[0.03] transition-colors hover:bg-soft-bg"
                            >
                                View Results
                            </motion.button>
                        </motion.div>

                        {/* Stats / Trust */}
                        <motion.div variants={itemVariants} className="pt-6 flex items-center gap-8 md:gap-10 border-t border-primary/5 w-full justify-center lg:justify-start">
                            <div className="flex flex-col">
                                <span className="text-xl md:text-2xl font-black text-primary font-mono">50+</span>
                                <span className="text-[9px] md:text-[10px] uppercase tracking-widest text-primary/40 font-bold">Projects</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl md:text-2xl font-black text-primary font-mono">4x</span>
                                <span className="text-[9px] md:text-[10px] uppercase tracking-widest text-primary/40 font-bold">Avg ROI</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl md:text-2xl font-black text-primary font-mono">100%</span>
                                <span className="text-[9px] md:text-[10px] uppercase tracking-widest text-primary/40 font-bold">Verified</span>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right: Portrait & Interactive Elements */}
                    <div className="relative w-full h-full min-h-[400px] md:min-h-[450px] lg:min-h-0 flex items-end justify-center lg:justify-end mt-0 mb-[-2px]">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 50 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            whileHover={{ rotateY: 5, rotateX: -5 }}
                            transition={{
                                opacity: { duration: 1.5, ease: [0.16, 1, 0.3, 1] },
                                scale: { duration: 1.5, ease: [0.16, 1, 0.3, 1] },
                                y: { duration: 1.5, ease: [0.16, 1, 0.3, 1] },
                                rotateY: { duration: 0.3 },
                                rotateX: { duration: 0.3 }
                            }}
                            style={{ perspective: 1000 }}
                            className="relative w-[85%] max-w-[400px] aspect-[4/5] lg:w-full lg:max-w-[550px] lg:h-[110%] lg:absolute lg:bottom-0 lg:right-0"
                        >
                            <Image
                                src="/ai-digital-marketing-expert-kannur.webp"
                                alt="Ahmad Luthu - Digital Marketing Expert"
                                fill
                                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 450px"
                                className="object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.1)] z-10 translate-y-[2px] will-change-transform"
                                priority
                                quality={85}
                                loading="eager"
                            />

                            {/* Floating Analytics Card */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-[15%] -left-2 min-[400px]:-left-6 md:left-[-12%] z-20 p-2.5 md:p-4 bg-white/80 backdrop-blur-xl rounded-2xl border border-white/50 shadow-xl shadow-primary/10 magnetic-item"
                            >
                                <div className="p-2 md:p-3 bg-primary rounded-xl text-white">
                                    <BarChart3 className="w-5 h-5 md:w-6 md:h-6" />
                                </div>
                            </motion.div>

                            {/* Floating Target Card - Moved to left side, lower than BarChart */}
                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                className="absolute bottom-[35%] -left-2 min-[400px]:-left-6 md:left-[-15%] z-20 p-2.5 md:p-4 bg-white/80 backdrop-blur-xl rounded-2xl border border-white/50 shadow-xl shadow-accent/10 magnetic-item"
                            >
                                <div className="p-2 md:p-3 bg-accent rounded-xl text-white">
                                    <Target className="w-5 h-5 md:w-6 md:h-6" />
                                </div>
                            </motion.div>

                            {/* AI Glow Effect behind portrait */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,77,64,0.1),transparent_70%)] rounded-full -z-10 blur-3xl scale-125" />
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Keyword Strip */}
            <div className="relative z-30 mt-auto">
                <KeywordMarquee />
            </div>
        </section>
    );
};

export default Hero;
