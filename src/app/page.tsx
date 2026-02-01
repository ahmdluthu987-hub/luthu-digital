import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import WhyChooseMe from "@/components/WhyChooseMe";
import Certifications from "@/components/Certifications";
import Testimonials from "@/components/Testimonials";
import FAQSection from "@/components/FAQSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

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
    </main>
  );
}
