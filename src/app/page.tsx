import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";
import AboutSection from "@/components/sections/AboutSection";
import Navbar from "@/components/layout/Navbar";

// Lazy load below-the-fold components to improve initial load time
const Services = dynamic(() => import("@/components/sections/Services"));
const WhyChooseMe = dynamic(() => import("@/components/sections/WhyChooseMe"));
const Certifications = dynamic(() => import("@/components/sections/Certifications"));
const Testimonials = dynamic(() => import("@/components/sections/Testimonials"));
const FAQSection = dynamic(() => import("@/components/sections/FAQSection"));
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
const ChatbotWrapper = dynamic(() => import("@/components/chat/ChatbotWrapper").then(mod => ({ default: mod.ChatbotWrapper })));


import HashScroller from "@/components/utils/HashScroller";

export default function Home() {
  return (
    <main className="min-h-screen bg-cream selection:bg-accent/30 selection:text-accent overflow-x-hidden">
      <HashScroller />
      <Navbar />
      <Hero />
      <AboutSection />
      <Services />
      <WhyChooseMe />
      <Certifications />
      <Testimonials />
      <FAQSection />
      <Contact />
      <Footer />
      <ChatbotWrapper />
    </main>
  );
}
