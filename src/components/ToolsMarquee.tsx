"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    BarChart3,
    Search,
    Target,
    Share2,
    Cpu,
    Mail,
    Globe,
    Zap,
    Code2,
    LineChart
} from "lucide-react";

const ToolsMarquee = () => {
    const tools = [
        { name: "Google Ads", icon: <Target className="w-5 h-5" />, category: "SEM" },
        { name: "Google Analytics", icon: <BarChart3 className="w-5 h-5" />, category: "Data" },
        { name: "Search Console", icon: <Search className="w-5 h-5" />, category: "SEO" },
        { name: "Meta Ads", icon: <Share2 className="w-5 h-5" />, category: "SMM" },
        { name: "AI Marketing", icon: <Cpu className="w-5 h-5" />, category: "Automation" },
        { name: "SEO Tools", icon: <Globe className="w-5 h-5" />, category: "Visibility" },
        { name: "Automation", icon: <Zap className="w-5 h-5" />, category: "Efficiency" },
        { name: "Email Marketing", icon: <Mail className="w-5 h-5" />, category: "Reach" },
        { name: "Tech Strategy", icon: <Code2 className="w-5 h-5" />, category: "Structure" },
        { name: "Performance", icon: <LineChart className="w-5 h-5" />, category: "Growth" },
    ];

    // Double the array for seamless looping
    const marqueeItems = [...tools, ...tools];

    return (
        <section id="tools" className="py-24 bg-[#FCFBF7] overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12 mb-16">
                <div className="text-center max-w-3xl mx-auto space-y-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl lg:text-4xl font-black text-primary"
                    >
                        Certifications & Tools I Work With
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-foreground/60"
                    >
                        Industry-recognized platforms and technologies used to deliver AI-first digital marketing results.
                    </motion.p>
                </div>
            </div>

            <div className="relative group flex items-center">
                {/* Gradient Overlays */}
                <div className="absolute left-0 top-0 bottom-0 w-24 lg:w-48 bg-gradient-to-r from-[#FCFBF7] to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-24 lg:w-48 bg-gradient-to-l from-[#FCFBF7] to-transparent z-10 pointer-events-none" />

                {/* Marquee Container */}
                <motion.div
                    className="flex gap-6 py-4 px-2"
                    animate={{
                        x: [0, -1920], // Adjusted based on approximate width of items
                    }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    style={{ width: "fit-content" }}
                >
                    {marqueeItems.map((tool, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05, borderColor: "rgba(0, 77, 64, 0.3)" }}
                            className="flex items-center gap-4 bg-white px-6 py-4 rounded-2xl border border-gray-100 shadow-sm whitespace-nowrap group/badge cursor-default transition-colors duration-300"
                        >
                            <div className="p-2 rounded-xl bg-primary/5 text-primary group-hover/badge:bg-primary group-hover/badge:text-white transition-all duration-300">
                                {tool.icon}
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold text-primary text-sm">{tool.name}</span>
                                <span className="text-[10px] font-black uppercase tracking-widest text-foreground/30">{tool.category}</span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <div className="container mx-auto px-6 lg:px-12 mt-16 text-center">
                <p className="text-sm text-foreground/40 font-medium">
                    Using trusted tools and platforms to deliver <span className="text-primary/60 font-bold italic">AI-powered SEO, SMM, SEM,</span> and performance marketing for Kannur & Kerala businesses.
                </p>

                {/* Subtle SEO Keywords Tag Cloud */}
                <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-2 opacity-20 hover:opacity-100 transition-opacity">
                    <span className="text-[9px] font-bold uppercase tracking-[0.3em] cursor-default">#DigitalMarketingToolsKerala</span>
                    <span className="text-[9px] font-bold uppercase tracking-[0.3em] cursor-default">#AIMarketingToolsKannur</span>
                    <span className="text-[9px] font-bold uppercase tracking-[0.3em] cursor-default">#SEOSEMSMMExpertKannur</span>
                    <span className="text-[9px] font-bold uppercase tracking-[0.3em] cursor-default">#AIDigitalMarketingKerala</span>
                </div>
            </div>
        </section>
    );
};

export default ToolsMarquee;
