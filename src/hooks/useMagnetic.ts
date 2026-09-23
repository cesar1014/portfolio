import { useRef } from 'react'
import { useMotionValue, useSpring, type MotionValue } from 'framer-motion'
import { usePrefersReducedMotion } from './useMediaQuery'

interface Magnetic {
  // `MutableRefObject` e não `RefObject`: o ref começa null e o
  // React só aceita passá-lo para um elemento nesse formato.
  ref: React.MutableRefObject<HTMLAnchorElement | null>
  x: MotionValue<number>
  y: MotionValue<number>
  onPointerMove: (event: React.PointerEvent) => void
  onPointerLeave: () => void
}

/**
 * Faz um elemento se inclinar na direção do ponteiro quando o mouse
 * chega perto, e voltar ao lugar quando sai. `strength` é o quanto
 * ele acompanha o cursor, de 0 a 1.
 *
 * Desliga por completo para quem pediu menos movimento no sistema.
 */
export function useMagnetic(strength = 0.32): Magnetic {
  const ref = useRef<HTMLAnchorElement | null>(null)
  const reduced = usePrefersReducedMotion()

  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const x = useSpring(rawX, { stiffness: 260, damping: 22, mass: 0.6 })
  const y = useSpring(rawY, { stiffness: 260, damping: 22, mass: 0.6 })

  function onPointerMove(event: React.PointerEvent) {
    if (reduced) return
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    rawX.set((event.clientX - (rect.left + rect.width / 2)) * strength)
    rawY.set((event.clientY - (rect.top + rect.height / 2)) * strength)
  }

  function onPointerLeave() {
    rawX.set(0)
    rawY.set(0)
  }

  return { ref, x, y, onPointerMove, onPointerLeave }
}
