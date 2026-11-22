import { PhoneFrame } from '../components/PhoneFrame'
import type { Theme } from '../lib/useTheme'
import type { User } from '../data/profile'
import type { PaymentCardData } from '../data/cards'
import { ScreenHeader } from '../components/volt/ScreenHeader'
import { Avatar } from '../components/volt/Avatar'
import { IconButton } from '../components/volt/IconButton'
import { AddCardButton, PaymentCard } from '../components/volt/PaymentCard'
import { SectionHeader } from '../components/volt/SectionHeader'
import { TransactionRow } from '../components/volt/TransactionRow'
import { SavingsRow } from '../components/volt/SavingsRow'
import { TabBar, type Tab } from '../components/volt/TabBar'
import {
  BagIcon,
  CardIcon,
  DepositIcon,
  FilterIcon,
  HouseIcon,
  KeyIcon,
  LaptopIcon,
  MoreIcon,
  PhoneIcon,
} from '../components/volt/icons'

const transactions = [
  { id: 'dribbble', name: 'Dribbble', type: 'Subcription fee', amount: -15, icon: <LaptopIcon /> },
  { id: 'house', name: 'House', type: 'Saving', amount: -50, icon: <DepositIcon /> },
  { id: 'sony', name: 'Sony Camera', type: 'Shopping fee', amount: -200, icon: <BagIcon /> },
  { id: 'paypal', name: 'Paypal', type: 'Salary', amount: -32, icon: <CardIcon /> },
  { id: 'car', name: 'Car', type: 'Saving', amount: -40, icon: <DepositIcon /> },
]

const savings = [
  { id: 'iphone', name: 'Iphone 13 Mini', amount: 699, progress: 0.5, icon: <PhoneIcon /> },
  { id: 'macbook', name: 'Macbook Pro M1', amount: 1499, progress: 0.5, icon: <LaptopIcon /> },
  { id: 'house', name: 'House', amount: 65000, progress: 0.5, icon: <HouseIcon /> },
  { id: 'car', name: 'Car', amount: 20000, progress: 0.5, icon: <KeyIcon /> },
]

type WalletScreenProps = {
  theme: Theme
  user: User
  cards: PaymentCardData[]
  defaultCardId: string
  onTabChange: (tab: Tab) => void
  onOpenSavings: () => void
}

export function WalletScreen({ theme, user, cards, defaultCardId, onTabChange, onOpenSavings }: WalletScreenProps) {
  const ordered = [...cards].sort((a, b) => Number(b.id === defaultCardId) - Number(a.id === defaultCardId))

  return (
    <PhoneFrame theme={theme}>
      <div className="flex flex-col gap-7 px-5 pt-14 pb-[124px]">
        <ScreenHeader
          title="Wallet"
          leading={<Avatar name={user.name} src={user.avatarUrl} />}
          trailing={
            <IconButton label="More options">
              <MoreIcon />
            </IconButton>
          }
        />

        <section
          aria-label="Cards"
          className="-mr-5 flex gap-2.5 overflow-x-auto pr-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          <AddCardButton />
          {ordered.map(({ id, ...card }) => (
            <PaymentCard key={id} {...card} tone={id === defaultCardId ? 'ink' : 'surface'} />
          ))}
        </section>

        <section className="flex flex-col gap-3.5">
          <SectionHeader
            title="Transactions"
            action={
              <IconButton label="Filter transactions">
                <FilterIcon />
              </IconButton>
            }
          />
          <div className="flex flex-col gap-2">
            {transactions.map(({ id, ...tx }) => (
              <TransactionRow key={id} {...tx} />
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-3.5">
          <SectionHeader title="Savings" onSeeAll={onOpenSavings} />
          <div className="flex flex-col gap-2">
            {savings.map(({ id, ...goal }) => (
              <SavingsRow key={id} {...goal} onClick={onOpenSavings} />
            ))}
          </div>
        </section>
      </div>

      <TabBar active="wallet" onChange={onTabChange} />
    </PhoneFrame>
  )
}
