import { initialPreferences, initialUser, type Preferences, type User } from '../data/profile'
import { cards } from '../data/cards'

export const STORAGE_KEYS = {
  user: 'financy-user',
  preferences: 'financy-preferences',
  defaultCard: 'financy-default-card',
} as const

const isRecord = (v: unknown): v is Record<string, unknown> => typeof v === 'object' && v !== null

export function parseUser(raw: unknown): User | undefined {
  if (!isRecord(raw)) return undefined
  const text = (key: 'name' | 'email' | 'phone') => {
    const v = raw[key]
    return typeof v === 'string' && v.trim() ? v : initialUser[key]
  }
  // Only an uploaded photo (a data URL) is kept; the bundled default's URL changes between builds.
  const avatarUrl =
    typeof raw.avatarUrl === 'string' && raw.avatarUrl.startsWith('data:image/') ? raw.avatarUrl : initialUser.avatarUrl
  return { name: text('name'), email: text('email'), phone: text('phone'), avatarUrl }
}

export function parsePreferences(raw: unknown): Preferences | undefined {
  if (!isRecord(raw)) return undefined
  const result = { ...initialPreferences }
  for (const key of Object.keys(initialPreferences) as (keyof Preferences)[]) {
    const v = raw[key]
    if (typeof v === 'boolean') result[key] = v
  }
  return result
}

export function parseDefaultCard(raw: unknown): string | undefined {
  return typeof raw === 'string' && cards.some((c) => c.id === raw) ? raw : undefined
}
