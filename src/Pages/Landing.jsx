import React from "react";
import Header from "../components/Landing/Header";
import HeroSection from "../components/Landing/HeroSection";
import AboutUs from "../components/Landing/AboutUs";
import Services from "../components/Landing/Services";
import Footer from "../components/Landing/Footer";
import Contact from "../components/Landing/Contact";

export default function Landing() {
  return (
    <>
      <Header />
      <main className="">
        <HeroSection />
        <AboutUs />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
