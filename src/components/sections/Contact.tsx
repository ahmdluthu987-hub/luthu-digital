"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Send,
    ArrowRight,
    MapPin,
    Globe,
    CheckCircle2,
    Sparkles,
    AlertCircle,
    Loader2
} from "lucide-react";

export default function Contact() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    // Form State
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    // Handle Input Changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    // Handle Form Submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");

        try {
            // Client-side validation (double check)
            if (!formData.name || !formData.email || !formData.message) {
                throw new Error("Please fill in all fields.");
            }

            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || "Failed to send message.");
            }

            // Success
            setStatus("success");
            setFormData({ name: "", email: "", message: "" });

            // Reset status after showing success message (optional, but keeps it clean)
            // User requested "Show confirmation message" - we keep it visible until they dismiss or navigate, 
            // but the prompt says "Clear form after successful submission". 
            // We'll keep the success state visible for a bit or let user click to send another.

        } catch (error: unknown) {
            console.error("Error submitting form:", error);
            setStatus("error");
            if (error instanceof Error) {
                setErrorMessage(error.message || "Something went wrong. Please try again.");
            } else {
                setErrorMessage("Something went wrong. Please try again.");
            }
        }
    };

    return (
        <section id="contact" className="relative py-24 overflow-hidden bg-primary">
            {/* Background Visuals */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-accent opacity-10 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white opacity-5 rounded-full blur-[120px]" />
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}
                />
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Side: Info & Text */}
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
                                Get In Touch
                            </motion.div>

                            <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight">
                                Let’s Talk About <span className="text-accent">Your Growth</span>
                            </h2>

                            <p className="text-lg text-white/70 leading-relaxed max-w-xl">
                                Have a question or project in mind? Send us a message and we’ll respond shortly.
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
                        </div>
                    </motion.div>

                    {/* Right Side: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="bg-white rounded-[2.5rem] p-8 lg:p-12 shadow-2xl relative z-10 box-border">
                            <AnimatePresence mode="wait">
                                {status === "success" ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        className="flex flex-col items-center justify-center py-12 text-center space-y-4"
                                    >
                                        <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-4 shadow-inner">
                                            <CheckCircle2 className="w-10 h-10" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-primary">Message Sent Successfully!</h3>
                                        <p className="text-foreground/60 max-w-xs text-balance">
                                            Thank you! We’ll get back to you shortly.
                                        </p>
                                        <button
                                            onClick={() => setStatus("idle")}
                                            className="mt-8 text-sm font-bold text-accent hover:text-accent/80 transition-colors uppercase tracking-widest"
                                        >
                                            Send another message
                                        </button>
                                    </motion.div>
                                ) : (
                                    <motion.form
                                        key="form"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        onSubmit={handleSubmit}
                                        className="space-y-6"
                                    >
                                        {/* Error Alert */}
                                        {status === "error" && (
                                            <motion.div
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="p-4 rounded-xl bg-red-50 border border-red-100 flex items-start gap-3 text-red-600"
                                            >
                                                <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                                                <p className="text-sm font-medium">{errorMessage}</p>
                                            </motion.div>
                                        )}

                                        <div className="space-y-2">
                                            <label htmlFor="name" className="text-xs font-black uppercase tracking-widest text-primary/40 pl-2">Full Name</label>
                                            <input
                                                id="name"
                                                name="name"
                                                type="text"
                                                required
                                                placeholder="Enter your full name"
                                                className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/10 focus:bg-white transition-all text-primary font-medium placeholder:text-gray-300"
                                                value={formData.name}
                                                onChange={handleChange}
                                                disabled={status === "loading"}
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-xs font-black uppercase tracking-widest text-primary/40 pl-2">Email Address</label>
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                required
                                                placeholder="Enter your email address"
                                                className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/10 focus:bg-white transition-all text-primary font-medium placeholder:text-gray-300"
                                                value={formData.email}
                                                onChange={handleChange}
                                                disabled={status === "loading"}
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="message" className="text-xs font-black uppercase tracking-widest text-primary/40 pl-2">Message</label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                rows={4}
                                                required
                                                placeholder="How can we help you?"
                                                className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/10 focus:bg-white transition-all text-primary font-medium resize-none placeholder:text-gray-300"
                                                value={formData.message}
                                                onChange={handleChange}
                                                disabled={status === "loading"}
                                            />
                                        </div>

                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            disabled={status === "loading"}
                                            className="w-full py-5 bg-primary text-white font-black text-xl rounded-2xl flex items-center justify-center gap-3 shadow-xl transition-all group disabled:opacity-70 disabled:cursor-not-allowed"
                                            type="submit"
                                        >
                                            {status === "loading" ? (
                                                <>
                                                    <Loader2 className="w-5 h-5 animate-spin" />
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    Send Message
                                                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                                </>
                                            )}
                                        </motion.button>
                                    </motion.form>
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
}
