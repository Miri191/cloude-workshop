import { PhoneFrame } from '../components/PhoneFrame'
import type { Theme } from '../lib/useTheme'
import { ScreenHeader } from '../components/volt/ScreenHeader'
import { IconButton } from '../components/volt/IconButton'
import { GoalCard } from '../components/volt/GoalCard'
import { ChevronLeftIcon, HouseIcon, KeyIcon, LaptopIcon, PhoneIcon, PlusIcon } from '../components/volt/icons'

const goals = [
  { id: 'iphone', name: 'Iphone 13 Mini', icon: <PhoneIcon />, progress: 0.5, saved: 300, target: 699, remaining: '14 days left' },
  { id: 'macbook', name: 'Macbook Pro M1', icon: <LaptopIcon />, progress: 0.6, saved: 300, target: 1499, remaining: '30 days left' },
  { id: 'car', name: 'Car', icon: <KeyIcon />, progress: 0.5, saved: 10000, target: 20000, remaining: '30 days left' },
  { id: 'house', name: 'House', icon: <HouseIcon />, progress: 0.5, saved: 65000, target: 30500, remaining: '3 years left' },
]

type SavingsScreenProps = {
  theme: Theme
  onBack: () => void
}

export function SavingsScreen({ theme, onBack }: SavingsScreenProps) {
  return (
    <PhoneFrame theme={theme}>
      <div className="flex flex-col gap-6 px-5 pt-14 pb-10">
        <ScreenHeader
          title="Savings"
          leading={
            <IconButton label="Back" onClick={onBack}>
              <ChevronLeftIcon strokeWidth={2} />
            </IconButton>
          }
          trailing={
            <IconButton label="Add savings goal" tone="ink">
              <PlusIcon strokeWidth={2} />
            </IconButton>
          }
        />

        <div className="flex flex-col gap-3">
          {goals.map(({ id, ...goal }, index) => (
            <GoalCard key={id} {...goal} featured={index === 0} />
          ))}
        </div>
      </div>
    </PhoneFrame>
  )
}
