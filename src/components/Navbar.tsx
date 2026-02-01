"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";

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
        { name: "Process", href: "#process" },
        { name: "FAQ", href: "#faq" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-cream/80 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold text-primary flex items-center gap-2">
                    <span className="w-10 h-10 bg-primary text-white flex items-center justify-center rounded-xl text-xl">L</span>
                    <span className="hidden sm:inline-block">Luthu.Digital</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-primary/70 hover:text-primary font-medium transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="#contact"
                        className="px-6 py-2.5 bg-primary text-white rounded-lg font-semibold hover:bg-primary-light transition-all flex items-center gap-2"
                    >
                        Free Audit
                        <ArrowUpRight className="w-4 h-4" />
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-primary"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-cream border-t border-primary/10 p-6 flex flex-col gap-4 shadow-xl">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-lg font-medium text-primary/80"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="#contact"
                        className="px-6 py-4 bg-primary text-white rounded-xl font-bold flex items-center justify-center gap-2"
                        onClick={() => setIsOpen(false)}
                    >
                        Free Audit
                        <ArrowUpRight className="w-5 h-5" />
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
