import { motion } from 'framer-motion'
import { EASE } from '../lib/motion'
import './Reveal.css'

interface RevealProps {
  text: string
  className?: string
  /** atraso antes da primeira palavra, em segundos */
  delay?: number
  /** true anima na montagem; false espera entrar na viewport */
  onMount?: boolean
}

/**
 * Revelação tipográfica com máscara: cada palavra sobe de dentro de
 * uma caixa com overflow escondido, como um letreiro virando. É o
 * gesto de animação principal do site — aparece em todo título.
 *
 * Cada palavra anima com `initial`/`animate` em forma de objeto, e
 * não com rótulos de variante. Isso é de propósito: os títulos ficam
 * dentro de blocos que já são pais de variantes com `staggerChildren`,
 * e um rótulo aqui entraria nessa árvore e ficaria esperando um
 * comando que nunca chega — foi assim que o nome do hero travou fora
 * da máscara. Com objeto, cada palavra se anima sozinha e o atraso
 * em cascata vem da conta no `delay`.
 *
 * O texto continua uma string só para leitores de tela; a quebra em
 * palavras é puramente visual.
 */
export function Reveal({ text, className, delay = 0, onMount = false }: RevealProps) {
  const words = text.split(' ')

  return (
    <span className={className} aria-label={text}>
      {words.map((word, index) => {
        const transition = { duration: 0.9, ease: EASE, delay: delay + index * 0.055 }
        const trigger = onMount
          ? { animate: { y: '0%' } }
          : { whileInView: { y: '0%' }, viewport: { once: true, margin: '-70px' } }

        return (
          <span className="reveal__word" key={`${word}-${index}`} aria-hidden="true">
            <motion.span
              className="reveal__inner"
              initial={{ y: '110%' }}
              transition={transition}
              {...trigger}
            >
              {word}
            </motion.span>
          </span>
        )
      })}
    </span>
  )
}
