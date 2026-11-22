import { useEffect, useState } from 'react'

/**
 * useState that is saved to localStorage as JSON. `parse` turns whatever was stored into a valid
 * value or `undefined`, so stale or hand-edited data falls back to `initial`.
 */
export function usePersistentState<T>(key: string, initial: T, parse: (raw: unknown) => T | undefined) {
  const [value, setValue] = useState<T>(() => {
    try {
      const raw = localStorage.getItem(key)
      if (raw !== null) {
        const parsed = parse(JSON.parse(raw))
        if (parsed !== undefined) return parsed
      }
    } catch {
      // Unavailable storage or malformed JSON: start from the default.
    }
    return initial
  })

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch {
      // Storage full or blocked: keep working for this session without saving.
    }
  }, [key, value])

  return [value, setValue] as const
}
