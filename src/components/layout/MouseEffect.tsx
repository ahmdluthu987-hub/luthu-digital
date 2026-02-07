"use client";
import React, { useState, useEffect } from "react";
import { useSpring, useMotionValue, AnimatePresence, LazyMotion, domAnimation, m } from "framer-motion";

/**
 * ✨ Premium High-Performance Mouse Interaction System
 * 
 * Core Design:
 * - Inner Dot: 6px Accent (#FF6B35) - Zero lag.
 * - Outer Ring: 32px Primary Border (#004D40) - Smooth trailing.
 * - Interaction: Magnetic pull, Link scaling, Text softening.
 * 
 * Performance:
 * - Uses Framer Motion's hardware-accelerated values (transform only).
 * - No layout thrashing.
 * - Strictly disabled on mobile/touch (<1024px).
 * - Uses LazyMotion for bundle size optimization.
 */

export default function MouseEffect() {
    // 1. State & Refs
    const [isActive, setIsActive] = useState(false);
    const [hoverState, setHoverState] = useState<'default' | 'link' | 'text'>('default');
    const [isClicked, setIsClicked] = useState(false);

    // 2. Motion Values (The Engine)
    // Raw Mouse Position (Instant)
    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    // Smooth Spring for Outer Ring (Lag effect)
    const springConfig = { damping: 25, stiffness: 150, mass: 0.6 };
    const ringX = useSpring(mouseX, springConfig);
    const ringY = useSpring(mouseY, springConfig);

    // Ultra-smooth Spring for Background Ripple (Atmospheric lag)
    const rippleConfig = { damping: 50, stiffness: 80, mass: 1 };
    const rippleX = useSpring(mouseX, rippleConfig);
    const rippleY = useSpring(mouseY, rippleConfig);

    const hoverStateRef = React.useRef(hoverState);

    useEffect(() => {
        hoverStateRef.current = hoverState;
    }, [hoverState]);

    useEffect(() => {
        // 3. Environment & Mobile Detection
        // Disable on server, bots, or small screens (<1024px per requirements)
        if (typeof window === "undefined") return;

        const isBot = /bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent);
        const isMobile = window.matchMedia("(max-width: 1023px)").matches;
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (isBot || isMobile || prefersReducedMotion) {
            return;
        }

        // although here it's mainly for cleaner initialization.
        setTimeout(() => setIsActive(true), 0);

        // 4. Global Cursor Hiding (Only when active)
        const styleId = 'premium-cursor-hide';
        if (!document.getElementById(styleId)) {
            const style = document.createElement('style');
            style.id = styleId;
            style.textContent = `
                @media (min-width: 1024px) {
                    body, a, button, input, textarea, [role="button"] { cursor: none !important; }
                }
            `;
            document.head.appendChild(style);
        }

        let lastCheck = 0;

        // 5. Event Listeners
        const handleMouseMove = (e: MouseEvent) => {
            // Using useMotionValue.set ensures no React re-renders, just direct DOM updates via Framer
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);

            // Throttle heavier DOM checks to ~20fps (50ms)
            const now = Date.now();
            if (now - lastCheck < 50) return;
            lastCheck = now;

            // Debounce hover detection slightly or optimize target check
            const target = e.target as HTMLElement;
            if (!target) return;

            // Check for Links/Buttons
            const isLink = target.closest('a, button, .cta, [role="button"], input, textarea, label');

            if (isLink) {
                if (hoverStateRef.current !== 'link') setHoverState('link');
            } else {
                const isText = target.closest('p, h1, h2, h3, h4, h5, h6, span, li');
                if (isText) {
                    if (hoverStateRef.current !== 'text') setHoverState('text');
                } else {
                    if (hoverStateRef.current !== 'default') setHoverState('default');
                }
            }
        };

        const handleMouseDown = () => setIsClicked(true);
        const handleMouseUp = () => setIsClicked(false);

        window.addEventListener("mousemove", handleMouseMove, { passive: true });
        window.addEventListener("mousedown", handleMouseDown, { passive: true });
        window.addEventListener("mouseup", handleMouseUp, { passive: true });

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
            const style = document.getElementById(styleId);
            if (style) style.remove();
        };
    }, [mouseX, mouseY]);

    if (!isActive) return null;

    return (
        <LazyMotion features={domAnimation}>
            <div className="fixed inset-0 pointer-events-none z-[99999] overflow-hidden" aria-hidden="true">

                {/* 🌊 Background Ripple Effect */}
                <m.div
                    className="absolute top-0 left-0 rounded-full opacity-60"
                    style={{
                        x: rippleX,
                        y: rippleY,
                        translateX: "-50%",
                        translateY: "-50%",
                        width: 600,
                        height: 600,
                        // Radial gradient: Center distinct, edge transparent
                        background: "radial-gradient(circle, rgba(0,77,64,0.08) 0%, rgba(0,0,0,0) 60%)"
                    }}
                />

                {/* ⭕ Outer Ring */}
                <m.div
                    className="absolute top-0 left-0 rounded-full border border-primary box-border"
                    style={{
                        x: ringX,
                        y: ringY,
                        translateX: "-50%",
                        translateY: "-50%",
                        width: 32,
                        height: 32,
                    }}
                    animate={{
                        // Scale based on state (32px base -> 48px = 1.5 scale)
                        scale: hoverState === 'link' ? 1.5 : 1,

                        // Colors & Borders
                        borderColor: hoverState === 'link' ? '#FF6B35' : '#004D40',
                        borderWidth: 1.5, // Border width will scale with element
                        opacity: hoverState === 'text' ? 0.25 : 1, // Soften on text

                        // Interaction
                        backgroundColor: hoverState === 'link' ? "rgba(255, 107, 53, 0.05)" : "rgba(255, 107, 53, 0)",
                        boxShadow: hoverState === 'link' ? "0 0 12px rgba(255,107,53,0.35)" : "none",
                    }}
                    transition={{
                        type: "tween",
                        ease: "easeOut",
                        duration: 0.2 // Smooth easing limit
                    }}
                />

                {/* 🧿 Inner Dot */}
                <m.div
                    className="absolute top-0 left-0 rounded-full"
                    style={{
                        x: mouseX,
                        y: mouseY,
                        translateX: "-50%",
                        translateY: "-50%",
                        width: 6,
                        height: 6,
                    }}
                    animate={{
                        // Morphing (6px base -> 12px = 2 scale)
                        scale: hoverState === 'link' ? 2 : (isClicked ? 0.5 : 1),
                        backgroundColor: hoverState === 'link' ? '#004D40' : '#FF6B35', // Swap colors on hover
                    }}
                    transition={{
                        type: "tween",
                        ease: "linear",
                        duration: 0.1 // Near instant
                    }}
                />

                {/* 💥 Click Accent Ripple (Ephemeral) */}
                <AnimatePresence>
                    {isClicked && (
                        <m.div
                            initial={{ opacity: 0.4, scale: 0.5 }}
                            animate={{ opacity: 0, scale: 2 }}
                            exit={{ opacity: 0 }}
                            className="absolute top-0 left-0 rounded-full border border-accent"
                            style={{
                                x: mouseX,
                                y: mouseY,
                                translateX: "-50%",
                                translateY: "-50%",
                                width: 32,
                                height: 32,
                            }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                        />
                    )}
                </AnimatePresence>
            </div>
        </LazyMotion>
    );
}
