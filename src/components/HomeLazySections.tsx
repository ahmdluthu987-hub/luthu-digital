import React, { Suspense } from "react";
import Services from "@/components/sections/Services";
import WhyChooseMe from "@/components/sections/WhyChooseMe";
import Certifications from "@/components/sections/Certifications";
import Testimonials from "@/components/sections/Testimonials";
import HomeBlogSection from "@/components/sections/HomeBlogSection";
import FAQSection from "@/components/sections/FAQSection";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import LazyChatbot from "@/components/chat/LazyChatbot";

const SectionLoader = () => (
    <div className="w-full h-48 flex items-center justify-center bg-[#FDFCF8]/50 animate-pulse rounded-3xl mb-8">
        <div className="w-12 h-12 border-4 border-accent/20 border-t-accent rounded-full animate-spin" />
    </div>
);

const HomeLazySections = () => {
    return (
        <>
            <Suspense fallback={<SectionLoader />}>
                <Services />
            </Suspense>
            <Suspense fallback={<SectionLoader />}>
                <WhyChooseMe />
            </Suspense>
            <Suspense fallback={<SectionLoader />}>
                <Certifications />
            </Suspense>
            <Suspense fallback={<SectionLoader />}>
                <Testimonials />
            </Suspense>
            <Suspense fallback={<SectionLoader />}>
                <HomeBlogSection />
            </Suspense>
            <Suspense fallback={<SectionLoader />}>
                <FAQSection />
            </Suspense>
            <Suspense fallback={<SectionLoader />}>
                <Contact />
            </Suspense>
            <Footer />
            <LazyChatbot />
        </>
    );
};

export default HomeLazySections;
