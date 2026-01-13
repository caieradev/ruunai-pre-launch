'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import {
  Locale,
  Translation,
  translations,
  detectBrowserLanguage,
  defaultLocale,
} from '@/lib/translations'
import { getLanguageCookie, setLanguageCookie } from '@/lib/cookies'

interface LanguageContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Translation
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale)
  const [isInitialized, setIsInitialized] = useState(false)

  // Initialize language on mount
  useEffect(() => {
    // Check for saved language in cookie
    const savedLanguage = getLanguageCookie()

    if (savedLanguage) {
      setLocaleState(savedLanguage)
    } else {
      // Auto-detect browser language
      const detectedLanguage = detectBrowserLanguage()
      setLocaleState(detectedLanguage)
      setLanguageCookie(detectedLanguage)
    }

    setIsInitialized(true)
  }, [])

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
    setLanguageCookie(newLocale)
  }

  const value: LanguageContextType = {
    locale,
    setLocale,
    t: translations[locale],
  }

  // Prevent flash of wrong language
  if (!isInitialized) {
    return null
  }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
