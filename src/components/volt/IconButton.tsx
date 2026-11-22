import type { ReactNode } from 'react'

type IconButtonProps = {
  label: string
  onClick?: () => void
  /** `ink` is for the one primary action on a screen. */
  tone?: 'surface' | 'ink'
  children: ReactNode
}

export function IconButton({ label, onClick, tone = 'surface', children }: IconButtonProps) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className={`volt-press relative flex size-11 shrink-0 items-center justify-center rounded-full ${
        tone === 'ink' ? 'bg-(--volt-panel) text-(--volt-panel-text)' : 'bg-(--volt-surface)'
      }`}
    >
      {children}
    </button>
  )
}
