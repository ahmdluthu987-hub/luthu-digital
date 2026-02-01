"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Sparkles, MessageCircle, HelpCircle } from "lucide-react";

/**
 * FAQSection - A modern, SEO-friendly FAQ component with JSON-LD schema support.
 */
const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

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
        <section id="faq" className="py-24 bg-[#FCFBF7] relative overflow-hidden">
            {/* Inject JSON-LD Schema for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            {/* Abstract Background Accents */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -mr-20 -mt-20 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-[100px] -ml-20 -mb-20 pointer-events-none" />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16">

                    {/* Left Side: Header Content */}
                    <div className="lg:w-1/3">
                        <div className="sticky top-32 space-y-6">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-black uppercase tracking-widest"
                            >
                                <Sparkles className="w-3 h-3 fill-primary" />
                                Knowledge Base
                            </motion.div>

                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-4xl lg:text-6xl font-black text-primary leading-tight"
                            >
                                Got <br />Questions? <br /><span className="text-accent">Got Answers.</span>
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-lg text-foreground/60 leading-relaxed max-w-sm"
                            >
                                Everything you need to know about <span className="text-primary font-bold">AI digital marketing in Kerala</span> and how I help local businesses thrive.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="pt-8"
                            >
                                <button
                                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="group flex items-center gap-4 text-primary font-black uppercase tracking-widest text-xs hover:text-accent transition-colors"
                                >
                                    <div className="w-12 h-12 rounded-full border border-primary/10 flex items-center justify-center group-hover:border-accent group-hover:bg-accent group-hover:text-white transition-all">
                                        <MessageCircle className="w-5 h-5" />
                                    </div>
                                    Ask me directly
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
                                className={`group border-b border-primary/5 transition-all duration-500 overflow-hidden ${activeIndex === index ? "bg-white rounded-[2rem] px-8 mb-6 shadow-xl shadow-primary/[0.03]" : "hover:px-4"
                                    }`}
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full py-8 flex items-center justify-between text-left focus:outline-none"
                                >
                                    <span className={`text-xl lg:text-2xl font-bold transition-all duration-300 pr-8 ${activeIndex === index ? "text-primary" : "text-primary/70 group-hover:text-primary"
                                        }`}>
                                        {faq.question}
                                    </span>
                                    <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${activeIndex === index ? "bg-primary text-white rotate-180" : "bg-primary/5 text-primary"
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
                                            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                                        >
                                            <div className="pb-8">
                                                <p className="text-lg text-foreground/60 leading-relaxed border-l-2 border-accent/30 pl-6 italic">
                                                    {faq.answer}
                                                </p>

                                                <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 opacity-10 text-[9px] font-black uppercase tracking-[0.3em]">
                                                    <span>SEO_Expert_Kannur</span>
                                                    <span>Digital_Marketing_Kerala</span>
                                                </div>
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
                            className="pt-12 flex flex-wrap justify-between items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] opacity-10 flex-col sm:flex-row"
                        >
                            <span>Digital marketing FAQ Kannur</span>
                            <span>AI digital marketing Kerala</span>
                            <span>Kannur digital marketing consultant</span>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
