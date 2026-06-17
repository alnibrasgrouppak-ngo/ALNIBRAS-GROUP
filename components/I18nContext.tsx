"use client";

import { createContext, useContext, useEffect, useState } from "react";
import en from "@/dictionaries/en.json";
import ur from "@/dictionaries/ur.json";

type Locale = "en" | "ur";

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string, fallback?: string) => string;
  dictionaries: Record<Locale, any>;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

const dictionaries: Record<Locale, any> = { en, ur };

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    // Read persisted locale from localStorage
    const savedLocale = localStorage.getItem("locale") as Locale | null;
    if (savedLocale === "en" || savedLocale === "ur") {
      setLocaleState(savedLocale);
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("locale", newLocale);
    // Dynamic html dir attribute for RTL support when Urdu is selected
    const html = document.documentElement;
    if (newLocale === "ur") {
      html.setAttribute("dir", "rtl");
      html.setAttribute("lang", "ur");
    } else {
      html.setAttribute("dir", "ltr");
      html.setAttribute("lang", "en");
    }
  };

  // Sync HTML attributes on mount / locale change
  useEffect(() => {
    const html = document.documentElement;
    if (locale === "ur") {
      html.setAttribute("dir", "rtl");
      html.setAttribute("lang", "ur");
    } else {
      html.setAttribute("dir", "ltr");
      html.setAttribute("lang", "en");
    }
  }, [locale]);

  const t = (key: string, fallback?: string): string => {
    const parts = key.split(".");
    let current = dictionaries[locale] || dictionaries["en"];
    for (const part of parts) {
      if (current && typeof current === "object" && part in current) {
        current = current[part];
      } else {
        return fallback || key;
      }
    }
    return typeof current === "string" ? current : fallback || key;
  };

  return (
    <I18nContext.Provider value={{ locale, setLocale, t, dictionaries }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
}
