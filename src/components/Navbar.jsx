import React from "react";
import "./Navbar.css";

const Navbar = ({ isVisible, activeSection }) => {
  const getLinkClass = (section) => {
    return activeSection === section ? "active" : "";
  };

  return (
    <nav className={`navbar ${isVisible ? "visible" : ""}`}>
      <a href="#header" className={getLinkClass("header")}>
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
