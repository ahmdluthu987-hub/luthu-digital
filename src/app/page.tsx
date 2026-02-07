import Hero from "@/components/sections/Hero";
import AboutSection from "@/components/sections/AboutSection";
import Navbar from "@/components/layout/Navbar";
import HashScroller from "@/components/utils/HashScroller";
import HomeLazySections from "@/components/HomeLazySections";

export default function Home() {
  return (
    <main className="min-h-screen bg-cream selection:bg-accent/30 selection:text-accent overflow-x-hidden">
      <HashScroller />
      <Navbar />
      <Hero />
      <AboutSection />
      <HomeLazySections />
    </main>
  );
}
