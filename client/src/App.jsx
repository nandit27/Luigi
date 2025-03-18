import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import FeaturesSection from "./components/FeaturesSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";

const LandingPage = () => {
  return (
    <main className="overflow-hidden w-full bg-[#171717]">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <FAQSection />
      <Footer />
    </main>
  );
};

export default LandingPage;
