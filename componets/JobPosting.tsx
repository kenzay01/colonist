"use client";
import React from "react";
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
} from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";

const JobPosting = () => {
  return (
    <div
      id="details"
      className="bg-white text-[var(--main-color)] min-h-screen p-4 sm:p-6 py-12 sm:py-16 relative overflow-hidden"
    >
      <div className="relative z-10 w-full">
        {/* Main heading */}
        <div className="text-center mb-8 sm:mb-12 py-6 sm:py-8 max-w-6xl mx-auto">
          <h1 className="text-4xl sm:text-6xl custom-text md:text-8xl mb-4 text-[var(--main-color)] flex items-center justify-center gap-2 sm:gap-4">
            {/* <FaUsers className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16" /> */}
            RU DATING MANAGER
            {/* <FaUsers className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16" /> */}
          </h1>
          {/* <div className="w-24 sm:w-32 h-1 bg-[var(--main-color)] mx-auto rounded-full"></div> */}
        </div>

        {/* Salary Overview */}
        <div className="max-w-6xl mx-auto bg-[var(--main-color)] backdrop-blur-sm rounded-2xl rounded-tl-[60px] rounded-br-[60px] p-6 sm:p-8 md:p-12 shadow-2xl border border-[var(--main-color)]/20 mb-8 transition-all duration-300 hover:shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-6 sm:mb-8 flex items-center justify-center gap-3">
            <FaDollarSign className="w-6 h-6 sm:w-8 sm:h-8" />
            Зарплатний пакет
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8">
            <div className="bg-white shadow-md border border-gray-200 rounded-xl p-4 sm:p-6 text-[var(--main-color)] transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <h3 className="text-lg sm:text-xl font-bold mb-4 flex items-center gap-2">
                <FaMoneyBillWave className="w-5 h-5 sm:w-6 sm:h-6" />
                Базова ставка
              </h3>
              <p className="text-xl sm:text-2xl font-bold">600-800$</p>
              <p className="text-sm opacity-90 mt-2">Залежить від досвіду</p>
            </div>

            <div className="bg-white shadow-md border border-gray-200 rounded-xl p-4 sm:p-6 text-[var(--main-color)] transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <h3 className="text-lg sm:text-xl font-bold mb-4 flex items-center gap-2">
                <FaGift className="w-5 h-5 sm:w-6 sm:h-6" />
                Премії
              </h3>
              <p className="text-xl sm:text-2xl font-bold">250-500$</p>
              <p className="text-sm opacity-90 mt-2">За досягнення</p>
            </div>
          </div>

          <div className="bg-white shadow-md border border-gray-200 rounded-xl rounded-tl-[40px] rounded-br-[40px] p-4 sm:p-6 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-[var(--main-color)] mb-2 flex items-center justify-center gap-3">
              <FaFire className="w-5 h-5 sm:w-6 sm:h-6" />
              СЕРЕДНЯ ЗП: 1800$+
              <FaFire className="w-5 h-5 sm:w-6 sm:h-6" />
            </p>
            <p className="text-[var(--main-color)]/90 text-sm sm:text-base">
              Виплати двічі на місяць
            </p>
          </div>
        </div>

        {/* Salary Structure */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-8 max-w-6xl mx-auto">
          {/* Градація ставки */}
          <div className="bg-[var(--main-color)] backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-2xl transition-all duration-300 hover:shadow-lg">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <FaArrowTrendUp className="w-5 h-5 sm:w-6 sm:h-6" />
              Градація ставки
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-white shadow-sm border border-gray-200 rounded-lg transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <span className="text-[var(--main-color)] flex items-center gap-2 text-sm sm:text-base">
                  <FaDollarSign className="w-4 h-4" />0 депозитів
                </span>
                <span className="font-bold text-[var(--main-color)]">600$</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white shadow-sm border border-gray-200 rounded-lg transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <span className="text-[var(--main-color)] flex items-center gap-2 text-sm sm:text-base">
                  <FaDollarSign className="w-4 h-4" />1 депозит
                </span>
                <span className="font-bold text-[var(--main-color)]">700$</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white shadow-sm border border-gray-200 rounded-lg transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <span className="text-[var(--main-color)] flex items-center gap-2 text-sm sm:text-base">
                  <FaDollarSign className="w-4 h-4" />
                  від 2 депозитів
                </span>
                <span className="font-bold text-[var(--main-color)]">800$</span>
              </div>
            </div>
          </div>

          {/* Премії за депозити */}
          <div className="bg-[var(--main-color)] backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-2xl transition-all duration-300 hover:shadow-lg ">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <FaGift className="w-5 h-5 sm:w-6 sm:h-6" />
              Премії за депозити
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-white shadow-sm border border-gray-200 rounded-lg transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <span className="text-[var(--main-color)] flex items-center gap-2 text-sm sm:text-base">
                  <FaMedal className="w-4 h-4" />3 депозити
                </span>
                <span className="font-bold text-[var(--main-color)]">
                  +500$
                </span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white shadow-sm border border-gray-200 rounded-lg transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <span className="text-[var(--main-color)] flex items-center gap-2 text-sm sm:text-base">
                  <FaMedal className="w-4 h-4" />5 депозитів
                </span>
                <span className="font-bold text-[var(--main-color)]">
                  +250$
                </span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white shadow-sm border border-gray-200 rounded-lg transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <span className="text-[var(--main-color)] flex items-center gap-2 text-sm sm:text-base">
                  <FaMedal className="w-4 h-4" />7 депозитів
                </span>
                <span className="font-bold text-[var(--main-color)]">
                  +250$
                </span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white shadow-sm border border-gray-200 rounded-lg transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <span className="text-[var(--main-color)] flex items-center gap-2 text-sm sm:text-base">
                  <FaMedal className="w-4 h-4" />9 депозитів
                </span>
                <span className="font-bold text-[var(--main-color)]">
                  +250$
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Percentage from deposits */}
        <div className=" bg-[var(--main-color)] backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-2xl mb-8 transition-all duration-300 hover:shadow-lg">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center flex items-center justify-center gap-3">
            <FaPercentage className="w-5 h-5 sm:w-6 sm:h-6" />
            від депозиту
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white shadow-md border border-gray-200 p-4 rounded-xl text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <p className="text-[var(--main-color)] font-semibold text-sm sm:text-base">
                500-1500$
              </p>
              <p className="text-xl sm:text-2xl font-bold text-[var(--main-color)] flex items-center justify-center gap-1">
                5<FaPercentage className="w-4 h-4" />
              </p>
            </div>
            <div className="bg-white shadow-md border border-gray-200 p-4 rounded-xl text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <p className="text-[var(--main-color)] font-semibold text-sm sm:text-base">
                2000-3500$
              </p>
              <p className="text-xl sm:text-2xl font-bold text-[var(--main-color)] flex items-center justify-center gap-1">
                5.5
                <FaPercentage className="w-4 h-4" />
              </p>
            </div>
            <div className="bg-white shadow-md border border-gray-200 p-4 rounded-xl text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <p className="text-[var(--main-color)] font-semibold text-sm sm:text-base">
                4000-4500$
              </p>
              <p className="text-xl sm:text-2xl font-bold text-[var(--main-color)] flex items-center justify-center gap-1">
                6<FaPercentage className="w-4 h-4" />
              </p>
            </div>
            <div className="bg-white shadow-md border border-gray-200 p-4 rounded-xl text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <p className="text-[var(--main-color)] font-semibold text-sm sm:text-base">
                5000$+
              </p>
              <p className="text-xl sm:text-2xl font-bold text-[var(--main-color)] flex items-center justify-center gap-1">
                6.5
                <FaPercentage className="w-4 h-4" />
              </p>
            </div>
          </div>

          <div className="mt-6 p-4 bg-white shadow-md border border-gray-200 rounded-xl text-[var(--main-color)] text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <p className="font-bold flex items-center justify-center gap-2 text-sm sm:text-base">
              <FaFire className="w-5 h-5" />
              Спеціальний бонус: клієнт 2+ місяці і він поповняє на суму 30k+,
              то Ви отримуєте +500$
              <FaFire className="w-5 h-5" />
            </p>
          </div>
        </div>

        {/* Extra Bonus */}
        <div className="max-w-6xl mx-auto bg-[var(--main-color)] backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-2xl mb-8 transition-all duration-300 hover:shadow-lg">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center flex items-center justify-center gap-3">
            <FaTrophy className="w-5 h-5 sm:w-6 sm:h-6" />
            EXTRA BONUS ( день в день! )
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-white shadow-md border border-gray-200 p-4 rounded-xl text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <p className="text-[var(--main-color)] font-semibold flex items-center justify-center gap-2 text-sm sm:text-base">
                <FaChartLine className="w-4 h-4" />2 депозити
              </p>
              <p className="text-lg sm:text-xl font-bold text-[var(--main-color)]">
                25$
              </p>
            </div>
            <div className="bg-white shadow-md border border-gray-200 p-4 rounded-xl text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <p className="text-[var(--main-color)] font-semibold flex items-center justify-center gap-2 text-sm sm:text-base">
                <FaChartLine className="w-4 h-4" />3 депозити
              </p>
              <p className="text-lg sm:text-xl font-bold text-[var(--main-color)]">
                60$
              </p>
            </div>
            <div className="bg-white shadow-md border border-gray-200 p-4 rounded-xl text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <p className="text-[var(--main-color)] font-semibold flex items-center justify-center gap-2 text-sm sm:text-base">
                <FaChartLine className="w-4 h-4" />4 депозити
              </p>
              <p className="text-lg sm:text-xl font-bold text-[var(--main-color)]">
                125$
              </p>
            </div>
            <div className="bg-white shadow-md border border-gray-200 p-4 rounded-xl text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <p className="text-[var(--main-color)] font-semibold flex items-center justify-center gap-2 text-sm sm:text-base">
                <FaChartLine className="w-4 h-4" />
                5-7 депозитів
              </p>
              <p className="text-lg sm:text-xl font-bold text-[var(--main-color)]">
                250$
              </p>
            </div>
            <div className="bg-white shadow-md border border-gray-200 p-4 rounded-xl text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <p className="text-[var(--main-color)] font-semibold flex items-center justify-center gap-2 text-sm sm:text-base">
                <FaChartLine className="w-4 h-4" />
                8-9 депозитів
              </p>
              <p className="text-lg sm:text-xl font-bold text-[var(--main-color)]">
                375$
              </p>
            </div>
            <div className="bg-white shadow-md border-2 border-[var(--main-color)] p-4 rounded-xl text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <p className="text-[var(--main-color)] font-semibold flex items-center justify-center gap-2 text-sm sm:text-base">
                <FaTrophy className="w-4 h-4" />
                10 депозитів
              </p>
              <p className="text-xl sm:text-2xl font-bold text-[var(--main-color)]">
                1000$
              </p>
            </div>
          </div>

          <div className="mt-6 p-4 bg-white shadow-md border border-gray-200 rounded-xl text-[var(--main-color)] text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <p className="font-bold flex items-center justify-center gap-2 text-sm sm:text-base">
              <FaStar className="w-5 h-5" />
              +1000 грн/міс за відвідуваність без пропусків
              <FaClock className="w-5 h-5" />
            </p>
          </div>
        </div>

        {/* Work Conditions */}
        <div className="bg-[var(--main-color)] backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-2xl mb-8 transition-all duration-300 hover:shadow-lg">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center flex items-center justify-center gap-3">
            <FaClock className="w-5 h-5 sm:w-6 sm:h-6" />
            Умови роботи
          </h3>
          <div className="text-center">
            <div className="inline-flex items-center gap-3 bg-white shadow-md border border-gray-200 px-4 sm:px-6 py-3 rounded-full text-base sm:text-lg font-semibold text-[var(--main-color)] transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <FaCalendarAlt className="w-5 h-5" />
              График: 5/2, з 10:00 до 18:00
            </div>
            <p className="text-white mt-4 text-sm sm:text-base">
              (година обіду + 3 брейки по 15 хвилин)
            </p>
          </div>
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
              <span className="text-[var(--main-color)] text-sm sm:text-base">
                Відмінний колектив
              </span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-white shadow-sm border border-gray-200 rounded-lg transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <FaArrowTrendUp className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--main-color)]" />
              <span className="text-[var(--main-color)] text-sm sm:text-base">
                Кар'єрна драбина
              </span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-white shadow-sm border border-gray-200 rounded-lg transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <FaGift className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--main-color)]" />
              <span className="text-[var(--main-color)] text-sm sm:text-base">
                Розіграші техніки
              </span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-white shadow-sm border border-gray-200 rounded-lg transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <FaCoffee className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--main-color)]" />
              <span className="text-[var(--main-color)] text-sm sm:text-base">
                Зона відпочинку
              </span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-white shadow-sm border border-gray-200 rounded-lg transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <FaCar className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--main-color)]" />
              <span className="text-[var(--main-color)] text-sm sm:text-base">
                Є паркінг
              </span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-white shadow-sm border border-gray-200 rounded-lg transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <FaGamepad className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--main-color)]" />
              <span className="text-[var(--main-color)] text-sm sm:text-base">
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

          <div className="bg-white shadow-md border border-gray-200 rounded-xl rounded-tl-[40px] rounded-br-[40px] p-6 mt-8 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
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
                {/* <p className="flex items-center gap-2">
                  <FaStar className="w-4 h-4" />
                  Підтримка на всіх етапах
                </p> */}
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
          </div>
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

      {/* Decorative elements */}
      {/* <div className="hidden sm:block absolute top-1/8 right-20 w-6 h-6 bg-[var(--main-color)]/30 rounded-full animate-bounce"></div>
      <div className="hidden sm:block absolute -top-1/8 right-20 w-6 h-6 bg-[var(--main-color)]/30 rounded-full animate-bounce"></div>
      <div className="hidden sm:block absolute bottom-1/3 left-20 w-6 h-6 bg-[var(--main-color)]/20 rounded-full animate-bounce"></div>
      <div className="hidden sm:block absolute bottom-1/8 left-20 w-6 h-6 bg-[var(--main-color)]/20 rounded-full animate-bounce"></div> */}
    </div>
  );
};

export default JobPosting;
