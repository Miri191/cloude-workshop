import type { ReactNode } from 'react'

type ScreenHeaderProps = {
  title: string
  leading: ReactNode
  trailing: ReactNode
}

export function ScreenHeader({ title, leading, trailing }: ScreenHeaderProps) {
  return (
    <header className="grid grid-cols-[44px_1fr_44px] items-center">
      {leading}
      <h1 className="text-center text-[22px] font-semibold tracking-[-0.5px]">{title}</h1>
      {trailing}
    </header>
  )
}
