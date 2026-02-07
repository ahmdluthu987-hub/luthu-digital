"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, Instagram, Linkedin } from "lucide-react";
import { AnimatePresence, useScroll, useSpring, LazyMotion, domAnimation, m } from "framer-motion";
import Logo from "../ui/Logo";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Enhanced Scroll Locking
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("no-scroll");
            // Prevent underlying content scrolling on iOS
            document.documentElement.style.overflow = 'hidden';
        } else {
            document.body.classList.remove("no-scroll");
            document.documentElement.style.overflow = '';
        }

        return () => {
            document.body.classList.remove("no-scroll");
            document.documentElement.style.overflow = '';
        }
    }, [isOpen]);

    const navLinks = [
        { name: "Home", href: "/#hero" },
        { name: "About", href: "/#about" },
        { name: "Services", href: "/#services" },
        { name: "Blog", href: "/blog" },
        { name: "Contact", href: "/#contact" },
    ];

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        // Close mobile menu immediately
        setIsOpen(false);

        if (href.startsWith("/#")) {
            // Check if we're on the homepage
            if (window.location.pathname === '/') {
                e.preventDefault();
                const targetId = href.split("#")[1];

                // Allow menu exit animation to start before scrolling
                setTimeout(() => {
                    const elem = document.getElementById(targetId);
                    if (elem) {
                        const headerOffset = 100;
                        const elementPosition = elem.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.scrollY - headerOffset;

                        window.scrollTo({
                            top: offsetPosition,
                            behavior: "smooth"
                        });
                    }
                }, 300); // Matches animation duration
            }
        }
    };

    // Animation Variants
    const menuVariants = {
        closed: {
            opacity: 0,
            transition: {
                duration: 0.3,
                when: "afterChildren"
            }
        },
        open: {
            opacity: 1,
            transition: {
                duration: 0.4,
                when: "beforeChildren",
                staggerChildren: 0.1
            }
        }
    };

    const linkVariants = {
        closed: { opacity: 0, x: -20 },
        open: { opacity: 1, x: 0, transition: { duration: 0.4 } }
    };

    return (
        <LazyMotion features={domAnimation}>
            <header
                className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled
                    ? "py-3 bg-white/70 backdrop-blur-xl border-b border-primary/5 shadow-sm"
                    : "py-6 bg-transparent"
                    }`}
            >
                {/* Scroll Progress Bar */}
                <m.div
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent origin-left z-[102]"
                    style={{ scaleX }}
                />

                <div className="container mx-auto px-6 lg:px-12 xl:px-20 flex items-center justify-between">
                    <Link href="/" className="relative z-[101]" onClick={() => setIsOpen(false)}>
                        <Logo size="md" />
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-10">
                        <div className="flex items-center gap-8 px-6 py-2.5 bg-white/40 backdrop-blur-md rounded-full border border-primary/5 shadow-inner">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    className="text-primary/60 hover:text-primary font-bold text-[11px] uppercase tracking-[0.2em] transition-all hover:-translate-y-0.5"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        <Link
                            href="/#contact"
                            onClick={(e) => {
                                if (window.location.pathname === '/') {
                                    e.preventDefault();
                                    window.dispatchEvent(new Event('openChatbot'));
                                }
                            }}
                            className="group flex items-center gap-3 px-6 py-3 bg-primary text-white rounded-full font-bold text-sm hover:bg-primary-light hover:shadow-xl hover:shadow-primary/20 transition-all"
                        >
                            <span>Start Growth</span>
                            <div className="w-5 h-5 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
                                <ArrowUpRight className="w-3 h-3" />
                            </div>
                        </Link>
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden relative z-[101] w-12 h-12 flex items-center justify-center bg-white/90 backdrop-blur-md rounded-xl text-primary border border-primary/5 shadow-sm active:scale-95 transition-transform"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isOpen}
                    >
                        <AnimatePresence mode="wait">
                            {isOpen ? (
                                <m.div
                                    key="close"
                                    initial={{ opacity: 0, rotate: -90 }}
                                    animate={{ opacity: 1, rotate: 0 }}
                                    exit={{ opacity: 0, rotate: 90 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <X className="w-6 h-6" />
                                </m.div>
                            ) : (
                                <m.div
                                    key="menu"
                                    initial={{ opacity: 0, rotate: 90 }}
                                    animate={{ opacity: 1, rotate: 0 }}
                                    exit={{ opacity: 0, rotate: -90 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Menu className="w-6 h-6" />
                                </m.div>
                            )}
                        </AnimatePresence>
                    </button>
                </div>

                {/* Mobile Nav Overlay */}
                <AnimatePresence>
                    {isOpen && (
                        <m.div
                            key="mobile-menu"
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={menuVariants}
                            className="fixed inset-0 z-[100] md:hidden bg-white/95 backdrop-blur-3xl overflow-y-auto custom-scrollbar touch-none flex flex-col"
                        >
                            {/* Backdrop Click Handler (Invisible) */}
                            <div className="absolute inset-0 z-0" onClick={() => setIsOpen(false)} aria-hidden="true" />

                            {/* Decorative Background */}
                            <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[-1]">
                                <div className="absolute inset-0 bg-grid-slate-900/[0.1] bg-[size:40px_40px]" />
                                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[100px]" />
                                <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px]" />
                            </div>

                            {/* Menu Content */}
                            <div className="relative z-10 flex flex-col min-h-full pt-28 pb-10 px-8">
                                <m.span
                                    variants={linkVariants}
                                    className="text-[10px] font-black uppercase tracking-[0.4em] mb-8 text-primary"
                                >
                                    Navigation
                                </m.span>

                                <div className="space-y-6 mb-10">
                                    {navLinks.map((link, i) => (
                                        <m.div
                                            key={link.name}
                                            variants={linkVariants}
                                        >
                                            <Link
                                                href={link.href}
                                                className="text-3xl min-[375px]:text-4xl font-black text-primary transition-all flex items-center gap-4 group touch-manipulation whitespace-nowrap select-none"
                                                style={{ WebkitTapHighlightColor: 'transparent' }}
                                                onClick={(e) => handleNavClick(e, link.href)}
                                            >
                                                <span className="text-primary/30 group-hover:text-accent transition-colors text-lg font-bold self-start mt-2">0{i + 1}</span>
                                                <span className="relative group-hover:translate-x-2 transition-transform duration-300">
                                                    {link.name}
                                                </span>
                                            </Link>
                                        </m.div>
                                    ))}
                                </div>

                                <div className="mt-auto space-y-8">
                                    <m.div variants={linkVariants} className="space-y-3">
                                        <p className="text-[10px] font-black uppercase tracking-widest text-primary">
                                            Get in touch
                                        </p>
                                        <a
                                            href="mailto:ahmdluthu987@gmail.com"
                                            className="text-lg font-bold text-primary block touch-manipulation select-none hover:text-accent transition-colors"
                                            style={{ WebkitTapHighlightColor: 'transparent' }}
                                        >
                                            ahmdluthu987@gmail.com
                                        </a>
                                    </m.div>

                                    <m.div variants={linkVariants}>
                                        <Link
                                            href="/#contact"
                                            className="w-full py-4 bg-primary text-white rounded-xl font-black text-lg flex items-center justify-center gap-3 shadow-xl shadow-primary/20 active:scale-[0.98] transition-all"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setIsOpen(false);
                                                setTimeout(() => window.dispatchEvent(new Event('openChatbot')), 400);
                                            }}
                                        >
                                            Start Growth
                                            <ArrowUpRight className="w-5 h-5" />
                                        </Link>
                                    </m.div>

                                    <m.div variants={linkVariants} className="flex items-center gap-6 justify-center opacity-80 pt-4">
                                        <a href="https://www.linkedin.com/in/muhammed-luthufulla-c-b6aa43362/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-3 bg-primary/5 rounded-xl hover:bg-primary/10 transition-colors cursor-pointer touch-manipulation text-primary hover:text-accent">
                                            <Linkedin className="w-6 h-6" />
                                        </a>
                                        <a href="https://www.instagram.com/_.ahmd_luthu._" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-3 bg-primary/5 rounded-xl hover:bg-primary/10 transition-colors cursor-pointer touch-manipulation text-primary hover:text-accent">
                                            <Instagram className="w-6 h-6" />
                                        </a>
                                        <a href="https://x.com/ahmd_luthu?s=20" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="p-3 bg-primary/5 rounded-xl hover:bg-primary/10 transition-colors cursor-pointer touch-manipulation text-primary hover:text-accent">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                                            </svg>
                                        </a>
                                        <a href="https://wa.me/918129650313" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="p-3 bg-primary/5 rounded-xl hover:bg-primary/10 transition-colors cursor-pointer touch-manipulation text-primary hover:text-accent">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                                                <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                                                <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
                                            </svg>
                                        </a>
                                    </m.div>
                                </div>
                            </div>
                        </m.div>
                    )}
                </AnimatePresence>
            </header>
        </LazyMotion>
    );
};

export default Navbar;

