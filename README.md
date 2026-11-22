# Financy

A personal finance and savings app prototype: Home, Wallet, Savings and Profile, built in the **Volt** design language with light and dark modes. Front end only — all data is sample data in `src/data/`, and there is no backend.

## Requirements

- Node.js **22.12 or newer** (required by Vite 8)
- npm 10+

## Getting started

```bash
npm ci
npm run dev
```

Open http://localhost:5173. The app renders inside a 375px phone frame.

| Script | What it does |
| --- | --- |
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Type-checks (`tsc -b`) and builds to `dist/` |
| `npm run preview` | Serves the production build locally |
| `npm run lint` | Lints with Oxlint |

## Stack

React 19, TypeScript, Vite 8, Tailwind CSS 4 (via `@tailwindcss/vite`), Oxlint. No router or state library: `App.tsx` keeps a small screen stack and the shared state.

## Project structure

```
src/
  App.tsx              Screen stack, navigation, shared state (theme, user, preferences, default card)
  index.css            Volt tokens (light + dark), motion keyframes, Space Grotesk font
  screens/             HomeScreen, WalletScreen, SavingsScreen, ProfileScreen
  components/
    PhoneFrame.tsx     375px frame that applies the theme (data-theme on the .volt root)
    volt/              All UI components and the inline SVG icon set (icons.tsx)
  data/                Sample data: profile/user, preferences, club points, cards
  lib/
    format.ts          Currency formatting
    useTheme.ts        Light/dark, saved to localStorage, crossfades via View Transitions
    usePersistentState.ts + storedData.ts   localStorage-backed state with validation
    image.ts           Crops uploaded profile photos to 256×256 JPEG
    motion.ts          Reduced-motion check and the balance count-up hook
  assets/              Profile photo
```

## Design

**Read [DESIGN.md](DESIGN.md) before changing UI.** It covers the principles (yellow only ever means money coming in; one dark panel per screen), every color token with light/dark values and contrast ratios, the type scale, radii, spacing, motion, each component, and how shared state and persistence work.

The same screens exist in Figma on the page "Volt — Screens (code)", built from matching variables, text styles and components.

## Behaviour worth knowing

- **Navigation:** tabs switch between Home, Wallet and Profile; Savings is pushed from Home or Wallet and has a back button. The Stats tab has no screen yet.
- **Saved in the browser (`localStorage`):** theme, profile details and photo, notification/settings switches, default card. Clear site data to reset.
- **Theme:** the toggle on Home and the switch in Profile → Settings both flip it. First launch follows the OS setting.
- **Motion:** a one-time balance intro on the first Home visit per session; press feedback; theme crossfade. Everything respects `prefers-reduced-motion`.

## Not built yet

These controls render but do nothing: Add card, More options, transaction filter, notifications bell, "See All" on Earnings and Transactions, "See detail" on goals, "Add savings goal", and the Currency/Language settings. The sample data from the original Figma file is not internally consistent; see "Data notes" in DESIGN.md.
