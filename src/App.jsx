import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Timeline from "./components/Timeline";
import Skills from "./components/Skills";
import Publications from "./components/Publications";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";

function App() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("header");

  useEffect(() => {
    const header = document.getElementById("header");

    const handleScroll = () => {
      // Navbar visibility
      if (header && window.scrollY > header.offsetHeight) {
        setIsNavbarVisible(true);
      } else {
        setIsNavbarVisible(false);
      }

      // Active section highlighting
      const sections = document.querySelectorAll(".scroll-target");
      let currentSection = "header";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 101) {
          currentSection = section.id;
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const hideNavbar = () => {
    setIsNavbarVisible(false);
  };

  const handleSetActiveSection = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="container">
      <Navbar
        isVisible={isNavbarVisible}
        activeSection={activeSection}
        hideNavbar={hideNavbar}
        setActiveSection={handleSetActiveSection}
      />
      <div id="header" className="scroll-target">
        <Header />
      </div>
      <div id="timeline" className="scroll-target">
        <Timeline />
      </div>
      <div id="projects" className="scroll-target">
        <Projects />
      </div>
      <div id="skills" className="scroll-target">
        <Skills />
      </div>
      <div id="publications" className="scroll-target">
        <Publications />
      </div>
    </div>
  );
}

export default App;
