import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import your language resources
import enTranslations from './locales/en.json';
import esTranslations from './locales/es.json';
import plTranslations from './locales/pl.json';
import deTranslations from './locales/de.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations },
      es: { translation: esTranslations },      
      pl: { translation: plTranslations },
      de: { translation: deTranslations },
    },
    lng: 'en', // Set default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
