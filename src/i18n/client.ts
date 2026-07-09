import type { Translations } from "./translations"

const STORAGE_KEY = "lang"

export function getStoredLang(): string {
  return localStorage.getItem(STORAGE_KEY) || "es"
}

export function setStoredLang(lang: string): void {
  localStorage.setItem(STORAGE_KEY, lang)
}

export function initI18n(translations: Translations): void {
  const current = getStoredLang()
  applyLang(current, translations)
  document.addEventListener("languagechange", () => {
    applyLang(getStoredLang(), translations)
  })
}

function applyLang(lang: string, translations: Translations): void {
  document.documentElement.lang = lang
  document.querySelectorAll<HTMLElement>("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n
    if (!key) return
    const t = translations[key]
    if (!t) return
    el.textContent = lang === "es" ? t.es : t.en
  })
  document.querySelectorAll<HTMLElement>("[data-i18n-aria]").forEach((el) => {
    const key = el.dataset.i18nAria
    if (!key) return
    const t = translations[key]
    if (!t) return
    el.setAttribute("aria-label", lang === "es" ? t.es : t.en)
  })
}
