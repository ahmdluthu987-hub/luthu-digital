"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { ArrowRight, BarChart3, Target, TrendingUp, Cpu, Sparkles } from "lucide-react";

/**
 * Marquee component for the hero keyword strip.
 */
const KeywordMarquee = () => {
    const keywords = [
        "Growth Strategy", "SEO", "Performance Marketing", "SMM", "AI Marketing"
    ];

    const StarIcon = () => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 33 32"
            fill="currentColor"
            className="w-[20px] h-[20px] md:w-[26px] md:h-[26px] flex-shrink-0"
        >
            <path d="M16.5 0L18.7627 13.7373L32.5 16L18.7627 18.2627L16.5 32L14.2373 18.2627L0.5 16L14.2373 13.7373L16.5 0Z" />
        </svg>
    );

    const List = () => (
        <div className="flex items-center gap-8 md:gap-12 whitespace-nowrap">
            {keywords.map((word, index) => (
                <React.Fragment key={index}>
                    <span className="text-black text-sm md:text-lg font-semibold uppercase tracking-[0.1em] leading-none">
                        {word}
                    </span>
                    <StarIcon />
                </React.Fragment>
            ))}
        </div>
    );

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="w-full bg-accent py-3 md:py-4 overflow-hidden flex select-none border-t border-black/5"
        >
            <motion.div
                animate={{ x: ["-50%", "0%"] }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="flex shrink-0 items-center gap-8 md:gap-12"
            >
                <List />
                <List />
            </motion.div>
        </motion.div>
    );
};

const Hero = () => {
    // Animation variants for the text section
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
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
        <section className="relative min-h-[calc(100vh-80px)] flex flex-col bg-cream overflow-hidden pt-20">
            {/* Animated Background Accents */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.05, 0.08, 0.05],
                    rotate: [0, 45, 0]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"
            />

            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.03, 0.06, 0.03],
                    x: [0, 50, 0]
                }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none"
            />

            <div className="container mx-auto px-6 lg:px-12 flex-grow flex flex-col justify-center relative z-10">
                <div className="flex flex-col lg:flex-row min-h-[calc(100vh-160px)] items-center lg:items-stretch">

                    {/* Left: Text Content */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left py-20 lg:py-0 space-y-6 md:space-y-8"
                    >
                        <motion.div variants={itemVariants} className="flex items-center gap-2 px-4 py-1.5 bg-primary/5 rounded-full border border-primary/10">
                            <Sparkles className="w-3.5 h-3.5 text-primary animate-pulse" />
                            <span className="text-[10px] md:text-xs font-black tracking-[0.3em] text-primary/80 uppercase">
                                AI-First Marketing Expert · Kannur
                            </span>
                        </motion.div>

                        <motion.h2 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-black text-primary tracking-tighter leading-[0.9]">
                            Ahmad Luthu
                        </motion.h2>

                        <motion.p variants={itemVariants} className="text-xl md:text-3xl lg:text-4xl font-bold text-primary/90 leading-tight">
                            ROI-Focused Growth with{" "}
                            <span className="relative inline-block text-accent">
                                AI-Powered Marketing
                                <motion.span
                                    initial={{ width: 0 }}
                                    animate={{ width: "100%" }}
                                    transition={{ delay: 1.2, duration: 1, ease: "easeInOut" }}
                                    className="absolute bottom-1 left-0 h-[3px] md:h-[5px] bg-accent/20 rounded-full"
                                />
                            </span>
                        </motion.p>

                        <motion.p variants={itemVariants} className="text-base md:text-xl text-foreground/60 font-medium max-w-lg mx-auto lg:mx-0">
                            Helping Kerala businesses scale through precision SEO,
                            Performance Marketing & Social Media strategies.
                        </motion.p>

                        <motion.div variants={itemVariants} className="pt-4">
                            <motion.button
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0 20px 40px -10px rgba(0,77,64,0.3)"
                                }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                className="w-full sm:w-auto px-10 py-5 bg-primary text-white rounded-full font-black text-lg flex items-center justify-center gap-3 transition-all relative overflow-hidden group shadow-lg"
                            >
                                <span className="relative z-10 flex items-center gap-3">
                                    Start Your Growth
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </span>
                                <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300 pointer-events-none" />
                            </motion.button>
                        </motion.div>
                    </motion.div>

                    {/* Right: Portrait Image - Anchored Bottom Right on Desktop */}
                    <div className="w-full lg:w-1/2 relative lg:static flex justify-center lg:justify-end items-end">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 50 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                            className="w-full lg:absolute lg:bottom-0 lg:right-0 lg:h-full lg:w-1/2 m-0 p-0 flex items-end justify-end overflow-hidden"
                        >
                            <Image
                                src="/ahmdluthu.png"
                                alt="Ahmad Luthu"
                                width={800}
                                height={1000}
                                className="w-full h-auto lg:h-full lg:w-auto object-contain object-bottom object-right-bottom drop-shadow-[-20px_0_50px_rgba(0,0,0,0.05)]"
                                priority
                            />

                            {/* Floating Icons with refined physics */}
                            <div className="absolute inset-0 z-20 pointer-events-none hidden lg:block">
                                <motion.div
                                    animate={{
                                        y: [0, -20, 0],
                                        rotate: [0, 5, 0]
                                    }}
                                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute top-[25%] left-[15%] p-5 bg-white/60 backdrop-blur-xl rounded-3xl border border-white/40 shadow-xl"
                                >
                                    <BarChart3 className="w-8 h-8 text-primary" />
                                </motion.div>

                                <motion.div
                                    animate={{
                                        y: [0, 15, 0],
                                        x: [0, 10, 0]
                                    }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                    className="absolute bottom-[35%] left-[5%] p-5 bg-white/60 backdrop-blur-xl rounded-3xl border border-white/40 shadow-xl"
                                >
                                    <Target className="w-8 h-8 text-accent" />
                                </motion.div>

                                <motion.div
                                    animate={{
                                        scale: [1, 1.1, 1],
                                        rotate: [0, -10, 0]
                                    }}
                                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute top-[35%] right-[10%] p-4 bg-white/40 backdrop-blur-xl rounded-full border border-white/40 shadow-xl"
                                >
                                    <Cpu className="w-6 h-6 text-primary" />
                                </motion.div>

                                <motion.div
                                    animate={{
                                        opacity: [0.2, 0.5, 0.2],
                                        scale: [0.8, 1.2, 0.8]
                                    }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute top-[15%] right-[25%]"
                                >
                                    <Sparkles className="w-12 h-12 text-accent/30" />
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Keyword Strip with entrance reveal */}
            <div className="relative z-20">
                <KeywordMarquee />
            </div>
        </section>
    );
};

export default Hero;
