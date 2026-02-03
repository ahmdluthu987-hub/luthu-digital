"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Search,
    Share2,
    MousePointer2,
    Bot,
    PenTool,
    ArrowUpRight,
    Sparkles,
    CheckCircle2
} from "lucide-react";

/**
 * Modern, SEO-optimized Services Section.
 * Features a bento-style grid for visual hierarchy.
 */
const Services = () => {
    const services = [
        {
            title: "SEO Optimization",
            description: "Rank higher on Google with AI-driven keyword research, technical SEO audits, and localized strategies for Kerala businesses.",
            icon: <Search className="w-6 h-6" />,
            tag: "Search Growth",
            features: ["Local SEO", "Technical Audit", "Keyword Strategy"]
        },
        {
            title: "Social Media Growth",
            description: "Scale your brand on Instagram & Facebook using data-backed content strategies and targeted AI-first implementation.",
            icon: <Share2 className="w-6 h-6" />,
            tag: "Brand SMM",
            features: ["Engagement Strategy", "Content Plan", "Community Management"]
        },
        {
            title: "Google Ads (SEM)",
            description: "Launch high-converting PPC campaigns. We optimize for ROI using advanced tracking and performance analytics.",
            icon: <MousePointer2 className="w-6 h-6" />,
            tag: "Paid Performance",
            features: ["PPC Management", "Conversion Tracking", "Ad Optimization"]
        },
        {
            title: "Brand Strategy",
            description: "Establish a powerful digital presence with SEO-friendly content and conversion-focused landing page architectures.",
            icon: <PenTool className="w-6 h-6" />,
            tag: "Digital Brand",
            features: ["Visual Identity", "Content Strategy", "UI/UX Planning"]
        }
    ];

    return (
        <section id="services" className="py-24 bg-cream relative overflow-hidden selection:bg-primary/10 selection:text-primary">
            {/* Soft decorative depth */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                {/* Section Header */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-20">
                    <div className="max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-3 mb-6"
                        >
                            <span className="w-12 h-[2px] bg-accent" />
                            <span className="text-accent font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs">Expert Solutions</span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl lg:text-7xl font-black text-primary leading-[1.05] tracking-tight"
                        >
                            Elevate Your <br />
                            <span className="text-accent underline decoration-primary/5 underline-offset-8">Digital Presence.</span>
                        </motion.h2>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="lg:max-w-xs"
                    >
                        <p className="text-lg text-foreground/60 leading-relaxed font-medium">
                            Premium ROI-focused digital marketing services tailored for
                            <span className="text-primary font-bold"> Kannur & Kerala startups.</span>
                        </p>
                    </motion.div>
                </div>

                {/* Services Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">

                    {/* Featured Service: AI & Automation (Large Card) */}
                    <motion.article
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="md:col-span-12 lg:col-span-12 xl:col-span-5 h-full"
                    >
                        <div className="h-full bg-primary rounded-[40px] p-10 md:p-14 flex flex-col justify-between group relative overflow-hidden shadow-2xl shadow-primary/20">
                            {/* Decorative glow */}
                            <div className="absolute -top-24 -right-24 w-80 h-80 bg-accent/20 rounded-full blur-[80px] group-hover:bg-accent/30 transition-all duration-700" />

                            <div className="relative z-10">
                                <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center text-white mb-10 border border-white/10 group-hover:scale-110 transition-transform duration-500">
                                    <Bot className="w-10 h-10" />
                                </div>
                                <span className="text-accent text-[10px] font-black uppercase tracking-[0.4em] mb-6 block">Premium Feature</span>
                                <h3 className="text-3xl md:text-5xl font-black text-white mb-8 leading-tight">
                                    AI-Powered Marketing & Automation
                                </h3>
                                <p className="text-white/60 text-lg md:text-xl leading-relaxed mb-10 max-w-sm">
                                    Revolutionize your business with smart lead automation, AI-generated content,
                                    and predictive analytics that scale your growth while you sleep.
                                </p>

                                <ul className="space-y-4">
                                    {["Lead Workflows", "AI Content Strategy", "Smart Analytics"].map((f, i) => (
                                        <li key={i} className="flex items-center gap-3 text-white/50 text-sm font-semibold">
                                            <CheckCircle2 className="w-4 h-4 text-accent" />
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="relative z-10 mt-14">
                                <button
                                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="px-8 py-4 bg-white text-primary rounded-2xl font-bold text-lg flex items-center gap-4 hover:bg-accent hover:text-white transition-all group/btn"
                                >
                                    Get AI Audit <ArrowUpRight className="w-6 h-6 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </motion.article>

                    {/* Standard Services Grid */}
                    <div className="md:col-span-12 lg:col-span-12 xl:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
                        {services.map((service, index) => (
                            <motion.article
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-[40px] p-10 flex flex-col justify-between group hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 border border-primary/5"
                            >
                                <div>
                                    <div className="flex justify-between items-start mb-10">
                                        <div className="p-5 rounded-2xl bg-primary/5 group-hover:bg-primary group-hover:text-white text-primary transition-all duration-500">
                                            {service.icon}
                                        </div>
                                        <div className="w-10 h-10 rounded-full border border-primary/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                            <Sparkles className="w-4 h-4 text-accent" />
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-black text-primary mb-5 group-hover:text-accent transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-foreground/50 leading-relaxed font-medium mb-8">
                                        {service.description}
                                    </p>
                                </div>

                                <div className="pt-8 border-t border-primary/5 flex items-center justify-between">
                                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary/40">
                                        {service.tag}
                                    </span>
                                    <button
                                        className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all"
                                        aria-label={`Learn more about ${service.title}`}
                                    >
                                        <ArrowUpRight className="w-5 h-5" />
                                    </button>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>

                {/* SEO Trust Bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-24 pt-10 border-t border-primary/5 flex flex-wrap justify-center gap-x-12 gap-y-6 opacity-30 text-[9px] font-black uppercase tracking-[0.5em] text-primary"
                >
                    <span>SEO Expert Kannur</span>
                    <span>SMM SEM Kerala</span>
                    <span>AI Digital Marketing Kerala</span>
                    <span>Performance Consultant</span>
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
