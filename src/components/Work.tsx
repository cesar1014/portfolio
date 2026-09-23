import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { useApp } from '../context/app-context'
import { copy } from '../data/copy'
import { profile } from '../data/profile'
import { projects } from '../data/projects'
import type { Localized, ProjectCategory } from '../data/types'
import { inView, rise, stagger } from '../lib/motion'
import { ProjectCard } from './ProjectCard'
import { Reveal } from './Reveal'
import './Work.css'

type Filter = ProjectCategory | 'all'

const FILTERS: { value: Filter; label: Localized }[] = [
  { value: 'all', label: copy.work.filters.all },
  { value: 'fullstack', label: copy.work.filters.fullstack },
  { value: 'mobile', label: copy.work.filters.mobile },
  { value: 'landing', label: copy.work.filters.landing },
]

export function Work() {
  const { t } = useApp()
  const [filter, setFilter] = useState<Filter>('all')

  // O numeral de cada ficha vem da posição na lista completa, não
  // da posição filtrada: o projeto 03 continua sendo o 03 quando
  // alguém olha só os mobile.
  const visible = useMemo(
    () =>
      projects
        .map((project, index) => ({ project, index }))
        .filter(({ project }) => filter === 'all' || project.categories.includes(filter)),
    [filter],
  )

  return (
    <section id="work" className="section work">
      <div className="container">
        <motion.div className="section-head" variants={rise} {...inView}>
          <span className="eyebrow">{t(copy.work.eyebrow)}</span>
          <h2 className="section-title">
            <Reveal text={t(copy.work.title)} />
          </h2>
          <p className="section-sub">{t(copy.work.subtitle)}</p>
        </motion.div>

        <motion.div className="work__filters" variants={rise} {...inView} role="tablist">
          {FILTERS.map((item) => {
            const active = item.value === filter
            const count =
              item.value === 'all'
                ? projects.length
                : projects.filter((p) => p.categories.includes(item.value as ProjectCategory)).length

            return (
              <button
                key={item.value}
                type="button"
                role="tab"
                aria-selected={active}
                className="work__filter"
                data-active={active}
                onClick={() => setFilter(item.value)}
              >
                {t(item.label)}
                <span className="work__filter-count">{count}</span>
              </button>
            )
          })}
        </motion.div>

        <motion.div
          className="work__grid"
          variants={stagger(0.07)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          layout
        >
          <AnimatePresence mode="popLayout">
            {visible.map(({ project, index }) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div className="work__more" variants={rise} {...inView}>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer noopener"
            className="work__more-link"
          >
            {t(copy.work.viewAll)}
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
