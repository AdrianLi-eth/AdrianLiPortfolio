import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import type { SiteContent } from '../data/content.types'
import { enContent } from '../data/locales/en'
import { zhContent } from '../data/locales/zh'

export type Locale = 'en' | 'zh'

const STORAGE_KEY = 'portfolio-locale'

interface LocaleContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
  content: SiteContent
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

function readStoredLocale(): Locale {
  if (typeof window === 'undefined') return 'en'
  return window.localStorage.getItem(STORAGE_KEY) === 'zh' ? 'zh' : 'en'
}

function applyDocumentLocale(locale: Locale) {
  document.documentElement.lang = locale === 'zh' ? 'zh-CN' : 'en'
}

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(readStoredLocale)

  const setLocale = (next: Locale) => {
    setLocaleState(next)
    window.localStorage.setItem(STORAGE_KEY, next)
    applyDocumentLocale(next)
  }

  useEffect(() => {
    applyDocumentLocale(locale)
  }, [locale])

  const content = locale === 'zh' ? zhContent : enContent

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      content,
    }),
    [locale, content],
  )

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

export function useLocale() {
  const ctx = useContext(LocaleContext)
  if (!ctx) throw new Error('useLocale must be used within LocaleProvider')
  return ctx
}

export function useContent() {
  return useLocale().content
}

export function useUi() {
  return useLocale().content.ui
}
