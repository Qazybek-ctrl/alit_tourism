import { createContext, useState, useContext, useEffect } from "react";
import en from "../locales/en.json";
import ru from "../locales/ru.json";
import zh from "../locales/zh.json";

const translations = {
    en,
    ru,
    zh,
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState(() => {
        // Получаем сохраненный язык из localStorage или используем английский по умолчанию
        return localStorage.getItem("language") || "en";
    });

    useEffect(() => {
        // Сохраняем выбранный язык в localStorage
        localStorage.setItem("language", language);
    }, [language]);

    const t = (key) => {
        const keys = key.split(".");
        let value = translations[language];

        for (const k of keys) {
            value = value?.[k];
        }

        return value || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
