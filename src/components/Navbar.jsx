import React from "react";
import "./Navbar.css";

const Navbar = ({ isVisible, activeSection, hideNavbar, setActiveSection }) => {
  const getLinkClass = (section) => {
    return activeSection === section ? "active" : "";
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    hideNavbar();
    setActiveSection("header");
    document.getElementById("header").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`navbar ${isVisible ? "visible" : ""}`}>
      <a href="#header" className={getLinkClass("header")} onClick={handleHomeClick}>
        Home
      </a>
      <a href="#timeline" className={getLinkClass("timeline")}>
        Timeline
      </a>
      <a href="#projects" className={getLinkClass("projects")}>
        Projects
      </a>
      <a href="#skills" className={getLinkClass("skills")}>
        Skills
      </a>
      <a href="#publications" className={getLinkClass("publications")}>
        Publications
      </a>
    </nav>
  );
};

export default Navbar;
