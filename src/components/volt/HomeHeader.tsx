import { useState } from 'react'
import type { Theme } from '../../lib/useTheme'
import { Avatar } from './Avatar'
import { IconButton } from './IconButton'
import { BellIcon, MoonIcon, SunIcon } from './icons'

type HomeHeaderProps = {
  name: string
  avatarUrl: string
  theme: Theme
  onToggleTheme: () => void
  hasUnread?: boolean
  onBellClick?: () => void
}

export function HomeHeader({ name, avatarUrl, theme, onToggleTheme, hasUnread = true, onBellClick }: HomeHeaderProps) {
  const isDark = theme === 'dark'
  // Spin the icon only in answer to a tap, not when the screen first appears.
  const [toggled, setToggled] = useState(false)

  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Avatar name={name} src={avatarUrl} />
        <div className="flex flex-col gap-px">
          <span className="text-[13px] text-(--volt-muted)">Good Morning!</span>
          <span className="text-[18px] font-semibold tracking-[-0.3px]">{name}</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <IconButton
          label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          onClick={() => {
            setToggled(true)
            onToggleTheme()
          }}
        >
          <span key={theme} className={`flex ${toggled ? 'volt-spin-in' : ''}`}>
            {isDark ? <SunIcon /> : <MoonIcon />}
          </span>
        </IconButton>
        <IconButton label="Notifications" onClick={onBellClick}>
          <BellIcon />
          {hasUnread && (
            <span
              aria-hidden="true"
              className="absolute top-[10px] right-[11px] size-[9px] rounded-full border-2 border-(--volt-dot-ring) bg-(--volt)"
            />
          )}
        </IconButton>
      </div>
    </header>
  )
}
