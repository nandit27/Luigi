import React from "react";
import Nav from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SpeakersSection from "./components/SpeakersSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";

const LandingPage = () => {
  return (
    <main className="overflow-hidden w-full bg-[#171717]">
      <Nav />
      <HeroSection />
      <AboutSection />
      <SpeakersSection />
      <FAQSection />
      <Footer />
    </main>
  );
};

export default LandingPage;
