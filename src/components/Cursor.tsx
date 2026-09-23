import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useHasPointer, usePrefersReducedMotion } from '../hooks/useMediaQuery'
import './Cursor.css'

/** Elementos que fazem o cursor crescer. */
const INTERACTIVE = 'a, button, [role="button"], [data-cursor="grow"], input, textarea'

/**
 * Cursor customizado: um ponto que segue o mouse na hora e um anel
 * que chega atrasado. Só existe em aparelhos com mouse de verdade,
 * e desliga por completo para quem pediu menos movimento.
 */
export function Cursor() {
  const hasPointer = useHasPointer()
  const reduced = usePrefersReducedMotion()
  const enabled = hasPointer && !reduced

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const ringX = useSpring(x, { stiffness: 320, damping: 28, mass: 0.6 })
  const ringY = useSpring(y, { stiffness: 320, damping: 28, mass: 0.6 })

  const [hovering, setHovering] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!enabled) return

    const onMove = (event: PointerEvent) => {
      x.set(event.clientX)
      y.set(event.clientY)
      if (!visible) setVisible(true)
    }
    const onOver = (event: PointerEvent) => {
      const target = event.target as Element | null
      setHovering(Boolean(target?.closest?.(INTERACTIVE)))
    }
    const onLeave = () => setVisible(false)

    window.addEventListener('pointermove', onMove, { passive: true })
    window.addEventListener('pointerover', onOver, { passive: true })
    document.addEventListener('pointerleave', onLeave)

    document.documentElement.classList.add('has-custom-cursor')
    return () => {
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerover', onOver)
      document.removeEventListener('pointerleave', onLeave)
      document.documentElement.classList.remove('has-custom-cursor')
    }
  }, [enabled, visible, x, y])

  if (!enabled) return null

  return (
    <>
      <motion.div
        className="cursor-dot"
        aria-hidden="true"
        style={{ x, y }}
        animate={{ opacity: visible ? 1 : 0, scale: hovering ? 0 : 1 }}
        transition={{ duration: 0.18 }}
      />
      <motion.div
        className="cursor-ring"
        aria-hidden="true"
        style={{ x: ringX, y: ringY }}
        animate={{
          opacity: visible ? 1 : 0,
          scale: hovering ? 1.9 : 1,
          borderWidth: hovering ? 1 : 1.4,
        }}
        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
      />
    </>
  )
}
