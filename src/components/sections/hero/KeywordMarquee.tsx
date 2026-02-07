import React from "react";
import LazyMotionWrapper, { m } from "@/components/utils/LazyMotionWrapper";

/**
 * Marquee component for the hero keyword strip.
 */
const StarIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 33 32"
        fill="currentColor"
        className="w-[18px] h-[18px] md:w-[24px] md:h-[24px] flex-shrink-0 text-accent/40"
    >
        <path d="M16.5 0L18.7627 13.7373L32.5 16L18.7627 18.2627L16.5 32L14.2373 18.2627L0.5 16L14.2373 13.7373L16.5 0Z" />
    </svg>
);

const List = ({ keywords }: { keywords: string[] }) => (
    <div className="flex items-center gap-6 md:gap-12 whitespace-nowrap px-4">
        {keywords.map((word, index) => (
            <div key={index} className="flex items-center gap-6 md:gap-12">
                <span className="text-primary/70 text-[10px] md:text-sm font-bold uppercase tracking-[0.2em]">
                    {word}
                </span>
                <StarIcon />
            </div>
        ))}
    </div>
);

const KeywordMarquee = () => {
    const keywords = [
        "Growth Strategy", "SEO", "Performance Marketing", "SMM", "AI Marketing", "Lead Generation", "Brand Scaling"
    ];

    return (
        <LazyMotionWrapper>
            <div className="w-full bg-white/40 backdrop-blur-md py-4 md:py-6 overflow-hidden flex select-none border-t border-primary/5">
                <m.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        duration: 35,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="flex shrink-0 items-center"
                >
                    <List keywords={keywords} />
                    <List keywords={keywords} />
                </m.div>
            </div>
        </LazyMotionWrapper>
    );
};

export default KeywordMarquee;
