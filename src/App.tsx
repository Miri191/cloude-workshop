import { useEffect, useState } from 'react'
import { HomeScreen } from './screens/HomeScreen'
import { WalletScreen } from './screens/WalletScreen'
import { SavingsScreen } from './screens/SavingsScreen'
import { ProfileScreen } from './screens/ProfileScreen'
import type { Tab } from './components/volt/TabBar'
import { useTheme } from './lib/useTheme'
import { usePersistentState } from './lib/usePersistentState'
import { parseDefaultCard, parsePreferences, parseUser, STORAGE_KEYS } from './lib/storedData'
import { toAvatarDataUrl } from './lib/image'
import { initialPreferences, initialUser } from './data/profile'
import { cards } from './data/cards'

type Screen = 'home' | 'wallet' | 'savings' | 'profile'

function App() {
  const [stack, setStack] = useState<Screen[]>(['home'])
  const current = stack[stack.length - 1]
  const { theme, toggleTheme } = useTheme()
  const [user, setUser] = usePersistentState(STORAGE_KEYS.user, initialUser, parseUser)
  const [preferences, setPreferences] = usePersistentState(STORAGE_KEYS.preferences, initialPreferences, parsePreferences)
  const [defaultCardId, setDefaultCardId] = usePersistentState(STORAGE_KEYS.defaultCard, cards[0].id, parseDefaultCard)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [current])

  const switchTab = (tab: Tab) => {
    if (tab !== 'chart') setStack([tab])
  }
  const push = (screen: Screen) => setStack((s) => [...s, screen])
  const back = () => setStack((s) => (s.length > 1 ? s.slice(0, -1) : s))

  const changePhoto = async (file: File) => {
    try {
      const avatarUrl = await toAvatarDataUrl(file)
      setUser((u) => ({ ...u, avatarUrl }))
    } catch {
      // The browser couldn't decode this image; keep the current photo.
    }
  }

  return (
    <div className="flex min-h-screen items-start justify-center bg-neutral-200 py-10">
      {current === 'home' && (
        <HomeScreen
          theme={theme}
          onToggleTheme={toggleTheme}
          user={user}
          onTabChange={switchTab}
          onOpenSavings={() => push('savings')}
        />
      )}
      {current === 'wallet' && (
        <WalletScreen
          theme={theme}
          user={user}
          cards={cards}
          defaultCardId={defaultCardId}
          onTabChange={switchTab}
          onOpenSavings={() => push('savings')}
        />
      )}
      {current === 'savings' && <SavingsScreen theme={theme} onBack={back} />}
      {current === 'profile' && (
        <ProfileScreen
          theme={theme}
          onToggleTheme={toggleTheme}
          user={user}
          onUserChange={(changes) => setUser((u) => ({ ...u, ...changes }))}
          onPhotoSelected={changePhoto}
          cards={cards}
          defaultCardId={defaultCardId}
          onSetDefaultCard={setDefaultCardId}
          preferences={preferences}
          onPreferenceChange={(key, value) => setPreferences((p) => ({ ...p, [key]: value }))}
          onTabChange={switchTab}
        />
      )}
    </div>
  )
}

export default App
