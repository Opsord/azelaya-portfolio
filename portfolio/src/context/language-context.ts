import { createContext } from 'react';

export type Language = 'en' | 'es';

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  trad: (path: string) => string;
  tradTyped: <T = unknown>(path: string) => T;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);
