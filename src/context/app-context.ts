import { createContext, useContext } from 'react'
import type { Lang, Localized } from '../data/types'

export type Theme = 'dark' | 'light'

export interface AppState {
  theme: Theme
  lang: Lang
  toggleTheme: () => void
  setLang: (lang: Lang) => void
  /** Resolve um texto bilíngue para o idioma ativo. */
  t: (value: Localized) => string
}

export const AppContext = createContext<AppState | null>(null)

export function useApp(): AppState {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp precisa estar dentro de <AppProvider>')
  return ctx
}
