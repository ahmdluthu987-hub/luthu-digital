"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
    Instagram,
    Linkedin,
    Twitter,
    Mail,
    MapPin,
    Heart,
    ChevronRight,
    Loader2,
    CheckCircle2,
    Phone
} from "lucide-react";
import Logo from "../ui/Logo";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error" | "conflict">("idle");
    const [message, setMessage] = useState("");

    const handleSubscribe = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;
        setStatus("loading");
        setMessage("");

        try {
            const response = await fetch('/api/subscribe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (response.status === 409) {
                setStatus("conflict");
                setMessage(data.message);
                return;
            }

            if (!response.ok) {
                throw new Error(data.error || "Something went wrong.");
            }

            setStatus("success");
            setMessage(data.message);
            setEmail("");

            // Clear success message after 5 seconds
            setTimeout(() => {
                setStatus("idle");
                setMessage("");
            }, 5000);

        } catch (error) {
            console.error("Newsletter error:", error);
            setStatus("error");
            setMessage("Something went wrong. Please try again later.");
        }
    };

    return (
        <footer className="bg-primary text-white relative overflow-hidden font-sans border-t border-white/5">
            {/* Abstract Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            {/* Main Content */}
            <div className="container mx-auto px-6 py-12 lg:py-20 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-12 lg:mb-16">

                    {/* Brand Column (Span 4 on Desktop) */}
                    <div className="col-span-1 md:col-span-2 lg:col-span-4 space-y-6 text-left flex flex-col items-start">
                        <Link href="/" className="block w-fit focus:outline-none focus:ring-2 focus:ring-accent rounded-lg">
                            <Logo size="lg" inverse={true} />
                        </Link>
                        <p className="text-white/70 leading-relaxed text-sm lg:text-base max-w-sm lg:mx-0">
                            Ahmed Luthu Kannur is an AI-first digital marketing expert and the best freelance digital marketer in Kannur, helping local and Kerala-based businesses grow through data-driven strategies.
                        </p>
                        <div className="flex items-center gap-4 pt-2">
                            <a href="https://instagram.com/ahmdluthu" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent text-white/70 hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent" aria-label="Instagram">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="https://www.linkedin.com/in/muhammed-luthufulla-c-b6aa43362/" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent text-white/70 hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent" aria-label="LinkedIn">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="https://twitter.com/ahmdluthu" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent text-white/70 hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent" aria-label="Twitter">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="https://wa.me/918129650313" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent text-white/70 hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent" aria-label="WhatsApp">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                                    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                                    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links (Span 2 on Desktop) */}
                    <nav className="col-span-1 lg:col-span-2 text-left" aria-label="Footer Navigation">
                        <h4 className="text-lg font-bold uppercase tracking-widest text-accent mb-6">Quick Links</h4>
                        <ul className="space-y-1">
                            {[
                                { name: 'Home', path: '/' },
                                { name: 'About', path: '/#about' },
                                { name: 'Services', path: '/#services' },
                                { name: 'Blog', path: '/blog' },
                                { name: 'Contact', path: '/#contact' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.path}
                                        className="text-white/60 hover:text-white flex items-center justify-start gap-2 group transition-all h-11 focus:outline-none focus:text-white"
                                    >
                                        <ChevronRight className="w-4 h-4 text-accent/50 group-hover:text-accent group-hover:translate-x-1 transition-all" />
                                        <span className="group-focus:underline">{item.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Contact Info (Span 3 on Desktop) */}
                    {/* Contact Info (Span 3 on Desktop) */}
                    <div className="col-span-1 lg:col-span-3 text-left">
                        <h4 className="text-lg font-bold uppercase tracking-widest text-accent mb-6">Contact</h4>
                        <ul className="space-y-6">
                            <li className="flex flex-row items-start gap-3 text-white/70">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                                    <MapPin className="w-5 h-5 text-accent" />
                                </div>
                                <div className="space-y-1">
                                    <span className="block text-white font-medium">Ahmed Luthu</span>
                                    <span className="block text-sm leading-relaxed">Kannur, Kerala, India</span>
                                </div>
                            </li>
                            <li className="flex flex-row items-start gap-3 text-white/70">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                                    <Mail className="w-5 h-5 text-accent" />
                                </div>
                                <div className="space-y-1">
                                    <span className="block text-white font-medium">Email Me</span>
                                    <a href="mailto:ahmdluthu987@gmail.com" className="block text-sm hover:text-accent transition-colors focus:outline-none focus:underline" aria-label="Email ahmdluthu987@gmail.com">
                                        ahmdluthu987@gmail.com
                                    </a>
                                </div>
                            </li>
                            <li className="flex flex-row items-start gap-3 text-white/70">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                                    <Phone className="w-5 h-5 text-accent" />
                                </div>
                                <div className="space-y-1">
                                    <span className="block text-white font-medium">Call Me</span>
                                    <a href="tel:+918129650313" className="block text-sm hover:text-accent transition-colors focus:outline-none focus:underline" aria-label="Call +918129650313">
                                        +91 8129 650 313
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter (Span 3 on Desktop) */}
                    <div className="col-span-1 md:col-span-2 lg:col-span-3 text-left bg-white/5 lg:bg-transparent rounded-2xl p-6 lg:p-0">
                        <h4 className="text-lg font-bold uppercase tracking-widest text-accent mb-4">Newsletter</h4>
                        <p className="text-white/60 leading-relaxed text-sm mb-6">
                            Get AI marketing insights and growth tips from the <span className="text-white font-semibold">best digital marketer in Kannur</span>.
                        </p>

                        <form onSubmit={handleSubscribe} className="relative w-full">
                            <div className="relative flex flex-col gap-3">
                                <div className="relative w-full">
                                    <input
                                        type="email"
                                        placeholder="Your email address"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        disabled={status === "loading" || status === "success"}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 h-12 text-sm focus:outline-none focus:ring-2 focus:ring-accent transition-all placeholder:text-white/20 text-white disabled:opacity-50"
                                        required
                                        aria-label="Email address for subscription"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={status === "loading" || status === "success"}
                                    className="w-full h-12 bg-accent rounded-xl flex items-center justify-center gap-2 hover:bg-accent/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium focus:outline-none focus:ring-2 focus:ring-white/20"
                                    aria-label="Subscribe"
                                >
                                    {status === "loading" ? (
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                    ) : status === "success" ? (
                                        <>
                                            <CheckCircle2 className="w-5 h-5" />
                                            <span>Subscribed!</span>
                                        </>
                                    ) : (
                                        <>
                                            <span>Subscribe</span>
                                            <ChevronRight className="w-4 h-4" />
                                        </>
                                    )}
                                </button>
                            </div>

                            {/* Status Messages */}
                            {status === "conflict" && (
                                <p className="text-amber-400 text-xs mt-3 text-left animate-in fade-in slide-in-from-top-1">
                                    {message}
                                </p>
                            )}
                            {status === "error" && (
                                <p className="text-red-400 text-xs mt-3 text-left animate-in fade-in slide-in-from-top-1">
                                    {message}
                                </p>
                            )}
                        </form>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    <div className="order-2 md:order-1 text-left w-full md:w-auto">
                        <p className="text-white/40 text-[10px] md:text-xs font-bold uppercase tracking-widest">
                            © {currentYear} Ahmed Luthu Kannur
                        </p>
                        <p className="text-white/20 text-[10px] md:text-xs mt-1">Best Freelance Digital Marketer in Kannur</p>
                    </div>

                    <div className="flex flex-wrap justify-start md:justify-end gap-6 md:gap-8 order-1 md:order-2 w-full md:w-auto">
                        <Link href="/privacy-policy" className="text-white/40 hover:text-white text-xs transition-colors focus:outline-none focus:text-white">Privacy Policy</Link>
                        <Link href="/terms-of-service" className="text-white/40 hover:text-white text-xs transition-colors focus:outline-none focus:text-white">Terms of Service</Link>
                    </div>
                </div>
            </div>

            {/* Subtle Background Glow */}
            <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[300px] lg:w-[500px] h-[300px] lg:h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
        </footer>
    );
};

export default Footer;
