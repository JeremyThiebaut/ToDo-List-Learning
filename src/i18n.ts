import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en/app.json';
import fr from './locales/fr/app.json';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';


const resources = {
    en: {
        translation: en,
},
    fr: {
        translation: fr,
    }
}

const I18n = () => {
    const language = useSelector((state: any) => state.language.language);

    useEffect(() => {
        i18n.use(initReactI18next)
            .init({
                resources,
                lng: language,
                keySeparator: false,
                interpolation: {
                    escapeValue: false,
                },
            });
    }, [language]);


    return null;

}

export default I18n;