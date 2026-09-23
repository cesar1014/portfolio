import { ArrowUp } from 'lucide-react'
import { useApp } from '../context/app-context'
import { copy } from '../data/copy'
import { profile } from '../data/profile'
import './Footer.css'

export function Footer() {
  const { t } = useApp()
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__left">
          <p className="footer__name">{profile.name}</p>
          <p className="footer__note">{t(copy.footer.built)}</p>
        </div>

        <div className="footer__right">
          <p className="footer__rights">
            © {year} · {t(copy.footer.rights)}
          </p>
          <a href="#home" className="footer__top">
            {t(copy.footer.top)}
            <ArrowUp size={14} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  )
}
