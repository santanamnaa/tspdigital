"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import enTranslations from '@/locales/en.json';
import idTranslations from '@/locales/id.json';

type Language = 'id' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: <T = string>(key: string) => T;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translationsMap = {
  en: enTranslations,
  id: idTranslations,
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');
  const [translations, setTranslations] = useState<Record<string, unknown>>(enTranslations);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Load language preference from localStorage
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'id' || savedLanguage === 'en')) {
      setLanguageState(savedLanguage);
    }
  }, []);

  useEffect(() => {
    // Load translations for the current language
    setTranslations(translationsMap[language]);
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (mounted) {
      localStorage.setItem('language', lang);
    }
  };

  const t = <T = string>(key: string): T => {
    const keys = key.split('.');
    let value: unknown = translations;

    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = (value as Record<string, unknown>)[k];
      } else {
        return key as unknown as T;
      }
    }

    return (value !== undefined ? value : key) as T;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
