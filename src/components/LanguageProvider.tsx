"use client";

import { createContext, useContext, useEffect, useMemo, useSyncExternalStore } from "react";
import clsx from "clsx";
import { Languages } from "lucide-react";
import { getUi, localeLabels } from "@/data/localized";
import type { Locale } from "@/data/localized";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  ui: ReturnType<typeof getUi>;
  localizedHref: (href: string) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function normalizeLocale(value: string | null): Locale {
  return value === "es" ? "es" : "en";
}

function addLocaleToHref(href: string, locale: Locale) {
  if (
    locale === "en" ||
    href.startsWith("http") ||
    href.startsWith("mailto:") ||
    href.startsWith("#") ||
    href.endsWith(".pdf")
  ) {
    return href;
  }

  const [pathAndQuery, hash = ""] = href.split("#");
  const [path, query = ""] = pathAndQuery.split("?");
  const params = new URLSearchParams(query);
  params.set("lang", locale);
  const queryString = params.toString();
  return `${path}${queryString ? `?${queryString}` : ""}${hash ? `#${hash}` : ""}`;
}

let localeSnapshot: Locale = "en";
let hasBrowserSnapshot = false;
const localeListeners = new Set<() => void>();

function readBrowserLocale() {
  const params = new URLSearchParams(window.location.search);
  const urlLocale = normalizeLocale(params.get("lang"));
  const storedLocale = normalizeLocale(window.localStorage.getItem("mickoll-cv-language"));
  return params.has("lang") ? urlLocale : storedLocale;
}

function getLocaleSnapshot() {
  if (typeof window === "object" && !hasBrowserSnapshot) {
    localeSnapshot = readBrowserLocale();
    hasBrowserSnapshot = true;
  }
  return localeSnapshot;
}

function getServerLocaleSnapshot() {
  return "en" as Locale;
}

function subscribeToLocale(listener: () => void) {
  localeListeners.add(listener);
  return () => localeListeners.delete(listener);
}

function publishLocale(nextLocale: Locale) {
  localeSnapshot = nextLocale;
  hasBrowserSnapshot = true;
  localeListeners.forEach((listener) => listener());
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const locale = useSyncExternalStore(subscribeToLocale, getLocaleSnapshot, getServerLocaleSnapshot);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = (nextLocale: Locale) => {
    publishLocale(nextLocale);
    document.documentElement.lang = nextLocale;
    window.localStorage.setItem("mickoll-cv-language", nextLocale);

    const url = new URL(window.location.href);
    if (nextLocale === "en") {
      url.searchParams.delete("lang");
    } else {
      url.searchParams.set("lang", nextLocale);
    }
    window.history.replaceState(null, "", `${url.pathname}${url.search}${url.hash}`);
  };

  const value = useMemo<LanguageContextValue>(
    () => ({
      locale,
      setLocale,
      ui: getUi(locale),
      localizedHref: (href: string) => addLocaleToHref(href, locale),
    }),
    [locale]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }
  return context;
}

export function LanguageToggle() {
  const { locale, setLocale, ui } = useLanguage();

  return (
    <div className="no-print fixed bottom-4 right-4 z-50 md:bottom-auto md:top-4">
      <div className="flex items-center gap-1 rounded-2xl border border-white/14 bg-slate-950/92 p-1 text-white shadow-[0_18px_50px_-34px_rgba(4,12,24,0.95)] backdrop-blur">
        <span className="sr-only">{ui.language}</span>
        <Languages className="ml-2 h-4 w-4 text-cyan-300" aria-hidden="true" />
        {(["en", "es"] as const).map((nextLocale) => (
          <button
            key={nextLocale}
            aria-label={nextLocale === "en" ? "Switch language to English" : "Cambiar idioma a español"}
            aria-pressed={locale === nextLocale}
            className={clsx(
              "min-h-[44px] min-w-[44px] rounded-xl px-3 py-2 text-xs font-black uppercase tracking-[0.12em] transition focus:outline-none focus:ring-2 focus:ring-cyan-300",
              locale === nextLocale ? "bg-white text-slate-950" : "text-slate-300 hover:bg-white/10 hover:text-white"
            )}
            onClick={() => setLocale(nextLocale)}
            style={{ minHeight: 44, minWidth: 44 }}
            type="button"
          >
            {localeLabels[nextLocale]}
          </button>
        ))}
      </div>
    </div>
  );
}
