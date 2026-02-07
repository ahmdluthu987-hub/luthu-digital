import React from "react";
import { MoveRight } from "lucide-react";
import Link from "next/link";

const HeroText = () => {
    return (
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 lg:space-y-10 w-full">
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/50 backdrop-blur-md border border-primary/10 shadow-sm hover:shadow-md transition-shadow duration-300">
                <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
                </span>
                <span className="text-[11px] md:text-xs font-bold tracking-[0.15em] text-primary/80 uppercase">
                    AI First Digital Marketing Expert in Kannur
                </span>
            </div>

            {/* Title */}
            <div className="space-y-4 lg:space-y-6 max-w-4xl">
                <h1 className="text-[clamp(2.75rem,5vw+1rem,5.5rem)] font-black text-primary leading-[1.05] tracking-tight text-balance">
                    Ahmed Luthu Kannur
                </h1>

                <h2 className="text-[clamp(1.125rem,2vw,1.875rem)] font-bold leading-tight text-primary/90">
                    <span className="relative inline-block pb-1">
                        Best Freelance Digital Marketer in Kannur
                        <span className="absolute bottom-0 left-0 h-[3px] bg-accent rounded-full w-full" />
                    </span>
                </h2>
            </div>

            {/* Description */}
            <p className="text-base md:text-lg lg:text-[1.25rem] text-foreground/75 font-medium max-w-[90%] sm:max-w-xl lg:max-w-2xl mx-auto lg:mx-0 leading-[1.7] md:leading-[1.8] text-pretty">
                I&apos;m Ahmed Luthu Kannur, an AI first digital marketing expert in Kannur helping brands achieve consistent growth through data-driven SEO, performance marketing, and AI-powered digital strategies. As the best freelance digital marketer in Kannur, I focus on measurable ROI, not vanity metrics.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto px-4 sm:px-0 pt-4 lg:pt-6">
                <button
                    className="group relative px-8 py-4 bg-primary text-white rounded-full font-bold text-base lg:text-lg flex items-center justify-center gap-3 shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5 active:scale-[0.98]"
                >
                    <Link href="#contact" className="absolute inset-0 z-10" aria-label="Get in Touch" />
                    <span>Get in Touch</span>
                    <MoveRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <Link
                    href="/blog"
                    className="group px-8 py-4 bg-transparent text-primary border-2 border-primary/10 rounded-full font-bold text-base lg:text-lg flex items-center justify-center gap-3 hover:bg-primary/5 transition-colors duration-300 hover:scale-[1.02] hover:-translate-y-0.5 active:scale-[0.98]"
                >
                    Read Blog
                </Link>
            </div>
        </div>
    );
};

export default HeroText;
