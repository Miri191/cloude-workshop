import type { ReactNode } from 'react'
import type { Theme } from '../lib/useTheme'

type PhoneFrameProps = {
  theme: Theme
  children: ReactNode
}

export function PhoneFrame({ theme, children }: PhoneFrameProps) {
  return (
    <div className="volt relative w-[375px] overflow-hidden rounded-[32px] shadow-2xl" data-theme={theme}>
      {children}
    </div>
  )
}
