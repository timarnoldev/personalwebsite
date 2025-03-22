"use client";
import { Locale } from "@/i18n/i18n-config";
import { usePostHog } from "posthog-js/react";
import { createContext, useEffect } from "react";

export const LanguageContext = createContext<Locale>("en");

export function LanguageProvider({ children, lang }: { children: React.ReactNode, lang: Locale }) {

    const posthog = usePostHog();

    useEffect(()=>{
        posthog.capture("language_used", {lang})
    },[posthog, lang]);

    
  return (
    <LanguageContext.Provider value={lang}>{children}</LanguageContext.Provider>
  );
}