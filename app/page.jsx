import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Skills from "@/components/Skills";

const Home = () => {
  return (
    <div className="bg-[#2c2c2c] text-white h-screen snap-y snap-mandatory overflow-scroll scroll-smooth z-0">
      <Header />

      <section className="snap-start">
        <Hero />
      </section>
      <section id="about" className="snap-start">
        <About />
      </section>
      <section id="experience" className="snap-start">
        <Experience />
      </section>
      <section id="skills" className="snap-start">
        <Skills />
      </section>
      <section id="projects" className="snap-start">
        <Certifications />
      </section>
      <section id="contact" className="snap-start">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
