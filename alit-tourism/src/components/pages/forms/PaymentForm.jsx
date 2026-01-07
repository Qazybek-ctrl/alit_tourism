import React, { useState } from "react";
import { useLanguage } from "../../../utility/LanguageContext";

export default function PaymentForm() {
  const { t } = useLanguage();
  const [showAddCard, setShowAddCard] = useState(false);
  const [form, setForm] = useState({
    cardNumber: "",
    cardHolder: "",
    expDate: "",
    cvc: "",
  });

  // Пока дефолтная "сохранённая" карта — позже заменишь на данные с API
  const [savedCards, setSavedCards] = useState([
    {
      id: 1,
      brand: "Visa",
      last4: "9999",
      exp: "02/2024",
      label: "Visa •••• 9999",
    },
  ]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    const last4 = form.cardNumber.replace(/\s+/g, "").slice(-4) || "0000";
    const newCard = {
      id: Date.now(),
      brand: "Card",
      last4,
      exp: form.expDate || "MM/YY",
      label: `•••• ${last4}`,
    };
    setSavedCards([newCard, ...savedCards]);
    setForm({ cardNumber: "", cardHolder: "", expDate: "", cvc: "" });
    setShowAddCard(false);
  };

  return (
    <div className="max-w-3xl mx-auto bg-[#FFFFFF] md:bg-[#F6F6F6] text-gotham rounded-[30px] p-6 md:p-10 text-[#22324A] my-8 shadow-sm">
      {/* Заголовок */}
      <h1 className="text-[32px] font-[500] text-center mb-10">{t("forms.paymentForm.title")}</h1>

      {/* Блок Payment Method */}
      <div className="border border-gray-300 bg-white rounded-2xl p-6 shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-[400]">{t("forms.paymentForm.paymentMethod")}</h2>
          <button
            type="button"
            onClick={() => setShowAddCard(!showAddCard)}
            className="px-4 py-2 bg-[#22324A] text-white rounded-xl hover:bg-[#2f3e5c] transition"
          >
            {showAddCard ? t("forms.paymentForm.close") : t("forms.paymentForm.addPaymentMethod")}
          </button>
        </div>

        {/* Список сохранённых карт */}
        <div className="space-y-3 mb-4">
          {savedCards.map((card) => (
            <div
              key={card.id}
              className="flex items-center justify-between p-4 bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl"
            >
              <div className="flex items-center gap-4">
                <div>
                  <div className="text-sm md:text-base font-[400] text-[#22324A]">
                    {card.brand} ****{card.last4}
                  </div>
                  <div className="text-xs text-gray-500">
                    {t("forms.paymentForm.expiration")}: {card.exp}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Добавление новой карты */}
        {showAddCard && (
          <div className="mt-6 border-t pt-6 animate-fadeIn">
            <h3 className="text-lg font-[400] mb-4">{t("forms.paymentForm.addNewCard")}</h3>

            <div className="grid gap-4">
              {/* Card Number */}
              <div>
                <label className="block text-sm text-[#B1B5C3] font-[400] mb-1">
                  {t("forms.paymentForm.cardNumber")}
                </label>
                <input
                  type="text"
                  name="cardNumber"
                  placeholder={t("forms.paymentForm.cardNumberPlaceholder")}
                  value={form.cardNumber}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-xl px-4 py-2 w-full focus:ring-1 focus:ring-[#22324A] outline-none"
                />
              </div>

              {/* Card Holder */}
              <div>
                <label className="block text-sm text-[#B1B5C3] font-[400] mb-1">
                  {t("forms.paymentForm.cardHolderName")}
                </label>
                <input
                  type="text"
                  name="cardHolder"
                  placeholder={t("forms.paymentForm.cardHolderPlaceholder")}
                  value={form.cardHolder}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-xl px-4 py-2 w-full focus:ring-1 focus:ring-[#22324A] outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                {/* Expiry Date */}
                <div>
                  <label className="block text-sm text-[#B1B5C3] font-[400] mb-1">
                    {t("forms.paymentForm.expDate")}
                  </label>
                  <input
                    type="text"
                    name="expDate"
                    placeholder={t("forms.paymentForm.expDatePlaceholder")}
                    value={form.expDate}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-xl px-4 py-2 w-full focus:ring-1 focus:ring-[#22324A] outline-none"
                  />
                </div>

                {/* CVC */}
                <div>
                  <label className="block text-sm text-[#B1B5C3] font-[400] mb-1">
                    {t("forms.paymentForm.cvc")}
                  </label>
                  <input
                    type="text"
                    name="cvc"
                    placeholder={t("forms.paymentForm.cvcPlaceholder")}
                    value={form.cvc}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-xl px-4 py-2 w-full focus:ring-1 focus:ring-[#22324A] outline-none"
                  />
                </div>
              </div>

              {/* Save card checkbox */}
              <div className="flex items-center mt-2">
                <input
                  id="saveCard"
                  type="checkbox"
                  className="w-5 h-5 text-[#22324A] border-gray-300 rounded-full focus:ring-[#22324A]"
                />
                <label
                  htmlFor="saveCard"
                  className="ml-2 text-sm text-[#22324A] font-[400]"
                >
                  {t("forms.paymentForm.saveCard")}
                </label>
              </div>

              {/* Apply Button */}
              <button
                type="button"
                onClick={handleSave}
                className="mt-4 w-full bg-[#22324A] text-white py-3 rounded-xl hover:bg-[#2f3e5c] transition"
              >
                {t("forms.paymentForm.apply")}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
