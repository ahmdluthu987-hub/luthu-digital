"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Search,
    Settings,
    Rocket,
    TrendingUp,
    ArrowRight,
    ChevronRight,
    Zap
} from "lucide-react";

const ProcessSection = () => {
    const steps = [
        {
            title: "Discover & Analyze",
            description: "Understand your business, audience, and goals. Analyze competitors and digital presence using AI tools and local market research.",
            icon: <Search className="w-6 h-6" />,
            color: "bg-blue-500",
            keyword: "Digital marketing analysis Kannur"
        },
        {
            title: "Strategy & Planning",
            description: "Create a customized marketing plan covering SEO, SMM, and SEM—focused on your business type and the local Kerala market.",
            icon: <Settings className="w-6 h-6" />,
            color: "bg-purple-500",
            keyword: "Digital marketing strategy Kannur"
        },
        {
            title: "Execute & Optimize",
            description: "Launch campaigns using AI automation and best practices. Continuously monitor and optimize for peak performance.",
            icon: <Rocket className="w-6 h-6" />,
            color: "bg-emerald-500",
            keyword: "Google Ads optimization Kerala"
        },
        {
            title: "Track & Scale",
            description: "Measure results using data-driven reports. Scale what works to build long-term digital growth for your brand.",
            icon: <TrendingUp className="w-6 h-6" />,
            color: "bg-accent",
            keyword: "Digital growth Kannur"
        }
    ];

    return (
        <section id="process" className="py-24 bg-white relative overflow-hidden">
            {/* Connector Line (Desktop) */}
            <div className="hidden lg:block absolute top-[60%] left-0 w-full h-0.5 border-t-2 border-dashed border-gray-100 -z-0" />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-sm font-bold uppercase tracking-widest"
                    >
                        <Zap className="w-4 h-4 fill-primary" />
                        Strategic Flow
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl lg:text-5xl font-black text-primary leading-tight"
                    >
                        How I Work
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-foreground/60 leading-relaxed"
                    >
                        A simple, transparent, and AI-powered process designed for real business growth in <span className="text-primary font-bold">Kannur & Kerala.</span>
                    </motion.p>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className="relative group"
                        >
                            {/* Step Card */}
                            <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-black/[0.02] hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 h-full flex flex-col items-start text-left relative z-10">
                                <div className="mb-6 flex items-center justify-between w-full">
                                    <div className={`w-14 h-14 rounded-2xl ${step.color} flex items-center justify-center text-white shadow-lg group-hover:rotate-6 transition-transform duration-500`}>
                                        {step.icon}
                                    </div>
                                    <span className="text-5xl font-black text-gray-50 transition-colors group-hover:text-primary/5">
                                        0{index + 1}
                                    </span>
                                </div>

                                <h3 className="text-2xl font-bold text-primary mb-4">
                                    {step.title}
                                </h3>

                                <p className="text-foreground/60 leading-relaxed text-sm mb-6 flex-grow">
                                    {step.description}
                                </p>

                                <div className="pt-6 border-t border-gray-50 w-full">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-primary/30">
                                        {step.keyword}
                                    </span>
                                </div>
                            </div>

                            {/* Desktop Arrow Connector */}
                            {index < steps.length - 1 && (
                                <div className="hidden lg:flex absolute top-1/2 -right-4 translate-x-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white border border-gray-100 items-center justify-center text-gray-300 group-hover:text-accent group-hover:border-accent/30 transition-all shadow-sm">
                                    <ChevronRight className="w-5 h-5" />
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="text-center"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-10 py-5 bg-accent text-white font-black text-xl rounded-2xl shadow-2xl shadow-accent/20 transition-all flex items-center gap-3 mx-auto"
                    >
                        Start Your Growth Journey
                        <ArrowRight className="w-6 h-6" />
                    </motion.button>

                    <div className="mt-12 flex flex-wrap justify-center gap-x-10 gap-y-4 text-[10px] font-black uppercase tracking-[0.4em] text-foreground/20">
                        <span>#AI_Digital_Marketing_Kerala</span>
                        <span>#SEO_SMM_SEM_Expert_Kannur</span>
                        <span>#Kannur_Consultant</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ProcessSection;
