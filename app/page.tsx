"use client";

import Navbar from "../components/Navbar";
import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import Products from "../components/Products/Products";
import Services from "../components/services/Services";
import Manufacturing from "../components/Manufacturing";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Products />
        <Services />
        <Manufacturing />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
    