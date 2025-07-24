"use client";

import React, { useState } from "react";

const FormSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    telegram: "",
    message: "",
  });
  const [phoneError, setPhoneError] = useState("");
  const [submitStatus, setSubmitStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    let newValue = value;

    if (name === "telegram") {
      if (!value.startsWith("@") || value === "") {
        newValue = "@" + value.replace(/^@+/, "");
      }
    }

    if (name === "phone") {
      if (!value.startsWith("+") || value === "") {
        newValue = "+" + value.replace(/^\++/, "");
      }
    }

    setFormData({ ...formData, [name]: newValue });

    if (name === "phone") {
      const phoneRegex = /^\+380\d{9}$/;
      if (!phoneRegex.test(newValue) && newValue !== "+") {
        setPhoneError("Введіть номер у форматі +380123456789");
      } else {
        setPhoneError("");
      }
    }
  };

  const handleTelegramFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    if (!formData.telegram.startsWith("@")) {
      setFormData({ ...formData, telegram: "@" + formData.telegram });
    }
  };

  const handlePhoneFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    if (!formData.phone.startsWith("+")) {
      setFormData({ ...formData, phone: "+" + formData.phone });
    }
  };

  const sendToTelegram = async (data: {
    name: string;
    phone: string;
    telegram: string;
    message: string;
  }) => {
    const botToken = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN;
    const chatId = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;
    const telegramApiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

    const message = `
Нова заявка з форми:
Ім'я: ${data.name}
Телефон: ${data.phone}
Telegram: ${data.telegram}
Повідомлення: ${data.message || "Не вказано"}
    `.trim();

    try {
      const response = await fetch(telegramApiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message to Telegram");
      }
      return { success: true };
    } catch (error) {
      console.error("Error sending to Telegram:", error);
      return { success: false, error: "Не вдалося відправити повідомлення" };
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const phoneRegex = /^\+380\d{9}$/;
    if (!phoneRegex.test(formData.phone)) {
      setPhoneError("Введіть коректний номер у форматі +380123456789");
      return;
    }

    setSubmitStatus("Відправка...");

    try {
      const [telegramResult] = await Promise.allSettled([
        sendToTelegram(formData),
      ]);

      const telegramSuccess =
        telegramResult.status === "fulfilled" && telegramResult.value.success;

      if (telegramSuccess) {
        setSubmitStatus("Дані успішно відправлено в Telegram!");
        setFormData({ name: "", phone: "", telegram: "", message: "" });
        setPhoneError("");
        setTimeout(() => setSubmitStatus(""), 3000);
      } else if (telegramSuccess) {
        setSubmitStatus("Частково успішно: дані збережено, але є помилки");
        console.error("Telegram result:", telegramResult);
        // console.error("Sheets result:", sheetsResult);
      } else {
        setSubmitStatus("Помилка при відправці та збереженні даних");
        console.error("Both operations failed:", {
          telegramResult,
        });
      }
    } catch (error) {
      console.error("Error during submission:", error);
      setSubmitStatus("Неочікувана помилка при обробці запиту");
    }
  };

  return (
    <div className=" bg-white text-[var(--main-color)] flex items-center justify-center p-4 py-12 relative overflow-hidden">
      <div className="relative z-10 w-full max-w-2xl">
        {/* Main heading */}
        <div className="text-center mb-12">
          <h1 className="text-6xl md:text-8xl custom-text mb-4 text-[var(--main-color)]">
            ПРИЄДНУЙСЯ!
          </h1>
          <p className="text-xl md:text-2xl text-[var(--main-color)] font-light">
            Залиш заявку і ми з тобою зв'яжемось
          </p>
        </div>

        {/* Form */}
        <div className="space-y-6">
          {/* Top row - Name, Telegram, Phone */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-4 bg-white border-2 border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:border-[var(--main-color)] focus:outline-none transition-colors text-lg shadow-sm"
                placeholder="Ім'я"
                required
              />
            </div>
            <div>
              <input
                type="text"
                name="telegram"
                value={formData.telegram}
                onChange={handleChange}
                onFocus={handleTelegramFocus}
                className="w-full p-4 bg-white border-2 border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:border-[var(--main-color)] focus:outline-none transition-colors text-lg shadow-sm"
                placeholder="@Телеграм"
                required
              />
            </div>
            <div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onFocus={handlePhoneFocus}
                className={`w-full p-4 bg-white border-2 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none transition-colors text-lg shadow-sm ${
                  phoneError
                    ? "border-red-500"
                    : "border-gray-300 focus:border-[var(--main-color)]"
                }`}
                placeholder="Телефон"
                required
              />
              {phoneError && (
                <p className="text-red-500 text-sm mt-2">{phoneError}</p>
              )}
            </div>
          </div>

          {/* Message field */}
          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full p-4 bg-white border-2 border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:border-[var(--main-color)] focus:outline-none transition-colors text-lg resize-none shadow-sm"
              placeholder="Повідомлення (необов'язково)"
            />
          </div>

          {/* Submit section */}
          <div className="flex flex-col items-center space-y-6">
            {/* Submit button */}
            <button
              type="button"
              onClick={handleSubmit}
              disabled={submitStatus === "Відправка..."}
              className="bg-[var(--main-color)] text-white font-bold py-4 px-12 rounded-lg text-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
            >
              {submitStatus === "Відправка..." ? "Відправка..." : "Відправити"}
            </button>

            {/* Status message */}
            {submitStatus && submitStatus !== "Успішно!" && (
              <p
                className={`text-sm text-center ${
                  submitStatus.includes("Успішно")
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {submitStatus}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Wave decoration at bottom */}
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
            fill="var(--main-color)"
            opacity="1"
          />
        </svg>
      </div>
    </div>
  );
};

export default FormSection;
