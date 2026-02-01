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
    Zap
} from "lucide-react";

const Services = () => {
    const services = [
        {
            title: "AI Marketing & Automation",
            description: "Leverage AI tools for content, analytics, lead automation, and smart workflows to scale marketing faster.",
            icon: <Bot className="w-8 h-8" />,
            tag: "Future Tech",
            size: "lg",
            color: "bg-primary group-hover:bg-accent",
            textColor: "text-white",
            descColor: "text-white/70",
            iconColor: "text-white"
        },
        {
            title: "SEO Optimization",
            description: "Improve Google rankings with AI-driven keyword research and local SEO focus.",
            icon: <Search className="w-6 h-6" />,
            tag: "Expertise",
            size: "md",
            color: "bg-white",
            textColor: "text-primary",
            descColor: "text-foreground/60",
            iconColor: "text-primary"
        },
        {
            title: "Social Media Growth",
            description: "Grow your brand on Instagram & Facebook using content strategy and AI-based targeting.",
            icon: <Share2 className="w-6 h-6" />,
            tag: "Social",
            size: "md",
            color: "bg-white",
            textColor: "text-primary",
            descColor: "text-foreground/60",
            iconColor: "text-accent"
        },
        {
            title: "Google Ads (SEM)",
            description: "Run high-converting paid campaigns with continuous AI performance tracking.",
            icon: <MousePointer2 className="w-6 h-6" />,
            tag: "Performance",
            size: "sm",
            color: "bg-white",
            textColor: "text-primary",
            descColor: "text-foreground/60",
            iconColor: "text-orange-500"
        },
        {
            title: "Brand Strategy",
            description: "Build a strong brand with SEO-friendly content and landing pages.",
            icon: <PenTool className="w-6 h-6" />,
            tag: "Creative",
            size: "sm",
            color: "bg-white",
            textColor: "text-primary",
            descColor: "text-foreground/60",
            iconColor: "text-primary"
        }
    ];

    return (
        <section id="services" className="py-24 bg-[#FDFCF8] relative overflow-hidden">
            {/* Creative Background Elements */}
            <div className="absolute top-0 right-10 w-96 h-96 bg-accent opacity-5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-20 left-10 w-80 h-80 bg-primary opacity-10 blur-[100px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div className="max-w-xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="group flex items-center gap-2 mb-4"
                        >
                            <div className="w-12 h-0.5 bg-accent group-hover:w-20 transition-all duration-500" />
                            <span className="text-accent font-bold uppercase tracking-widest text-sm">Services Portfolio</span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-5xl lg:text-7xl font-black text-primary leading-none"
                        >
                            Crafting <br />Digital <span className="text-accent underline decoration-primary/10 transition-all cursor-default hover:decoration-accent">Magic.</span>
                        </motion.h2>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="md:max-w-xs"
                    >
                        <p className="text-lg text-foreground/60 leading-relaxed italic">
                            "We don't just market; we build digital ecosystems that breathe life into your business in <span className="text-primary font-bold">Kannur & Kerala.</span>"
                        </p>
                    </motion.div>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto lg:h-[700px]">
                    {/* Main Large Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="md:col-span-12 lg:col-span-5 relative group h-full"
                    >
                        <div className="h-full bg-primary rounded-[3rem] p-10 lg:p-14 flex flex-col justify-between overflow-hidden shadow-2xl shadow-primary/20 transition-all duration-500 hover:rotate-1">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-accent opacity-20 -mr-20 -mt-20 blur-3xl group-hover:opacity-40 transition-opacity" />

                            <div className="relative z-10">
                                <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center text-white mb-10 group-hover:scale-110 transition-transform">
                                    <Bot className="w-10 h-10" />
                                </div>
                                <span className="text-accent text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Most Requested</span>
                                <h3 className="text-4xl font-black text-white mb-6 leading-tight">AI-First Marketing & Lead Automation</h3>
                                <p className="text-white/60 text-xl leading-relaxed max-w-sm">
                                    Scaling your business with next-gen AI tools for analytics, creative content, and smart lead-gen workflows.
                                </p>
                            </div>

                            <div className="mt-12 group-hover:translate-x-4 transition-transform duration-500">
                                <button
                                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="flex items-center gap-4 text-white font-bold text-lg"
                                >
                                    Explore Automation <ArrowUpRight className="w-6 h-6 text-accent" />
                                </button>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right side sub-grid */}
                    <div className="md:col-span-12 lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
                        {services.slice(1).map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5, boxShadow: "0 20px 40px -15px rgba(0,0,0,0.1)" }}
                                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                className="bg-white border border-primary/5 rounded-[2.5rem] p-8 lg:p-10 transition-all duration-500 hover:border-accent/30 group cursor-pointer"
                            >
                                <div className="flex justify-between items-start mb-8">
                                    <div className={`p-4 rounded-2xl bg-primary/5 group-hover:bg-primary transition-all duration-500 ${service.iconColor} flex items-center justify-center`}>
                                        <div className="group-hover:text-white transition-colors duration-500">
                                            {service.icon}
                                        </div>
                                    </div>
                                    <Sparkles className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>

                                <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-accent transition-colors">
                                    {service.title}
                                </h3>

                                <p className="text-foreground/50 leading-relaxed mb-6">
                                    {service.description}
                                </p>

                                <div className="pt-6 border-t border-gray-50 flex items-center justify-between opacity-50 group-hover:opacity-100 transition-opacity">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-primary">{service.tag}</span>
                                    <ArrowUpRight className="w-5 h-5 group-hover:scale-125 transition-transform" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Global SEO Bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-20 flex flex-wrap justify-center gap-8 lg:gap-16 opacity-30 text-[10px] font-black uppercase tracking-[0.4em] text-primary"
                >
                    <span>SEO Expert Kannur</span>
                    <span>SMM SEM Kerala</span>
                    <span>AI Digital Marketing Kerala</span>
                    <span>Kannur Consultant</span>
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
