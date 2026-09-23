import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Copy, Github, Linkedin, Mail, MapPin } from 'lucide-react'
import { useApp } from '../context/app-context'
import { copy } from '../data/copy'
import { profile } from '../data/profile'
import { inView, rise, stagger } from '../lib/motion'
import { Reveal } from './Reveal'
import './Contact.css'

export function Contact() {
  const { t } = useApp()
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return
    const id = window.setTimeout(() => setCopied(false), 2200)
    return () => window.clearTimeout(id)
  }, [copied])

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
    } catch {
      // Sem permissão de área de transferência: o link mailto continua ali.
    }
  }

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <motion.div className="contact__card" variants={stagger(0.1)} {...inView}>
          <span className="contact__glow" aria-hidden="true" />

          <motion.span className="eyebrow" variants={rise}>
            {t(copy.contact.eyebrow)}
          </motion.span>

          <motion.h2 className="contact__title" variants={rise}>
            <Reveal text={t(copy.contact.title)} />
          </motion.h2>

          <motion.p className="contact__lead" variants={rise}>
            {t(copy.contact.lead)}
          </motion.p>

          <motion.div className="contact__actions" variants={rise}>
            <a href={`mailto:${profile.email}`} className="btn btn--primary">
              <Mail size={17} aria-hidden="true" />
              {t(copy.contact.emailMe)}
            </a>

            <button type="button" className="btn btn--ghost contact__copy" onClick={copyEmail}>
              {copied ? (
                <Check size={16} aria-hidden="true" />
              ) : (
                <Copy size={16} aria-hidden="true" />
              )}
              <span className="contact__copy-text">
                {copied ? t(copy.contact.copied) : profile.email}
              </span>
            </button>
          </motion.div>

          <motion.div className="contact__foot" variants={rise}>
            <span className="contact__foot-item">
              <MapPin size={14} aria-hidden="true" />
              {t(profile.location)}
            </span>
            <span className="contact__foot-item">{t(copy.contact.availability)}</span>
            <div className="contact__socials">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer noopener"
                className="contact__social"
                aria-label="GitHub"
              >
                <Github size={17} aria-hidden="true" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="contact__social"
                aria-label="LinkedIn"
              >
                <Linkedin size={17} aria-hidden="true" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
