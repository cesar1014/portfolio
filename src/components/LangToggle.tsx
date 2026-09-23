import { motion } from 'framer-motion'
import { useApp } from '../context/app-context'
import { copy } from '../data/copy'
import type { Lang } from '../data/types'
import './LangToggle.css'

const OPTIONS: { value: Lang; label: string }[] = [
  { value: 'pt', label: 'PT' },
  { value: 'en', label: 'EN' },
]

/** Segmentado PT/EN com a pílula deslizando entre as duas opções. */
export function LangToggle() {
  const { lang, setLang, t } = useApp()

  return (
    <div className="lang-toggle" role="group" aria-label={t(copy.a11y.toggleLang)}>
      {OPTIONS.map((option) => {
        const active = option.value === lang
        return (
          <button
            key={option.value}
            type="button"
            className="lang-toggle__option"
            data-active={active}
            onClick={() => setLang(option.value)}
            aria-pressed={active}
            lang={option.value === 'pt' ? 'pt-BR' : 'en'}
          >
            {active && (
              <motion.span
                layoutId="lang-pill"
                className="lang-toggle__pill"
                transition={{ type: 'spring', stiffness: 380, damping: 32 }}
              />
            )}
            <span className="lang-toggle__label">{option.label}</span>
          </button>
        )
      })}
    </div>
  )
}
