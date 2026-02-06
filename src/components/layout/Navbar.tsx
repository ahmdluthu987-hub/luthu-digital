"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, Instagram, Linkedin } from "lucide-react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
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

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
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
        // Close mobile menu if open
        setIsOpen(false);

        if (href.startsWith("/#")) {
            // Check if we're on the homepage
            if (window.location.pathname === '/') {
                e.preventDefault();
                const targetId = href.split("#")[1];

                // Use setTimeout to ensure closing animation/state doesn't interfere with scroll
                setTimeout(() => {
                    const elem = document.getElementById(targetId);
                    if (elem) {
                        // Offset for fixed header (approx 80px)
                        const headerOffset = 100;
                        const elementPosition = elem.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.scrollY - headerOffset;

                        window.scrollTo({
                            top: offsetPosition,
                            behavior: "smooth"
                        });
                    }
                }, 100);
            }
        }
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled
                ? "py-3 bg-white/70 backdrop-blur-xl border-b border-primary/5 shadow-sm"
                : "py-6 bg-transparent"
                }`}
        >
            {/* Scroll Progress Bar */}
            <motion.div
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent origin-left z-[102]"
                style={{ scaleX }}
            />

            <div className="container mx-auto px-6 lg:px-12 xl:px-20 flex items-center justify-between">
                <Link href="/" className="relative z-[101]">
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
                                // Trigger custom event to open chatbot
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
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] md:hidden bg-white/95 backdrop-blur-3xl overflow-y-auto custom-scrollbar touch-none"
                    >
                        {/* Decorative Background for Mobile Menu */}
                        <div className="fixed inset-0 pointer-events-none opacity-[0.03]">
                            <div className="absolute inset-0 bg-grid-slate-900/[0.1] bg-[size:40px_40px]" />
                            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[100px]" />
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px]" />
                        </div>

                        <div className="flex flex-col min-h-full pt-24 pb-10 px-8 relative z-10">
                            <motion.span
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 0.4, y: 0 }}
                                className="text-[10px] font-black uppercase tracking-[0.4em] mb-8 text-primary"
                            >
                                Navigation
                            </motion.span>

                            <div className="space-y-4 mb-10">
                                {navLinks.map((link, i) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.08, duration: 0.4 }}
                                    >
                                        <Link
                                            href={link.href}
                                            className="text-3xl min-[375px]:text-4xl font-black text-primary transition-all flex items-center gap-4 group touch-manipulation whitespace-nowrap select-none"
                                            style={{ WebkitTapHighlightColor: 'transparent' }}
                                            onClick={(e) => handleNavClick(e, link.href)}
                                        >
                                            <span className="transition-colors">0{i + 1}</span>
                                            <span className="relative">
                                                {link.name}
                                            </span>
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="mt-auto space-y-8">
                                <div className="space-y-3">
                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 0.5 }}
                                        className="text-[10px] font-black uppercase tracking-widest text-primary"
                                    >
                                        Get in touch
                                    </motion.p>
                                    <motion.a
                                        href="mailto:hello@ahmdluthu.com"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-lg font-bold text-primary block touch-manipulation select-none"
                                        style={{ WebkitTapHighlightColor: 'transparent' }}
                                    >
                                        hello@ahmdluthu.com
                                    </motion.a>
                                </div>

                                <motion.div
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <Link
                                        href="/#contact"
                                        className="w-full py-4 bg-primary text-white rounded-xl font-black text-lg flex items-center justify-center gap-3 shadow-xl shadow-primary/20 active:scale-[0.98] transition-all"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setIsOpen(false);
                                            // Small delay to allow menu to close first
                                            setTimeout(() => window.dispatchEvent(new Event('openChatbot')), 300);
                                        }}
                                    >
                                        Start Growth
                                        <ArrowUpRight className="w-5 h-5" />
                                    </Link>
                                </motion.div>

                                <div className="flex items-center gap-8 justify-center opacity-80">
                                    <a href="https://www.linkedin.com/in/muhammed-luthufulla-c-b6aa43362/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-3 bg-primary/5 rounded-xl hover:bg-primary/10 transition-colors cursor-pointer touch-manipulation text-primary">
                                        <Linkedin className="w-6 h-6" />
                                    </a>
                                    <a href="https://instagram.com/ahmdluthu" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-3 bg-primary/5 rounded-xl hover:bg-primary/10 transition-colors cursor-pointer touch-manipulation text-primary">
                                        <Instagram className="w-6 h-6" />
                                    </a>
                                    <a href="https://wa.me/918129650313" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="p-3 bg-primary/5 rounded-xl hover:bg-primary/10 transition-colors cursor-pointer touch-manipulation text-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                                            <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                                            <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;

