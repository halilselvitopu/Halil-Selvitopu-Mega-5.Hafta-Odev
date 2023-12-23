// Portfolio.js
import React from "react";
import Menu from "./Menu";
import AboutMe from "./AboutMe";
import ProjectsSection from "./ProjectsSection";
import SkillsSection from "./HobiesSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import "./Portfolio.css";

const Portfolio = () => {
  const skills = ["Kodlama", "Futbol", "Basketbol", "Müzik Dinlemek", "Yürüyüş Yapmak"];

  const handleEmailClick = () => {
    
    window.location.href = "mailto:halilselvitopu@gmail.com";
  };

  const handleLinkedInClick = () => {
    
    window.open("https://www.linkedin.com/in/halil-selvitopu-2292b6246/");
  };

  return (
    <div className="portfolio-container">
      <Menu />
      <AboutMe />
      <ProjectsSection />
      <SkillsSection skills={skills} />
      <ContactSection
        handleEmailClick={handleEmailClick}
        handleLinkedInClick={handleLinkedInClick}
      />
      <Footer />
    </div>
  );
};

export default Portfolio;
