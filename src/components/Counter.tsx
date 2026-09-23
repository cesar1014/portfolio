import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { usePrefersReducedMotion } from '../hooks/useMediaQuery'

interface CounterProps {
  to: number
  duration?: number
  suffix?: string
  /** false para números que não são contagem, como um ano */
  countUp?: boolean
}

/** Sobe de 0 até `to` na primeira vez que entra na tela. */
export function Counter({ to, duration = 1400, suffix = '', countUp = true }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const reduced = usePrefersReducedMotion()
  const [value, setValue] = useState(countUp ? 0 : to)

  useEffect(() => {
    if (!countUp) return
    if (!inView) return
    if (reduced) {
      setValue(to)
      return
    }

    let frame = 0
    const start = performance.now()

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      // easeOutExpo: acelera no começo e encosta suave no número final
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
      setValue(Math.round(eased * to))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, to, duration, reduced, countUp])

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  )
}
