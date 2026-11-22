import { useEffect, useState } from 'react'
import { PhoneFrame } from '../components/PhoneFrame'
import type { Theme } from '../lib/useTheme'
import type { User } from '../data/profile'
import { HomeHeader } from '../components/volt/HomeHeader'
import { BalancePanel } from '../components/volt/BalancePanel'
import { SectionHeader } from '../components/volt/SectionHeader'
import { EarningCard } from '../components/volt/EarningCard'
import { SavingsTile } from '../components/volt/SavingsTile'
import { TransactionRow } from '../components/volt/TransactionRow'
import { TabBar, type Tab } from '../components/volt/TabBar'
import { BagIcon, CardIcon, HouseIcon, KeyIcon, LaptopIcon, PhoneIcon } from '../components/volt/icons'

const earnings = [
  { id: 'upwork', initial: 'U', name: 'Upwork', amount: 3000 },
  { id: 'freepik', initial: 'F', name: 'Freepik', amount: 3000 },
  { id: 'envato', initial: 'W', name: 'Envato', amount: 2000 },
]

const savings = [
  { id: 'iphone', name: 'Iphone 13 Mini', amount: 699, progress: 0.5, icon: <PhoneIcon /> },
  { id: 'macbook', name: 'Macbook Pro M1', amount: 1499, progress: 0.5, icon: <LaptopIcon /> },
  { id: 'car', name: 'Car', amount: 20000, progress: 0.5, icon: <KeyIcon /> },
  { id: 'house', name: 'House', amount: 30500, progress: 0.5, icon: <HouseIcon /> },
]

const transactions = [
  { id: 'adobe', name: 'Adobe Illustrator', type: 'Subcription fee', amount: -32, icon: <LaptopIcon /> },
  { id: 'dribbble', name: 'Dribbble', type: 'Subcription fee', amount: -15, icon: <LaptopIcon /> },
  { id: 'sony', name: 'Sony Camera', type: 'Shopping fee', amount: -200, icon: <BagIcon /> },
  { id: 'paypal', name: 'Paypal', type: 'Salary', amount: 32, icon: <CardIcon /> },
]

// The balance intro plays on the first Home visit of a session, not every time the tab is opened.
let introPlayed = false

type HomeScreenProps = {
  theme: Theme
  onToggleTheme: () => void
  user: User
  onTabChange: (tab: Tab) => void
  onOpenSavings: () => void
}

export function HomeScreen({ theme, onToggleTheme, user, onTabChange, onOpenSavings }: HomeScreenProps) {
  const [intro] = useState(() => !introPlayed)
  useEffect(() => {
    introPlayed = true
  }, [])

  return (
    <PhoneFrame theme={theme}>
      <div className="flex flex-col gap-7 px-5 pt-14 pb-[124px]">
        <HomeHeader name={user.name} avatarUrl={user.avatarUrl} theme={theme} onToggleTheme={onToggleTheme} />

        <BalancePanel
          balance={25000.4}
          income={20000}
          outcome={17000}
          intro={intro}
          onWalletClick={() => onTabChange('wallet')}
        />

        <section className="flex flex-col gap-4">
          <SectionHeader title="Earnings" />
          <div className="-mr-5 flex snap-x snap-mandatory gap-2.5 overflow-x-auto pr-5 [scrollbar-width:none] motion-safe:scroll-smooth [&::-webkit-scrollbar]:hidden">
            {earnings.map(({ id, ...earning }) => (
              <div key={id} className="shrink-0 snap-start">
                <EarningCard {...earning} />
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <SectionHeader title="Savings" onSeeAll={onOpenSavings} />
          <div className="grid grid-cols-2 gap-2.5">
            {savings.map(({ id, ...goal }) => (
              <SavingsTile key={id} {...goal} onClick={onOpenSavings} />
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-3.5">
          <SectionHeader title="Transactions" />
          <span className="text-sm text-(--volt-muted)">Today</span>
          <div className="flex flex-col gap-2">
            {transactions.map(({ id, ...tx }) => (
              <TransactionRow key={id} {...tx} />
            ))}
          </div>
        </section>
      </div>

      <TabBar active="home" onChange={onTabChange} />
    </PhoneFrame>
  )
}
