"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ArrowLeft, ArrowRight, Calendar, Clock, Share2, Sparkles, List, ChevronRight, Instagram, Linkedin, Twitter, Check, ArrowUp } from 'lucide-react';
import { motion, useScroll, AnimatePresence, useMotionValueEvent } from 'framer-motion';
import { BlogPost, BlogSection, blogPosts } from '@/data/blog-posts';

interface BlogPostContentProps {
    post: BlogPost;
}

export default function BlogPostContent({ post }: BlogPostContentProps) {
    const [isTocOpen, setIsTocOpen] = useState(false);
    const { scrollYProgress } = useScroll();

    const [isShared, setIsShared] = useState(false);
    const [activeSection, setActiveSection] = useState(0);
    const [showBackToTop, setShowBackToTop] = useState(false);

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        setShowBackToTop(latest > 0.1);
    });

    useEffect(() => {
        const observers = post.sections.map((_, idx) => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setActiveSection(idx);
                    }
                },
                { threshold: 0.5, rootMargin: "-100px 0px -50% 0px" }
            );

            const el = document.getElementById(`section-${idx}`);
            if (el) observer.observe(el);
            return observer;
        });

        return () => observers.forEach(o => o.disconnect());
    }, [post.sections]);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleShare = async () => {
        const shareData = {
            title: post.title,
            text: post.excerpt,
            url: window.location.href,
        };

        try {
            if (navigator.share) {
                await navigator.share(shareData);
            } else {
                await navigator.clipboard.writeText(window.location.href);
                setIsShared(true);
                setTimeout(() => setIsShared(false), 2000);
            }
        } catch (err) {
            console.error('Error sharing:', err);
        }
    };

    // Close TOC on click outside or escape
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsTocOpen(false);
        };
        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, []);

    return (
        <div className="min-h-screen bg-[#FDFCF8] text-[#004D40] selection:bg-[#FF6B35]/30 scroll-smooth overflow-x-hidden">
            <Navbar />

            {/* Mobile Actions Tray */}
            <div className="fixed bottom-28 right-6 z-[90] lg:hidden flex flex-col gap-4">
                <AnimatePresence>
                    {showBackToTop && (
                        <motion.button
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            onClick={scrollToTop}
                            className="w-14 h-14 bg-white border border-[#004D40]/10 text-[#004D40] rounded-full shadow-xl flex items-center justify-center hover:scale-110 active:scale-95 transition-transform"
                        >
                            <ArrowUp className="w-6 h-6" />
                        </motion.button>
                    )}
                </AnimatePresence>
                <button
                    onClick={() => setIsTocOpen(!isTocOpen)}
                    className="w-14 h-14 bg-[#004D40] text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-transform"
                >
                    <List className="w-6 h-6" />
                </button>
            </div>

            {/* Desktop Back to Top */}
            <AnimatePresence>
                {showBackToTop && (
                    <motion.button
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        onClick={scrollToTop}
                        className="fixed bottom-10 left-10 z-[90] hidden lg:flex w-14 h-14 bg-white border border-[#004D40]/10 text-[#004D40] rounded-full shadow-2xl items-center justify-center hover:bg-[#004D40] hover:text-white transition-all group"
                    >
                        <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
                    </motion.button>
                )}
            </AnimatePresence>

            {/* TOC Overlay for Mobile */}
            <AnimatePresence>
                {isTocOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 100 }}
                        className="fixed inset-y-0 right-0 w-full sm:w-80 bg-white shadow-2xl z-[100] p-8 border-l border-[#004D40]/5 lg:hidden"
                    >
                        <div className="flex items-center justify-between mb-12">
                            <h3 className="text-xl font-black tracking-tighter uppercase">Table of Contents</h3>
                            <button onClick={() => setIsTocOpen(false)} className="text-[#004D40]/40 font-black uppercase text-xs">Close</button>
                        </div>
                        <nav className="space-y-6">
                            {post.sections.map((section: BlogSection, idx: number) => (
                                <a
                                    key={idx}
                                    href={`#section-${idx}`}
                                    onClick={() => setIsTocOpen(false)}
                                    className="flex items-start gap-4 group"
                                >
                                    <span className="text-[#FF6B35] font-black text-xs pt-1">0{idx + 1}</span>
                                    <span className="text-lg font-bold group-hover:text-[#FF6B35] transition-colors line-clamp-2">{section.heading}</span>
                                </a>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>

            <main className="pt-24 sm:pt-28 lg:pt-32 pb-10 lg:pb-16">
                <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-[1fr_280px] lg:grid-cols-[1fr_320px] gap-10 lg:gap-16 items-start">

                    <article className="w-full">
                        {/* Header Controls */}
                        <div className="flex flex-col sm:flex-row items-center justify-between mb-8 sm:mb-16 gap-4 sm:gap-6 border-b border-[#004D40]/5 pb-6 sm:pb-8">
                            <Link href="/blog" className="inline-flex items-center font-black text-[11px] sm:text-xs uppercase tracking-[0.3em] opacity-40 hover:opacity-100 hover:text-[#FF6B35] transition-all group">
                                <ArrowLeft className="mr-2 sm:mr-3 w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:-translate-x-2 transition-transform" />
                                Return to Library
                            </Link>
                            <div className="flex items-center gap-4 sm:gap-10">
                                <div className="flex items-center gap-3 sm:gap-4 text-[10px] sm:text-[11px] font-black text-[#004D40]/40 uppercase tracking-[0.2em]">
                                    <span className="flex items-center gap-1.5 sm:gap-2"><Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FF6B35]" /> {post.date}</span>
                                    <span className="w-1 h-1 rounded-full bg-[#004D40]/10" />
                                    <span className="flex items-center gap-1.5 sm:gap-2"><Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> {post.readTime}</span>
                                </div>
                                <button
                                    onClick={handleShare}
                                    className="p-2 sm:p-3 bg-white border border-[#004D40]/5 rounded-xl sm:rounded-2xl hover:bg-[#004D40] hover:text-white transition-all shadow-sm active:scale-95 group relative"
                                >
                                    <AnimatePresence mode="wait">
                                        {isShared ? (
                                            <motion.div
                                                key="check"
                                                initial={{ scale: 0, opacity: 0 }}
                                                animate={{ scale: 1, opacity: 1 }}
                                                exit={{ scale: 0, opacity: 0 }}
                                            >
                                                <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-500" />
                                            </motion.div>
                                        ) : (
                                            <motion.div
                                                key="share"
                                                initial={{ scale: 0, opacity: 0 }}
                                                animate={{ scale: 1, opacity: 1 }}
                                                exit={{ scale: 0, opacity: 0 }}
                                            >
                                                <Share2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:scale-110 transition-transform" />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </button>
                            </div>
                        </div>

                        {/* Title Header */}
                        <header className="space-y-6 sm:space-y-12 mb-12 sm:mb-32 text-center sm:text-left">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="inline-block px-4 sm:px-6 py-2 sm:py-2.5 bg-[#004D40] text-white text-[10px] sm:text-[11px] font-black tracking-[0.3em] rounded-full uppercase shadow-xl shadow-[#004D40]/10"
                            >
                                {post.category}
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-[clamp(2rem,5vw,4.5rem)] font-black leading-[1.2] tracking-tighter text-balance"
                            >
                                {post.title}
                            </motion.h1>

                            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 pt-8 sm:pt-12 border-t border-[#004D40]/5">
                                <div className="relative">
                                    <div className="w-12 h-12 sm:w-20 sm:h-20 rounded-xl sm:rounded-[2rem] bg-[#FF6B35] flex items-center justify-center text-white font-black shadow-2xl text-lg sm:text-3xl transform hover:rotate-6 transition-transform">AL</div>
                                    <div className="absolute -bottom-1 -right-1 w-5 h-5 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center shadow-lg border border-[#004D40]/5">
                                        <Sparkles className="w-2.5 h-2.5 sm:w-4 sm:h-4 text-[#FF6B35]" />
                                    </div>
                                </div>
                                <div className="text-center sm:text-left">
                                    <p className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.3em] sm:tracking-[0.4em] opacity-30 leading-none mb-1.5 sm:mb-3">Published By</p>
                                    <p className="text-base sm:text-xl font-black text-[#004D40]">Ahmd Luthu <span className="block sm:inline-block mt-2 sm:mt-0 sm:ml-3 px-3 sm:px-4 py-1 sm:py-1.5 bg-[#004D40]/5 rounded-full text-[9px] sm:text-[10px] uppercase font-black opacity-60 border border-[#004D40]/10">Verified Strategist</span></p>
                                </div>
                            </div>
                        </header>

                        {/* Hero Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                            className="relative aspect-video sm:aspect-[16/9] lg:aspect-[21/9] w-full rounded-2xl sm:rounded-[2.5rem] lg:rounded-[4rem] overflow-hidden mb-12 sm:mb-20 shadow-2xl group"
                        >
                            <Image
                                src={post.image}
                                alt={post.title}
                                fill
                                className="object-cover transition-transform duration-[3000ms] group-hover:scale-105"
                                priority
                                sizes="(max-width: 1440px) 100vw, 1200px"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#004D40]/30 to-transparent" />
                        </motion.div>

                        {/* Rich Content Section */}
                        <div className="max-w-none">
                            <div className="prose prose-base sm:prose-xl prose-emerald max-w-none prose-headings:font-black prose-headings:tracking-tighter prose-p:text-[#004D40]/80 sm:prose-p:leading-[1.8] prose-p:leading-relaxed prose-p:max-w-[70ch]">
                                <p className="text-xl sm:text-2xl md:text-3xl text-[#004D40] font-black leading-[1.4] sm:leading-[1.3] mb-12 sm:mb-20 italic border-l-[6px] sm:border-l-[8px] border-[#FF6B35] pl-6 sm:pl-10 py-6 sm:py-10 bg-white rounded-r-2xl sm:rounded-r-[2.5rem] shadow-sm border border-[#004D40]/5 relative overflow-hidden group max-w-[75ch]">
                                    <span className="absolute -top-10 -right-10 w-24 h-24 sm:w-40 sm:h-40 bg-[#FF6B35]/5 rounded-full blur-[40px] sm:blur-[60px]" />
                                    {post.intro}
                                </p>

                                <div className="space-y-16 sm:space-y-48">
                                    {post.sections.map((section: BlogSection, idx: number) => (
                                        <motion.div
                                            key={idx}
                                            id={`section-${idx}`}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true, margin: "-100px" }}
                                            className="gap-6 sm:gap-10 flex flex-col"
                                        >
                                            <div className="flex items-center gap-4 sm:gap-6">
                                                <div className="w-10 sm:w-20 h-[3px] bg-[#FF6B35] rounded-full" />
                                                <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.4em] text-[#FF6B35]">Knowledge Block {idx + 1}</span>
                                            </div>
                                            <div className="space-y-6 sm:space-y-8">
                                                <h2 className="text-[clamp(1.75rem,5vw,3.5rem)] font-black text-[#004D40] leading-[1.3] tracking-tighter mt-0">
                                                    {section.heading}
                                                </h2>
                                                <div className="text-[#004D40]/80 text-lg sm:text-xl font-medium leading-[1.8] sm:leading-[1.8]">
                                                    {section.content}
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    className="mt-20 sm:mt-32 pt-12 sm:pt-20 border-t-2 border-[#004D40]/5 text-center"
                                >
                                    <div className="relative inline-block w-full">
                                        <span className="absolute -top-8 sm:-top-12 left-1/2 -translate-x-1/2 text-5xl sm:text-8xl font-black text-[#FF6B35]/5 pointer-events-none uppercase tracking-widest italic">Conclusion</span>
                                        <p className="max-w-[40ch] mx-auto text-xl sm:text-4xl font-black text-[#004D40]/90 leading-tight italic tracking-tighter decoration-[#FF6B35]/20 underline decoration-[4px] sm:decoration-[8px] underline-offset-[8px] sm:underline-offset-[12px] relative z-10 text-balance">
                                            &quot;{post.closing}&quot;
                                        </p>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Author Box - Refamped for High-End Feel */}
                            <div className="mt-20 sm:mt-32 lg:mt-40 p-8 sm:p-12 lg:p-16 bg-white rounded-[2rem] sm:rounded-[3rem] lg:rounded-[4rem] border border-[#004D40]/5 shadow-xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_rgba(255,107,53,0.05)_0%,_transparent_60%)]" />

                                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 sm:gap-12 relative z-10 text-center lg:text-left">
                                    <div className="shrink-0 space-y-6 sm:space-y-10">
                                        <div className="relative inline-block group">
                                            <div className="w-28 h-28 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-[#004D40] rounded-[2rem] sm:rounded-[4rem] lg:rounded-[5.5rem] flex items-center justify-center text-white text-4xl sm:text-6xl lg:text-8xl font-black shadow-2xl transition-all duration-1000 group-hover:rotate-0 rotate-3 overflow-hidden">
                                                AL
                                                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </div>
                                            <motion.div
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                                className="absolute -bottom-4 -right-4 w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 bg-[#FF6B35] rounded-full flex items-center justify-center text-white shadow-xl border-4 border-white"
                                            >
                                                <Sparkles className="w-5 h-5 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
                                            </motion.div>
                                        </div>
                                        <div className="space-y-2 sm:space-y-4">
                                            <p className="text-[10px] sm:text-[12px] font-black uppercase tracking-[0.5em] text-[#FF6B35]">Industry Leader</p>
                                            <div className="flex justify-center lg:justify-start gap-2 sm:gap-3">
                                                {[1, 2, 3, 4, 5].map(i => <div key={i} className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#004D40]/10" />)}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-6 flex-grow w-full">
                                        <div className="space-y-2 sm:space-y-3">
                                            <h3 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#004D40] tracking-tighter leading-[1.1]">Ahmd Luthu</h3>
                                            <p className="text-[#FF6B35] font-black text-xs sm:text-base uppercase tracking-[0.3em] leading-relaxed">The Best Marketer in Kannur</p>
                                        </div>
                                        <p className="text-[#004D40]/70 text-base sm:text-xl lg:text-2xl font-medium leading-[1.6] max-w-2xl mx-auto lg:mx-0">
                                            Pioneering AI-first strategies that don&apos;t just generate noise—they build compounding growth engines for visionary brands.
                                        </p>
                                        <div className="pt-4 sm:pt-6 flex flex-col sm:flex-row items-center gap-6 sm:gap-8 justify-center lg:justify-start">
                                            <Link
                                                href="/#contact"
                                                className="w-full sm:w-auto px-8 sm:px-10 py-5 sm:py-6 bg-[#004D40] text-white font-black rounded-2xl shadow-lg hover:bg-[#FF6B35] transition-all hover:-translate-y-1 active:scale-95 group text-sm sm:text-base flex items-center justify-center gap-3 min-h-[56px] whitespace-nowrap"
                                            >
                                                Scale Your Brand
                                                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                                            </Link>

                                            <div className="flex items-center gap-4">
                                                {[
                                                    { Icon: Linkedin, href: "https://www.linkedin.com/in/muhammed-luthufulla-c-b6aa43362/", label: "LinkedIn" },
                                                    { Icon: Instagram, href: "https://www.instagram.com/_.ahmd_luthu._", label: "Instagram" },
                                                    { Icon: Twitter, href: "https://x.com/ahmd_luthu?s=20", label: "Twitter" }
                                                ].map((social, idx) => (
                                                    <a
                                                        key={idx}
                                                        href={social.href}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#004D40]/5 text-[#004D40] hover:bg-[#FF6B35] hover:text-white transition-all hover:-translate-y-1 active:scale-95"
                                                        aria-label={social.label}
                                                    >
                                                        <social.Icon className="w-5 h-5" />
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>

                    {/* Desktop/Tablet Sidebar TOC */}
                    <aside className="sticky top-32 hidden md:block space-y-10 w-full">
                        <div className="space-y-8">
                            <div className="flex items-center gap-4">
                                <div className="w-8 h-8 rounded-lg bg-[#004D40] flex items-center justify-center text-white">
                                    <List className="w-4 h-4" />
                                </div>
                                <h3 className="text-xs font-black uppercase tracking-[0.3em] opacity-40 leading-none">Outline</h3>
                            </div>
                            <nav className="space-y-8 border-l border-[#004D40]/5 pl-8">
                                {post.sections.map((section: BlogSection, idx: number) => (
                                    <a
                                        key={idx}
                                        href={`#section-${idx}`}
                                        className={`block group relative transition-all duration-300 ${activeSection === idx ? 'pl-2' : ''}`}
                                    >
                                        <span className={`absolute -left-[33px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#FF6B35] transition-all duration-300 ${activeSection === idx ? 'opacity-100 scale-125' : 'opacity-0 group-hover:opacity-100'}`} />
                                        <span className={`text-[10px] font-black block mb-2 transition-colors ${activeSection === idx ? 'text-[#FF6B35]' : 'text-[#FF6B35]/60'}`}>Insight 0{idx + 1}</span>
                                        <span className={`text-sm font-black transition-colors leading-tight block ${activeSection === idx ? 'text-[#004D40]' : 'text-[#004D40]/40 group-hover:text-[#004D40]'}`}>
                                            {section.heading}
                                        </span>
                                    </a>
                                ))}
                            </nav>
                        </div>

                        {/* Sidebar CTA */}
                        <div className="p-8 bg-white border border-[#004D40]/5 rounded-[2.5rem] shadow-sm space-y-6">
                            <Sparkles className="w-8 h-8 text-[#FF6B35]" />
                            <h4 className="text-xl font-black leading-tight">Need a growth audit?</h4>
                            <p className="text-sm text-[#004D40]/60 font-medium">Let&apos;s look at your data and build a roadmap together.</p>
                            <Link href="/#contact" className="flex items-center justify-center w-full py-4 bg-[#004D40] text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#FF6B35] transition-colors">Start Review</Link>
                        </div>
                    </aside>
                </div>
            </main>

            {/* Recommendations Grid - Enhanced for all devices */}
            <section className="py-10 lg:py-16 bg-white relative">
                <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
                    <div className="text-center space-y-4 sm:space-y-6 mb-16 sm:mb-24">
                        <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.4em] text-[#FF6B35]">More Excellence</span>
                        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#004D40] tracking-tighter">Further Insights</h2>
                        <div className="h-1.5 w-20 sm:w-32 bg-[#FF6B35] mx-auto rounded-full" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-24">
                        {(Object.values(blogPosts) as BlogPost[]).filter((p: BlogPost) => p.slug !== post.slug).slice(0, 3).map((p: BlogPost, i: number) => (
                            <Link key={i} href={`/blog/${p.slug}`} className="group flex flex-col space-y-8 sm:space-y-12">
                                <div className="relative aspect-[4/5] sm:aspect-square rounded-2xl sm:rounded-[3rem] overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-700 group-hover:-translate-y-2">
                                    <Image src={p.image} alt={p.title} fill className="object-cover transition-transform group-hover:scale-105 duration-700" loading="lazy" />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/5 transition-colors" />
                                    <div className="absolute bottom-10 left-10">
                                        <span className="px-5 py-2.5 bg-white text-[#004D40] text-[10px] font-black uppercase tracking-widest rounded-full shadow-2xl">{p.category}</span>
                                    </div>
                                </div>
                                <div className="space-y-3 sm:space-y-4 px-2">
                                    <div className="flex items-center gap-3 text-[10px] sm:text-[11px] font-black uppercase tracking-[0.2em] opacity-40">
                                        <span>{p.date}</span>
                                        <span className="w-1 h-1 rounded-full bg-[#004D40]" />
                                        <span>{p.readTime}</span>
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-black group-hover:text-[#FF6B35] transition-colors line-clamp-2 leading-tight tracking-tight">{p.title}</h3>
                                    <ChevronRight className="w-6 h-6 text-[#FF6B35] transition-transform group-hover:translate-x-2" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Sticky Global Final CTA - High-Impact */}
            <section className="py-10 lg:py-16 bg-[#004D40] text-center px-5 sm:px-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.05] bg-center [mask-image:radial-gradient(white,transparent_80%)]" />
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto space-y-8 sm:space-y-12 relative z-10"
                >
                    <h2 className="text-[clamp(1.75rem,8vw,5.5rem)] font-black text-white leading-[1.1] tracking-tighter">Ready for <br /><span className="text-[#FF6B35] underline decoration-white/10 underline-offset-[8px]">Digital Dominance</span>?</h2>
                    <p className="text-lg sm:text-2xl text-white/50 max-w-2xl mx-auto font-medium leading-relaxed">Join the selective group of industry leaders scaling with precision AI implementation. Your competitors are watching.</p>
                    <Link href="/#contact" className="w-full sm:w-auto inline-flex px-10 sm:px-16 py-5 sm:py-6 bg-[#FF6B35] text-white font-black rounded-2xl text-lg sm:text-xl hover:bg-[#e85a2a] transition-all hover:shadow-2xl hover:-translate-y-1 active:scale-95 group items-center justify-center gap-4 min-h-[60px]">
                        Let&apos;s Get To Work
                        <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8 group-hover:translate-x-3 transition-transform" />
                    </Link>
                </motion.div>
            </section>

            <Footer />
        </div>
    );
}
