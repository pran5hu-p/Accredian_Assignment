"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "stats", "clients", "edge", "cat", "how-it-works", "faqs", "testimonials"];
      
      let current = "home";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = section;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      if (sectionId === "home") {
        window.history.replaceState(null, "", "/");
      } else {
        window.history.replaceState(null, "", `#${sectionId}`);
      }
      
      setActiveSection(sectionId);
    }
  };

  const getLinkClass = (sectionId) => {
    return activeSection === sectionId
      ? "text-[#1b62cc] border-b-2 border-[#1b62cc] py-1"
      : "text-gray-900 hover:text-[#1b62cc] transition-colors py-1";
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-[0_2px_15px_rgba(0,0,0,0.06)]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" onClick={(e) => handleNavClick(e, "home")} className="flex-shrink-0 pt-1">
          <Image 
            src="/logo.webp" 
            alt="Accredian Logo" 
            width={160} 
            height={45} 
            className="w-auto h-10 md:h-12 object-contain"
            priority 
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8 text-[15px] font-medium">
          <a href="#home" onClick={(e) => handleNavClick(e, "home")} className={getLinkClass("home")}>Home</a>
          <a href="#stats" onClick={(e) => handleNavClick(e, "stats")} className={getLinkClass("stats")}>Stats</a>
          <a href="#clients" onClick={(e) => handleNavClick(e, "clients")} className={getLinkClass("clients")}>Clients</a>
          <a href="#edge" onClick={(e) => handleNavClick(e, "edge")} className={getLinkClass("edge")}>Accredian Edge</a>
          <a href="#cat" onClick={(e) => handleNavClick(e, "cat")} className={getLinkClass("cat")}>CAT</a>
          <a href="#how-it-works" onClick={(e) => handleNavClick(e, "how-it-works")} className={getLinkClass("how-it-works")}>How It Works</a>
          <a href="#faqs" onClick={(e) => handleNavClick(e, "faqs")} className={getLinkClass("faqs")}>FAQs</a>
          <a href="#testimonials" onClick={(e) => handleNavClick(e, "testimonials")} className={getLinkClass("testimonials")}>Testimonials</a>
        </div>

        {/* Mobile Hamburger Icon */}
        <button className="lg:hidden text-gray-900 focus:outline-none">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

      </div>
    </nav>
  );
}