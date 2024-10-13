import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import your language resources
import enTranslations from './locales/en.json';
import esTranslations from './locales/es.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations },
      es: { translation: esTranslations },
    },
    lng: 'en', // Set default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;