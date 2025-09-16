import React from "react";
import Header from "../components/Landing/Header";
import HeroSection from "../components/Landing/HeroSection";
import AboutUs from "../components/Landing/AboutUs";
import Services from "../components/Landing/Services";

export default function Landing() {
  return (
    <>
      <Header />
      <main className="">
        <HeroSection />
        <AboutUs />
        <Services />
      </main>
    </>
  );
}
