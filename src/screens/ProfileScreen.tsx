import { PhoneFrame } from '../components/PhoneFrame'
import type { Theme } from '../lib/useTheme'
import { clubMembership, type Preferences, type User } from '../data/profile'
import type { PaymentCardData } from '../data/cards'
import { ProfileHero } from '../components/volt/ProfileHero'
import { PointsPanel } from '../components/volt/PointsPanel'
import { PersonalDetails } from '../components/volt/PersonalDetails'
import { PaymentMethods } from '../components/volt/PaymentMethods'
import { SectionHeader } from '../components/volt/SectionHeader'
import { ToggleRow, ValueRow } from '../components/volt/SettingRow'
import { TabBar, type Tab } from '../components/volt/TabBar'
import { BellIcon, DollarIcon, GlobeIcon, MoonIcon, ShieldIcon, StarIcon, CardIcon } from '../components/volt/icons'

type ProfileScreenProps = {
  theme: Theme
  onToggleTheme: () => void
  user: User
  onUserChange: (changes: Partial<User>) => void
  onPhotoSelected: (file: File) => void
  cards: PaymentCardData[]
  defaultCardId: string
  onSetDefaultCard: (id: string) => void
  preferences: Preferences
  onPreferenceChange: (key: keyof Preferences, value: boolean) => void
  onTabChange: (tab: Tab) => void
}

export function ProfileScreen({
  theme,
  onToggleTheme,
  user,
  onUserChange,
  onPhotoSelected,
  cards,
  defaultCardId,
  onSetDefaultCard,
  preferences,
  onPreferenceChange,
  onTabChange,
}: ProfileScreenProps) {
  const pref = (key: keyof Preferences) => ({
    checked: preferences[key],
    onChange: (value: boolean) => onPreferenceChange(key, value),
  })

  return (
    <PhoneFrame theme={theme}>
      <div className="flex flex-col gap-7 px-5 pt-14 pb-[124px]">
        <ProfileHero name={user.name} email={user.email} avatarUrl={user.avatarUrl} onPhotoSelected={onPhotoSelected} />

        <PointsPanel {...clubMembership} />

        <PersonalDetails details={user} onSave={onUserChange} />

        <PaymentMethods cards={cards} defaultCardId={defaultCardId} onSetDefault={onSetDefaultCard} />

        <section className="flex flex-col gap-3.5">
          <SectionHeader title="Notifications" action={null} />
          <div className="flex flex-col gap-2">
            <ToggleRow icon={<CardIcon />} label="Transactions" description="Every payment in or out" {...pref('transactionAlerts')} />
            <ToggleRow icon={<BellIcon />} label="Savings reminders" description="When a goal is close to its date" {...pref('savingsReminders')} />
            <ToggleRow icon={<StarIcon />} label="Club offers" description="Ways to earn and use points" {...pref('clubOffers')} />
          </div>
        </section>

        <section className="flex flex-col gap-3.5">
          <SectionHeader title="Settings" action={null} />
          <div className="flex flex-col gap-2">
            <ToggleRow icon={<MoonIcon />} label="Dark mode" checked={theme === 'dark'} onChange={onToggleTheme} />
            <ToggleRow icon={<ShieldIcon />} label="Face ID sign-in" {...pref('faceId')} />
            <ValueRow icon={<DollarIcon />} label="Currency" value="USD" />
            <ValueRow icon={<GlobeIcon />} label="Language" value="English" />
          </div>
        </section>
      </div>

      <TabBar active="profile" onChange={onTabChange} />
    </PhoneFrame>
  )
}
