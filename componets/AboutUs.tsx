import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-[var(--main-color)] text-white flex items-center justify-center p-4 py-16 pb-24 relative overflow-hidden">
      <div className="relative z-10 w-full max-w-4xl">
        {/* Main heading */}
        <div className="text-center mb-12">
          <h1 className="text-6xl md:text-8xl custom-text mb-6 text-white">
            ПРО НАС
          </h1>
        </div>

        {/* Content section */}
        <div className="bg-white backdrop-blur-sm rounded-2xl rounded-tl-[60px] rounded-br-[60px] p-8 md:p-12 shadow-2xl border border-white/20">
          <div className="space-y-6 text-center">
            <p className="text-lg md:text-xl text-[var(--main-color)] leading-relaxed">
              У світі, де швидкість вирішує все, а якість підбору співробітників
              — конкурентна перевага,
              <span className="font-bold text-[var(--main-color)]">
                {" "}
                COLONIST
              </span>{" "}
              став навігатором для бізнесу в пошуку талантів.
            </p>

            <div className="flex items-center justify-center my-2">
              {/* <div className="w-16 h-1 bg-[var(--main-color)] rounded"></div> */}
              <div className="mx-4 text-4xl font-bold text-[var(--main-color)]">
                ⬇
              </div>
              {/* <div className="w-16 h-1 bg-[var(--main-color)] rounded"></div> */}
            </div>

            <p className="text-lg md:text-xl text-[var(--main-color)] leading-relaxed">
              Ми — не просто рекрутингова компанія.
            </p>

            <p className="text-lg md:text-xl text-[var(--main-color)] leading-relaxed">
              <span className="font-bold text-[var(--main-color)]">
                COLONIST
              </span>{" "}
              — це команда кар'єрних стратегів, які глибоко занурюються в
              завдання клієнта, розуміють його культуру та знаходять тих, хто
              дійсно підходить.
            </p>

            <div className="bg-[var(--main-color)] rounded-xl rounded-tl-[40px] rounded-br-[40px] p-6 mt-8 border-2 border-white/30">
              <p className="text-xl md:text-2xl font-bold text-white">
                МИ НЕ ПЕРЕСИЛАЄМО РЕЗЮМЕ — МИ СТВОРЮЄМО РЕЗУЛЬТАТ
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-9 left-0 right-0 z-0">
        <svg
          viewBox="0 0 1200 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-16 md:h-24"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C300,100 600,20 900,60 C1050,80 1150,40 1200,20 L1200,120 L0,120 Z"
            fill="white"
            opacity="1"
          />
        </svg>
      </div>

      {/* Decorative elements */}

      {/* <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white/20 rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 border-2 border-white/20 rounded-full"></div>
      <div className="absolute top-1/3 right-20 w-4 h-4 bg-white/30 rounded-full"></div>
      <div className="absolute bottom-1/3 left-20 w-6 h-6 bg-white/20 rounded-full"></div> */}
    </div>
  );
};

export default AboutUs;
