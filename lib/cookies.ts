import { Locale } from './translations'

const LANGUAGE_COOKIE_NAME = 'ruunai-language'
const COOKIE_MAX_AGE = 365 * 24 * 60 * 60 // 1 year in seconds

export function getLanguageCookie(): Locale | null {
  if (typeof document === 'undefined') return null

  const cookies = document.cookie.split('; ')
  const languageCookie = cookies.find((row) => row.startsWith(`${LANGUAGE_COOKIE_NAME}=`))

  if (!languageCookie) return null

  const value = languageCookie.split('=')[1] as Locale
  return value
}

export function setLanguageCookie(locale: Locale): void {
  if (typeof document === 'undefined') return

  document.cookie = `${LANGUAGE_COOKIE_NAME}=${locale}; path=/; max-age=${COOKIE_MAX_AGE}; SameSite=Lax`
}

export function deleteLanguageCookie(): void {
  if (typeof document === 'undefined') return

  document.cookie = `${LANGUAGE_COOKIE_NAME}=; path=/; max-age=0`
}
