import React from "react";
import {
    ArrowRight,
    Sparkles
} from "lucide-react";
import Link from "next/link";
import { AboutContentMotion, AboutStatMotion, AboutButtonMotion } from "./about/AboutMotionWrappers";

const AboutSection = () => {
    const stats = [
        {
            number: "02+",
            label: "Years of Hands-On Experience",
            ariaLabel: "2 plus years of hands-on experience"
        },
        {
            number: "30+",
            label: "Projects Delivered",
            ariaLabel: "30 plus projects delivered"
        },
        {
            number: "20+",
            label: "Active Clients Across Kerala",
            ariaLabel: "20 plus active clients across Kerala"
        },
    ];

    return (
        <section
            id="about"
            className="relative py-16 md:py-20 lg:py-28 overflow-hidden bg-[#00241F] z-10 cursor-default"
            aria-labelledby="about-heading"
        >
            {/* Background elements - Softened & Deepened */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] opacity-10 sm:opacity-20" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#00241F] via-transparent to-[#00241F]" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#00241F]/80 via-transparent to-[#00241F]/80" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                    {/* Left: Content Side */}
                    <div className="lg:col-span-7 flex flex-col justify-center order-1">
                        <AboutContentMotion>
                            <header className="space-y-6 md:space-y-8">
                                <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/5 rounded-full text-accent font-bold text-[10px] sm:text-xs uppercase tracking-widest border border-accent/10 backdrop-blur-sm">
                                    <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                                    Professional Pedigree
                                </span>
                                <h2
                                    id="about-heading"
                                    className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-black text-white leading-[1.1] tracking-tight text-balance"
                                >
                                    Expertise Behind <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-400">Ahmed Luthu Kannur</span>
                                </h2>
                            </header>

                            <div className="space-y-8 text-base sm:text-lg md:text-xl text-white/80 leading-relaxed font-medium max-w-2xl text-pretty mt-8 md:mt-12">
                                <p>
                                    <span className="text-white font-bold">Ahmed Luthu Kannur</span> is an <Link href="/blog/inside-mind-ai-first-digital-marketing-expert-kannur" className="text-accent hover:text-white underline decoration-accent/30 hover:decoration-accent underline-offset-4 transition-all duration-300 cursor-pointer">AI first digital marketing expert in Kannur</Link> focused on building scalable growth systems, not just running ads. He designs data-driven SEO and performance marketing frameworks that deliver consistent, measurable ROI.
                                </p>

                                <p>
                                    As the best freelance digital marketer in Kannur, Ahmed blends advanced SEO, performance marketing, and AI-powered automation to help brands grow sustainably. His approach is rooted in analytics, user behaviour, and conversion psychology.
                                </p>

                                <p>
                                    Trained through hands-on experience at <a href="https://oxdu.in/en/" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-white transition-all duration-300 underline underline-offset-4 decoration-accent/30 hover:decoration-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 rounded-sm cursor-pointer">Oxdu, Kondotty, Malappuram</a>, Ahmed Luthu Kannur now helps Kerala-based businesses scale using smart, AI-led digital strategies.
                                </p>
                            </div>

                            <div className="pt-2 sm:pt-6 flex justify-start mt-8">
                                <Link href="#contact" className="w-full sm:w-auto">
                                    <AboutButtonMotion>
                                        <span className="relative z-10 transition-colors duration-300 group-hover:text-primary">Let&apos;s Discuss Your Project</span>
                                        <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1.5 transition-transform duration-300 group-hover:text-primary" aria-hidden="true" />
                                        <div className="absolute inset-0 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out" />
                                    </AboutButtonMotion>
                                </Link>
                            </div>
                        </AboutContentMotion>
                    </div>

                    {/* Right: Stats Grid */}
                    <aside className="lg:col-span-5 order-2 w-full pt-4 lg:pt-12" aria-label="Professional statistics and achievements">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-col gap-5 sm:gap-6">
                            {stats.map((stat, index) => (
                                <AboutStatMotion key={index} index={index}>
                                    <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out pointer-events-none" />

                                    <div className="relative z-10" aria-label={stat.ariaLabel}>
                                        <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-white/50 mb-2 sm:mb-3 tracking-tight group-hover:from-white group-hover:to-accent transition-all duration-500">
                                            {stat.number}
                                        </h3>
                                        <p className="text-white/50 text-base sm:text-lg font-medium leading-snug group-hover:text-white/80 transition-colors duration-300 text-balance">
                                            {stat.label}
                                        </p>
                                    </div>

                                    {/* Subtle border glow on hover */}
                                    <div className="absolute inset-0 border border-accent/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                                </AboutStatMotion>
                            ))}
                        </div>
                    </aside>

                </div>
            </div>

            {/* Ambient Glows - Further Toned Down */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-accent/5 blur-[120px] rounded-full pointer-events-none opacity-20 mix-blend-screen" aria-hidden="true" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/20 blur-[120px] rounded-full pointer-events-none opacity-20 mix-blend-screen" aria-hidden="true" />
        </section>
    );
};

export default AboutSection;
