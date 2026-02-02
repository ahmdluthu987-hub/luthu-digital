"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    ArrowRight,
    Globe,
    Linkedin,
    Mail,
    MessageCircle,
    Zap,
    Target,
    BarChart3,
    Cpu,
    Sparkles
} from "lucide-react";

const AboutSection = () => {
    const stats = [
        {
            number: "02+",
            label: "Years Expertise",
            sub: "Hands-on High-Performance Marketing",
            icon: <Cpu className="w-5 h-5 text-accent" />
        },
        {
            number: "30+",
            label: "Projects Delivered",
            sub: "SEO & Growth Focused Success",
            icon: <Target className="w-5 h-5 text-accent" />
        },
        {
            number: "20+",
            label: "Active Clients",
            sub: "Scaling Brands Across Kerala",
            icon: <Globe className="w-5 h-5 text-accent" />
        },
    ];

    return (
        <section id="about" className="relative py-24 lg:py-32 overflow-hidden bg-[#01201B] z-10">
            {/* Background elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#01201B] via-transparent to-[#01201B]" />
            </div>

            <div className="container mx-auto px-6 lg:px-12 xl:px-20 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">

                    {/* Left: Content Side */}
                    <div className="lg:col-span-7 order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-10"
                        >
                            <div className="space-y-6">
                                <span className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 rounded-full text-accent font-black text-[10px] uppercase tracking-widest border border-accent/20">
                                    <Sparkles className="w-3 h-3" /> Professional Pedigree
                                </span>
                                <h2 className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tight">
                                    Crafting Campaigns <br />
                                    <span className="text-accent underline decoration-white/5 underline-offset-8">That Actually Scale.</span>
                                </h2>
                            </div>

                            <div className="space-y-8 text-lg sm:text-xl text-white/70 leading-relaxed font-medium">
                                <p className="text-balance">
                                    <span className="text-white font-black">Ahmad Luthu</span> is an AI-first marketing strategist based in <span className="text-accent">Kannur, Kerala</span>. He doesn't just "do" marketing; he engineers growth systems using data-led precision.
                                </p>

                                <p className="text-balance">
                                    By fusing <span className="text-white border-b border-white/20">Advanced SEO</span> with performance-focused AI tools, Ahmad builds resilient digital ecosystems that turn local Indian businesses into dominant market players.
                                </p>

                                <div className="grid grid-cols-2 gap-x-8 gap-y-4 pt-4">
                                    {[
                                        "Technical SEO Audits",
                                        "AI Content Automation",
                                        "Performance AdOps",
                                        "Conversion Rate Optimization"
                                    ].map((skill) => (
                                        <div key={skill} className="flex items-center gap-3 text-sm font-bold text-white/50">
                                            <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                                            {skill}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-8">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="px-10 py-5 bg-white text-primary rounded-2xl font-black text-lg flex items-center justify-center gap-4 transition-all hover:bg-accent hover:text-white group"
                                >
                                    Detailed Portfolio
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </motion.button>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Stats Grid */}
                    <div className="lg:col-span-5 order-1 lg:order-2">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6"
                        >
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ x: 10, backgroundColor: "rgba(255,255,255,0.08)" }}
                                    className="p-8 rounded-3xl bg-white/5 border border-white/5 backdrop-blur-sm transition-all relative overflow-hidden group"
                                >
                                    <div className="absolute -right-4 -top-4 w-24 h-24 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/10 transition-all" />
                                    <div className="flex flex-col gap-4">
                                        <div className="p-3 bg-white/5 rounded-xl w-fit text-accent">
                                            {stat.icon}
                                        </div>
                                        <div className="space-y-1">
                                            <h3 className="text-4xl font-black text-white">{stat.number}</h3>
                                            <p className="text-accent font-black text-xs uppercase tracking-widest leading-none">{stat.label}</p>
                                        </div>
                                        <p className="text-white/40 text-[13px] font-medium leading-relaxed max-w-[200px]">
                                            {stat.sub}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                </div>
            </div>

            {/* Floating Background Glows */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[150px] pointer-events-none" />
        </section>
    );
};

export default AboutSection;

