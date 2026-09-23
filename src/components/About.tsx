import { motion } from 'framer-motion'
import { Github, Linkedin } from 'lucide-react'
import { useApp } from '../context/app-context'
import { copy } from '../data/copy'
import { profile } from '../data/profile'
import { projects } from '../data/projects'
import type { Localized } from '../data/types'
import { inView, rise, stagger } from '../lib/motion'
import { Counter } from './Counter'
import { Reveal } from './Reveal'
import './About.css'

/** Quantos projetos da lista têm link ao vivo — contado, não digitado. */
const liveCount = projects.filter((project) =>
  project.links.some((link) => link.kind === 'live'),
).length

/**
 * Três números escolhidos por serem verificáveis em um clique, todos
 * de um dígito só — assim a coluna dos rótulos fica alinhada sem
 * truque de largura.
 *
 * Ficaram de fora de propósito: contagem de repositórios (a maior
 * parte dos 43 é exercício de aula), de linguagens ("9" contava
 * Dockerfile, Shell e CSS) e o ano em que comecei a programar — o
 * leitor faz a conta e chega no mesmo "4 anos" que eu queria evitar,
 * e um número de quatro dígitos ainda desalinhava a coluna.
 */
const STATS: { value: number; label: Localized; note: Localized }[] = [
  { value: liveCount, label: copy.about.stats.live, note: copy.about.stats.liveNote },
  { value: 2, label: copy.about.stats.production, note: copy.about.stats.productionNote },
  { value: 3, label: copy.about.stats.platforms, note: copy.about.stats.platformsNote },
]

export function About() {
  const { t } = useApp()

  return (
    <section id="about" className="section about">
      <div className="container">
        <motion.div className="section-head" variants={rise} {...inView}>
          <span className="eyebrow">{t(copy.about.eyebrow)}</span>
          <h2 className="section-title">
            <Reveal text={t(copy.about.title)} />
          </h2>
        </motion.div>

        <div className="about__grid">
          <motion.div className="about__prose" variants={stagger(0.1)} {...inView}>
            <motion.p className="about__lead" variants={rise}>
              {t(copy.about.p1)}
            </motion.p>
            <motion.p variants={rise}>{t(copy.about.p2)}</motion.p>
            <motion.p variants={rise}>{t(copy.about.p3)}</motion.p>
            <motion.p variants={rise}>{t(copy.about.p4)}</motion.p>

            <motion.p className="about__pitch" variants={rise}>
              {t(copy.about.pitch)}
            </motion.p>

            <motion.div className="about__links" variants={rise}>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer noopener"
                className="about__link"
              >
                <Github size={15} aria-hidden="true" />
                github.com/{profile.githubUser}
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="about__link"
              >
                <Linkedin size={15} aria-hidden="true" />
                LinkedIn
              </a>
            </motion.div>
          </motion.div>

          <motion.dl className="about__stats" variants={stagger(0.09)} {...inView}>
            {STATS.map((stat) => (
              <motion.div key={t(stat.label)} className="about__stat" variants={rise}>
                <dt className="about__stat-value">
                  <Counter to={stat.value} />
                </dt>
                <dd className="about__stat-text">
                  <span className="about__stat-label">{t(stat.label)}</span>
                  <span className="about__stat-note">{t(stat.note)}</span>
                </dd>
              </motion.div>
            ))}
          </motion.dl>
        </div>
      </div>
    </section>
  )
}
