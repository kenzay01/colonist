"use client";
import React from "react";
import { FaInstagram, FaTelegram, FaViber } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer id="contacts" className="bg-[var(--main-color)] text-white">
      <style jsx>{`
        :root {
          --main-color: #10315e;
          --secondary-color: #1a4a7a;
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 mb-8 text-center sm:text-left">
          {/* About Us */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4">Про нас</h3>
            <p className="text-sm sm:text-base">
              Ми — команда, що допомагає знаходити таланти та створювати успішні
              кар’єри. Дізнайтесь більше про нашу місію!
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4">Контакти</h3>
            <p className="text-sm sm:text-base">Email: info@example.com</p>
            <p className="text-sm sm:text-base">Телефон: +380 123 456 789</p>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4">
              Стежте за нами
            </h3>
            <div className="flex space-x-4 items-center justify-center sm:justify-start">
              <a
                href="#"
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-[var(--secondary-color)] transition-all duration-300"
              >
                <FaInstagram className="w-4 h-4 text-white" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-[var(--secondary-color)] transition-all duration-300"
              >
                <FaTelegram className="w-4 h-4 text-white" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-[var(--secondary-color)] transition-all duration-300"
              >
                <FaViber className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm sm:text-base pt-6 border-t border-white/20">
          © {new Date().getFullYear()} COLONIST. Усі права захищені.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
