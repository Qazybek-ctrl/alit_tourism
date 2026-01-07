import React from "react";
import { useLanguage } from "../../utility/LanguageContext";

const WeatherModal = ({ weather, hourly, city, onClose }) => {
    const { t } = useLanguage();
    // Получаем текущее время
    const now = new Date();
    const currentHour = now.getHours();

    // Берём следующие 7 часов
    const nextHours = hourly.time
        .map((time, index) => ({
            time,
            temp: hourly.apparent_temperature[index],
        }))
        .slice(currentHour, currentHour + 7);

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center overflow-y-auto">
            <div className="bg-white rounded-2xl mt-10 mb-10 w-[95%] max-w-3xl p-6 md:p-8 flex flex-col">
                {/* Заголовок */}
                <h2 className="text-center text-[#22324A] text-3xl md:text-4xl font-bold mb-6">{t("modals.weather.title")}</h2>

                {/* Верхний блок с текущей погодой и картой */}
                <div className="bg-white rounded-xl p-4 md:p-6 flex flex-col md:flex-row mb-6 shadow-md">
                    {/* Левая часть */}
                    <div className="flex-1 mb-4 md:mb-0">
                        <p className="text-sm text-gray-500">{t("modals.weather.today")}</p>
                        <h3 className="text-2xl md:text-3xl font-bold text-[#22324A]">{city}</h3>
                        <p className="text-xl md:text-2xl text-[#22324A]">{t(`common.weather${weather.condition}`)}</p>
                        <p className="mt-2 text-[#22324A]">{t("modals.weather.temperature")}: {weather.temperature}°C</p>
                        <p className="text-[#22324A]">{t("modals.weather.humidity")}: {weather.humidity}%</p>
                        <p className="text-[#22324A]">{t("modals.weather.wind")}: {weather.wind} km/h</p>
                        <p className="text-[#22324A]">{t("modals.weather.rain")}: {weather.rain} mm</p>
                    </div>
                    {/* Правая часть: карта */}
                    <div className="flex-1 md:ml-6 h-48 md:h-auto">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d93022.18568888033!2d76.88188301689647!3d43.23164836549531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2skz!4v1762598466317!5m2!1sru!2skz"
                            title="Almaty Map"
                            className="w-full h-full rounded-lg"
                            referrerPolicy="no-referrer-when-downgrade" loading="lazy"></iframe>
                    </div>
                </div>

                {/* Нижний блок: прогноз на следующие 7 часов */}
                <div className="bg-white rounded-xl p-4 md:p-6 shadow-md">
                    <h3 className="text-xl font-bold mb-4 text-[#22324A]">{t("modals.weather.nextHours")}</h3>
                    <div className="flex overflow-x-auto space-x-4 pb-5">
                        {nextHours.map((hour, index) => {
                            const hourTime = new Date(hour.time).getHours();
                            return (
                                <div
                                    key={index}
                                    className="flex-shrink-0 w-20 md:w-24 text-[#22324A] bg-[#F4EBE2]/100 rounded-xl p-2 text-center"
                                >
                                    <p className="text-sm">{hourTime}:00</p>
                                    <p className="text-lg font-bold">{Math.round(hour.temp)}°C</p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Кнопка закрытия */}
                <button
                    onClick={onClose}
                    className="mt-6 w-full md:w-auto px-6 py-3 bg-[#22324A] text-[#F4EBE2] font-[500] rounded-xl self-center"
                >
                    {t("modals.weather.close")}
                </button>
            </div>
        </div>
    );
};

export default WeatherModal;
