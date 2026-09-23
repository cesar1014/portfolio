import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react'
import { useApp } from '../context/app-context'
import { copy } from '../data/copy'
import { profile, roles } from '../data/profile'
import { EASE, stagger } from '../lib/motion'
import { Portrait } from './Portrait'
import { Reveal } from './Reveal'
import { useMagnetic } from '../hooks/useMagnetic'
import './Hero.css'

/** Entrada padrão dos blocos do hero. */
const step = (delay: number) => ({
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE, delay } },
})

export function Hero() {
  const { t } = useApp()
  const [roleIndex, setRoleIndex] = useState(0)
  const magnet = useMagnetic()

  useEffect(() => {
    const id = window.setInterval(() => {
      setRoleIndex((index) => (index + 1) % roles.length)
    }, 3000)
    return () => window.clearInterval(id)
  }, [])

  return (
    <section id="home" className="hero">
      <div className="container hero__inner">
        <motion.div
          className="hero__text"
          variants={stagger(0.06, 0.1)}
          initial="hidden"
          animate="show"
        >
          <motion.p className="hero__status" variants={step(0)}>
            <span className="hero__status-mark" aria-hidden="true" />
            {t(copy.hero.badge)}
          </motion.p>

          <motion.p className="hero__greeting" variants={step(0.05)}>
            {t(copy.hero.greeting)}
          </motion.p>

          {/* O nome não usa gradiente: o contraste vem do itálico
              serifado no sobrenome, que é o gesto tipográfico da
              identidade inteira. */}
          <h1 className="hero__name">
            <Reveal className="hero__name-line" text="Cesar" onMount delay={0.16} />
            <Reveal
              className="hero__name-line hero__name-accent"
              text="Santana"
              onMount
              delay={0.28}
            />
          </h1>

          <motion.div className="hero__role" variants={step(0.3)}>
            <span className="hero__role-viewport">
              <AnimatePresence initial={false}>
                <motion.span
                  key={roleIndex}
                  className="hero__role-text"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4, ease: EASE }}
                >
                  {t(roles[roleIndex])}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.div>

          <motion.p className="hero__lead" variants={step(0.38)}>
            {t(copy.hero.lead)}
          </motion.p>

          <motion.div className="hero__actions" variants={step(0.46)}>
            <motion.a
              href="#work"
              className="btn btn--primary"
              ref={magnet.ref}
              style={{ x: magnet.x, y: magnet.y }}
              onPointerMove={magnet.onPointerMove}
              onPointerLeave={magnet.onPointerLeave}
            >
              {t(copy.hero.ctaWork)}
              <ArrowUpRight size={16} aria-hidden="true" />
            </motion.a>
            <a href="#contact" className="btn btn--ghost">
              {t(copy.hero.ctaContact)}
            </a>

            <div className="hero__socials">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer noopener"
                className="hero__social"
                aria-label="GitHub"
              >
                <Github size={17} aria-hidden="true" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="hero__social"
                aria-label="LinkedIn"
              >
                <Linkedin size={17} aria-hidden="true" />
              </a>
              <a href={`mailto:${profile.email}`} className="hero__social" aria-label="E-mail">
                <Mail size={17} aria-hidden="true" />
              </a>
            </div>
          </motion.div>

          <motion.p className="hero__place" variants={step(0.54)}>
            {t(profile.location)} — IFSP · ADS
          </motion.p>
        </motion.div>

        <Portrait />
      </div>

      <motion.a
        href="#about"
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
      >
        <span>{t(copy.hero.scroll)}</span>
        <motion.span
          className="hero__scroll-icon"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={13} aria-hidden="true" />
        </motion.span>
      </motion.a>
    </section>
  )
}
