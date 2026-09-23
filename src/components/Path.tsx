import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { useApp } from '../context/app-context'
import { copy } from '../data/copy'
import { timeline } from '../data/profile'
import { inView, rise, stagger } from '../lib/motion'
import { Reveal } from './Reveal'
import './Path.css'

export function Path() {
  const { t } = useApp()
  const listRef = useRef<HTMLOListElement>(null)

  // A linha vertical se preenche conforme a seção passa pela tela.
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ['start 72%', 'end 62%'],
  })
  const line = useSpring(scrollYProgress, { stiffness: 120, damping: 28, restDelta: 0.001 })

  return (
    <section id="path" className="section path">
      <div className="container">
        <motion.div className="section-head" variants={rise} {...inView}>
          <span className="eyebrow">{t(copy.path.eyebrow)}</span>
          <h2 className="section-title">
            <Reveal text={t(copy.path.title)} />
          </h2>
        </motion.div>

        <motion.ol className="path__list" ref={listRef} variants={stagger(0.1)} {...inView}>
          <span className="path__rail" aria-hidden="true">
            <motion.span className="path__rail-fill" style={{ scaleY: line }} />
          </span>

          {timeline.map((entry) => (
            <motion.li key={entry.id} className="path__item" variants={rise}>
              <span className="path__node" aria-hidden="true">
                {entry.current && <span className="path__node-pulse" />}
              </span>

              <div className="path__card">
                <div className="path__meta">
                  <span className="path__period">{entry.period}</span>
                  {entry.current && <span className="path__now">{t(copy.path.now)}</span>}
                </div>
                <h3 className="path__title">{t(entry.title)}</h3>
                <p className="path__org">{t(entry.org)}</p>
                <p className="path__body">{t(entry.body)}</p>
                <ul className="path__tags">
                  {entry.tags.map((tag) => (
                    <li key={tag} className="chip">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  )
}
