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
        <div className="w-full bg-white/40 backdrop-blur-md py-4 md:py-6 overflow-hidden flex select-none border-t border-primary/5">
            <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                    duration: 35,
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
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <section
            id="hero"
            ref={containerRef}
            className="relative min-h-[100dvh] flex flex-col bg-cream overflow-hidden pt-28 md:pt-32 lg:pt-36 lg:justify-center"
        >
            {/* Background elements */}
            <div className="absolute inset-0 z-0 bg-grid-slate-900/[0.03] pointer-events-none" />

            <motion.div
                style={{ y: y1, opacity }}
                className="absolute top-[-10%] right-[-10%] w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-primary/5 rounded-full blur-[90px] md:blur-[140px] pointer-events-none animate-pulse-slow"
            />
            <motion.div
                style={{ y: y2, opacity }}
                className="absolute bottom-[-10%] left-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-accent/5 rounded-full blur-[80px] md:blur-[120px] pointer-events-none animate-pulse-slow-delay"
            />

            <div className="container max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 flex-grow flex flex-col justify-center">
                <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

                    {/* Left: Content - Spanning 7 columns for better text balance */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 lg:space-y-10 w-full"
                    >
                        {/* Badge */}
                        <motion.div
                            variants={itemVariants}
                            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/50 backdrop-blur-md border border-primary/10 shadow-sm hover:shadow-md transition-shadow duration-300"
                        >
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
                            </span>
                            <span className="text-[11px] md:text-xs font-bold tracking-[0.15em] text-primary/80 uppercase">
                                AI First Digital Marketing Expert in Kannur
                            </span>
                        </motion.div>

                        {/* Title */}
                        <div className="space-y-4 lg:space-y-6 max-w-4xl">
                            <motion.h1
                                variants={itemVariants}
                                className="text-[clamp(2.75rem,5vw+1rem,5.5rem)] font-black text-primary leading-[1.05] tracking-tight text-balance"
                            >
                                Ahmed Luthu Kannur
                            </motion.h1>

                            <motion.h2
                                variants={itemVariants}
                                className="text-[clamp(1.125rem,2vw,1.875rem)] font-bold leading-tight text-primary/90"
                            >
                                <span className="relative inline-block pb-1">
                                    Best Freelance Digital Marketer in Kannur
                                    <motion.span
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "100%" }}
                                        transition={{ delay: 0.8, duration: 1.2, ease: "circOut" }}
                                        className="absolute bottom-0 left-0 h-[3px] bg-accent rounded-full"
                                    />
                                </span>
                            </motion.h2>
                        </div>

                        {/* Description */}
                        <motion.p
                            variants={itemVariants}
                            className="text-base md:text-lg lg:text-[1.25rem] text-foreground/75 font-medium max-w-[90%] sm:max-w-xl lg:max-w-2xl mx-auto lg:mx-0 leading-[1.7] md:leading-[1.8] text-pretty"
                        >
                            I&apos;m Ahmed Luthu Kannur, an AI first digital marketing expert in Kannur helping brands achieve consistent growth through data-driven SEO, performance marketing, and AI-powered digital strategies. As the best freelance digital marketer in Kannur, I focus on measurable ROI, not vanity metrics.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            variants={itemVariants}
                            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto px-4 sm:px-0 pt-4 lg:pt-6"
                        >
                            <motion.button
                                whileHover={{ scale: 1.02, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                className="group relative px-8 py-4 bg-primary text-white rounded-full font-bold text-base lg:text-lg flex items-center justify-center gap-3 shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300"
                            >
                                <span>Get in Touch</span>
                                <MoveRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </motion.button>

                            <motion.a
                                href="/blog"
                                whileHover={{ scale: 1.02, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                className="group px-8 py-4 bg-transparent text-primary border-2 border-primary/10 rounded-full font-bold text-base lg:text-lg flex items-center justify-center gap-3 hover:bg-primary/5 transition-colors duration-300"
                            >
                                Read Blog
                            </motion.a>
                        </motion.div>
                    </motion.div>

                    {/* Right: Portrait & Interactive Elements - Spanning 5 columns */}
                    <div className="lg:col-span-5 relative w-full h-[350px] min-[400px]:h-[450px] md:h-[550px] lg:h-[700px] flex items-center justify-center lg:justify-end mt-8 lg:mt-0">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
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
                                    className="object-contain object-bottom drop-shadow-2xl"
                                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 40vw"
                                    quality={90}
                                />
                            </div>

                            {/* Floating Analytics Card */}
                            <motion.div
                                animate={{ y: [0, -12, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-[15%] lg:top-[20%] left-[-10px] sm:left-0 lg:-left-6 z-20 p-3 lg:p-4 bg-white/90 backdrop-blur-xl rounded-2xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
                            >
                                <div className="p-2.5 bg-primary/10 rounded-xl text-primary">
                                    <BarChart3 className="w-6 h-6 lg:w-7 lg:h-7" />
                                </div>
                            </motion.div>

                            {/* Floating Target Card */}
                            <motion.div
                                animate={{ y: [0, 12, 0] }}
                                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute bottom-[20%] lg:bottom-[25%] right-[-10px] sm:right-0 lg:-right-4 z-20 p-3 lg:p-4 bg-white/90 backdrop-blur-xl rounded-2xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
                            >
                                <div className="p-2.5 bg-accent/10 rounded-xl text-accent">
                                    <Target className="w-6 h-6 lg:w-7 lg:h-7" />
                                </div>
                            </motion.div>

                            {/* Background Glow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,var(--color-primary)_0%,transparent_70%)] opacity-10 pointer-events-none -z-10" />
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Keyword Strip */}
            <div className="relative z-30 w-full mt-auto">
                <KeywordMarquee />
            </div>
        </section>
    );
};

export default Hero;
