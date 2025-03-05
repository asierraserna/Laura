import React, { createContext, useState, useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import 'intl-pluralrules';

const LanguageContext = createContext({
  language: 'en',
  setLanguage: (lang: string) => {},
});

export const LanguageProvider = ({ children }) => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  useEffect(() => {
    const changeLanguage = (lng: string) => {
      setLanguage(lng);
    };

    i18n.on('languageChanged', changeLanguage);

    return () => {
      i18n.off('languageChanged', changeLanguage);
    };
  }, [i18n]);

  const handleSetLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
