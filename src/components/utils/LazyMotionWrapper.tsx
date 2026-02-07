"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import React from "react";

/**
 * Wraps content in Framer Motion's LazyMotion to reduce bundle size.
 * Uses 'domAnimation' which includes only formatting/layout animations, 
 * excluding drag/gesture which are heavier and less used.
 */
export default function LazyMotionWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <LazyMotion features={domAnimation} strict>
            {children}
        </LazyMotion>
    );
}

// Export 'm' for use in child components instead of 'motion'
export { m };
