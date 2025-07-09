import React from "react";

import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ProjectsSection from "./ProjectsSection";
import ContactSection from "./ContactSection";
import Apidemo from "./Apidemo";
import Footer from "./Footer";
import EducationSection from "./SkillsSection";

export default function Main() {
  const handleNavClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div
      className="min-h-screen font-sans text-[#2c3e50]" // dark slate gray text
      style={{ backgroundColor: "#f9fafb" }} // soft off-white background
    >
      <Navbar onNavClick={handleNavClick} />

      {/* Hero: full white bg for clean start */}
      <section style={{ backgroundColor: "#ffffff" }}>
        <HeroSection />
      </section>

      {/* About: very light pastel blue background */}
      <section style={{ backgroundColor: "#e8f1fa" }}>
        <AboutSection />
      </section>

      {/* Projects: white background, keep consistent */}
      <section
        style={{
          backgroundColor: "#ffffff",
          height: "90vh",
          overflow: "hidden",
        }}
      >
        <ProjectsSection />
      </section>

      {/* Skills: soft pink background for accent */}

      {/* <section style={{ backgroundColor: "#FAD4E6" }}> */}
      <div className="md:w-1/3 mx-auto">
        <EducationSection />
      </div>
      {/* </section> */}

      {/* Contact: back to light pastel blue */}
      <section style={{ backgroundColor: "#e8f1fa" }}>
        <ContactSection />
      </section>


      {/* Footer: dark background for contrast */}
      <footer style={{ backgroundColor: "#BE185D", color: "#fff" }}>
        <Footer />
      </footer>
    </div>
  );
}
