"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Sparkles, MessageCircle } from "lucide-react";

/**
 * FAQSection - A modern, SEO-friendly FAQ component with JSON-LD schema support.
 */
const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0); // Default open first one

    const faqs = [
        {
            question: "What services do you offer as a digital marketing expert in Kannur?",
            answer: "I provide AI-powered digital marketing services including SEO, Social Media Marketing (SMM), Google Ads (SEM), content strategy, and basic marketing automation. My focus is on helping Kannur and Kerala-based businesses grow with measurable results.",
        },
        {
            question: "What does “AI-first digital marketing” mean?",
            answer: "AI-first digital marketing means using modern AI tools for keyword research, content planning, ad optimization, analytics, and automation. This helps improve efficiency, reduce costs, and deliver better performance compared to traditional methods.",
        },
        {
            question: "Do you work with small businesses and startups?",
            answer: "Yes. I work with small businesses, local brands, startups, and service providers across Kannur and Kerala. My strategies are simple, scalable, and budget-friendly.",
        },
        {
            question: "How long does it take to see results from SEO and ads?",
            answer: "SEO usually takes 3–6 months to show strong results, while Google Ads and social media ads can generate leads faster. Timelines depend on competition, budget, and business goals.",
        },
        {
            question: "Do you provide digital marketing services only in Kannur?",
            answer: "I primarily serve clients in Kannur and across Kerala, but I also work with businesses remotely if the project is a good fit.",
        },
        {
            question: "How do I get started?",
            answer: "You can start by contacting me through the website or requesting a free marketing audit. I’ll review your business goals and suggest the right digital marketing approach.",
        }
    ];

    // Create JSON-LD FAQ Schema
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map((faq) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer,
            },
        })),
    };

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-20 lg:py-32 bg-[#fffcf5] relative overflow-hidden">
            {/* Inject JSON-LD Schema for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            {/* Abstract Background Accents */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -mr-40 -mt-20 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -ml-40 -mb-20 pointer-events-none" />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">

                    {/* Left Side: Header Content */}
                    <div className="lg:w-1/3">
                        <div className="lg:sticky lg:top-32 space-y-8">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-primary/10 text-primary text-xs font-black uppercase tracking-widest shadow-sm"
                            >
                                <Sparkles className="w-3.5 h-3.5 fill-accent text-accent" />
                                Knowledge Base
                            </motion.div>

                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-4xl sm:text-5xl lg:text-6xl font-black text-primary leading-[1.1] tracking-tight"
                            >
                                Got <br className="hidden lg:block" />
                                Questions? <br className="hidden lg:block" />
                                <span className="text-accent underline decoration-accent/30 underline-offset-8">Got Answers.</span>
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-lg text-foreground/70 leading-relaxed max-w-sm"
                            >
                                Everything you need to know about <span className="text-primary font-bold">AI digital marketing</span> and how I help local businesses thrive.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="pt-4 lg:pt-8"
                            >
                                <button
                                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="group flex items-center gap-4 text-primary font-black uppercase tracking-widest text-xs hover:text-accent transition-colors"
                                >
                                    <div className="w-14 h-14 rounded-full border border-primary/10 bg-white flex items-center justify-center group-hover:border-accent group-hover:bg-accent group-hover:text-white transition-all shadow-sm">
                                        <MessageCircle className="w-6 h-6" />
                                    </div>
                                    <span className="group-hover:translate-x-1 transition-transform">Ask me directly</span>
                                </button>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right Side: FAQ Accordion */}
                    <div className="lg:w-2/3 space-y-4">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className={`group rounded-3xl transition-all duration-300 ${activeIndex === index
                                    ? "bg-white shadow-xl shadow-primary/5 p-6 sm:p-8 scale-[1.02] border border-primary/5"
                                    : "bg-white/60 hover:bg-white hover:shadow-lg hover:shadow-primary/5 p-6 border border-transparent hover:border-black/5"
                                    }`}
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex items-start sm:items-center justify-between text-left focus:outline-none gap-4"
                                >
                                    <span className={`text-lg sm:text-xl font-bold transition-colors duration-300 ${activeIndex === index ? "text-primary" : "text-primary/80 group-hover:text-primary"
                                        }`}>
                                        {faq.question}
                                    </span>
                                    <div className={`shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-500 ${activeIndex === index ? "bg-accent text-white rotate-180" : "bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white"
                                        }`}>
                                        <ChevronDown className="w-5 h-5" />
                                    </div>
                                </button>

                                <AnimatePresence>
                                    {activeIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                        >
                                            <div className="pt-6 pb-2">
                                                <div className="w-full h-[1px] bg-primary/5 mb-6" />
                                                <p className="text-base sm:text-lg text-foreground/70 leading-relaxed">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}

                        {/* Bottom SEO Tag Line */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="pt-12 flex flex-wrap justify-center lg:justify-start items-center gap-x-8 gap-y-4 text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] opacity-10"
                        >
                            <span>FAQ</span>
                            <div className="w-1 h-1 rounded-full bg-current" />
                            <span>Digital Marketing</span>
                            <div className="w-1 h-1 rounded-full bg-current" />
                            <span>AI Strategy</span>
                            <div className="w-1 h-1 rounded-full bg-current" />
                            <span>Kannur</span>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
