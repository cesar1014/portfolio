import { useId } from 'react'
import { motion } from 'framer-motion'
import { useApp } from '../context/app-context'
import { copy } from '../data/copy'
import './ThemeToggle.css'

/** Oito raios do sol, em ângulos fixos. */
const RAYS = Array.from({ length: 8 }, (_, i) => (i * 360) / 8)

/** Estrelinhas que aparecem no céu do tema escuro. */
const STARS = [
  { x: 36, y: 9, size: 2.2, delay: 0 },
  { x: 47, y: 17, size: 1.5, delay: 0.5 },
  { x: 41, y: 23, size: 1.8, delay: 1 },
  { x: 53, y: 10, size: 1.3, delay: 1.5 },
  { x: 30, y: 21, size: 1.2, delay: 0.8 },
]

const SPRING = { type: 'spring' as const, stiffness: 240, damping: 24, mass: 0.8 }

/**
 * Botão de tema: uma lua com estrelas que vira um sol com raios.
 * A lua é um círculo mascarado por outro círculo — ao afastar a máscara,
 * o crescente vira um disco cheio, e aí os raios entram.
 */
export function ThemeToggle() {
  const { theme, toggleTheme, t } = useApp()
  const maskId = useId()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      role="switch"
      aria-checked={!isDark}
      aria-label={t(copy.a11y.toggleTheme)}
      title={t(copy.a11y.toggleTheme)}
    >
      <span className="theme-toggle__track" aria-hidden="true">
        {/* céu estrelado, só no escuro */}
        <svg className="theme-toggle__sky" viewBox="0 0 64 32">
          {STARS.map((star) => (
            <motion.circle
              key={`${star.x}-${star.y}`}
              cx={star.x}
              cy={star.y}
              r={star.size / 2}
              fill="currentColor"
              initial={false}
              animate={
                isDark
                  ? { opacity: [0.35, 1, 0.35], scale: [0.85, 1.15, 0.85] }
                  : { opacity: 0, scale: 0.4 }
              }
              transition={
                isDark
                  ? { duration: 2.6, repeat: Infinity, ease: 'easeInOut', delay: star.delay }
                  : { duration: 0.3 }
              }
              style={{ transformOrigin: `${star.x}px ${star.y}px` }}
            />
          ))}
        </svg>

        {/* o astro que desliza de um lado para o outro */}
        <motion.span
          className="theme-toggle__orb"
          initial={false}
          animate={{ x: isDark ? 0 : 32 }}
          transition={SPRING}
        >
          <svg viewBox="0 0 24 24" className="theme-toggle__orb-svg">
            <defs>
              <mask id={maskId}>
                <rect x="0" y="0" width="24" height="24" fill="white" />
                {/* Esta bolinha preta é o que morde a lua. Longe = disco cheio. */}
                <motion.circle
                  initial={false}
                  animate={isDark ? { cx: 20, cy: 6, r: 8 } : { cx: 32, cy: -8, r: 8 }}
                  transition={SPRING}
                  fill="black"
                />
              </mask>
            </defs>

            <motion.circle
              cx="12"
              cy="12"
              mask={`url(#${maskId})`}
              fill="currentColor"
              initial={false}
              animate={{ r: isDark ? 10 : 5.6 }}
              transition={SPRING}
            />

            <motion.g
              className="theme-toggle__rays"
              stroke="currentColor"
              strokeWidth="1.9"
              strokeLinecap="round"
              initial={false}
              animate={
                isDark
                  ? { opacity: 0, scale: 0.4, rotate: -45 }
                  : { opacity: 1, scale: 1, rotate: 0 }
              }
              transition={{ ...SPRING, delay: isDark ? 0 : 0.1 }}
              style={{ transformOrigin: '12px 12px' }}
            >
              {RAYS.map((angle) => (
                <line
                  key={angle}
                  x1="12"
                  y1="3.2"
                  x2="12"
                  y2="0.9"
                  transform={`rotate(${angle} 12 12)`}
                />
              ))}
            </motion.g>
          </svg>
        </motion.span>
      </span>
    </button>
  )
}
