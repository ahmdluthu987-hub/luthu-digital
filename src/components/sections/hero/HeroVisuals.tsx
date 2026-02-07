import React from "react";
import Image from "next/image";
import { HeroVisualsClient } from "./HeroVisualsClient";

/**
 * HeroVisuals - Server-side part of the hero visuals.
 * Renders the main LCP image for maximum performance.
 */
const HeroVisuals = () => {
    return (
        <div className="lg:col-span-5 relative w-full h-[350px] min-[400px]:h-[450px] md:h-[550px] lg:h-[700px] flex items-center justify-center lg:justify-end mt-8 lg:mt-0">
            {/* Interactive Client Elements (Floating cards, parallax) */}
            <HeroVisualsClient />

            {/* Main Portrait Image (SSR for optimal LCP) */}
            <div className="relative w-full max-w-[400px] lg:max-w-full h-full flex items-center justify-center z-10">
                <div className="relative w-full h-full">
                    <Image
                        src="/ai-digital-marketing-expert-kannur.webp"
                        alt="Ahmed Luthu Kannur - Digital Marketing Expert"
                        fill
                        priority
                        fetchPriority="high"
                        loading="eager"
                        className="object-contain object-bottom drop-shadow-2xl"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                        quality={85}
                        placeholder="empty"
                    />
                </div>

                {/* Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,var(--color-primary)_0%,transparent_70%)] opacity-10 pointer-events-none -z-10" />
            </div>
        </div>
    );
};

export default HeroVisuals;
