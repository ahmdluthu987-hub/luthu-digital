"use client";

import React from "react";
import Link from "next/link";
import {
    Instagram,
    Linkedin,
    Twitter,
    Mail,
    MapPin,
    Heart,
    ChevronRight
} from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-primary pt-24 pb-12 text-white relative overflow-hidden">
            {/* Abstract Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">

                    {/* Brand Column */}
                    <div className="space-y-8 col-span-1 lg:col-span-1">
                        <Link href="/" className="text-3xl font-black flex items-center gap-3">
                            <span className="w-12 h-12 bg-white text-primary flex items-center justify-center rounded-2xl">L</span>
                            <span>Luthu.</span>
                        </Link>
                        <p className="text-white/60 leading-relaxed font-medium">
                            Empowering Kannur and Kerala-based businesses with high-end, AI-driven marketing strategies for sustainable digital growth.
                        </p>
                        <div className="flex items-center gap-4">
                            <a href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-300">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-300">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-300">
                                <Twitter className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-8">
                        <h4 className="text-xl font-bold uppercase tracking-widest text-accent">Quick Links</h4>
                        <ul className="space-y-4">
                            {['About', 'Services', 'Process', 'Testimonials', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={`#${item.toLowerCase()}`}
                                        className="text-white/60 hover:text-white flex items-center gap-2 group transition-all"
                                    >
                                        <ChevronRight className="w-4 h-4 text-accent group-hover:translate-x-1 transition-transform" />
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-8">
                        <h4 className="text-xl font-bold uppercase tracking-widest text-accent">Contact</h4>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4 text-white/60">
                                <MapPin className="w-6 h-6 text-accent shrink-0" />
                                <span>Kannur, Kerala, India<br /><span className="text-xs uppercase font-black text-white/20">Available Worldwide</span></span>
                            </li>
                            <li className="flex items-start gap-4 text-white/60">
                                <Mail className="w-6 h-6 text-accent shrink-0" />
                                <span>contact@ahmdluthu.com<br /><span className="text-xs uppercase font-black text-white/20">Replies in 24h</span></span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter / CTA */}
                    <div className="space-y-8">
                        <h4 className="text-xl font-bold uppercase tracking-widest text-accent">Join the Future</h4>
                        <p className="text-white/60 leading-relaxed text-sm">
                            Subscribe to my monthly <span className="text-white font-bold italic">AI Marketing Insights</span> specifically for entrepreneurs in Kerala.
                        </p>
                        <div className="relative group">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent transition-all pr-12"
                            />
                            <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-accent rounded-lg flex items-center justify-center hover:scale-110 transition-transform">
                                <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-white/40 text-xs font-bold uppercase tracking-[0.3em]">
                        © {currentYear} Ahmad Luthu · Digital Expert
                    </p>
                    <div className="flex items-center gap-6">
                        <Link href="#" className="text-white/20 hover:text-white/60 text-[10px] font-black uppercase tracking-widest transition-colors">Privacy Policy</Link>
                        <Link href="#" className="text-white/20 hover:text-white/60 text-[10px] font-black uppercase tracking-widest transition-colors">Terms of Service</Link>
                    </div>
                    <p className="text-white/40 text-xs flex items-center gap-2">
                        Built with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> in Kerala
                    </p>
                </div>
            </div>

            {/* Subtle Background Glow */}
            <div className="absolute -bottom-48 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px] pointer-events-none" />
        </footer>
    );
};

export default Footer;
