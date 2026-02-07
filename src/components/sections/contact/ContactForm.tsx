"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { ContactFormContentMotion } from "./ContactWrappers";

export const ContactForm = () => {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");

        try {
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

            setStatus("success");
            setFormData({ name: "", email: "", message: "" });
        } catch (error: unknown) {
            console.error("Error submitting form:", error);
            setStatus("error");
            setErrorMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
        }
    };

    return (
        <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8 lg:p-12 shadow-2xl relative z-10 box-border">
            <ContactFormContentMotion status={status}>
                {status === "success" ? (
                    <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
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
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {status === "error" && (
                            <div className="p-4 rounded-xl bg-red-50 border border-red-100 flex items-start gap-3 text-red-600">
                                <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                                <p className="text-sm font-medium">{errorMessage}</p>
                            </div>
                        )}

                        <div className="space-y-2">
                            <label htmlFor="name" className="text-xs font-black uppercase tracking-widest text-primary/40 pl-2">Full Name</label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                placeholder="Enter your full name"
                                className="w-full px-5 py-3 md:px-6 md:py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/10 focus:bg-white transition-all text-primary font-medium placeholder:text-gray-300 text-base"
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
                                className="w-full px-5 py-3 md:px-6 md:py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/10 focus:bg-white transition-all text-primary font-medium placeholder:text-gray-300 text-base"
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
                                className="w-full px-5 py-3 md:px-6 md:py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/10 focus:bg-white transition-all text-primary font-medium resize-none placeholder:text-gray-300 text-base"
                                value={formData.message}
                                onChange={handleChange}
                                disabled={status === "loading"}
                            />
                        </div>

                        <button
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
                        </button>
                        <p className="text-center text-xs font-bold uppercase tracking-widest text-[#B4B4B4]">
                            Response time: &lt; 24 Hours
                        </p>
                    </form>
                )}
            </ContactFormContentMotion>
        </div>
    );
};
