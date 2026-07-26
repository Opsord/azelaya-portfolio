import { useState, useEffect, useMemo, useCallback } from 'react';
import type { ReactNode } from 'react';
import { translations } from '../data/translations';
import { LanguageContext, type LanguageContextType } from './language-context';

const getNestedValue = (obj: unknown, path: string): unknown => {
  const parts = path.split('.');
  let current: unknown = obj;
  for (const part of parts) {
    if (typeof current !== 'object' || current === null) return path;
    current = (current as Record<string, unknown>)[part];
    if (current === undefined) return path;
  }
  return current;
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  // Try to load preferred language from localStorage, default to 'en'
  const [language, setLanguage] = useState<LanguageContextType['language']>(() => {
    const savedLang = localStorage.getItem('portfolio-lang');
    return savedLang === 'en' || savedLang === 'es' ? savedLang : 'en';
  });

  // Persist language preference to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('portfolio-lang', language);
  }, [language]);

  // Sync <html lang> attribute with the active language for screen readers and SEO
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const tradTyped = useCallback(
    <T = unknown>(path: string): T => {
      const value = getNestedValue(translations[language], path);
      return (value as T) ?? (path as unknown as T);
    },
    [language],
  );

  const trad = useCallback(
    (path: string): string => {
      const value = tradTyped<string>(path);
      return typeof value === 'string' ? value : path;
    },
    [tradTyped],
  );

  const contextValue = useMemo<LanguageContextType>(
    () => ({
      language,
      setLanguage,
      trad,
      tradTyped,
    }),
    [language, trad, tradTyped],
  );

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};
