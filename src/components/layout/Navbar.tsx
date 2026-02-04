"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, Github, Linkedin, MessageCircle } from "lucide-react";
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
        { name: "Home", href: "/" },
        { name: "About", href: "/#about" },
        { name: "Services", href: "/#services" },
        { name: "Blog", href: "/blog" },
        { name: "Contact", href: "/#contact" },
    ];

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
                                onClick={(e) => {
                                    if (link.href.startsWith("/#") && window.location.pathname === '/') {
                                        e.preventDefault();
                                        const id = link.href.split("#")[1];
                                        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }}
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
                    className="md:hidden relative z-[101] w-10 h-10 flex items-center justify-center bg-white/90 backdrop-blur-md rounded-xl text-primary border border-primary/5 shadow-sm active:scale-95 transition-transform"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
            </div>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] md:hidden bg-white/95 backdrop-blur-3xl overflow-hidden"
                    >
                        {/* Decorative Background for Mobile Menu */}
                        <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
                            <div className="absolute inset-0 bg-grid-slate-900/[0.1] bg-[size:40px_40px]" />
                            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[100px]" />
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px]" />
                        </div>

                        <div className="flex flex-col h-full pt-32 pb-10 px-8 relative z-10">
                            <motion.span
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 0.4, y: 0 }}
                                className="text-[10px] font-black uppercase tracking-[0.4em] mb-12 text-primary"
                            >
                                Navigation
                            </motion.span>

                            <div className="space-y-4">
                                {navLinks.map((link, i) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.08, duration: 0.4 }}
                                    >
                                        <Link
                                            href={link.href}
                                            className="text-[44px] min-[375px]:text-5xl font-black text-primary/30 hover:text-primary transition-all flex items-center gap-4 group"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            <span className="group-hover:text-accent transition-colors">0{i + 1}</span>
                                            <span className="relative">
                                                {link.name}
                                                <motion.div className="absolute -bottom-1 left-0 w-0 h-1 bg-accent/30 rounded-full group-hover:w-full transition-all duration-300" />
                                            </span>
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="mt-auto space-y-10">
                                <div className="space-y-4">
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
                                        className="text-xl font-bold text-primary hover:text-accent transition-colors block"
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
                                        className="w-full py-5 bg-primary text-white rounded-2xl font-black text-lg flex items-center justify-center gap-3 shadow-xl shadow-primary/20 active:scale-[0.98] transition-all"
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

                                <div className="flex items-center gap-8 justify-center opacity-30">
                                    <Linkedin className="w-5 h-5 hover:text-accent transition-colors cursor-pointer" />
                                    <Github className="w-5 h-5 hover:text-accent transition-colors cursor-pointer" />
                                    <MessageCircle className="w-5 h-5 hover:text-accent transition-colors cursor-pointer" />
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

