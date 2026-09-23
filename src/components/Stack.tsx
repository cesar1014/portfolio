import { motion } from 'framer-motion'
import { useApp } from '../context/app-context'
import { copy } from '../data/copy'
import { skillGroups } from '../data/profile'
import { inView, rise, stagger } from '../lib/motion'
import { Reveal } from './Reveal'
import './Stack.css'

export function Stack() {
  const { t } = useApp()

  return (
    <section id="stack" className="section stack">
      <div className="container">
        <motion.div className="section-head" variants={rise} {...inView}>
          <span className="eyebrow">{t(copy.stack.eyebrow)}</span>
          <h2 className="section-title">
            <Reveal text={t(copy.stack.title)} />
          </h2>
          <p className="section-sub">{t(copy.stack.subtitle)}</p>
        </motion.div>

        <motion.div className="stack__grid" variants={stagger(0.08)} {...inView}>
          {skillGroups.map((group, index) => (
            <motion.div key={group.id} className="stack__card" variants={rise}>
              <div className="stack__card-head">
                <span className="stack__index">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="stack__card-title">{t(group.title)}</h3>
              </div>
              <ul className="stack__items">
                {group.items.map((item) => (
                  <li key={item} className="stack__item">
                    <span className="stack__bullet" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
