"use client";

import { useEffect, useState } from "react";

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll<HTMLElement>("section");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 0 && rect.bottom >= 0) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 p-4 z-10">
      <ul>
      <li>
          <button
            onClick={() => scrollToSection("hero")}
            className={`block material-icons py-2 px-4 hover:bg-gray-700 ${
              activeSection === "hero" ? "text-accent" : ""
            }`}
          >
            home
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("about")}
            className={`block material-icons py-2 px-4 hover:bg-gray-700 ${
              activeSection === "about" ? "text-accent" : ""
            }`}
          >
            info
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("projects")}
            className={`block material-icons py-2 px-4 hover:bg-gray-700 ${
              activeSection === "projects" ? "text-accent" : ""
            }`}
          >
            terminal
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("experience")}
            className={`block material-icons py-2 px-4 hover:bg-gray-700 ${
              activeSection === "experience" ? "text-accent" : ""
            }`}
          >
            school
          </button>
        </li>
      </ul>
    </div>
  );
}