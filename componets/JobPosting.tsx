"use client";
import React, { useState } from "react";
import {
  FaDollarSign,
  FaGift,
  FaClock,
  FaUsers,
  FaStar,
  FaCoffee,
  FaCar,
  FaGamepad,
  FaCalendarAlt,
  FaTrophy,
  FaMoneyBillWave,
  FaPercentage,
  FaFire,
  FaChartLine,
  FaMedal,
  FaHandshake,
  FaPhoneSlash,
  FaBuilding,
  FaArrowDown,
  FaArrowUp,
  FaWhatsapp,
  FaTelegram,
} from "react-icons/fa";
import { FaArrowTrendUp, FaViber } from "react-icons/fa6";

const JobPosting = () => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const toggleDetails = () => {
    setIsDetailsOpen(!isDetailsOpen);
  };

  return (
    <div
      id="details"
      className="bg-white text-[var(--main-color)] min-h-screen p-4 sm:p-6 py-12 sm:py-16 relative overflow-hidden"
    >
      <div className="relative z-10 w-full">
        {/* Main heading */}
        <div className="text-center mb-8 sm:mb-12 py-6 sm:py-8 max-w-6xl mx-auto">
          <h1 className="text-4xl sm:text-6xl custom-text md:text-8xl mb-4 text-[var(--main-color)] flex items-center justify-center gap-2 sm:gap-4">
            RU DATING MANAGER
          </h1>
        </div>

        {/* Work Conditions */}
        <div className="max-w-6xl mx-auto bg-[var(--main-color)] backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-2xl mb-8 transition-all duration-300 hover:shadow-lg">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center flex items-center justify-center gap-3">
            <FaClock className="w-5 h-5 sm:w-6 sm:h-6" />
            Умови роботи
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex-1 flex items-center gap-4 p-4 bg-white shadow-sm border border-gray-200 rounded-lg text-[var(--main-color)] transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <FaMoneyBillWave className="w-10 h-10" />
              <div>
                <p className="font-extrabold text-2xl uppercase">Ставка:</p>
                <p className="text-lg font-bold">600–800$</p>
              </div>
            </div>
            <div className="flex-1 flex items-center gap-4 p-4 bg-white shadow-sm border border-gray-200 rounded-lg text-[var(--main-color)] transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <FaGift className="w-10 h-10" />
              <div>
                <p className="font-extrabold text-2xl uppercase">Премії:</p>
                <p className="text-lg font-bold">250–500$</p>
              </div>
            </div>
            <div className="flex-1 flex items-center gap-4 p-4 bg-white shadow-sm border border-gray-200 rounded-lg text-[var(--main-color)] transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <FaPercentage className="w-10 h-10" />
              <div>
                <p className="font-extrabold text-2xl uppercase">Відсоток:</p>
                <p className="font-extrabold">Від першого депозиту: 5–9%</p>
                <p className="font-extrabold">За доливи: 1–2%</p>
              </div>
            </div>
          </div>

          {/* New Conditions Block */}
          <div className="mt-6">
            <div className="flex-1 flex  items-center gap-4 p-4 bg-white shadow-sm border border-gray-200 rounded-lg text-[var(--main-color)] transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <FaCalendarAlt className="w-10 h-10" />
              <div className="w-full">
                <div>
                  <p className="font-extrabold text-2xl uppercase">Умови:</p>
                  <p className="text-lg font-bold">
                    (Бонуси які забираєш день в день, не дожидаючись зп)
                  </p>
                </div>
                <div className="mt-2 md:mt-4 flex flex-col md:flex-row gap-1 w-full justify-around items-start md:items-center">
                  <p className="text-sm md:text-lg font-bold py-1 px-4 rounded-2xl bg-[var(--main-color)] text-white">
                    25$–1000$
                  </p>
                  <p className="text-sm md:text-lg font-bold py-1 px-4 rounded-2xl bg-[var(--main-color)] text-white">
                    Графік: 5/2, з 10 до 18
                  </p>
                  <p className="text-sm md:text-lg font-bold py-1 px-4 rounded-2xl bg-[var(--main-color)] text-white">
                    Зарплата двічі на місяць
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-6">
            <button
              onClick={toggleDetails}
              className="inline-flex items-center gap-2 bg-white text-[var(--main-color)] font-semibold text-base sm:text-lg px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {isDetailsOpen ? (
                <>
                  Згорнути <FaArrowUp className="w-5 h-5" />
                </>
              ) : (
                <>
                  Це ще не все <FaArrowDown className="w-5 h-5" />
                </>
              )}
            </button>
          </div>
          {isDetailsOpen && (
            <div className="mt-6 p-4 bg-white shadow-md border border-gray-200 rounded-xl text-[var(--main-color)] transition-all duration-300">
              <p className="text-center text-sm sm:text-base mb-4">
                За детальними умовами звертайтесь за телефоном{" "}
                <a
                  href="tel:+380661851900"
                  className="font-bold hover:underline"
                >
                  +38 066 185 19 00
                </a>{" "}
                <br /> або в месенджери за посиланнями нижче.
              </p>
              <div className="flex justify-center gap-4">
                <a
                  href="https://tinyurl.com/colonist-agency"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-all duration-300"
                >
                  <FaViber className="w-5 h-5" /> Viber
                </a>
                <a
                  href="https://t.me/+380661851900"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-all duration-300"
                >
                  <FaTelegram className="w-5 h-5" /> Telegram
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Benefits */}
        <div className="max-w-6xl mx-auto bg-[var(--main-color)] backdrop-blur-sm rounded-2xl rounded-tl-[60px] rounded-br-[60px] p-6 sm:p-8 md:p-12 shadow-2xl border border-[var(--main-color)]/20 transition-all duration-300 hover:shadow-lg">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 text-center flex items-center justify-center gap-3">
            <FaStar className="w-6 h-6 sm:w-8 sm:h-8" />
            Переваги роботи
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
            <div className="flex items-center gap-3 p-4 bg-white shadow-sm border border-gray-200 rounded-lg transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <FaUsers className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--main-color)]" />
              <span className="font-extrabold text-[var(--main-color)] text-sm sm:text-base">
                Відмінний колектив
              </span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-white shadow-sm border border-gray-200 rounded-lg transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <FaArrowTrendUp className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--main-color)]" />
              <span className="font-extrabold text-[var(--main-color)] text-sm sm:text-base">
                Кар'єрні сходи
              </span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-white shadow-sm border border-gray-200 rounded-lg transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <FaGift className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--main-color)]" />
              <span className="font-extrabold text-[var(--main-color)] text-sm sm:text-base">
                Розіграші техніки
              </span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-white shadow-sm border border-gray-200 rounded-lg transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <FaCoffee className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--main-color)]" />
              <span className="font-extrabold text-[var(--main-color)] text-sm sm:text-base">
                Зона відпочинку
              </span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-white shadow-sm border border-gray-200 rounded-lg transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <FaCar className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--main-color)]" />
              <span className="font-extrabold text-[var(--main-color)] text-sm sm:text-base">
                Є паркінг
              </span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-white shadow-sm border border-gray-200 rounded-lg transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <FaGamepad className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--main-color)]" />
              <span className="font-extrabold text-[var(--main-color)] text-sm sm:text-base">
                Настільний футбол
              </span>
            </div>
          </div>

          <div className="space-y-4 text-white text-sm sm:text-base">
            <div className="flex items-start gap-3">
              <FaPhoneSlash className="w-5 h-5 mt-1 text-white" />
              <p>Телефони здавати не потрібно</p>
            </div>
            <div className="flex items-start gap-3">
              <FaHandshake className="w-5 h-5 mt-1 text-white" />
              <p>Розглядаємо індивідуальні умови для топових співробітників</p>
            </div>
            <div className="flex items-start gap-3">
              <FaBuilding className="w-5 h-5 mt-1 text-white" />
              <p>Велика територія з мангальними зонами та альтанками</p>
            </div>
            <div className="flex items-start gap-3">
              <FaUsers className="w-5 h-5 mt-1 text-white" />
              <p>Допомога та підтримка від коуча 24/7</p>
            </div>
          </div>

          {/* <div className="bg-white shadow-md border border-gray-200 rounded-xl rounded-tl-[40px] rounded-br-[40px] p-6 mt-8 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <h4 className="text-lg sm:text-xl font-bold text-[var(--main-color)] mb-4 flex items-center justify-center gap-2">
              <FaHandshake className="w-5 h-5 sm:w-6 sm:h-6" />
              Наш підхід до співпраці:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[var(--main-color)] text-sm">
              <div className="space-y-2">
                <p className="flex items-center gap-2">
                  <FaStar className="w-4 h-4" />
                  Індивідуальний підхід до кар'єрної стратегії
                </p>
                <p className="flex items-center gap-2">
                  <FaStar className="w-4 h-4" />
                  Актуальні вакансії від прямих роботодавців
                </p>
                <p className="flex items-center gap-2">
                  <FaStar className="w-4 h-4" />
                  Повна конфіденціальність пошуку. Підтримка на всіх етапах
                </p>
              </div>
              <div className="space-y-2">
                <p className="flex items-center gap-2">
                  <FaStar className="w-4 h-4" />
                  Швидкий та чесний зворотний зв'язок
                </p>
                <p className="flex items-center gap-2">
                  <FaStar className="w-4 h-4" />
                  Компанії, що цінують людей і допомагають рости
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      {/* Decorative wave */}
      <div className="absolute bottom-0 md:-bottom-9 left-0 right-0 z-0">
        <svg
          viewBox="0 0 1200 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-12 sm:h-16 md:h-24"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C300,100 600,20 900,60 C1050,80 1150,40 1200,20 L1200,120 L0,120 Z"
            fill="var(--main-color)"
            opacity="1"
          />
        </svg>
      </div>
    </div>
  );
};

export default JobPosting;
