import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
    Cpu,
    Palette,
    BarChart3,
    TrendingUp,
    ArrowRight,
    Zap
} from "lucide-react";
import { WhyChooseMotion, WhyChooseImageMotion } from "./why-choose-me/WhyChooseWrappers";

const HIGHLIGHTS = [
    {
        title: "AI-First Digital Strategy",
        description: "Harnessing advanced AI tools to automate leads and optimize campaign performance.",
        icon: <Cpu className="w-5 h-5 md:w-6 md:h-6" />,
    },
    {
        title: "Purpose-Driven Design",
        description: "Aesthetic visuals engineered to influence user behavior and drive conversions.",
        icon: <Palette className="w-5 h-5 md:w-6 md:h-6" />,
    },
    {
        title: "Data-Backed SEO",
        description: "Precise, analytics-backed strategies that ensure your brand ranks where it matters.",
        icon: <BarChart3 className="w-5 h-5 md:w-6 md:h-6" />,
    },
    {
        title: "ROI-Focused Growth",
        description: "Tailored digital scale-up plans designed for the unique competitive landscape of Kerala.",
        icon: <TrendingUp className="w-5 h-5 md:w-6 md:h-6" />,
    }
];

const WhyChooseMe = () => {
    return (
        <section id="why-choose-me" className="py-16 md:py-24 lg:py-32 bg-[#FDFCF8] relative overflow-hidden" aria-label="Why Choose Ahmed Luthu">
            {/* Minimal Background - Subtle mesh gradient */}
            <div className="absolute inset-0 pointer-events-none opacity-30" aria-hidden="true">
                <div className="absolute top-0 right-0 w-[50vh] h-[50vh] bg-gradient-to-b from-primary/5 to-transparent rounded-full blur-[100px]" />
                <div className="absolute bottom-0 left-0 w-[50vh] h-[50vh] bg-gradient-to-t from-accent/5 to-transparent rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left Column: Content */}
                    <div className="order-2 lg:order-1 flex flex-col space-y-8 lg:space-y-10">
                        <WhyChooseMotion className="space-y-6">
                            <div className="space-y-4">
                                <span className="inline-block w-12 h-[2px] bg-accent/60 mb-2"></span>
                                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl/none font-black text-primary tracking-tight">
                                    Why Kerala Brands Trust This <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-400">AI Digital Marketing Expert?</span>
                                </h2>
                            </div>

                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-primary/80 leading-snug max-w-lg text-balance">
                                Creative Digital Marketing Built for Growth, ROI & Local Authority
                            </h3>

                            <div className="space-y-6 text-base sm:text-lg text-primary/80 leading-relaxed max-w-xl text-pretty">
                                <p>
                                    I&apos;m Ahmed Luthu Kannur, an <strong>AI First Digital Marketing Expert in Kannur</strong> passionate about strategies that drive real business outcomes. My approach is rooted in data, clarity, and long-term growth, rather than just short-term tactics and vanity metrics.
                                </p>
                                <p>
                                    As a trusted <Link href="/blog/best-freelance-digital-marketer-kannur-growth-approach" className="text-primary hover:text-accent font-medium underline decoration-accent/30 underline-offset-2 transition-all">freelance digital marketer in Kannur</Link> and <strong>Digital Marketing Consultant in Kerala</strong>, I go beyond trends. I study user behavior to engineer aesthetics and content that convert, ensuring your brand scales with confidence in the competitive market.
                                </p>
                            </div>
                        </WhyChooseMotion>

                        <WhyChooseMotion delay={0.2} className="pt-2 sm:pt-4">
                            <Link href="#contact" className="w-full sm:w-auto">
                                <button
                                    type="button"
                                    aria-label="Scroll to contact section to start digital marketing consultation"
                                    className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-primary text-white px-8 py-4 rounded-full font-bold text-base sm:text-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 active:scale-95 text-center cursor-pointer"
                                >
                                    Start Your Growth Engine
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                                </button>
                            </Link>
                        </WhyChooseMotion>
                    </div>

                    {/* Right Column: Image Visual */}
                    <div className="order-1 lg:order-2">
                        <WhyChooseImageMotion>
                            <div className="relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden aspect-[4/5] md:aspect-square lg:aspect-[4/5] shadow-2xl shadow-primary/10 bg-white">
                                <Image
                                    src="/ai-digital-marketing-expert-kannur.webp"
                                    alt="Ahmed Luthu Kannur – AI First Digital Marketing Expert helping Kerala businesses grow"
                                    fill
                                    priority={false}
                                    loading="lazy"
                                    className="object-cover object-top hover:scale-105 transition-transform duration-700"
                                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 40vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-60" aria-hidden="true" />

                                {/* Overlay Stats */}
                                <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 text-white">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="p-2 bg-accent rounded-lg shadow-lg shadow-accent/20">
                                            <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-white" aria-hidden="true" />
                                        </div>
                                        <span className="font-bold text-xs sm:text-sm tracking-widest uppercase text-white/90">Impact Driven</span>
                                    </div>
                                    <p className="text-2xl sm:text-3xl font-black tracking-tight">Verified ROI Focus</p>
                                </div>
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -top-8 -right-8 sm:-top-12 sm:-right-12 w-24 h-24 bg-accent/10 rounded-full blur-2xl" aria-hidden="true" />
                            <div className="absolute -bottom-8 -left-8 sm:-bottom-12 sm:-left-12 w-32 h-32 bg-primary/10 rounded-full blur-2xl" aria-hidden="true" />
                        </WhyChooseImageMotion>
                    </div>
                </div>

                {/* Features Grid */}
                <div className="mt-16 sm:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                    {HIGHLIGHTS.map((item, index) => (
                        <WhyChooseMotion
                            key={index}
                            delay={index * 0.1}
                            className="p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] bg-white border border-primary/5 hover:border-accent/20 hover:shadow-xl hover:shadow-accent/5 transition-all group h-full flex flex-col"
                        >
                            <article>
                                <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-accent/30 group-hover:scale-110" aria-hidden="true">
                                    {item.icon}
                                </div>
                                <h4 className="text-lg sm:text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                                    {item.title}
                                </h4>
                                <p className="text-sm text-foreground/60 leading-relaxed text-pretty flex-grow">
                                    {item.description}
                                </p>
                            </article>
                        </WhyChooseMotion>
                    ))}
                </div>

            </div>
        </section >
    );
};

export default WhyChooseMe;
