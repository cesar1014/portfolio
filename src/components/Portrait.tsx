import { useRef } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { useApp } from '../context/app-context'
import { profile } from '../data/profile'
import { usePrefersReducedMotion } from '../hooks/useMediaQuery'
import { EASE } from '../lib/motion'
import './Portrait.css'

/**
 * Retrato emoldurado, com marcas de corte nos cantos e legenda em
 * monoespaçada — a forma como uma foto é apresentada numa prova de
 * impressão.
 *
 * Duas animações: a moldura abre com uma cortina vertical, e a foto
 * dentro dela anda mais devagar que a página no scroll, o que dá
 * profundidade sem tirar nada do lugar.
 */
export function Portrait() {
  const { t } = useApp()
  const ref = useRef<HTMLElement>(null)
  const reduced = usePrefersReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const drift = useSpring(useTransform(scrollYProgress, [0, 1], ['-6%', '6%']), {
    stiffness: 90,
    damping: 24,
  })

  return (
    <motion.figure
      className="portrait"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <div className="portrait__frame">
        <span className="portrait__mark portrait__mark--tl" aria-hidden="true" />
        <span className="portrait__mark portrait__mark--tr" aria-hidden="true" />
        <span className="portrait__mark portrait__mark--bl" aria-hidden="true" />
        <span className="portrait__mark portrait__mark--br" aria-hidden="true" />

        {/* A cortina desce revelando a foto, como uma cópia saindo
            do revelador. O clip fica no wrapper para que a imagem
            possa continuar se movendo por baixo dele. */}
        <motion.div
          className="portrait__window"
          initial={{ clipPath: 'inset(0 0 100% 0)' }}
          animate={{ clipPath: 'inset(0 0 0% 0)' }}
          transition={{ duration: 1.1, ease: EASE, delay: 0.45 }}
        >
          <motion.img
            className="portrait__image"
            style={reduced ? undefined : { y: drift }}
            src={profile.avatar}
            alt={profile.name}
            width={900}
            height={1200}
            loading="eager"
            decoding="async"
          />
        </motion.div>
      </div>

      <motion.figcaption
        className="portrait__caption"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: EASE, delay: 1.2 }}
      >
        <span className="portrait__caption-rule" aria-hidden="true" />
        {t(profile.caption)}
      </motion.figcaption>
    </motion.figure>
  )
}
