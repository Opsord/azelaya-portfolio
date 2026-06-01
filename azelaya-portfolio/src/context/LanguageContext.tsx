import { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';
import type { ReactNode } from 'react';
import { translations } from '../data/translations';

export type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  trad: (path: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const getNestedValue = (obj: any, path: string) => {
  return path.split('.').reduce((acc, part) => acc?.[part], obj);
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  // Try to load preferred language from localStorage, default to 'en'
  const [language, setLanguage] = useState<Language>(() => {
    const savedLang = localStorage.getItem('portfolio-lang');
    return savedLang === 'en' || savedLang === 'es' ? savedLang : 'en';
  });

  // Persist language preference to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('portfolio-lang', language);
  }, [language]);

  const trad = useCallback((path: string): any => {
    const value = getNestedValue(translations[language], path);
    return value ?? path;
  }, [language]);

  const contextValue = useMemo(() => ({
    language,
    setLanguage,
    trad
  }), [language, trad]);

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
