import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useApp } from '../context/app-context'
import { useScrollSpy } from '../hooks/useScrollSpy'
import { copy } from '../data/copy'
import type { Localized } from '../data/types'
import { ThemeToggle } from './ThemeToggle'
import { LangToggle } from './LangToggle'
import './Header.css'

const NAV: { id: string; label: Localized }[] = [
  { id: 'home', label: copy.nav.home },
  { id: 'about', label: copy.nav.about },
  { id: 'work', label: copy.nav.work },
  { id: 'stack', label: copy.nav.stack },
  { id: 'path', label: copy.nav.path },
  { id: 'contact', label: copy.nav.contact },
]

const NAV_IDS = NAV.map((item) => item.id)

export function Header() {
  const { t } = useApp()
  const active = useScrollSpy(NAV_IDS)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 26, restDelta: 0.001 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Trava o scroll do corpo enquanto o menu do celular está aberto.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  return (
    <>
      <motion.div className="scroll-progress" style={{ scaleX: progress }} aria-hidden="true" />

      <header className="header" data-scrolled={scrolled}>
        <div className="header__inner container">
          <a href="#home" className="header__brand" onClick={() => setMenuOpen(false)}>
            <span className="header__mark" aria-hidden="true">
              CS
            </span>
            <span className="header__brand-text">
              Cesar <span className="header__brand-accent">Santana</span>
            </span>
          </a>

          <nav className="header__nav" aria-label="Principal">
            {NAV.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="header__link"
                data-active={active === item.id}
                aria-current={active === item.id ? 'true' : undefined}
              >
                {active === item.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="header__link-rule"
                    transition={{ type: 'spring', stiffness: 380, damping: 34 }}
                  />
                )}
                {t(item.label)}
              </a>
            ))}
          </nav>

          <div className="header__actions">
            <LangToggle />
            <ThemeToggle />
            <button
              type="button"
              className="header__burger"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-label={t(menuOpen ? copy.a11y.closeMenu : copy.a11y.openMenu)}
            >
              {menuOpen ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <nav className="mobile-menu__nav" aria-label="Principal (celular)">
              {NAV.map((item, index) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  className="mobile-menu__link"
                  data-active={active === item.id}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.04 * index + 0.06, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className="mobile-menu__index">{String(index + 1).padStart(2, '0')}</span>
                  {t(item.label)}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
