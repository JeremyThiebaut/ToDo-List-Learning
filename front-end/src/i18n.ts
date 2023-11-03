import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en/app.json";
import fr from "./locales/fr/app.json";
import { useSelector } from "react-redux";
import React from "react";
import { StateProps } from "@/store/reducer";

const resources = {
  en: {
    translation: en,
  },
  fr: {
    translation: fr,
  },
};

i18n.use(initReactI18next).init({
  lng: "fr",
  fallbackLng: "en",
  resources,
});

const I18n = () => {
  const language = useSelector((state: StateProps) => state.language);

  React.useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return null;
};

export default I18n;
