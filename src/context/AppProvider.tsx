import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'
import { AppContext, type Theme } from './app-context'
import type { Lang, Localized } from '../data/types'

const THEME_KEY = 'cs-theme'
const LANG_KEY = 'cs-lang'

function readStored<T extends string>(key: string, allowed: readonly T[], fallback: T): T {
  try {
    const raw = localStorage.getItem(key)
    if (raw && (allowed as readonly string[]).includes(raw)) return raw as T
  } catch {
    // localStorage bloqueado (aba anônima, cookies desligados): segue no padrão.
  }
  return fallback
}

export function AppProvider({ children }: { children: ReactNode }) {
  // O tema escuro é o padrão; o script em index.html já aplicou antes do paint.
  const [theme, setTheme] = useState<Theme>(() => readStored(THEME_KEY, ['dark', 'light'] as const, 'dark'))
  const [lang, setLangState] = useState<Lang>(() => {
    const stored = readStored(LANG_KEY, ['pt', 'en'] as const, '' as Lang)
    if (stored) return stored
    return navigator.language?.toLowerCase().startsWith('pt') ? 'pt' : 'pt'
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', theme === 'dark' ? '#07080c' : '#f6f7fb')
    try {
      localStorage.setItem(THEME_KEY, theme)
    } catch {
      /* sem persistência, tudo bem */
    }
  }, [theme])

  useEffect(() => {
    document.documentElement.lang = lang === 'en' ? 'en' : 'pt-BR'
    try {
      localStorage.setItem(LANG_KEY, lang)
    } catch {
      /* sem persistência, tudo bem */
    }
  }, [lang])

  const toggleTheme = useCallback(() => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'))
  }, [])

  const setLang = useCallback((next: Lang) => setLangState(next), [])

  const t = useCallback((value: Localized) => value[lang], [lang])

  const value = useMemo(
    () => ({ theme, lang, toggleTheme, setLang, t }),
    [theme, lang, toggleTheme, setLang, t],
  )

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
