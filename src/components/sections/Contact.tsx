import React from "react";
import {
    MapPin,
    Globe,
    Sparkles
} from "lucide-react";
import { ContactInfoMotion, ContactBadgeMotion, ContactFormWrapperMotion } from "./contact/ContactWrappers";
import { ContactForm } from "./contact/ContactForm";

export default function Contact() {
    return (
        <section id="contact" className="relative py-16 md:py-24 overflow-hidden bg-primary">
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
                    <ContactInfoMotion>
                        <div className="space-y-6">
                            <ContactBadgeMotion>
                                <Sparkles className="w-4 h-4 text-accent" />
                                Get In Touch
                            </ContactBadgeMotion>

                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                                Let’s Talk About <span className="text-accent">Your Business Growth</span> with the Best Freelance Digital Marketer in Kannur
                            </h2>

                            <p className="text-lg text-white/70 leading-relaxed max-w-xl">
                                Have a question or project in mind? Get in touch with the best freelance digital marketer in Kannur for AI-first SEO, performance marketing, and growth-focused digital strategies. I respond within 24 hours.
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
                                    <span className="font-bold">Kannur, Kerala & Remote Businesses</span>
                                </div>
                            </div>
                        </div>
                    </ContactInfoMotion>

                    {/* Right Side: Contact Form */}
                    <ContactFormWrapperMotion>
                        <ContactForm />

                        {/* Form Background Accent */}
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl -z-10" />
                    </ContactFormWrapperMotion>
                </div>

                {/* Footer SEO & Keywords */}
                <div className="mt-16 md:mt-24 pt-8 md:pt-12 border-t border-white/10 text-center space-y-6">
                    <p className="text-xs sm:text-sm text-white/40 font-medium max-w-3xl mx-auto leading-relaxed">
                        Providing AI-first digital marketing services in Kannur and Kerala, including SEO, performance marketing, and conversion optimization.
                    </p>
                </div>
            </div>
        </section>
    );
}
