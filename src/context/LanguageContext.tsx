"use client";
import { Locale } from "@/i18n/i18n-config";
import { createContext } from "react";

export const LanguageContext = createContext<Locale>("en");

export function LanguageProvider({ children, lang }: { children: React.ReactNode, lang: Locale }) {
  return (
    <LanguageContext.Provider value={lang}>{children}</LanguageContext.Provider>
  );
}