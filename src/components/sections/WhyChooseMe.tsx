"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
    Cpu,
    Palette,
    BarChart3,
    TrendingUp,
    ArrowRight,
    Target,
    Zap,
    Sparkles
} from "lucide-react";

const WhyChooseMe = () => {
    const highlights = [
        {
            title: "AI-First Digital Strategy",
            description: "Harnessing advanced AI tools to automate leads and optimize campaign performance.",
            icon: <Cpu className="w-6 h-6" />,
        },
        {
            title: "Purpose-Driven Design",
            description: "Aesthetic visuals engineered to influence user behavior and drive conversions.",
            icon: <Palette className="w-6 h-6" />,
        },
        {
            title: "Data-Backed SEO",
            description: "Precise, analytics-backed strategies that ensure your brand ranks where it matters.",
            icon: <BarChart3 className="w-6 h-6" />,
        },
        {
            title: "ROI-Focused Growth",
            description: "Tailored digital scale-up plans designed for the unique competitive landscape of Kerala.",
            icon: <TrendingUp className="w-6 h-6" />,
        }
    ];

    return (
        <section id="why-choose-me" className="py-16 md:py-24 bg-[#F9F9F7] relative overflow-hidden">
            {/* Background Accents - Optimized for performance */}
            <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-primary/5 rounded-full blur-[80px] md:blur-[120px] translate-x-1/4 -translate-y-1/4 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-accent/5 rounded-full blur-[60px] md:blur-[100px] -translate-x-1/4 translate-y-1/4 pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">

                    {/* Left Column: Content */}
                    <div className="order-2 lg:order-1 flex flex-col space-y-6 md:space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-3 md:space-y-4 text-center lg:text-left"
                        >
                            <div className="flex items-center justify-center lg:justify-start gap-3">
                                <span className="w-8 md:w-10 h-[1px] bg-accent"></span>
                                <span className="text-accent font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-[8px] md:text-xs">Why Choose Me</span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-primary leading-[1.1] tracking-tight text-balance">
                                Best Freelance Digital <br className="hidden md:block" />
                                <span className="text-accent">Marketer in Kannur</span>
                            </h2>
                            <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-primary/80 text-balance">
                                Creative Strategy & ROI-Focused Digital Marketing
                            </h3>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="space-y-4 md:space-y-6 text-foreground/70 text-base md:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 text-center lg:text-left"
                        >
                            <p>
                                Ahmad Luthu is an <span className="text-primary font-bold">AI-first digital marketing expert in Kannur</span> who blends creativity with data-driven strategy. Every campaign and design is crafted not just to look good, but to deliver real business results.
                            </p>
                            <p className="hidden md:block">
                                As the best freelance digital marketer in Kannur, I focus on how design, content, and marketing psychology influence user behavior. From colors and typography to funnels and performance metrics, every element is optimized for growth.
                            </p>
                            <p className="hidden lg:block">
                                My expertise spans SEO, Performance Marketing, Social Media Marketing (SMM), branding, and conversion-focused funnels. By combining analytics with creative execution, I help local and regional businesses scale consistently with measurable ROI.
                            </p>
                        </motion.div>

                        {/* Feature Highlights Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 pt-2 md:pt-4">
                            {highlights.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + index * 0.1 }}
                                    whileHover={{ y: -5 }}
                                    className="p-5 md:p-6 bg-white rounded-2xl border border-primary/5 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all group flex flex-col items-center lg:items-start text-center lg:text-left h-full"
                                >
                                    <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/5 rounded-xl flex items-center justify-center text-primary mb-3 md:mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                        {item.icon}
                                    </div>
                                    <h4 className="font-bold text-primary mb-1 md:mb-2 text-base md:text-lg group-hover:text-accent transition-colors">
                                        {item.title}
                                    </h4>
                                    <p className="text-xs md:text-sm text-foreground/60 leading-relaxed text-balance">
                                        {item.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                            className="pt-2 md:pt-4 flex justify-center lg:justify-start"
                        >
                            <button
                                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                className="group flex items-center gap-3 md:gap-4 bg-primary text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-base md:text-lg hover:bg-accent transition-all shadow-lg shadow-primary/20 active:scale-95"
                            >
                                Let&apos;s Grow Your Brand
                                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </motion.div>
                    </div>

                    {/* Right Column: Visual */}
                    <div className="order-1 lg:order-2 relative flex justify-center items-center mb-12 lg:mb-0">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative w-full max-w-[320px] sm:max-w-md lg:max-w-none"
                        >
                            {/* Main Image Wrapper */}
                            <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl shadow-black/10 transition-transform hover:scale-[1.01] duration-500">
                                <Image
                                    src="/ai-digital-marketing-expert-kannur.webp" // Using the existing portrait image
                                    alt="Ahmad Luthu - Best Freelance Digital Marketer in Kannur"
                                    width={600}
                                    height={800}
                                    sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 33vw"
                                    className="w-full h-auto object-cover"
                                />
                                {/* Soft Gradient Overlay */}
                                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                            </div>

                            {/* Decorative Frame - Adjusted for mobile */}
                            <div className="absolute -inset-3 md:-inset-4 border-2 border-accent/20 rounded-[2.2rem] md:rounded-[2.5rem] -z-10 translate-x-3 translate-y-3 md:translate-x-4 md:translate-y-4" />

                            {/* Floating Micro-Icons - Repositioned for mobile safety */}
                            <div className="absolute inset-0 z-20 pointer-events-none">
                                {/* Analytics - Top Right */}
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute -top-4 -right-2 md:-top-6 md:-right-6 p-3 md:p-4 bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-primary/10"
                                >
                                    <BarChart3 className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                                </motion.div>

                                {/* Target - Middle Left */}
                                <motion.div
                                    animate={{ y: [0, 10, 0] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                    className="absolute top-1/3 -left-4 md:top-1/2 md:-left-8 p-3 md:p-4 bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-primary/10"
                                >
                                    <Target className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                                </motion.div>

                                {/* Growth - Bottom Right */}
                                <motion.div
                                    animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
                                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute bottom-8 -right-4 md:bottom-10 md:-right-10 p-3 md:p-4 bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-primary/10"
                                >
                                    <Zap className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                                </motion.div>

                                {/* AI Sparkle - Background */}
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    className="absolute top-[15%] right-[5%] opacity-30"
                                >
                                    <Sparkles className="w-8 h-8 md:w-12 md:h-12 text-accent" />
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Text wrapping around visual elements - Visible on mobile now but simplified */}
                        <div className="absolute -bottom-6 md:-bottom-10 right-1/2 translate-x-1/2 lg:translate-x-0 lg:right-0 z-30 bg-primary/95 backdrop-blur-sm py-3 px-6 md:py-4 md:px-8 rounded-2xl text-white shadow-xl shadow-primary/20 w-max max-w-[90%] text-center lg:text-left border border-white/10">
                            <span className="text-[10px] md:text-sm font-bold uppercase tracking-widest block mb-0.5 md:mb-1 opacity-90">Impact Driven</span>
                            <span className="text-lg md:text-2xl font-black whitespace-nowrap">100% Growth Focus</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhyChooseMe;
