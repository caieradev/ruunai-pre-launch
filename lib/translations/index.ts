import { en } from './en'
import { pt } from './pt'
import { es } from './es'

export const translations = {
  en,
  pt,
  es,
} as const

export type Locale = keyof typeof translations
export type Translation = typeof en

export const locales: Locale[] = ['en', 'pt', 'es']

export const localeNames: Record<Locale, string> = {
  en: 'English',
  pt: 'Português',
  es: 'Español',
}

export const defaultLocale: Locale = 'pt' // Default to Portuguese as requested

// Browser language detection
export function detectBrowserLanguage(): Locale {
  if (typeof window === 'undefined') return defaultLocale

  const browserLang = navigator.language.toLowerCase()

  // Check for exact matches first
  if (browserLang === 'pt' || browserLang === 'pt-br') return 'pt'
  if (browserLang === 'en' || browserLang === 'en-us') return 'en'
  if (browserLang === 'es' || browserLang.startsWith('es-')) return 'es'

  // Check for language prefix
  const langPrefix = browserLang.split('-')[0]
  if (langPrefix === 'pt') return 'pt'
  if (langPrefix === 'en') return 'en'
  if (langPrefix === 'es') return 'es'

  return defaultLocale
}
