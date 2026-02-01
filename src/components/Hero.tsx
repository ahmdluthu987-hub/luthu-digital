"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Target, TrendingUp, Cpu } from "lucide-react";

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
        <div className="w-full bg-[#FF6B35] py-3 md:py-4 overflow-hidden flex select-none border-t border-black/5">
            <motion.div
                animate={{ x: ["-50%", "0%"] }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="flex shrink-0 items-center gap-8 md:gap-12"
            >
                <List />
                <List />
            </motion.div>
        </div>
    );
};

const Hero = () => {
    return (
        <section className="relative min-h-[calc(100vh-80px)] flex flex-col bg-cream overflow-hidden pt-20">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="container mx-auto px-6 lg:px-12 flex-grow flex flex-col justify-center relative z-10">
                <div className="flex flex-col lg:flex-row min-h-[calc(100vh-160px)] items-center lg:items-stretch">

                    {/* Left: Text Content */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left py-20 lg:py-0 space-y-6 md:space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-4 md:space-y-6"
                        >
                            <h1 className="text-xs md:text-sm font-bold tracking-[0.3em] text-primary/60 uppercase">
                                AI-First Digital Marketing Expert in Kannur
                            </h1>

                            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-primary tracking-tighter leading-[0.9]">
                                Ahmad Luthu
                            </h2>

                            <p className="text-xl md:text-3xl lg:text-4xl font-bold text-primary/90 leading-tight">
                                ROI-Focused Growth with{" "}
                                <span className="text-accent underline decoration-accent/20 underline-offset-4 lg:underline-offset-8">
                                    AI-Powered Marketing
                                </span>
                            </p>

                            <p className="text-base md:text-xl text-foreground/60 font-medium max-w-lg mx-auto lg:mx-0">
                                SEO, Performance Marketing & SMM for Kerala businesses.
                            </p>

                            <div className="pt-4">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="w-full sm:w-auto px-10 py-5 bg-primary text-white rounded-full font-bold text-lg flex items-center justify-center gap-3 transition-all"
                                >
                                    Start Your Growth
                                    <ArrowRight className="w-5 h-5" />
                                </motion.button>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Portrait Image - Anchored Bottom Right on Desktop */}
                    <div className="w-full lg:w-1/2 relative lg:static flex justify-center lg:justify-end items-end">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
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

                            {/* Floating Icons (Simplified for Desktop Absolute Layout) */}
                            <div className="absolute inset-0 z-20 pointer-events-none hidden lg:block">
                                <motion.div
                                    animate={{ y: [0, -15, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute top-[20%] left-[10%] p-5 bg-white/40 backdrop-blur-md rounded-3xl border border-white/30"
                                >
                                    <BarChart3 className="w-8 h-8 text-primary" />
                                </motion.div>
                                <motion.div
                                    animate={{ y: [0, 15, 0] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                    className="absolute bottom-[30%] left-[0%] p-5 bg-white/40 backdrop-blur-md rounded-3xl border border-white/30"
                                >
                                    <Target className="w-8 h-8 text-accent" />
                                </motion.div>
                                <motion.div
                                    animate={{ scale: [1, 1.1, 1] }}
                                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute top-[35%] right-[5%] p-4 bg-white/30 backdrop-blur-sm rounded-full border border-white/20"
                                >
                                    <Cpu className="w-6 h-6 text-primary" />
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Keyword Strip */}
            <div className="relative z-20">
                <KeywordMarquee />
            </div>
        </section>
    );
};

export default Hero;
