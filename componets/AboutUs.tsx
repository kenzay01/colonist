import React from "react";

const AboutUs = () => {
  return (
    <div
      id="aboutUs"
      className="bg-[var(--main-color)] text-white flex items-center justify-center p-4 sm:p-6 py-12 sm:py-16 pb-20 sm:pb-24 relative overflow-hidden"
    >
      <div className="relative z-10 w-full max-w-6xl">
        {/* Main heading */}
        <div className="text-center mb-8 sm:mb-12  py-6 sm:py-8 transition-all duration-300">
          <h1 className="text-4xl sm:text-6xl md:text-8xl custom-text mb-6 text-white">
            ПРО НАС
          </h1>
        </div>

        {/* Content section */}
        <div className="bg-white backdrop-blur-sm rounded-2xl rounded-tl-[60px] rounded-br-[60px] p-6 sm:p-8 md:p-12 shadow-2xl border border-white/20 transition-all duration-300 hover:shadow-lg">
          <div className="space-y-6 text-center">
            <p className="text-base sm:text-lg md:text-xl text-[var(--main-color)] leading-relaxed">
              У світі, де швидкість вирішує все, а якість підбору співробітників
              — конкурентна перевага,
              <span className="font-bold text-[var(--main-color)]">
                {" "}
                COLONIST
              </span>{" "}
              став навігатором для бізнесу в пошуку талантів.
            </p>

            <p className="text-base sm:text-lg md:text-xl text-[var(--main-color)] leading-relaxed">
              <span className="font-bold text-[var(--main-color)]">
                COLONIST
              </span>{" "}
              — HR агентство, що працює з 2022 року. Ми не просто підбираємо
              вакансії — ми допомагаємо кандидатам знайти роботу, яка дійсно
              підходить їхньому досвіду та цілям.
            </p>

            <div className="flex items-center justify-center my-2">
              <div className="mx-4 text-3xl sm:text-4xl font-bold text-[var(--main-color)]">
                ⬇
              </div>
            </div>

            <p className="text-base sm:text-lg md:text-xl text-[var(--main-color)] leading-relaxed">
              Ми — не просто рекрутингова компанія.
            </p>

            <p className="text-base sm:text-lg md:text-xl text-[var(--main-color)] leading-relaxed">
              <span className="font-bold text-[var(--main-color)]">
                COLONIST
              </span>{" "}
              — це команда кар'єрних стратегів, які глибоко занурюються в
              завдання клієнта, розуміють його культуру та знаходять тих, хто
              дійсно підходить.
            </p>

            <p className="text-base sm:text-lg md:text-xl text-[var(--main-color)] leading-relaxed">
              Наша команда уважно вивчає ваші навички та очікування, щоб
              запропонувати лише найкращі варіанти та підтримати вас на кожному
              етапі пошуку.
            </p>

            <div className="bg-[var(--main-color)] rounded-xl rounded-tl-[40px] rounded-br-[40px] p-4 sm:p-6 mt-8 border-2 border-white/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <p className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4">
                МИ НЕ ПЕРЕСИЛАЄМО РЕЗЮМЕ — МИ СТВОРЮЄМО РЕЗУЛЬТАТ
              </p>
              <p className="text-base sm:text-lg text-white">
                «Одна вакансія — мільйон можливостей!»
              </p>
              <p className="text-base sm:text-lg text-white mt-2">
                Ми створюємо нову реальність для наших кандидатів.
              </p>
            </div>

            <div className="space-y-4 mt-8">
              <h3 className="text-xl sm:text-2xl font-bold text-[var(--main-color)] mb-4">
                Що ми робимо:
              </h3>

              <div className="space-y-3">
                <p className="text-base sm:text-lg text-[var(--main-color)] leading-relaxed">
                  • Відбираємо найкращих кандидатів для унікальної вакансії, що
                  максимально підходить їхньому досвіду та цілям.
                </p>

                <p className="text-base sm:text-lg text-[var(--main-color)] leading-relaxed">
                  • Пропонуємо єдину вакансію, яка закриває широкий спектр
                  професійних та особистих потреб.
                </p>

                <p className="text-base sm:text-lg text-[var(--main-color)] leading-relaxed">
                  • Підтримуємо на кожному етапі — від знайомства з вакансією до
                  успішного працевлаштування.
                </p>
              </div>

              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 mt-6 border border-[var(--main-color)]/20">
                <p className="text-base sm:text-lg text-[var(--main-color)] leading-relaxed font-medium">
                  <span className="font-bold">Чому одна вакансія?</span> Тому що
                  вона поєднує в собі все важливе: зростання, комфорт, розвиток
                  та стабільність. Ми впевнені, що одне якісне рішення краще за
                  множину компромісів.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
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
            fill="white"
            opacity="1"
          />
        </svg>
      </div>
    </div>
  );
};

export default AboutUs;
