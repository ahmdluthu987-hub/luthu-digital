"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
    ArrowRight,
    CheckCircle2,
    Instagram,
    Facebook,
    TrendingUp,
    BrainCircuit,
    BarChart3,
    MessageSquare
} from "lucide-react";

const Hero = () => {
    const stats = [
        { label: "Success Rate", value: "98%", sub: "Data-Driven ROI" },
        { label: "Ad Spend Managed", value: "₹50L+", sub: "Google & Meta Ads" },
        { label: "Keywords Ranked", value: "500+", sub: "Top #3 Positions" },
    ];

    const partners = [
        { name: "Google Ads", icon: "/Google-Ads-1.png" },
        { name: "HubSpot", icon: "/Hubspot.png" },
        { name: "Semrush", icon: "/Semrush.png" },
    ];

    const floatingIcons = [
        { Icon: TrendingUp, delay: 0, top: "12%", left: "-5%" },
        { Icon: Instagram, delay: 0.5, top: "5%", right: "15%" },
        { Icon: BrainCircuit, delay: 1, bottom: "18%", left: "-2%" },
        { Icon: BarChart3, delay: 1.5, bottom: "8%", right: "10%" },
    ];

    return (
        <section className="relative min-h-screen flex items-center pt-32 md:pt-40 pb-0 overflow-hidden bg-cream selection:bg-primary/10 selection:text-primary">
            {/* Background Abstract Shapes - Enhanced Depth */}
            <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] mix-blend-multiply opacity-60" />
            <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[100px] mix-blend-multiply opacity-50" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none" />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex flex-col space-y-10 max-w-2xl"
                    >
                        <div className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                                className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/60 border border-primary/10 backdrop-blur-xl shadow-sm w-fit group cursor-default"
                            >
                                <span className="flex h-2.5 w-2.5 relative">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
                                </span>
                                <span className="text-primary/80 font-bold text-xs uppercase tracking-[0.15em]">
                                    Available for New Projects in Kannur
                                </span>
                            </motion.div>

                            <h1 className="text-5xl lg:text-8xl font-black text-primary leading-[1.05] tracking-tight">
                                <span className="block text-xl lg:text-2xl font-bold bg-gradient-to-r from-primary/60 to-primary/40 bg-clip-text text-transparent mb-3 uppercase tracking-widest">
                                    Digital Marketing Expert
                                </span>
                                <span className="relative inline-block">
                                    Ahmad Luthu
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: "100%" }}
                                        transition={{ delay: 1, duration: 0.8 }}
                                        className="absolute -bottom-2 left-0 h-2 bg-accent/20 rounded-full -z-10"
                                    />
                                </span>
                                <span className="block text-4xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-accent mt-4">
                                    ROI-Focused Growth
                                </span>
                            </h1>

                            <h2 className="text-lg lg:text-2xl font-semibold text-primary/70 leading-relaxed max-w-xl">
                                Scaling <span className="text-primary border-b-2 border-accent/40">Kannur's Finest Brands</span> with AI-Powered SEO, Performance Marketing & SMM.
                            </h2>
                        </div>

                        <p className="text-lg lg:text-xl text-foreground/60 max-w-xl leading-relaxed font-medium">
                            I transform local businesses into Kerala's market leaders. As an <span className="text-primary font-bold italic">AI-first digital marketing consultant</span>, I specialize in conversion-optimized funnels that deliver measurable results, not just clicks.
                        </p>

                        <div className="flex flex-wrap items-center gap-6 pt-4">
                            <motion.button
                                whileHover={{ scale: 1.02, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                aria-label="Book a free consultation with Ahmad Luthu"
                                className="px-10 py-5 bg-primary text-white rounded-2xl font-bold text-xl shadow-2xl shadow-primary/20 hover:shadow-primary/40 transition-all flex items-center gap-3 relative overflow-hidden group"
                            >
                                <span className="absolute inset-0 bg-gradient-to-r from-accent/0 via-white/10 to-accent/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                                Start Your Growth
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,1)" }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                aria-label="View portfolio and case studies"
                                className="px-10 py-5 bg-white/40 border-2 border-primary/5 text-primary rounded-2xl font-bold text-xl backdrop-blur-md transition-all flex items-center gap-2 group"
                            >
                                View Case Studies
                            </motion.button>
                        </div>

                        {/* Social Proof / Trust Bar */}
                        <div className="pt-8 space-y-4">
                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/30">
                                Certified & Strategic Partner
                            </p>
                            <div className="flex items-center gap-8 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                                {partners.map((partner) => (
                                    <Image
                                        key={partner.name}
                                        src={partner.icon}
                                        alt={`${partner.name} Certification Logo`}
                                        width={100}
                                        height={40}
                                        className="h-6 w-auto object-contain"
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Visuals */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative h-[650px] lg:h-[800px] flex items-center justify-center pt-2"
                    >
                        {/* Interactive Background Glow */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <motion.div
                                animate={{
                                    scale: [1, 1.1, 1],
                                    rotate: [0, 90, 180, 270, 360],
                                }}
                                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                                className="w-[120%] h-[120%] bg-gradient-to-tr from-primary/10 via-accent/5 to-primary/5 blur-[100px] opacity-40 rounded-full"
                            />
                        </div>

                        {/* Portrait Image */}
                        <div className="relative z-10 w-full h-full max-w-2xl flex items-center justify-center">
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5, duration: 1 }}
                                className="relative"
                            >
                                <Image
                                    src="/ahmdluthu.png"
                                    alt="Ahmad Luthu - Expert Digital Marketing Consultant in Kannur, Kerala Portfolio"
                                    width={408}
                                    height={612}
                                    className="object-contain w-[380px] md:w-[440px] lg:w-[490px] h-auto -translate-x-12 lg:-translate-x-20 translate-y-12 lg:translate-y-20 transition-transform duration-700 hover:scale-[1.02]"
                                    priority
                                />
                            </motion.div>

                            {/* Stats Cards Floating - Modern Glass Style */}
                            <div className="absolute -right-4 lg:-right-12 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-20">
                                {stats.map((stat, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: 40 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.8 + i * 0.2, type: "spring" }}
                                        className="bg-white/70 backdrop-blur-2xl p-5 lg:p-6 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-white/50 min-w-[200px] group hover:bg-white transition-all duration-300"
                                    >
                                        <div className="text-4xl font-black text-primary mb-1 group-hover:scale-110 transition-transform origin-left">{stat.value}</div>
                                        <div className="text-[10px] font-black text-primary/40 uppercase tracking-[0.1em]">{stat.label}</div>
                                        <div className="text-[11px] text-foreground/50 font-medium mt-1">{stat.sub}</div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Floating Animated Icons - Squircle Design */}
                        {floatingIcons.map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.15, rotate: 10, y: -5 }}
                                animate={{
                                    y: [0, -20, 0],
                                    rotate: [0, 5, -5, 0]
                                }}
                                transition={{
                                    duration: 6 + i,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: item.delay
                                }}
                                style={{
                                    position: "absolute",
                                    top: item.top,
                                    left: item.left,
                                    right: item.right,
                                    bottom: item.bottom,
                                }}
                                className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center bg-white/80 backdrop-blur-xl rounded-[1.25rem] border border-white/50 shadow-2xl hover:shadow-primary/20 transition-all duration-500 cursor-pointer z-30 group"
                            >
                                <item.Icon className="w-7 h-7 md:w-8 md:h-8 text-primary/60 group-hover:text-primary transition-colors duration-300" />
                            </motion.div>
                        ))}
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
