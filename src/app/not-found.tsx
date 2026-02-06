"use client";

import React from "react";
import Link from "next/link";
import { MoveRight, Home, FileText, Briefcase, Mail } from "lucide-react";
import Logo from "@/components/ui/Logo";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-[#FDFCF8] flex flex-col font-sans">
            {/* Minimal Header - Logo Only */}
            <header className="fixed top-0 left-0 right-0 py-6 px-6 lg:px-12 z-50 flex justify-between items-center bg-transparent">
                <Link href="/" aria-label="Back to Home">
                    <Logo size="md" />
                </Link>
            </header>

            <main className="flex-grow flex items-center justify-center relative overflow-hidden pt-20 pb-12 sm:pt-24 sm:pb-16 bg-[#FDFCF8]">
                {/* Subtle Background Elements - Reduced Opacity */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-1/4 right-[10%] w-[35vw] h-[35vw] bg-primary/3 rounded-full blur-[100px] opacity-30 animate-pulse-slow" />
                    <div className="absolute bottom-1/4 left-[10%] w-[30vw] h-[30vw] bg-accent/3 rounded-full blur-[80px] opacity-30 animate-pulse-slow-delay" />
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
                    {/* 404 Label */}
                    <div className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-primary/5 border border-primary/5 text-primary/70 font-bold text-xs tracking-widest uppercase mb-6">
                        Error 404
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-primary mb-5 tracking-tight leading-[1.1]">
                        Lost in <span className="text-accent underline decoration-accent/20 decoration-4 underline-offset-4">Space?</span>
                    </h1>

                    {/* Description - Sharper Copy */}
                    <p className="text-lg text-primary/60 max-w-xl mx-auto mb-10 leading-relaxed text-balance font-medium">
                        The page you’re looking for isn’t here — but your growth journey continues.
                    </p>

                    {/* Primary Action - Clear Focus */}
                    <div className="mb-14">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-white rounded-full font-bold text-base hover:bg-primary-light transition-all shadow-lg shadow-primary/10 hover:shadow-xl hover:-translate-y-0.5 active:scale-[0.98]"
                        >
                            Back to Homepage
                            <MoveRight className="w-5 h-5" />
                        </Link>
                    </div>

                    {/* Secondary Navigation - Ghost Style Cards */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                        <Link href="/" className="group p-4 rounded-xl border border-transparent hover:bg-white hover:border-primary/5 hover:shadow-sm transition-all duration-300 flex flex-col items-center text-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-primary/5 text-primary/70 flex items-center justify-center group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                                <Home className="w-5 h-5" />
                            </div>
                            <span className="font-bold text-sm text-primary/80 group-hover:text-primary transition-colors">Home</span>
                        </Link>

                        <Link href="/blog" className="group p-4 rounded-xl border border-transparent hover:bg-white hover:border-primary/5 hover:shadow-sm transition-all duration-300 flex flex-col items-center text-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-purple-50/80 text-purple-600/80 flex items-center justify-center group-hover:bg-purple-100 group-hover:text-purple-700 transition-colors">
                                <FileText className="w-5 h-5" />
                            </div>
                            <span className="font-bold text-sm text-primary/80 group-hover:text-purple-700 transition-colors">Insights</span>
                        </Link>

                        <Link href="/#services" className="group p-4 rounded-xl border border-transparent hover:bg-white hover:border-primary/5 hover:shadow-sm transition-all duration-300 flex flex-col items-center text-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-blue-50/80 text-blue-600/80 flex items-center justify-center group-hover:bg-blue-100 group-hover:text-blue-700 transition-colors">
                                <Briefcase className="w-5 h-5" />
                            </div>
                            <span className="font-bold text-sm text-primary/80 group-hover:text-blue-700 transition-colors">Services</span>
                        </Link>

                        <Link href="/#contact" className="group p-4 rounded-xl border border-transparent hover:bg-white hover:border-primary/5 hover:shadow-sm transition-all duration-300 flex flex-col items-center text-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-accent/5 text-accent/80 flex items-center justify-center group-hover:bg-accent/10 group-hover:text-accent transition-colors">
                                <Mail className="w-5 h-5" />
                            </div>
                            <span className="font-bold text-sm text-primary/80 group-hover:text-accent transition-colors">Contact</span>
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    );
}
