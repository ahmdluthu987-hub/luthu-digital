"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, Clock, Sparkles } from "lucide-react";
import { blogPosts } from "@/data/blog-posts";

const HomeBlogSection = () => {
    // Get the first 3 posts
    const recentPosts = Object.values(blogPosts).slice(0, 3);

    return (
        <section className="py-20 md:py-32 bg-[#FAFAF8] relative overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        <div className="flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-widest">
                            <Sparkles className="w-4 h-4" />
                            <span>Latest Thinking</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-primary leading-[1.1] tracking-tight">
                            Insights on Marketing <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-400">
                                & AI Growth.
                            </span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <Link
                            href="/blog"
                            className="group inline-flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors"
                        >
                            View All Articles
                            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>

                {/* Posts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {recentPosts.map((post, index) => (
                        <motion.article
                            key={post.slug}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group flex flex-col h-full bg-white rounded-[2rem] overflow-hidden border border-primary/5 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
                        >
                            <Link href={`/blog/${post.slug}`} className="block relative aspect-[16/9] overflow-hidden">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-primary">
                                    {post.category}
                                </div>
                            </Link>

                            <div className="p-8 flex flex-col flex-grow">
                                <div className="flex items-center gap-4 text-xs font-medium text-primary/40 mb-4">
                                    <span className="flex items-center gap-1.5">
                                        <Calendar className="w-3.5 h-3.5" />
                                        {post.date}
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        <Clock className="w-3.5 h-3.5" />
                                        {post.readTime}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-primary mb-3 leading-snug group-hover:text-accent transition-colors text-balance">
                                    <Link href={`/blog/${post.slug}`}>
                                        {post.title}
                                    </Link>
                                </h3>

                                <p className="text-primary/60 text-sm leading-relaxed mb-6 line-clamp-3 text-pretty">
                                    {post.excerpt}
                                </p>

                                <div className="mt-auto pt-6 border-t border-primary/5">
                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="inline-flex items-center gap-2 text-primary font-bold text-sm group-hover:text-accent transition-colors"
                                    >
                                        Read Article
                                        <ArrowUpRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomeBlogSection;
