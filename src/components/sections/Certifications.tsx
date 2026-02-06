"use client";

import React from "react";
import Image from "next/image";
import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";
import { CheckCircle2, ShieldCheck } from "lucide-react";

const CERTIFICATIONS = [
    {
        name: "Google Ads",
        label: "Performance Marketing",
        path: "/Google-Ads-1.png",
        alt: "Google Ads Certified Performance Marketing Expert in Kannur",
        description: "Google Ads certified expertise ensuring high ROI and precise targeting for Kannur businesses.",
    },
    {
        name: "HubSpot",
        label: "Inbound & CRM",
        path: "/Hubspot.png",
        alt: "HubSpot Certified Inbound Marketing Expert Kerala",
        description: "Mastering inbound strategies and CRM automation to nurture leads into loyal customers.",
    },
    {
        name: "Semrush",
        label: "SEO & Analytics",
        path: "/Semrush.png",
        alt: "Semrush Certified SEO Expert providing deep competitive analysis",
        description: "Data-driven SEO audits and keyword strategies that dominate local search results.",
    }
];

/**
 * Modern, device-friendly Certifications & Tools Section.
 */
const Certifications = () => {
    const shouldReduceMotion = useReducedMotion();

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1
            }
        }
    };

    const cardVariants = {
        hidden: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section
            className="py-24 md:py-32 bg-[#FAFAF8] relative overflow-hidden flex flex-col items-center"
            aria-labelledby="certifications-heading"
        >
            {/* Soft decorative glow */}
            <div className="absolute inset-0 pointer-events-none opacity-40" aria-hidden="true">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
            </div>

            <LazyMotion features={domAnimation}>
                <div className="container mx-auto px-6 lg:px-12 relative z-10">

                    {/* Header with status badge */}
                    <div className="max-w-3xl mx-auto text-center mb-20 space-y-8">
                        <m.div
                            initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-primary/5 shadow-sm"
                        >
                            <ShieldCheck className="w-4 h-4 text-accent" aria-hidden="true" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/80">Industry Validated</span>
                        </m.div>

                        <m.h2
                            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            id="certifications-heading"
                            className="text-4xl md:text-5xl lg:text-6xl font-black text-primary tracking-tight leading-tight"
                        >
                            Certified Digital Marketing Expertise <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-400">That Drives Growth in Kerala</span>
                        </m.h2>

                        <m.p
                            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg md:text-xl text-primary/60 font-medium max-w-2xl mx-auto leading-relaxed text-balance"
                        >
                            Leveraging industry-leading credentials to deliver measurable
                            ROI and AI-powered marketing precision for your brand.
                        </m.p>
                    </div>

                    {/* Structured Responsive Grid */}
                    <m.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-50px" }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
                    >
                        {CERTIFICATIONS.map((badge, index) => (
                            <m.article
                                key={index}
                                variants={cardVariants}
                                whileHover={shouldReduceMotion ? {} : { y: -8 }}
                                className="group bg-white rounded-[2.5rem] p-10 shadow-xl shadow-primary/5 flex flex-col items-center text-center transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10"
                            >
                                <div className="relative w-full aspect-square max-w-[140px] mb-8 flex items-center justify-center p-6 bg-[#FAFAF8] rounded-[2rem] group-hover:bg-white transition-colors duration-500 border border-primary/5 group-hover:border-transparent">
                                    <Image
                                        src={badge.path}
                                        alt={badge.alt}
                                        width={160}
                                        height={160}
                                        sizes="(max-width: 768px) 140px, 160px"
                                        priority={false}
                                        loading="lazy"
                                        className="w-full h-full object-contain filter drop-shadow-sm group-hover:drop-shadow-md transition-all duration-500 opacity-90 group-hover:opacity-100" // Removed grayscale for better mobile trust
                                    />
                                </div>

                                <div className="space-y-3">
                                    <h3 className="text-2xl font-black text-primary group-hover:text-accent transition-colors duration-300">
                                        {badge.name}
                                    </h3>
                                    <p className="text-[10px] font-bold text-primary/60 uppercase tracking-widest flex items-center justify-center gap-2 bg-primary/5 py-1.5 px-3 rounded-full">
                                        <CheckCircle2 className="w-3 h-3 text-accent" aria-hidden="true" />
                                        {badge.label}
                                    </p>
                                    <p className="text-xs text-primary/70 font-medium max-w-[220px] mx-auto pt-2 leading-relaxed">
                                        {badge.description}
                                    </p>
                                </div>
                            </m.article>
                        ))}
                    </m.div>

                    {/* Modern Footer with high ROI text */}
                    <m.div
                        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mt-24 text-center space-y-10"
                    >
                        <div className="h-[1px] w-full max-w-xs mx-auto bg-primary/10" aria-hidden="true" />

                        <p className="text-base md:text-lg leading-relaxed font-bold tracking-tight max-w-2xl mx-auto text-primary/80">
                            Using trusted tools to deliver <span className="text-primary italic hover:text-accent transition-colors">AI-powered SEO</span>, SMM, SEM,
                            and performance marketing for <span className="text-accent">Kannur & Kerala</span> businesses.
                        </p>

                        <div className="flex flex-wrap justify-center gap-6 opacity-40 text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] text-primary" aria-label="Additional credentials">
                            <span>Google Partner</span>
                            <span>HubSpot Certified</span>
                            <span>Semrush Expert</span>
                        </div>
                    </m.div>

                </div>
            </LazyMotion>
        </section>
    );
};

export default Certifications;
