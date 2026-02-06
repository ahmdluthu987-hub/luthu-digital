"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Quote,
    Star,
    MapPin,
    CheckCircle,
    TrendingUp,
    Globe,
    Zap,
    ShieldCheck
} from "lucide-react";

/**
 * Testimonials Component
 * Showcases client feedback with a premium, trustworthy design.
 */
const Testimonials = () => {
    const testimonials = [
        {
            quote: "Ahmed helped us improve our online visibility and generate consistent leads through SEO and social media. His AI-based approach brought clarity and measurable results to our marketing.",
            author: "Local Business Owner",
            location: "Kannur, Kerala",
            rating: 5,
        },
        {
            quote: "Professional, transparent, and focused on real growth. Our Google Ads performance improved, and our marketing became more structured and easier to track.",
            author: "Startup Founder",
            location: "Kerala",
            rating: 5,
        },
        {
            quote: "Working with the best freelance digital marketer in Kannur gave us confidence in our digital strategy. Ahmed understands user behavior and focuses on conversions, not just traffic.",
            author: "Service Provider",
            location: "Kannur",
            rating: 5,
        },
        {
            quote: "Ahmed’s understanding of the Kerala market and his data-driven SEO approach helped us build a stronger online presence with steady growth.",
            author: "Small Business Owner",
            location: "Kannur, Kerala",
            rating: 5,
        }
    ];

    const trustIcons = [
        { icon: <CheckCircle className="w-5 h-5" />, label: "Google Ads" },
        { icon: <TrendingUp className="w-5 h-5" />, label: "Meta Ads" },
        { icon: <Globe className="w-5 h-5" />, label: "SEO Expert" },
        { icon: <ShieldCheck className="w-5 h-5" />, label: "Analytics" },
    ];

    return (
        <section id="testimonials" className="py-24 md:py-32 bg-[#FDFCF8] relative overflow-hidden">
            {/* Minimal Background Gradient */}
            <div className="absolute inset-0 pointer-events-none opacity-30">
                <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24 space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-primary/5 text-primary text-xs font-bold uppercase tracking-widest shadow-sm"
                    >
                        <Star className="w-3.5 h-3.5 text-accent" />
                        Social Proof
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl sm:text-5xl lg:text-7xl font-black text-primary leading-[1.05] tracking-tight"
                    >
                        Success Stories from <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-400">Kerala Businesses</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg sm:text-xl text-primary/60 leading-relaxed max-w-2xl mx-auto font-medium text-balance"
                    >
                        Real feedback from businesses across <span className="text-primary font-bold">Kannur & Kerala</span> who trusted AI-first digital marketing strategies for their growth.
                    </motion.p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-20 lg:mb-32">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl shadow-primary/5 border border-primary/5 flex flex-col relative group transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10"
                        >
                            <div className="absolute top-10 right-10 opacity-10 group-hover:opacity-20 group-hover:rotate-12 transition-all duration-500 transform scale-150">
                                <Quote className="w-10 h-10 text-accent" />
                            </div>

                            <div className="flex gap-1 mb-8 opacity-40 group-hover:opacity-100 transition-opacity duration-300">
                                {[...Array(item.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                                ))}
                            </div>

                            <blockquote className="text-xl text-primary/80 leading-relaxed mb-10 flex-grow font-medium text-balance relative z-10">
                                “{item.quote}”
                            </blockquote>

                            <div className="pt-8 border-t border-primary/5 flex items-center gap-5 mt-auto">
                                <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary font-black text-xl border border-primary/5 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                    {item.author.charAt(0)}
                                </div>
                                <div className="flex flex-col">
                                    <h4 className="font-bold text-primary text-base group-hover:text-accent transition-colors">{item.author}</h4>
                                    <div className="flex items-center gap-1.5 text-[11px] text-primary/40 font-bold uppercase tracking-widest mt-1">
                                        <MapPin className="w-3 h-3 text-accent" />
                                        {item.location}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Trust Indicators */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-white border border-primary/5 rounded-[3rem] p-10 lg:p-16 shadow-2xl shadow-primary/5 text-center max-w-5xl mx-auto relative overflow-hidden group"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                    <p className="text-primary/40 font-bold uppercase tracking-[0.25em] text-xs mb-10 lg:mb-12">
                        Serving Clients Across Kannur & Kerala
                    </p>

                    <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 mb-10">
                        {trustIcons.map((indicator, i) => (
                            <div key={i} className="flex items-center gap-3 text-primary/70 group/icon select-none cursor-default">
                                <div className="p-3 rounded-2xl bg-[#FAFAF8] text-accent group-hover/icon:bg-accent group-hover/icon:scale-110 group-hover/icon:text-white transition-all duration-300 shadow-sm">
                                    {indicator.icon}
                                </div>
                                <span className="font-bold text-sm tracking-wide group-hover/icon:text-primary transition-colors">{indicator.label}</span>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-primary/40 text-sm font-medium pt-8 border-t border-primary/5">
                        <div className="flex items-center gap-2">
                            <Zap className="w-4 h-4 text-accent fill-accent" />
                            <span>Focused on real growth</span>
                        </div>
                        <span className="hidden sm:inline opacity-30">•</span>
                        <span>No fake promises</span>
                    </div>
                </motion.div>

                {/* Final CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-center mt-20 lg:mt-32"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-primary text-white font-bold text-lg sm:text-xl rounded-full shadow-2xl shadow-primary/20 hover:shadow-primary/30 transition-all overflow-hidden"
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        <span className="relative z-10 flex items-center gap-3">
                            Let’s Grow Your Business <TrendingUp className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                        <div className="absolute inset-0 bg-accent transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]" />
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;
