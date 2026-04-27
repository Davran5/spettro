import React, { createContext, useContext, useState, ReactNode } from 'react';
import { TRANSLATIONS, Language } from './translations';
import { getLocalizedBrochurePath, getLocalizedHomePath, getRouteLanguage, isBrochurePath } from './routing';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof TRANSLATIONS['EN'];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode; initialLanguage?: Language }> = ({ children, initialLanguage }) => {
  const [language, setLanguageState] = useState<Language>(
    initialLanguage || (typeof window === 'undefined' ? 'UZ' : getRouteLanguage(window.location.pathname))
  );

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);

    if (typeof window === 'undefined' || !['UZ', 'RU'].includes(lang)) {
      return;
    }

    const targetPath = isBrochurePath(window.location.pathname)
      ? getLocalizedBrochurePath(lang)
      : getLocalizedHomePath(lang);
    if (window.location.pathname !== targetPath) {
      window.location.href = targetPath;
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
