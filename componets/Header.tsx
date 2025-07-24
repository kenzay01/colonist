"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { FaInstagram, FaTelegram, FaWhatsapp } from "react-icons/fa6";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { id: "main", label: "Головна" },
    { id: "conditions", label: "Умови" },
    { id: "details", label: "Деталі" },
    { id: "contacts", label: "Контакти" },
    { id: "request", label: "Заповнити заявку", isButton: true },
  ];

  const socialLinks = [
    { id: "instagram", href: "#", icon: FaInstagram },
    { id: "telegram", href: "#", icon: FaTelegram },
    { id: "whatsapp", href: "#", icon: FaWhatsapp },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    const header = document.querySelector("header");
    if (element && header) {
      const isMobile = window.innerWidth < 768;
      const headerHeight = isMobile ? 64 : header.offsetHeight;
      const elementTop = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementTop - headerHeight,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="relative top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-b-4xl border-3 border-t-0 border-[var(--main-color)]">
        <div className="flex justify-between items-center h-16 ">
          {/* Left side - Social icons */}
          <div className="flex items-center space-x-3">
            {socialLinks.map((social) => (
              <a
                key={social.id}
                href={social.href}
                className="w-10 h-10 bg-[var(--main-color)] rounded-full flex items-center justify-center hover:scale-105 transition-all duration-300"
              >
                <social.icon className="w-5 h-5 text-white" />
              </a>
            ))}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            <div className="flex items-center justify-center space-x-4">
              {navLinks
                .filter((link) => !link.isButton)
                .map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="relative px-2 py-1 flex items-center justify-center text-[15px] overflow-hidden group rounded-full cursor-pointer border-2 border-[var(--main-color)]"
                  >
                    <span className="absolute inset-0 bg-[var(--main-color)] translate-y-[105%] group-hover:translate-y-0 transition-transform duration-300"></span>
                    <span className="relative z-10 text-[var(--main-color)] group-hover:text-white transition-colors duration-300 pt-1">
                      {link.label}
                    </span>
                  </button>
                ))}
            </div>
            <div>
              {navLinks
                .filter((link) => link.isButton)
                .map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="bg-[var(--main-color)] text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 ml-4"
                  >
                    {link.label}
                  </button>
                ))}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-white hover:text-green-400 hover:bg-white/10 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/20 bg-gradient-to-b from-gray-800 to-gray-800/95 backdrop-blur-sm">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) =>
                !link.isButton ? (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="text-left text-white/90 hover:text-green-400 hover:bg-white/10 transition-all duration-200 py-2 px-4 rounded-lg"
                  >
                    {link.label}
                  </button>
                ) : (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="bg-gradient-to-r from-green-400 to-green-500 text-gray-900 px-6 py-3 rounded-lg hover:from-green-500 hover:to-green-600 transition-all duration-200 font-bold text-center mt-2 shadow-lg"
                  >
                    {link.label}
                  </button>
                )
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
