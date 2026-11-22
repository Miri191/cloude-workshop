import { useEffect, useState } from 'react'

export function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/** Counts from 0 up to `target` with an ease-out curve; returns `target` straight away when disabled or with reduced motion. */
export function useCountUp(target: number, { enabled, duration = 900 }: { enabled: boolean; duration?: number }) {
  const animate = enabled && !prefersReducedMotion()
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!animate) return
    const start = performance.now()
    let frame = 0
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1)
      setValue(target * (1 - Math.pow(1 - t, 4)))
      if (t < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [target, duration, animate])

  return animate ? value : target
}
