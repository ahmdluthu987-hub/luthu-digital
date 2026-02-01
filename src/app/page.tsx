import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import ProcessSection from "@/components/ProcessSection";
import ToolsMarquee from "@/components/ToolsMarquee";
import Testimonials from "@/components/Testimonials";
import FAQSection from "@/components/FAQSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-cream selection:bg-accent/30 selection:text-accent">
      <Navbar />
      <Hero />
      <AboutSection />
      <Services />
      <ProcessSection />
      <ToolsMarquee />
      <Testimonials />
      <FAQSection />
      <Contact />
      <Footer />
    </main>
  );
}
