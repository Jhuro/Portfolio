"use client";

import { useEffect, useState } from "react";

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState<string>("");
  const [isSidebarVisible, setIsSidebarVisible] = useState<boolean>(true);
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll<HTMLElement>("section");
      const headerOffset = 300;
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
      const offset = 80;
      const topPosition = section.getBoundingClientRect().top + window.scrollY - offset;
  
      window.scrollTo({
        top: topPosition,
        behavior: "smooth"
      });
  
      setActiveSection(sectionId);
    }
  };

  return (
    <>
      <div
        className={`fixed bg-secondary rounded-lg shadow opacity-70 right-4 top-1/2 transform -translate-y-1/2 p-4 z-10 text-primary transition-transform duration-300 ${
          isSidebarVisible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul>
          <li>
            <button
              onClick={() => scrollToSection("hero")}
              className={`block material-icons py-2 px-4 ${
                activeSection === "hero" ? "text-accent" : ""
              }`}
            >
              home
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("about")}
              className={`block material-icons py-2 px-4 ${
                activeSection === "about" ? "text-accent" : ""
              }`}
            >
              info
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("projects")}
              className={`block material-icons py-2 px-4 ${
                activeSection === "projects" ? "text-accent" : ""
              }`}
            >
              terminal
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("experience")}
              className={`block material-icons py-2 px-4 ${
                activeSection === "experience" ? "text-accent" : ""
              }`}
            >
              school
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("contact")}
              className={`block material-icons py-2 px-4 ${
                activeSection === "contact" ? "text-accent" : ""
              }`}
            >
              call
            </button>
          </li>
        </ul>
      </div>

      <button
        onClick={() => setIsSidebarVisible(!isSidebarVisible)}
        className="fixed bottom-20 right-4 bg-accent text-secondary block material-icons rounded-full p-3 shadow-lg z-20 sm:hidden"
      >
        menu
      </button>
    </>
  );
}