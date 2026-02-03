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
const Contact = dynamic(() => import("@/components/sections/Contact"));
const Footer = dynamic(() => import("@/components/layout/Footer"));
const ChatbotWrapper = dynamic(() => import("@/components/chat/ChatbotWrapper").then(mod => ({ default: mod.ChatbotWrapper })));


export default function Home() {
  return (
    <main className="min-h-screen bg-cream selection:bg-accent/30 selection:text-accent overflow-x-hidden">
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
