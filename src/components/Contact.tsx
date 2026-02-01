"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Send,
    ArrowRight,
    MapPin,
    Globe,
    MessageSquare,
    CheckCircle2,
    Sparkles
} from "lucide-react";

const FinalContact = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate form submission
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 5000);
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <section id="contact" className="relative py-24 overflow-hidden bg-primary">
            {/* Background Abstract AI Shapes */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-accent opacity-10 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white opacity-5 rounded-full blur-[120px]" />

                {/* Decorative Grid Overlay */}
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}
                />
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Side: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-sm font-bold uppercase tracking-widest"
                            >
                                <Sparkles className="w-4 h-4 text-accent" />
                                Let's Build Your Future
                            </motion.div>

                            <h2 className="text-4xl lg:text-6xl font-black text-white leading-tight">
                                Ready to Grow Your Business with <span className="text-accent">AI-First</span> Marketing?
                            </h2>

                            <p className="text-xl text-white/70 leading-relaxed max-w-xl">
                                Let’s build smart, data-driven marketing strategies that help your business grow in <span className="text-white font-bold underline decoration-accent/50 underline-offset-4">Kannur</span> & across Kerala.
                            </p>
                        </div>

                        <div className="space-y-6 pt-4">
                            <div className="flex items-center gap-4 text-white/80 group">
                                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-accent transition-all duration-300">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs uppercase font-black tracking-widest text-white/40">Location</span>
                                    <span className="font-bold">Kannur, Kerala</span>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 text-white/80 group">
                                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-accent transition-all duration-300">
                                    <Globe className="w-5 h-5" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs uppercase font-black tracking-widest text-white/40">Service Area</span>
                                    <span className="font-bold">Kerala & Remote</span>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8 flex flex-col sm:flex-row gap-4">
                            <motion.button
                                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255, 107, 53, 0.4)" }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-accent text-white font-black text-lg rounded-xl flex items-center gap-3 justify-center shadow-2xl"
                            >
                                Get Free Marketing Audit
                                <ArrowRight className="w-5 h-5" />
                            </motion.button>

                            <motion.button
                                whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                                className="px-8 py-4 bg-transparent border-2 border-white/20 text-white font-black text-lg rounded-xl flex items-center gap-3 justify-center transition-all"
                            >
                                Contact Me
                                <MessageSquare className="w-5 h-5" />
                            </motion.button>
                        </div>
                    </motion.div>

                    {/* Right Side: Mini Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="bg-white rounded-[2.5rem] p-8 lg:p-12 shadow-2xl relative z-10">
                            <AnimatePresence mode="wait">
                                {!isSubmitted ? (
                                    <motion.form
                                        key="form"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        onSubmit={handleSubmit}
                                        className="space-y-6"
                                    >
                                        <div className="space-y-2">
                                            <label className="text-xs font-black uppercase tracking-widest text-primary/40 pl-2">Full Name</label>
                                            <input
                                                type="text"
                                                required
                                                placeholder="e.g., Salman Khan"
                                                className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/10 focus:bg-white transition-all text-primary font-medium"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-xs font-black uppercase tracking-widest text-primary/40 pl-2">Email Address</label>
                                            <input
                                                type="email"
                                                required
                                                placeholder="salman@example.com"
                                                className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/10 focus:bg-white transition-all text-primary font-medium"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-xs font-black uppercase tracking-widest text-primary/40 pl-2">Business / Message</label>
                                            <textarea
                                                rows={3}
                                                required
                                                placeholder="Tell me about your business..."
                                                className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/10 focus:bg-white transition-all text-primary font-medium resize-none"
                                                value={formData.message}
                                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            />
                                        </div>

                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="w-full py-5 bg-primary text-white font-black text-xl rounded-2xl flex items-center justify-center gap-3 shadow-xl transition-all group"
                                            type="submit"
                                        >
                                            Let's Talk
                                            <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        </motion.button>
                                    </motion.form>
                                ) : (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="flex flex-col items-center justify-center py-12 text-center space-y-4"
                                    >
                                        <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-4">
                                            <CheckCircle2 className="w-10 h-10" />
                                        </div>
                                        <h3 className="text-3xl font-bold text-primary">Message Sent!</h3>
                                        <p className="text-foreground/60 max-w-xs">
                                            Thanks for reaching out! I'll get back to you within 24 hours.
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Form Background Accent */}
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl -z-10" />
                    </motion.div>
                </div>

                {/* Footer SEO & Keywords */}
                <div className="mt-24 pt-12 border-t border-white/10 text-center space-y-6">
                    <p className="text-sm text-white/40 font-medium">
                        AI-first digital marketing services for businesses in <span className="text-white/60">Kannur & Kerala</span> — SEO, SMM, SEM, and performance marketing.
                    </p>

                    <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 opacity-20 text-[10px] font-black uppercase tracking-[0.4em] text-white">
                        <span>#AIFirstDigitalMarketingExpertKannur</span>
                        <span>#DigitalMarketingConsultantKannur</span>
                        <span>#SEOSMMSEMKerala</span>
                        <span>#KannurDigitalMarketingServices</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FinalContact;
