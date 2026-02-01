"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck } from "lucide-react";

/**
 * Modern, device-friendly Certifications & Tools Section.
 */
const Certifications = () => {
    const badges = [
        {
            name: "Google Ads",
            category: "Performance Marketing",
            path: "/Google-Ads-1.png",
        },
        {
            name: "Hubspot",
            category: "Inbound & CRM",
            path: "/Hubspot.png",
        },
        {
            name: "Semrush",
            category: "SEO & Analytics",
            path: "/Semrush.png",
        }
    ];

    return (
        <section className="py-24 bg-[#FAFAF8] relative overflow-hidden flex flex-col items-center">
            {/* Soft decorative glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">

                {/* Header with status badge */}
                <div className="max-w-3xl mx-auto text-center mb-20 space-y-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/5 rounded-full border border-primary/10"
                    >
                        <ShieldCheck className="w-4 h-4 text-primary" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Industry Validated</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-black text-primary tracking-tight leading-tight"
                    >
                        Certifications & <br /> <span className="text-accent underline decoration-primary/5 underline-offset-8">Tools I Work With</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg md:text-xl text-foreground/60 font-medium max-w-2xl mx-auto"
                    >
                        Leveraging industry-leading platforms to drive measurable
                        growth and AI-powered marketing precision.
                    </motion.p>
                </div>

                {/* Structured Responsive Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {badges.map((badge, index) => (
                        <motion.article
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group bg-white rounded-[32px] p-8 md:p-10 border border-primary/5 shadow-xl shadow-black/[0.02] flex flex-col items-center text-center transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5"
                        >
                            <div className="relative w-full aspect-square max-w-[140px] mb-8 flex items-center justify-center p-4 bg-gray-50/50 rounded-2xl group-hover:bg-white transition-colors duration-500">
                                <Image
                                    src={badge.path}
                                    alt={`${badge.name} Certified`}
                                    width={160}
                                    height={160}
                                    className="w-full h-full object-contain filter drop-shadow-sm group-hover:drop-shadow-md transition-all duration-500"
                                    priority
                                />
                            </div>

                            <div className="space-y-2">
                                <h3 className="text-2xl font-black text-primary group-hover:text-accent transition-colors">
                                    {badge.name}
                                </h3>
                                <p className="text-xs font-bold text-foreground/40 uppercase tracking-widest flex items-center justify-center gap-2">
                                    <CheckCircle2 className="w-3 h-3 text-accent" />
                                    {badge.category}
                                </p>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* Modern Footer with high ROI text */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-24 text-center space-y-8"
                >
                    <div className="h-[1px] w-full max-w-4xl mx-auto bg-gradient-to-r from-transparent via-primary/10 to-transparent" />

                    <p className="text-sm md:text-xl leading-relaxed font-bold tracking-tight max-w-3xl mx-auto">
                        Using trusted tools to deliver <span className="text-primary italic">AI-powered SEO, SMM, SEM</span>,
                        and performance marketing for <span className="text-accent">Kannur & Kerala</span> businesses.
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 opacity-30 text-[10px] font-black uppercase tracking-[0.4em]">
                        <span>#GooglePartner</span>
                        <span>#HubspotCertified</span>
                        <span>#SemrushExpert</span>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Certifications;
