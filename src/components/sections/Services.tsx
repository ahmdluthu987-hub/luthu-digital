import React from "react";
import Link from "next/link";
import {
    Search,
    Share2,
    MousePointer2,
    Bot,
    PenTool,
    ArrowUpRight,
} from "lucide-react";
import { ServiceMotionBase, ServiceHeaderMotion } from "./services/ServiceMotionWrappers";

/**
 * Modern, SEO-optimized Services Section.
 * Features a refined bento-style grid for visual hierarchy.
 */

const services = [
    {
        title: "SEO Optimization in Kannur",
        description: (
            <>
                Rank higher on Google with <Link href="/blog/inside-mind-ai-first-digital-marketing-expert-kannur" className="text-primary hover:text-accent font-medium underline decoration-accent/30 underline-offset-2 transition-all">AI-driven keyword research</Link>, technical SEO audits, and localized strategies for Kerala businesses customized by an SEO expert in Kannur.
            </>
        ),
        icon: <Search className="w-6 h-6" />,
        tag: "Search Growth",
        features: ["Local SEO", "Technical Audit", "Keyword Strategy"]
    },
    {
        title: "Social Media Growth Strategy",
        description: "Scale your brand on Instagram & Facebook using data-backed content strategies from a freelance digital marketer in Kerala.",
        icon: <Share2 className="w-6 h-6" />,
        tag: "Brand SMM",
        features: ["Engagement Strategy", "Content Plan", "Community Management"]
    },
    {
        title: "Google Ads (SEM) Kerala",
        description: "Launch high-converting PPC campaigns. As an AI digital marketing consultant, I optimize for ROI using advanced tracking and performance analytics.",
        icon: <MousePointer2 className="w-6 h-6" />,
        tag: "Paid Performance",
        features: ["PPC Management", "Conversion Tracking", "Ad Optimization"]
    },
    {
        title: "Brand Strategy & Design",
        description: "Establish a powerful digital presence with SEO-friendly content and conversion-focused landing page architectures.",
        icon: <PenTool className="w-6 h-6" />,
        tag: "Digital Brand",
        features: ["Visual Identity", "Content Strategy", "UI/UX Planning"]
    }
];

const Services = () => {
    return (
        <section id="services" className="py-20 md:py-32 bg-[#FDFCF8] relative overflow-hidden" aria-labelledby="services-heading">
            {/* Subtle Gradient Background */}
            <div className="absolute inset-0 pointer-events-none opacity-40">
                <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                {/* Section Header */}
                <div className="mb-20 space-y-4">
                    <ServiceHeaderMotion>
                        <span className="w-8 h-[1px] bg-accent/60" />
                        <span className="text-accent font-medium uppercase tracking-[0.25em] text-xs">Expert Solutions</span>
                    </ServiceHeaderMotion>

                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
                        <ServiceMotionBase>
                            <h2
                                id="services-heading"
                                className="text-4xl md:text-5xl lg:text-7xl font-black text-primary leading-[1.1] tracking-tight max-w-4xl"
                            >
                                Data-Driven <br className="hidden md:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-400">Digital Marketing Services in Kannur.</span>
                            </h2>
                        </ServiceMotionBase>

                        <ServiceMotionBase delay={0.1}>
                            <p className="text-lg md:text-xl text-primary/60 font-medium max-w-md leading-relaxed">
                                Premium, ROI-focused digital marketing services tailored for
                                <span className="text-primary font-bold"> Kannur & Kerala businesses.</span>
                            </p>
                        </ServiceMotionBase>
                    </div>
                </div>

                {/* Services Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-stretch">

                    {/* Featured Service: AI & Automation (Large Card) */}
                    <ServiceMotionBase className="md:col-span-12 xl:col-span-5 h-full order-1 xl:order-none">
                        <article className="h-full bg-primary rounded-[2rem] p-8 md:p-12 flex flex-col justify-between relative overflow-hidden group">
                            {/* Abstract decorative circles */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 transition-transform duration-700 group-hover:scale-110" />

                            <div className="relative z-10">
                                <div className="inline-flex items-center bg-white/10 rounded-xl p-3 text-white mb-8 backdrop-blur-sm border border-white/10">
                                    <Bot className="w-8 h-8" />
                                </div>

                                <span className="text-accent text-xs font-bold uppercase tracking-widest mb-4 block">Premium Feature</span>

                                <h3 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
                                    AI-Powered Marketing & Automation
                                </h3>

                                <p className="text-white/70 text-lg leading-relaxed mb-8 text-balance">
                                    Revolutionize your business with smart lead automation, AI-generated content,
                                    and predictive analytics that scale your growth while you sleep.
                                    Designed to scale growth with minimal manual effort.
                                </p>

                                <ul className="space-y-4 mb-8">
                                    {["Lead Workflows", "AI Content Strategy", "Smart Analytics"].map((f, i) => (
                                        <li key={i} className="flex items-center gap-3 text-white/50 text-sm font-semibold">
                                            <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <Link href="#contact" className="w-full">
                                <button
                                    type="button"
                                    className="w-full bg-white text-primary rounded-xl py-4 font-bold text-lg flex items-center justify-center gap-2 hover:bg-accent hover:text-white transition-colors duration-300 cursor-pointer"
                                    aria-label="Scroll to contact section"
                                >
                                    Get AI Audit <ArrowUpRight className="w-5 h-5" />
                                </button>
                            </Link>
                        </article>
                    </ServiceMotionBase>

                    {/* Standard Services Grid */}
                    <div className="md:col-span-12 xl:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 order-2 xl:order-none">
                        {services.map((service, index) => (
                            <ServiceMotionBase
                                key={index}
                                delay={index * 0.1}
                                className="bg-white rounded-[2rem] p-8 flex flex-col justify-between group hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 border border-primary/5 cursor-default"
                            >
                                <article>
                                    <div>
                                        <div className="flex justify-between items-start mb-6">
                                            <div className="w-14 h-14 rounded-2xl bg-primary/5 group-hover:bg-primary group-hover:text-white text-primary flex items-center justify-center transition-colors duration-300">
                                                {service.icon}
                                            </div>
                                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-2 group-hover:translate-x-0">
                                                <ArrowUpRight className="w-6 h-6 text-primary/20" />
                                            </div>
                                        </div>

                                        <h3 className="text-2xl font-bold text-primary mb-3">
                                            {service.title}
                                        </h3>

                                        <p className="text-primary/60 text-base leading-relaxed mb-6">
                                            {service.description}
                                        </p>
                                    </div>

                                    <div className="pt-6 border-t border-primary/5 flex items-center justify-between mt-auto">
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-primary/40">
                                            {service.tag}
                                        </span>
                                    </div>
                                </article>
                            </ServiceMotionBase>
                        ))}
                    </div>
                </div>

                {/* Minimal SEO Trust Bar */}
                <ServiceMotionBase className="mt-20 pt-10 border-t border-primary/5 flex flex-wrap justify-center gap-x-12 gap-y-4 list-none">
                    <ul className="flex flex-wrap justify-center gap-x-12 gap-y-4 list-none" aria-label="Service locations and expertise">
                        {["SEO Expert Kannur", "SMM SEM Kerala", "AI Digital Marketing Kerala", "Performance Consultant"].map((tag, i) => (
                            <li key={i} className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/30 hover:text-primary/50 transition-colors cursor-default">
                                {tag}
                            </li>
                        ))}
                    </ul>
                </ServiceMotionBase>
            </div>
        </section>
    );
};

export default Services;
