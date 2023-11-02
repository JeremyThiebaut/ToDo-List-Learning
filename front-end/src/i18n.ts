import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en/app.json";
import fr from "./locales/fr/app.json";
import { useSelector } from "react-redux";
import React from "react";

const resources = {
  en: {
    translation: en,
  },
  fr: {
    translation: fr,
  },
};

const I18n = () => {
  const language = useSelector((state) => state.language);

  console.log(language);
  React.useEffect(() => {
    i18n.use(initReactI18next).init({
      lng: language,
      fallbackLng: "en",
      resources,
    });
  }, [language]);

  return null;
};

export default I18n;
