"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ChevronRight, Filter, Calendar, ArrowRight, Tag } from "lucide-react";
import { motion, AnimatePresence } from 'framer-motion';
import { BlogPost, categories } from '@/data/blog-posts';

interface BlogListingContentProps {
    posts: BlogPost[];
}

export default function BlogListingContent({ posts }: BlogListingContentProps) {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredPosts = selectedCategory === "All"
        ? posts
        : posts.filter(post => post.category === selectedCategory);

    return (
        <div className="min-h-screen bg-[#FDFCF8] text-[#004D40] selection:bg-[#FF6B35]/30">
            <Navbar />

            {/* 1️⃣ Premium Hero Section */}
            <section className="relative pt-24 sm:pt-48 pb-16 sm:pb-32 px-4 sm:px-6 overflow-hidden">
                {/* Dynamic Background Elements */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_top,_rgba(255,107,53,0.03)_0%,_transparent_70%)]" />
                    <motion.div
                        animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.3, 0.5, 0.3]
                        }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        className="absolute -top-[10%] -right-[5%] w-[40%] aspect-square bg-[#FF6B35]/5 rounded-full blur-[120px]"
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-grid-slate-900/[0.02] bg-[size:32px_32px]" />
                </div>

                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="flex flex-col items-center text-center space-y-8 sm:space-y-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 sm:py-2.5 bg-white border border-[#004D40]/5 rounded-full shadow-sm"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6B35] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF6B35]"></span>
                            </span>
                            <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-[#004D40]/60">Digital Marketing Archive • 2026</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl min-[375px]:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.95] sm:leading-[0.9] tracking-tighter text-balance"
                        >
                            The <span className="text-[#FF6B35]">Growth</span> <br />
                            Library.
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="text-base sm:text-2xl text-[#004D40]/70 max-w-2xl mx-auto leading-relaxed font-medium px-2"
                        >
                            Pioneering AI-first strategies that don&apos;t just generate noise—they build compounding growth engines for visionary brands.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 pt-4"
                        >
                            <div className="flex items-center gap-4">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-[#FDFCF8] bg-[#004D40] flex items-center justify-center text-[8px] sm:text-[10px] font-black text-white shadow-lg">AL</div>
                                    ))}
                                </div>
                                <div className="text-left">
                                    <p className="text-xs sm:text-sm font-black leading-none">Trusted by Founders</p>
                                    <p className="text-[9px] sm:text-[10px] font-bold opacity-40 uppercase tracking-widest mt-1">Kannur & Beyond</p>
                                </div>
                            </div>
                            <div className="h-8 w-[1px] bg-[#004D40]/10 hidden sm:block" />
                            <Link
                                href="#listings"
                                className="group flex items-center gap-3 text-xs sm:text-sm font-black uppercase tracking-widest bg-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl shadow-sm border border-[#004D40]/5 hover:bg-[#004D40] hover:text-white transition-all duration-500 active:scale-95"
                            >
                                Browse Entries
                                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 2️⃣ Filter & Listings Section */}
            <section id="listings" className="py-16 sm:py-32 bg-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-12 md:px-24">
                    <div className="mb-12 sm:mb-16 flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8 border-b border-[#004D40]/5 pb-8">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-[#004D40]/5 flex items-center justify-center text-[#004D40]">
                                <Filter className="w-5 h-5" />
                            </div>
                            <h2 className="text-xs sm:text-sm font-black uppercase tracking-widest opacity-40">Filter by category</h2>
                        </div>
                        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                            {categories.map((cat: string) => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-widest transition-all ${selectedCategory === cat
                                        ? "bg-[#004D40] text-white shadow-lg shadow-[#004D40]/20"
                                        : "bg-[#004D40]/5 text-[#004D40] hover:bg-[#004D40]/10"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-12">
                        <AnimatePresence mode="wait">
                            {filteredPosts.map((post, index) => (
                                <motion.div
                                    key={post.slug}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                >
                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="group block h-full focus:outline-none"
                                    >
                                        <div className="flex flex-col h-full bg-white rounded-3xl sm:rounded-[2.5rem] overflow-hidden border border-[#004D40]/5 shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] transition-all duration-700 hover:-translate-y-3">
                                            <div className="relative h-56 sm:h-72 overflow-hidden">
                                                <Image
                                                    src={post.image}
                                                    alt={post.title}
                                                    fill
                                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-[#004D40]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                                <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
                                                    <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white/95 backdrop-blur-md text-[#004D40] text-[9px] sm:text-[10px] font-black tracking-widest uppercase rounded-full shadow-lg">
                                                        {post.category}
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="p-6 sm:p-10 flex flex-col flex-grow space-y-5 sm:space-y-6">
                                                <div className="flex items-center gap-4 text-[9px] sm:text-[10px] font-bold text-[#004D40]/30 uppercase tracking-[0.2em]">
                                                    <span className="flex items-center gap-2 font-black"><Calendar className="w-3.5 h-3.5 text-[#FF6B35]" /> {post.date}</span>
                                                    <span className="w-1 h-1 rounded-full bg-[#004D40]/10" />
                                                    <span>{post.readTime}</span>
                                                </div>

                                                <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-[#004D40] leading-[1.1] sm:leading-[1.15] group-hover:text-[#FF6B35] transition-colors duration-300">
                                                    {post.title}
                                                </h3>

                                                <p className="text-sm sm:text-base lg:text-lg text-[#004D40]/60 font-medium line-clamp-3 leading-relaxed flex-grow">
                                                    {post.excerpt}
                                                </p>

                                                <div className="pt-6 sm:pt-8 flex items-center justify-between border-t border-[#004D40]/5">
                                                    <span className="flex items-center gap-3 font-black text-xs sm:text-sm text-[#004D40] group-hover:text-[#FF6B35] transition-colors">
                                                        Explore Entry
                                                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                                                    </span>
                                                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#004D40]/5 flex items-center justify-center group-hover:bg-[#FF6B35] group-hover:text-white transition-all duration-500">
                                                        <Tag className="w-3.5 h-3.5 sm:w-4 sm:h-4 opacity-40 group-hover:opacity-100" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {filteredPosts.length === 0 && (
                        <div className="py-20 text-center space-y-4">
                            <h3 className="text-2xl font-black opacity-20 italic underline decoration-[#FF6B35]/20 underline-offset-8">No matching insights found.</h3>
                            <button onClick={() => setSelectedCategory("All")} className="text-[#FF6B35] font-black text-sm uppercase tracking-widest hover:underline decoration-offset-4">Reset Library</button>
                        </div>
                    )}
                </div>
            </section>

            {/* 3️⃣ Premium Newsletter/CTA Section */}
            <section className="py-20 sm:py-40 px-4 sm:px-12 md:px-24 bg-[#004D40] relative overflow-hidden group">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[1000px] h-[600px] sm:h-[1000px] bg-white opacity-[0.02] rounded-full blur-[200px]" />
                    <div className="absolute inset-0 bg-grid-white/[0.03] bg-[size:40px_40px]" />
                </div>

                <div className="max-w-5xl mx-auto text-center space-y-8 sm:space-y-12 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-4 sm:space-y-6"
                    >
                        <span className="inline-block px-4 sm:px-5 py-2 bg-white/10 rounded-full text-accent font-black text-[10px] sm:text-xs uppercase tracking-widest border border-white/10 backdrop-blur-sm">
                            Ready to scale?
                        </span>
                        <h2 className="text-3xl sm:text-6xl md:text-7xl font-black text-white leading-none tracking-tighter">
                            Let&apos;s Build Your <br />
                            <span className="text-accent underline decoration-white/10 underline-offset-[8px] sm:underline-offset-[12px]">Growth Engine</span>.
                        </h2>
                        <p className="text-lg sm:text-2xl text-white/60 max-w-2xl mx-auto font-medium leading-relaxed px-4">
                            Stop guessing. Start growing with the best freelance digital marketer in Kannur. AI-first. ROI-centered.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6"
                    >
                        <Link
                            href="/#contact"
                            className="w-full sm:w-auto px-8 sm:px-12 py-5 sm:py-6 bg-accent text-white font-black rounded-2xl sm:rounded-3xl text-lg sm:text-xl transition-all hover:bg-[#e85a2a] hover:shadow-2xl hover:shadow-accent/20 hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-4 group"
                        >
                            Start Your Journey
                            <ArrowRight className="w-5 h-5 sm:w-6 h-6 transition-transform group-hover:translate-x-2" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
