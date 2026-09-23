import { marquee } from '../data/profile'
import './Marquee.css'

/**
 * Fita infinita de tecnologias. O truque é renderizar a lista duas
 * vezes e deslocar a faixa em 50%: quando a animação reinicia, a
 * segunda cópia já está exatamente onde a primeira estava.
 */
export function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {[0, 1].map((copyIndex) => (
          <ul className="marquee__list" key={copyIndex}>
            {marquee.map((item) => (
              <li key={`${copyIndex}-${item}`} className="marquee__item">
                {item}
                <span className="marquee__dot" />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}
