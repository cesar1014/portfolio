import { useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Download, Github, Plus } from 'lucide-react'
import { useApp } from '../context/app-context'
import { copy } from '../data/copy'
import type { LinkKind, Project } from '../data/types'
import { EASE, rise } from '../lib/motion'
import './ProjectCard.css'

const LINK_ICON: Record<LinkKind, typeof ArrowUpRight> = {
  live: ArrowUpRight,
  repo: Github,
  download: Download,
}

interface ProjectCardProps {
  project: Project
  /** posição na lista completa, para o numeral do cabeçalho */
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const { t } = useApp()
  const ref = useRef<HTMLElement>(null)
  const [open, setOpen] = useState(false)

  const labels: Record<LinkKind, string> = {
    live: t(copy.work.live),
    repo: t(copy.work.repo),
    download: t(copy.work.download),
  }

  return (
    <motion.article
      ref={ref}
      className="project"
      data-featured={project.featured ? 'true' : 'false'}
      data-open={open}
      variants={rise}
    >
      <header className="project__head">
        <span className="project__index">{String(index + 1).padStart(2, '0')}</span>
        <span className="project__meta">
          <span className="project__year">{project.year}</span>
          {project.featured && <span className="project__featured">{t(copy.work.featured)}</span>}
        </span>
      </header>

      <div className="project__body">
        <h3 className="project__name">{project.name}</h3>
        <p className="project__tagline">{t(project.tagline)}</p>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              className="project__details"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.45, ease: EASE }}
            >
              <div className="project__details-inner">
                <p className="project__description">{t(project.description)}</p>
                <ul className="project__highlights">
                  {project.highlights.map((highlight) => (
                    <li key={highlight.pt}>{t(highlight)}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          type="button"
          className="project__toggle"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
        >
          <Plus size={13} aria-hidden="true" className="project__toggle-icon" />
          {open ? t(copy.work.less) : t(copy.work.more)}
        </button>
      </div>

      <ul className="project__stack">
        {project.stack.map((tech) => (
          <li key={tech} className="chip">
            {tech}
          </li>
        ))}
      </ul>

      <footer className="project__links">
        {project.links.map((link) => {
          const Icon = LINK_ICON[link.kind]
          return (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noreferrer noopener"
              className="project__link"
              data-kind={link.kind}
            >
              <Icon size={14} aria-hidden="true" />
              {labels[link.kind]}
              <span className="visually-hidden"> — {project.name}</span>
            </a>
          )
        })}
      </footer>
    </motion.article>
  )
}
