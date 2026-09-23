import type { Transition, Variants } from 'framer-motion'

/** Curva usada em praticamente tudo: sai rápido, chega devagar. */
export const EASE = [0.16, 1, 0.3, 1] as const

export const spring: Transition = { type: 'spring', stiffness: 220, damping: 28, mass: 0.9 }

/** Entrada padrão de seção: sobe um pouco e aparece. */
export const rise: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
}

export const fade: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.9, ease: EASE } },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94, y: 18 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
}

/** Container que escalona os filhos. `delay` controla o começo. */
export function stagger(each = 0.08, delay = 0): Variants {
  return {
    hidden: {},
    show: { transition: { staggerChildren: each, delayChildren: delay } },
  }
}

/** Reaproveitado em toda seção: anima uma vez, quando entra na viewport. */
export const inView = {
  initial: 'hidden' as const,
  whileInView: 'show' as const,
  viewport: { once: true, margin: '-80px' },
}
