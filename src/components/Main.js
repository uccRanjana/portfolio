import React from "react";

import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ProjectsSection from "./ProjectsSection";
import ContactSection from "./ContactSection";
import Apidemo from "./Apidemo";
import Footer from "./Footer";
import EducationSection from "./SkillsSection";
import Projects3DStack from "./ProjectsSection";

export default function Main() {
  const handleNavClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const gradientBg = "linear-gradient(135deg, #fff5f7, #f0f9ff, #ffffff)";

  return (
    <div
      className="min-h-screen font-sans text-gray-900 flex flex-col"
      style={{ background: gradientBg }}
    >
      <Navbar onNavClick={handleNavClick} />
      <HeroSection />
      <div>
        <AboutSection />
      </div>
      <div style={{ height: "90vh", overflow: "hidden" }}>
        <ProjectsSection />
      </div>

      <div className="md:w-1/3 mx-auto">
        <EducationSection />
      </div>
      <ContactSection />
      <Apidemo />
      <Footer />
    </div>
  );
}

