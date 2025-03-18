import React from "react";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import FeaturesSection from "./FeaturesSection";
import FAQSection from "./FAQSection";
import Footer from "./Footer";

const Home = () => {
  return (
    <main className="overflow-hidden w-full bg-[#171717]">
      <section id="home">
        <HeroSection />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="features">
        <FeaturesSection />
      </section>
      <section id="faq">
        <FAQSection />
      </section>
      <Footer />
    </main>
  );
};

export default Home;