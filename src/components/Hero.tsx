"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { ArrowRight, BarChart3, Target, Cpu, Sparkles, MoveRight } from "lucide-react";

/**
 * Marquee component for the hero keyword strip.
 */
const KeywordMarquee = () => {
    const keywords = [
        "Growth Strategy", "SEO", "Performance Marketing", "SMM", "AI Marketing", "Lead Generation", "Brand Scaling"
    ];

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

    const List = () => (
        <div className="flex items-center gap-6 md:gap-12 whitespace-nowrap px-4">
            {keywords.map((word, index) => (
                <div key={index} className="flex items-center gap-6 md:gap-12">
                    <span className="text-primary/70 text-xs md:text-sm font-bold uppercase tracking-[0.2em]">
                        {word}
                    </span>
                    <StarIcon />
                </div>
            ))}
        </div>
    );

    return (
        <div className="w-full bg-white/50 backdrop-blur-sm py-4 md:py-6 overflow-hidden flex select-none border-y border-primary/5">
            <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                    duration: 40,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="flex shrink-0 items-center"
            >
                <List />
                <List />
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
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex flex-col bg-cream overflow-hidden pt-28 lg:pt-32"
        >
            {/* Background elements */}
            <div className="absolute inset-0 z-0 bg-grid-slate-900/[0.02] pointer-events-none" />

            <motion.div
                style={{ y: y1, opacity }}
                className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"
            />
            <motion.div
                style={{ y: y2, opacity }}
                className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none"
            />

            <div className="container mx-auto px-6 lg:px-12 relative z-10 flex-grow flex flex-col">
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-0 flex-grow items-center">

                    {/* Left: Content */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8"
                    >
                        {/* Badge */}
                        <motion.div
                            variants={itemVariants}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 shadow-sm"
                        >
                            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                            <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-primary/80 uppercase">
                                AI-Driven Marketing Growth · Kerala
                            </span>
                        </motion.div>

                        {/* Title */}
                        <div className="space-y-4">
                            <motion.h1
                                variants={itemVariants}
                                className="text-6xl md:text-8xl lg:text-[100px] font-black text-primary leading-[0.85] tracking-tighter"
                            >
                                Ahmed <br />
                                <span className="text-primary/90">Luthu</span>
                            </motion.h1>

                            <motion.p
                                variants={itemVariants}
                                className="text-xl md:text-3xl font-medium text-primary/80 flex flex-wrap items-center justify-center lg:justify-start gap-x-3"
                            >
                                Accelerating ROI with
                                <span className="relative inline-block text-accent">
                                    AI-Powered Precision
                                    <motion.span
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "100%" }}
                                        transition={{ delay: 0.8, duration: 1.2, ease: "circOut" }}
                                        className="absolute -bottom-1 left-0 h-[3px] bg-accent/20 rounded-full"
                                    />
                                </span>
                            </motion.p>
                        </div>

                        {/* Description */}
                        <motion.p
                            variants={itemVariants}
                            className="text-base md:text-xl text-foreground/60 font-medium max-w-lg mx-auto lg:mx-0 leading-relaxed"
                        >
                            I help modern brands dominate their niche through data-led Performance Marketing,
                            Precision SEO, and AI-accelerated Social Media strategies.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            variants={itemVariants}
                            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
                        >
                            <motion.button
                                whileHover={{ scale: 1.02, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                className="w-full sm:w-auto px-8 py-5 bg-primary text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-3 shadow-2xl shadow-primary/20 group relative overflow-hidden"
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
                                className="w-full sm:w-auto px-8 py-5 bg-white text-primary border border-primary/10 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 shadow-lg shadow-black/[0.03] transition-colors hover:bg-soft-bg"
                            >
                                View Results
                            </motion.button>
                        </motion.div>

                        {/* Stats / Trust */}
                        <motion.div variants={itemVariants} className="pt-4 flex items-center gap-8 border-t border-primary/5 w-full justify-center lg:justify-start">
                            <div className="flex flex-col">
                                <span className="text-2xl font-black text-primary">50+</span>
                                <span className="text-[10px] uppercase tracking-widest text-primary/40 font-bold">Projects Done</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-2xl font-black text-primary">4x</span>
                                <span className="text-[10px] uppercase tracking-widest text-primary/40 font-bold">Avg ROI</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-2xl font-black text-primary">100%</span>
                                <span className="text-[10px] uppercase tracking-widest text-primary/40 font-bold">Data Driven</span>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right: Portrait & Interactive Elements */}
                    <div className="relative w-full h-full min-h-[400px] lg:min-h-0 flex items-end justify-center lg:justify-end">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 100 }}
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
                            className="relative w-full max-w-[550px] aspect-[4/5] lg:aspect-auto lg:h-[110%] lg:absolute lg:bottom-0 lg:right-0"
                        >
                            <Image
                                src="/ahmdluthu.png"
                                alt="Ahmad Luthu"
                                fill
                                className="object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.1)] z-10"
                                priority
                            />

                            {/* Floating Analytics Card */}
                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-[20%] left-[-2%] lg:left-[-15%] z-20 flex items-center gap-4 p-3 md:p-4 bg-white/80 backdrop-blur-xl rounded-2xl border border-white/50 shadow-2xl shadow-primary/10"
                            >
                                <div className="p-2 md:p-3 bg-primary rounded-xl text-white">
                                    <BarChart3 className="w-5 h-5 md:w-6 md:h-6" />
                                </div>
                                <div>
                                    <p className="text-[8px] md:text-[10px] font-bold text-primary/40 uppercase tracking-tighter">Performance</p>
                                    <p className="text-sm md:text-lg font-black text-primary">+342% Growth</p>
                                </div>
                            </motion.div>

                            {/* Floating Target Card */}
                            <motion.div
                                animate={{ y: [0, 15, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                className="absolute bottom-[20%] right-[-2%] lg:right-[-10%] z-20 flex items-center gap-4 p-3 md:p-4 bg-white/80 backdrop-blur-xl rounded-2xl border border-white/50 shadow-2xl shadow-accent/10"
                            >
                                <div className="p-2 md:p-3 bg-accent rounded-xl text-white">
                                    <Target className="w-5 h-5 md:w-6 md:h-6" />
                                </div>
                                <div>
                                    <p className="text-[8px] md:text-[10px] font-bold text-primary/40 uppercase tracking-tighter">Precision</p>
                                    <p className="text-sm md:text-lg font-black text-primary">ROI Focused</p>
                                </div>
                            </motion.div>

                            {/* AI Glow Effect behind portrait */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,77,64,0.1),transparent_70%)] rounded-full -z-10 blur-3xl" />
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Keyword Strip */}
            <div className="relative z-30 mb-8 lg:mb-0">
                <KeywordMarquee />
            </div>
        </section>
    );
};

export default Hero;
