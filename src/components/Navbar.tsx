"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Services", href: "#services" },
        { name: "FAQ", href: "#faq" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav
            className="sticky top-0 left-0 right-0 z-50 bg-[#FAF9F6] py-4 border-b border-primary/5 shadow-sm"
        >
            <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
                <Link href="/">
                    <Logo size="md" />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-primary/70 hover:text-primary font-bold text-sm uppercase tracking-widest transition-all hover:scale-105"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="#contact"
                        className="px-6 py-2.5 bg-primary text-white rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-accent hover:shadow-xl hover:shadow-accent/20 transition-all flex items-center gap-2"
                    >
                        Free Audit
                        <ArrowUpRight className="w-4 h-4" />
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden w-10 h-10 flex items-center justify-center bg-primary/5 rounded-xl text-primary"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="md:hidden absolute top-full left-0 right-0 bg-cream/95 backdrop-blur-2xl border-b border-primary/10 p-8 flex flex-col gap-6 shadow-2xl"
                    >
                        {navLinks.map((link, i) => (
                            <motion.div
                                key={link.name}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <Link
                                    href={link.href}
                                    className="text-2xl font-black text-primary/80 hover:text-accent flex items-center justify-between group"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                    <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0" />
                                </Link>
                            </motion.div>
                        ))}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            <Link
                                href="#contact"
                                className="px-8 py-5 bg-primary text-white rounded-2xl font-black text-xl flex items-center justify-center gap-2 shadow-xl shadow-primary/20"
                                onClick={() => setIsOpen(false)}
                            >
                                Free Consultation
                                <ArrowUpRight className="w-6 h-6" />
                            </Link>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
