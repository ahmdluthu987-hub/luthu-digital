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

const Testimonials = () => {
    const testimonials = [
        {
            quote: "Ahmad helped improve our online visibility and brought consistent leads through SEO and social media. His AI-based approach made a real difference for our business.",
            author: "Local Business Owner",
            location: "Kannur, Kerala",
            rating: 5,
        },
        {
            quote: "Professional, transparent, and results-focused. Google Ads performance improved and our marketing became more structured and measurable.",
            author: "Startup Founder",
            location: "Kerala",
            rating: 5,
        },
        {
            quote: "Great understanding of the Kerala market. Ahmad combines modern tools with practical strategies that actually work.",
            author: "Service Provider",
            location: "Kannur",
            rating: 5,
        },
    ];

    const trustIcons = [
        { icon: <CheckCircle className="w-5 h-5" />, label: "Google Ads" },
        { icon: <TrendingUp className="w-5 h-5" />, label: "Meta Ads" },
        { icon: <Globe className="w-5 h-5" />, label: "SEO Expert" },
        { icon: <ShieldCheck className="w-5 h-5" />, label: "Analytics" },
    ];

    return (
        <section id="testimonials" className="py-24 bg-[#F9FAFB] relative overflow-hidden">
            {/* Subtle Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full opacity-40 pointer-events-none">
                <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold uppercase tracking-widest mb-6"
                    >
                        <Star className="w-4 h-4 fill-primary" />
                        Social Proof
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl lg:text-5xl font-black text-primary mb-6"
                    >
                        What Clients Say
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-foreground/60 leading-relaxed"
                    >
                        Real feedback from businesses across <span className="text-primary font-bold">Kannur & Kerala</span> who trusted AI-first digital marketing strategies for their growth.
                    </motion.p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="bg-white p-8 lg:p-10 rounded-[2.5rem] shadow-xl shadow-black/[0.03] border border-gray-100 flex flex-col relative group transition-all duration-300"
                        >
                            <div className="absolute -top-4 -left-4 w-12 h-12 bg-accent rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:rotate-12 transition-transform">
                                <Quote className="w-6 h-6 fill-current" />
                            </div>

                            <div className="flex gap-1 mb-6">
                                {[...Array(item.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                                ))}
                            </div>

                            <blockquote className="text-lg text-foreground/80 leading-relaxed mb-8 flex-grow italic">
                                “{item.quote}”
                            </blockquote>

                            <div className="pt-6 border-t border-gray-50 flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                                    {item.author.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-primary">{item.author}</h4>
                                    <div className="flex items-center gap-1.5 text-xs text-foreground/50 font-medium">
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
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white border border-gray-100 rounded-[2rem] p-8 lg:p-12 shadow-sm text-center"
                >
                    <p className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-10">
                        Serving Clients Across Kannur & Kerala
                    </p>

                    <div className="flex flex-wrap justify-center gap-8 lg:gap-16 mb-10">
                        {trustIcons.map((indicator, i) => (
                            <div key={i} className="flex items-center gap-3 text-foreground/60 group">
                                <div className="p-3 rounded-xl bg-gray-50 text-accent group-hover:bg-accent group-hover:text-white transition-all shadow-sm">
                                    {indicator.icon}
                                </div>
                                <span className="font-bold text-sm tracking-wide">{indicator.label}</span>
                            </div>
                        ))}
                    </div>

                    <div className="flex items-center justify-center gap-2 text-foreground/40 text-sm italic py-4 border-t border-gray-50">
                        <Zap className="w-4 h-4 text-accent" />
                        Focused on real growth, not fake promises
                    </div>
                </motion.div>

                {/* Final CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="text-center mt-20"
                >
                    <motion.button
                        whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -10px rgba(255,107,53,0.3)" }}
                        whileTap={{ scale: 0.95 }}
                        className="px-12 py-5 bg-accent text-white font-black text-xl rounded-2xl flex items-center gap-3 mx-auto shadow-xl transition-all"
                    >
                        Let’s Grow Your Business
                        <TrendingUp className="w-6 h-6" />
                    </motion.button>
                    <p className="mt-6 text-foreground/40 text-sm font-medium">
                        Contact your trusted <span className="text-primary font-bold">digital marketing expert in Kerala</span> today.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;
