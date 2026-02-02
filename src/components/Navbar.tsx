"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, Github, Linkedin, MessageCircle } from "lucide-react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import Logo from "./Logo";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const { scrollYProgress } = useScroll();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Services", href: "#services" },
        { name: "Work", href: "#testimonials" },
        { name: "FAQ", href: "#faq" },
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
                style={{ scaleX: scrollYProgress }}
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
                                className="text-primary/60 hover:text-primary font-bold text-[11px] uppercase tracking-[0.2em] transition-all hover:-translate-y-0.5"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <Link
                        href="#contact"
                        className="group flex items-center gap-3 px-6 py-3 bg-primary text-white rounded-full font-bold text-xs uppercase tracking-widest hover:bg-primary-light hover:shadow-xl hover:shadow-primary/20 transition-all"
                    >
                        <span>Start Growth</span>
                        <div className="w-5 h-5 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
                            <ArrowUpRight className="w-3 h-3" />
                        </div>
                    </Link>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden relative z-[101] w-12 h-12 flex items-center justify-center bg-white/80 backdrop-blur-md rounded-2xl text-primary border border-primary/5 shadow-sm active:scale-95 transition-transform"
                    onClick={() => setIsOpen(!isOpen)}
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
                        className="fixed inset-0 z-[100] md:hidden bg-white/95 backdrop-blur-3xl"
                    >
                        <div className="flex flex-col h-full pt-32 pb-12 px-8">
                            <div className="space-y-6">
                                {navLinks.map((link, i) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, x: -30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1, duration: 0.5 }}
                                    >
                                        <Link
                                            href={link.href}
                                            className="text-5xl font-black text-primary/30 hover:text-primary transition-colors flex items-center justify-between group"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {link.name}
                                            <ArrowUpRight className="w-10 h-10 opacity-0 group-hover:opacity-100 transition-all -translate-x-10 group-hover:translate-x-0" />
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="mt-auto space-y-8">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                >
                                    <Link
                                        href="#contact"
                                        className="w-full py-6 bg-primary text-white rounded-[2.5rem] font-black text-xl flex items-center justify-center gap-3 shadow-2xl shadow-primary/20"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Free Consultation
                                        <MessageCircle className="w-6 h-6" />
                                    </Link>
                                </motion.div>

                                <div className="flex items-center gap-6 justify-center opacity-40">
                                    <Linkedin className="w-6 h-6" />
                                    <Github className="w-6 h-6" />
                                    <MessageCircle className="w-6 h-6" />
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

