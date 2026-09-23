import { useEffect, useState } from 'react'

/** Lê uma media query e reage quando ela muda. */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia(query).matches
  })

  useEffect(() => {
    const list = window.matchMedia(query)
    const onChange = (event: MediaQueryListEvent) => setMatches(event.matches)
    setMatches(list.matches)
    list.addEventListener('change', onChange)
    return () => list.removeEventListener('change', onChange)
  }, [query])

  return matches
}

/** True quando o aparelho é controlado por um ponteiro fino (mouse). */
export function useHasPointer(): boolean {
  return useMediaQuery('(hover: hover) and (pointer: fine)')
}

/** True quando a pessoa pediu menos animação no sistema. */
export function usePrefersReducedMotion(): boolean {
  return useMediaQuery('(prefers-reduced-motion: reduce)')
}
