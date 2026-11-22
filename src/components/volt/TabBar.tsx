import { ChartIcon, HouseIcon, UserIcon, WalletIcon } from './icons'

export type Tab = 'home' | 'wallet' | 'chart' | 'profile'

type TabBarProps = {
  active: Tab
  onChange?: (tab: Tab) => void
}

const tabs = [
  { id: 'home', label: 'Home', Icon: HouseIcon },
  { id: 'wallet', label: 'Wallet', Icon: WalletIcon },
  { id: 'chart', label: 'Stats', Icon: ChartIcon },
  { id: 'profile', label: 'Profile', Icon: UserIcon },
] as const

export function TabBar({ active, onChange }: TabBarProps) {
  return (
    <nav
      aria-label="Main"
      className="absolute right-5 bottom-7 left-5 flex h-[72px] items-center justify-between rounded-full border border-(--volt-nav-border) bg-(--volt-nav) px-2.5"
    >
      {tabs.map(({ id, label, Icon }) => {
        const isActive = active === id
        return (
          <button
            key={id}
            type="button"
            aria-label={label}
            aria-current={isActive ? 'page' : undefined}
            onClick={() => onChange?.(id)}
            className={`volt-press flex size-[52px] items-center justify-center rounded-full ${
              isActive ? 'bg-(--volt-nav-active) text-(--volt-ink)' : 'text-(--volt-panel-muted)'
            }`}
          >
            <Icon size={22} />
          </button>
        )
      })}
    </nav>
  )
}
