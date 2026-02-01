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
            title: "AI-First Digital Marketing Strategy",
            description: "Harnessing advanced AI tools to automate leads and optimize campaign performance.",
            icon: <Cpu className="w-6 h-6" />,
        },
        {
            title: "Creative Design with Business Purpose",
            description: "Aesthetic visuals engineered to influence user behavior and drive conversions.",
            icon: <Palette className="w-6 h-6" />,
        },
        {
            title: "Data-Driven SEO & Performance Marketing",
            description: "Precise, analytics-backed strategies that ensure your brand ranks where it matters.",
            icon: <BarChart3 className="w-6 h-6" />,
        },
        {
            title: "ROI-Focused Growth for Kerala Businesses",
            description: "Tailored digital scale-up plans designed for the unique competitive landscape of Kerala.",
            icon: <TrendingUp className="w-6 h-6" />,
        }
    ];

    return (
        <section id="why-choose-me" className="py-24 bg-[#F9F9F7] relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] translate-x-1/4 -translate-y-1/4 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] -translate-x-1/4 translate-y-1/4 pointer-events-none" />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left Column: Content */}
                    <div className="order-1 flex flex-col space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-4"
                        >
                            <div className="flex items-center gap-3">
                                <span className="w-10 h-[1px] bg-accent"></span>
                                <span className="text-accent font-black uppercase tracking-[0.3em] text-xs">Why Choose Me</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary leading-tight tracking-tight">
                                Best Freelance Digital <br className="hidden md:block" />
                                <span className="text-accent">Marketer in Kannur</span>
                            </h2>
                            <h3 className="text-xl md:text-2xl font-bold text-primary/80">
                                Creative Strategy & ROI-Focused Digital Marketing
                            </h3>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="space-y-6 text-foreground/70 text-lg leading-relaxed max-w-2xl"
                        >
                            <p>
                                Ahmad Luthu is an <span className="text-primary font-bold">AI-first digital marketing expert in Kannur</span> who blends creativity with data-driven strategy. Every campaign and design is crafted not just to look good, but to deliver real business results.
                            </p>
                            <p>
                                As the best freelance digital marketer in Kannur, I focus on how design, content, and marketing psychology influence user behavior. From colors and typography to funnels and performance metrics, every element is optimized for growth.
                            </p>
                            <p>
                                My expertise spans SEO, Performance Marketing, Social Media Marketing (SMM), branding, and conversion-focused funnels. By combining analytics with creative execution, I help local and regional businesses scale consistently with measurable ROI.
                            </p>
                        </motion.div>

                        {/* Feature Highlights Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                            {highlights.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + index * 0.1 }}
                                    whileHover={{ y: -5 }}
                                    className="p-6 bg-white rounded-2xl border border-primary/5 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all group"
                                >
                                    <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                                        {item.icon}
                                    </div>
                                    <h4 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                                        {item.title}
                                    </h4>
                                    <p className="text-sm text-foreground/60 leading-relaxed">
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
                            className="pt-4"
                        >
                            <button
                                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                className="group flex items-center gap-4 bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-accent transition-all shadow-lg shadow-primary/20"
                            >
                                Let's Grow Your Brand
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </motion.div>
                    </div>

                    {/* Right Column: Visual */}
                    <div className="order-2 relative flex justify-center items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative w-full max-w-md lg:max-w-none"
                        >
                            {/* Main Image Wrapper */}
                            <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl shadow-black/10 transition-transform hover:scale-[1.02] duration-500">
                                <Image
                                    src="/ahmdluthu.png" // Using the existing portrait image
                                    alt="Ahmad Luthu - Best Freelance Digital Marketer in Kannur"
                                    width={600}
                                    height={800}
                                    className="w-full h-auto object-cover"
                                    priority
                                />
                                {/* Soft Gradient Overlay for depth */}
                                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                            </div>

                            {/* Decorative Frame */}
                            <div className="absolute -inset-4 border-2 border-accent/20 rounded-[2.5rem] -z-10 translate-x-4 translate-y-4" />

                            {/* Floating Micro-Icons */}
                            <div className="absolute inset-0 z-20 pointer-events-none">
                                {/* Analytics */}
                                <motion.div
                                    animate={{ y: [0, -15, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute -top-6 -right-6 p-4 bg-white rounded-2xl shadow-xl border border-primary/5"
                                >
                                    <BarChart3 className="w-6 h-6 text-primary" />
                                </motion.div>

                                {/* Target */}
                                <motion.div
                                    animate={{ y: [0, 15, 0] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                    className="absolute top-1/2 -left-8 p-4 bg-white rounded-2xl shadow-xl border border-primary/5"
                                >
                                    <Target className="w-6 h-6 text-accent" />
                                </motion.div>

                                {/* Growth */}
                                <motion.div
                                    animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
                                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute bottom-10 -right-10 p-4 bg-white rounded-2xl shadow-xl border border-primary/5"
                                >
                                    <Zap className="w-6 h-6 text-primary" />
                                </motion.div>

                                {/* AI Sparkle */}
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    className="absolute top-[20%] right-[10%] opacity-20"
                                >
                                    <Sparkles className="w-12 h-12 text-accent" />
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Text wrapping around visual elements for premium feel */}
                        <div className="absolute -bottom-10 right-0 z-30 bg-primary py-4 px-8 rounded-2xl text-white shadow-2xl hidden lg:block">
                            <span className="text-sm font-black uppercase tracking-widest block mb-1">Impact Driven</span>
                            <span className="text-2xl font-black">100% Growth Focus</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhyChooseMe;
