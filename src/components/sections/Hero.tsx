import React from "react";
import HeroText from "./hero/HeroText";
import HeroVisuals from "./hero/HeroVisuals";
import KeywordMarquee from "./hero/KeywordMarquee";
import LazyMotionWrapper from "../utils/LazyMotionWrapper";

const Hero = () => {
    return (
        <section
            id="hero"
            className="relative min-h-[100dvh] flex flex-col bg-cream overflow-hidden pt-28 md:pt-32 lg:pt-36 lg:justify-center"
        >
            <LazyMotionWrapper>
                {/* Background elements */}
                <div className="absolute inset-0 z-0 bg-grid-slate-900/[0.03] pointer-events-none" />

                <div className="container max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 flex-grow flex flex-col justify-center">
                    <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                        <HeroText />
                        <HeroVisuals />
                    </div>
                </div>

                {/* Keyword Strip */}
                <div className="relative z-30 w-full mt-auto">
                    <KeywordMarquee />
                </div>
            </LazyMotionWrapper>
        </section>
    );
};

export default Hero;
