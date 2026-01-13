'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { locales, localeNames, Locale } from '@/lib/translations'

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage()

  return (
    <div className="flex items-center gap-2">
      {locales.map((lang) => (
        <button
          key={lang}
          onClick={() => setLocale(lang)}
          className={`px-3 py-1 text-sm font-medium transition-colors rounded-md ${
            locale === lang
              ? 'bg-accent-primary text-dark-bg'
              : 'text-text-secondary hover:text-text-primary hover:bg-white/5'
          }`}
          aria-label={`Switch to ${localeNames[lang]}`}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  )
}
