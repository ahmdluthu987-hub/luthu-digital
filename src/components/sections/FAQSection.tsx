"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, MessageCircle, Plus, Minus } from "lucide-react";

/**
 * FAQSection - A modern, SEO-friendly FAQ component with JSON-LD schema support.
 * Design: Minimal, clean accordion list without heavy cards.
 */
const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "What services do you offer as a digital marketing expert in Kannur?",
            answer: "As the best freelance digital marketer in Kannur, I provide AI-powered digital marketing services, including SEO, social media marketing (SMM), Google Ads (SEM), content strategy, conversion optimisation, and basic marketing automation. My focus is on helping Kannur and Kerala-based businesses grow with clear ROI and measurable results.",
        },
        {
            question: "What does “AI-first digital marketing” mean?",
            answer: "AI-first digital marketing means using modern AI tools for keyword research, content planning, ad optimisation, analytics, and automation. This approach improves efficiency, accuracy, and performance, helping businesses achieve better results compared to traditional digital marketing methods.",
        },
        {
            question: "Do you work with small businesses and startups in Kannur?",
            answer: "Yes. I work with small businesses, startups, local brands, and service providers in Kannur and across Kerala. My strategies are simple, scalable, and budget-friendly, making them ideal for businesses at any growth stage.",
        },
        {
            question: "How long does it take to see results from SEO and paid ads?",
            answer: "SEO typically takes 3–6 months to deliver strong, sustainable results. Google Ads and social media ads can generate leads and enquiries much faster, often within weeks. Timelines depend on competition, budget, and business goals.",
        },
        {
            question: "Do you provide digital marketing services only in Kannur?",
            answer: "I primarily serve clients in Kannur and across Kerala, but I also work with businesses remotely if the project aligns well. This flexibility allows me to deliver the same high-quality results regardless of location.",
        },
        {
            question: "Why should I choose you as my freelance digital marketer in Kannur?",
            answer: "I focus on real growth, not fake promises. As the best freelance digital marketer in Kannur, I combine AI tools, data-driven strategy, and conversion psychology to build marketing systems that deliver consistent and transparent ROI.",
        },
        {
            question: "How do I get started?",
            answer: "You can get started by contacting me through the website or requesting a free marketing audit. I’ll analyse your business goals and recommend the most effective AI-powered digital marketing strategy for your growth.",
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
        <section id="faq" className="py-20 md:py-32 bg-[#FDFCF8] relative overflow-hidden">
            {/* Inject JSON-LD Schema for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            {/* Minimal Background Gradient */}
            <div className="absolute inset-0 pointer-events-none opacity-30">
                <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">

                    {/* Left Side: Header Content */}
                    <div className="lg:w-1/3 lg:sticky lg:top-32">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 text-primary text-xs font-bold uppercase tracking-widest">
                                <Sparkles className="w-3.5 h-3.5 text-accent" />
                                Knowledge Base
                            </div>

                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary leading-[1.05] tracking-tight">
                                Got <br className="hidden lg:block" />
                                Questions? <br className="hidden lg:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-400">Got Answers.</span>
                            </h2>

                            <p className="text-lg text-primary/60 leading-relaxed font-medium max-w-sm">
                                Everything you need to know about <span className="text-primary font-bold">AI digital marketing</span> and how I help local businesses thrive.
                            </p>

                            <div className="pt-4">
                                <button
                                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="group flex items-center gap-4 text-primary font-bold uppercase tracking-widest text-xs hover:text-accent transition-colors"
                                >
                                    <div className="w-12 h-12 rounded-full border border-primary/10 bg-white flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-white transition-all duration-300">
                                        <MessageCircle className="w-5 h-5" />
                                    </div>
                                    <span className="group-hover:translate-x-1 transition-transform duration-300">Ask me directly</span>
                                </button>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Side: FAQ Accordion (Clean List Style) */}
                    <div className="lg:w-2/3 w-full">
                        <div className="divide-y divide-primary/5 border-t border-b border-primary/5">
                            {faqs.map((faq, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    className={`group transition-colors duration-300 ${activeIndex === index ? "bg-transparent" : "hover:bg-primary/[0.02]"}`}
                                >
                                    <button
                                        onClick={() => toggleFAQ(index)}
                                        className="w-full flex items-start justify-between text-left focus:outline-none gap-6 py-8"
                                    >
                                        <span className={`text-xl md:text-2xl font-bold transition-colors duration-300 pr-4 leading-tight text-balance ${activeIndex === index ? "text-primary" : "text-primary/70 group-hover:text-primary"
                                            }`}>
                                            {faq.question}
                                        </span>
                                        <div className={`shrink-0 w-8 h-8 flex items-center justify-center transition-all duration-300 ${activeIndex === index ? "text-accent rotate-180" : "text-primary/30 group-hover:text-primary"
                                            }`}>
                                            {activeIndex === index ? <Minus className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
                                        </div>
                                    </button>

                                    <AnimatePresence>
                                        {activeIndex === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                                            >
                                                <div className="pb-8 pr-12">
                                                    <p className="text-lg text-primary/60 leading-relaxed text-balance font-medium">
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))}
                        </div>

                        {/* Bottom Tags */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="pt-12 flex flex-wrap gap-x-8 gap-y-3 opacity-30"
                        >
                            {["Digital Marketing", "AI Strategy", "Kannur SEO & Growth"].map((tag, i) => (
                                <span key={i} className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-primary">
                                    {tag}
                                </span>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
