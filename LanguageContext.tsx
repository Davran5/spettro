import React, { createContext, useContext, useState, ReactNode } from 'react';
import { TRANSLATIONS, Language } from './translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof TRANSLATIONS['EN'];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const getRouteLanguage = (): Language => {
  if (typeof window === 'undefined') {
    return 'UZ';
  }

  if (window.location.pathname.startsWith('/ru')) {
    return 'RU';
  }

  return 'UZ';
};

export const LanguageProvider: React.FC<{ children: ReactNode; initialLanguage?: Language }> = ({ children, initialLanguage }) => {
  const [language, setLanguageState] = useState<Language>(initialLanguage || getRouteLanguage());

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);

    if (typeof window === 'undefined' || !['UZ', 'RU'].includes(lang)) {
      return;
    }

    const targetPath = lang === 'RU' ? '/ru/' : '/uz/';
    if (window.location.pathname !== targetPath) {
      window.history.pushState(null, '', targetPath);
    }
  };

  const value = {
    language,
    setLanguage,
    t: TRANSLATIONS[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
