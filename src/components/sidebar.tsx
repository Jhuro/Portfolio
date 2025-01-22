"use client";

import { useEffect, useState } from "react";

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll<HTMLElement>("section");
      const headerOffset = 80;
      let currentSectionId = "";
  
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top - headerOffset;
        const sectionBottom = rect.bottom - headerOffset;
        if (sectionTop <= 0 && sectionBottom > 0) {
          currentSectionId = section.id;
        }
      });
  
      if (currentSectionId) {
        setActiveSection(currentSectionId);
      }
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 60;
      const topPosition = section.getBoundingClientRect().top + window.scrollY - offset;
  
      window.scrollTo({
        top: topPosition,
        behavior: "smooth"
      });
  
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 p-4 z-10 text-primary">
      <ul>
      <li>
          <button
            onClick={() => scrollToSection("hero")}
            className={`block material-icons py-2 px-4  ${
              activeSection === "hero" ? "text-accent" : "hover:bg-gray-700"
            }`}
          >
            home
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("about")}
            className={`block material-icons py-2 px-4  ${
              activeSection === "about" ? "text-accent" : "hover:bg-gray-700"
            }`}
          >
            info
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("projects")}
            className={`block material-icons py-2 px-4  ${
              activeSection === "projects" ? "text-accent" : "hover:bg-gray-700"
            }`}
          >
            terminal
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("experience")}
            className={`block material-icons py-2 px-4  ${
              activeSection === "experience" ? "text-accent" : "hover:bg-gray-700"
            }`}
          >
            school
          </button>
        </li>
      </ul>
    </div>
  );
}