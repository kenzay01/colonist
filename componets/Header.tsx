"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { FaInstagram, FaTelegram, FaViber } from "react-icons/fa6";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    // { id: "main", label: "Головна" },
    { id: "aboutUs", label: "Про нас" },
    { id: "details", label: "Деталі" },
    { id: "contacts", label: "Контакти" },
    { id: "request", label: "Заповнити заявку", isButton: true },
  ];

  const socialLinks = [
    {
      id: "instagram",
      href: "https://www.instagram.com/colonist.agency",
      icon: FaInstagram,
    },
    { id: "telegram", href: "https://t.me/+380661851900", icon: FaTelegram },
    { id: "viber", href: "https://tinyurl.com/colonist-agency", icon: FaViber },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    const header = document.querySelector("header");
    if (element && header) {
      const isMobile = window.innerWidth < 768;
      const headerHeight = isMobile ? 48 : 0;
      const elementTop = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementTop - headerHeight,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 bg-[var(--main-color)] rounded-b-2xl border-1 border-t-0 border-white">
        <div className="flex justify-between items-center h-12 sm:h-16">
          {/* Left side - Social icons */}
          <div className="flex items-center space-x-1 sm:space-x-3">
            {socialLinks.map((social) => (
              <a
                key={social.id}
                href={social.href}
                className="w-7 h-7 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center hover:scale-105 transition-all duration-300"
              >
                <social.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--main-color)]" />
              </a>
            ))}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden sm:flex items-center space-x-4">
            <div className="flex items-center justify-center space-x-4">
              {navLinks
                .filter((link) => !link.isButton)
                .map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="relative px-2 py-1 flex items-center justify-center text-[15px] overflow-hidden group rounded-full cursor-pointer border-2 border-white"
                  >
                    <span className="absolute inset-0 bg-white translate-y-[105%] group-hover:translate-y-0 transition-transform duration-300"></span>
                    <span className="relative z-10 text-white group-hover:text-[var(--main-color)] transition-colors duration-300 pt-1">
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
                    className="bg-white text-[var(--main-color)] font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 ml-4"
                  >
                    {link.label}
                  </button>
                ))}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="sm:hidden p-2 sm:p-3 rounded-lg text-white hover:bg-[var(--main-color)]/10 transition-colors active:bg-white/20"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X size={18} className="sm:size-6" />
            ) : (
              <Menu size={18} className="sm:size-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="sm:hidden py-3 border-t border-white/20 backdrop-blur-sm">
            <nav className="flex flex-col space-y-1 px-3 sm:px-4">
              {navLinks.map((link) =>
                !link.isButton ? (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="text-left text-[var(--main-color)] bg-white transition-all duration-200 py-2 px-4 rounded-lg text-sm sm:text-base"
                  >
                    {link.label}
                  </button>
                ) : (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="bg-white text-[var(--main-color)] px-6 py-2 rounded-lg transition-all duration-200 font-bold text-center mt-2 shadow-lg text-sm sm:text-base"
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
