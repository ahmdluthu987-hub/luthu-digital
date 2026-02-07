"use client";

import React from "react";
import dynamic from "next/dynamic";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

// Lazy load below-the-fold components
const Services = dynamic(() => import("@/components/sections/Services"), { ssr: false });
const WhyChooseMe = dynamic(() => import("@/components/sections/WhyChooseMe"), { ssr: false });
const Certifications = dynamic(() => import("@/components/sections/Certifications"), { ssr: false });
const Testimonials = dynamic(() => import("@/components/sections/Testimonials"), { ssr: false });
const HomeBlogSection = dynamic(() => import("@/components/sections/HomeBlogSection"), { ssr: false });
const FAQSection = dynamic(() => import("@/components/sections/FAQSection"), { ssr: false });
const LazyChatbot = dynamic(() => import("@/components/chat/LazyChatbot"), { ssr: false });

const HomeLazySections = () => {
    return (
        <>
            <Services />
            <WhyChooseMe />
            <Certifications />
            <Testimonials />
            <HomeBlogSection />
            <FAQSection />
            <Contact />
            <Footer />
            <LazyChatbot />
        </>
    );
};

export default HomeLazySections;
