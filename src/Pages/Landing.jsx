import React, { useState } from "react";
import Header from "../components/Landing/Header";
import HeroSection from "../components/Landing/HeroSection";
import AboutUs from "../components/Landing/AboutUs";
import Services from "../components/Landing/Services";
import Footer from "../components/Landing/Footer";
import Contact from "../components/Landing/Contact";
import Navbar from "../components/Landing/Navbar";

export default function Landing() {
  const [on, setOn] = useState(false);
  return (
    <>
      <Navbar on={on} setOn={setOn} />
      <Header setOn={setOn} on={on} />
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
