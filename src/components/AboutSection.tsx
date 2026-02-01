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
    Cpu
} from "lucide-react";

const AboutSection = () => {
    const stats = [
        {
            number: "02+",
            label: "Years",
            sub: "Hands-on Digital Marketing Experience",
            icon: <Cpu className="w-5 h-5 text-accent" />
        },
        {
            number: "30+",
            label: "Projects",
            sub: "SEO, SMM & Paid Ads Campaigns",
            icon: <Target className="w-5 h-5 text-accent" />
        },
        {
            number: "20+",
            label: "Clients",
            sub: "From Kannur & Across Kerala",
            icon: <Globe className="w-5 h-5 text-accent" />
        },
    ];

    const floatingIcons = [
        { icon: <MessageCircle className="w-6 h-6 text-white" />, top: "10%", right: "15%", delay: 0 },
        { icon: <Zap className="w-8 h-8 text-accent" />, bottom: "15%", left: "10%", delay: 1 },
        { icon: <BarChart3 className="w-6 h-6 text-white" />, top: "25%", left: "5%", delay: 0.5 },
    ];

    return (
        <section id="about" className="relative py-24 overflow-hidden bg-[#002B24]">
            {/* Mesh/Wave Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path
                        d="M0 50 Q 25 40 50 50 T 100 50 V 100 H 0 Z"
                        fill="none"
                        stroke="white"
                        strokeWidth="0.1"
                    />
                    <path
                        d="M0 60 Q 30 50 60 60 T 100 60 V 100 H 0 Z"
                        fill="none"
                        stroke="white"
                        strokeWidth="0.1"
                    />
                    <circle cx="20" cy="20" r="0.2" fill="white" />
                    <circle cx="80" cy="40" r="0.2" fill="white" />
                    <circle cx="50" cy="80" r="0.2" fill="white" />
                </svg>
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

                    {/* Left Side - Stats */}
                    <div className="lg:col-span-5 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="grid grid-cols-1 gap-6"
                        >
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ x: 10 }}
                                    className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all"
                                >
                                    <div className="absolute top-6 right-8 opacity-20 group-hover:opacity-100 transition-opacity">
                                        {stat.icon}
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-5xl font-black text-white mb-2 leading-none">
                                            {stat.number}
                                        </span>
                                        <span className="text-accent font-bold text-lg uppercase tracking-wider mb-2">
                                            {stat.label}
                                        </span>
                                        <p className="text-white/60 text-sm max-w-[200px]">
                                            {stat.sub}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right Side - Content */}
                    <div className="lg:col-span-7 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
                                Crafting Campaigns That Convert: <br />
                                <span className="text-accent">Meet Your AI-First Digital Marketing Expert</span>
                            </h2>

                            <div className="space-y-6 text-lg text-white/80 leading-relaxed">
                                <p>
                                    <span className="text-white font-semibold">Ahmad Luthu</span> is an <span className="text-accent">AI-first digital marketing expert in Kannur</span>, Kerala, focused on helping local businesses grow through smart, data-driven strategies. With hands-on experience in <span className="text-white">SEO, Social Media Marketing (SMM), Google Ads (SEM)</span>, and AI-powered tools, he builds campaigns designed to generate real leads and measurable growth.
                                </p>

                                <p>
                                    By combining modern AI tools with human creativity, Ahmad creates personalized marketing strategies that go beyond traditional methods. Each campaign is optimized continuously using analytics, automation, and performance insights to ensure maximum ROI.
                                </p>

                                <p className="border-l-4 border-accent pl-6 italic text-white/70">
                                    Working with Ahmad means partnering with a <span className="text-white">digital marketing expert in Kannur</span> who understands Kerala’s local market while applying global digital marketing standards.
                                </p>
                            </div>

                            <div className="pt-10">
                                <motion.button
                                    whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255, 107, 53, 0.4)" }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="px-10 py-4 bg-accent text-white rounded-full font-bold text-lg inline-flex items-center gap-3 transition-all group"
                                >
                                    More About Me
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </motion.button>
                            </div>

                            {/* Floating Keywords (Subtle) */}
                            <div className="mt-12 flex flex-wrap gap-4 text-xs font-medium uppercase tracking-widest text-white/30">
                                <span>#SEOExpertKannur</span>
                                <span>#AIFirstMarketing</span>
                                <span>#SMM_SEM_Kerala</span>
                                <span>#KannurConsultant</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Floating Icons */}
            {floatingIcons.map((item, i) => (
                <motion.div
                    key={i}
                    animate={{
                        y: [0, -15, 0],
                        opacity: [0.2, 0.5, 0.2]
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        delay: item.delay
                    }}
                    style={{
                        position: "absolute",
                        top: item.top,
                        right: item.right,
                        bottom: item.bottom,
                        left: item.left,
                    }}
                    className="hidden lg:block p-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl pointer-events-none"
                >
                    {item.icon}
                </motion.div>
            ))}

            {/* Background Glows */}
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
        </section>
    );
};

export default AboutSection;
