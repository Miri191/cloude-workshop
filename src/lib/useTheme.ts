import { useEffect, useState } from 'react'
import { flushSync } from 'react-dom'
import { prefersReducedMotion } from './motion'

export type Theme = 'light' | 'dark'

const STORAGE_KEY = 'financy-theme'

function initialTheme(): Theme {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'light' || saved === 'dark') return saved
  } catch {
    // Storage can be unavailable (private mode, blocked site data); fall back to the OS setting.
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(initialTheme)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, theme)
    } catch {
      // Not persisting is fine; the toggle still works for this session.
    }
  }, [theme])

  const toggleTheme = () => {
    const flip = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
    // Crossfade the whole screen where the View Transitions API exists; switch instantly otherwise.
    if (!document.startViewTransition || prefersReducedMotion()) return flip()
    document.startViewTransition(() => flushSync(flip))
  }

  return { theme, toggleTheme }
}
