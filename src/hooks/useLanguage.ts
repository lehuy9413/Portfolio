import { useState, useEffect, useCallback, createContext, useContext } from 'react';

export type Language = 'vi' | 'en';

const LANG_STORAGE_KEY = 'portfolio_language';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  isVi: boolean;
}

export const LanguageContext = createContext<LanguageContextType>({
  language: 'vi',
  setLanguage: () => {},
  toggleLanguage: () => {},
  isVi: true,
});

export function useLanguage() {
  return useContext(LanguageContext);
}

export function useLanguageProvider() {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window === 'undefined') return 'vi';
    try {
      const stored = localStorage.getItem(LANG_STORAGE_KEY) as Language | null;
      if (stored === 'vi' || stored === 'en') return stored;
      // Default to Vietnamese if browser language starts with vi, else vi by default as user requested
      return 'vi';
    } catch {
      return 'vi';
    }
  });

  const setLanguage = useCallback((newLang: Language) => {
    setLanguageState(newLang);
    try {
      localStorage.setItem(LANG_STORAGE_KEY, newLang);
      document.documentElement.lang = newLang;
    } catch {
      // ignore
    }
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguageState((prev) => {
      const next = prev === 'vi' ? 'en' : 'vi';
      try {
        localStorage.setItem(LANG_STORAGE_KEY, next);
        document.documentElement.lang = next;
      } catch {
        // ignore
      }
      return next;
    });
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return {
    language,
    setLanguage,
    toggleLanguage,
    isVi: language === 'vi',
  };
}
