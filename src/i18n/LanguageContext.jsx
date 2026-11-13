import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { DICT, LANGS } from "./dict.js";

const LanguageContext = createContext(null);

const STORAGE_KEY = "florysite-lang";

function getInitialLang() {
  if (typeof window === "undefined") return "en";
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved && LANGS.includes(saved)) return saved;
  // fall back to the browser language when it is Ukrainian
  const nav = (navigator.language || "").toLowerCase();
  return nav.startsWith("uk") ? "uk" : "en";
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(getInitialLang);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next) => {
    if (LANGS.includes(next)) setLangState(next);
  }, []);

  const toggleLang = useCallback(() => {
    setLangState((cur) => (cur === "en" ? "uk" : "en"));
  }, []);

  const value = { lang, setLang, toggleLang, t: DICT[lang] };
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
