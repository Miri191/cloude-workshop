# Volt — Financy design language

Volt is the visual language for Financy, a personal finance and savings app. It pairs a calm olive-black and paper base with one electric yellow, and that yellow has exactly one job: **it marks money coming in.**

The direction came from a moodboard reference ("yellow 2") and refines Sketch B from the design canvas.

**Status:** all screens are built in Volt: [Home](src/screens/HomeScreen.tsx), [Wallet](src/screens/WalletScreen.tsx), [Savings](src/screens/SavingsScreen.tsx) and [Profile](src/screens/ProfileScreen.tsx). The original Figma components and assets have been removed. The Figma file has a matching "Volt — Screens (code)" page for the first three.

---

## Principles

1. **Yellow means money in.** Income, earnings, net gain and salary use `--volt`. Expenses, neutral content and chrome never do. If a new element is yellow, it must be money arriving.
2. **One dark panel per screen holds the headline.** Home: the balance, centered, with the net chip and the income/outcome bar. Wallet: the default card. Savings: the goal closest to its deadline. Profile: club points. In dark mode the panel is one step lighter than the other surfaces so it still stands out.
3. **Everything you can touch is a pill.** Rows, buttons, chips and the nav are fully rounded or heavily rounded. Static containers step down in radius as they get smaller (see [Shape](#shape)).
4. **Dark mode swaps surfaces, never meaning.** The same element keeps the same role in both themes; only the neutrals change.
5. **Numbers lead.** Amounts are the largest, heaviest text in any group. Labels sit small and muted above or beside them.

---

## Color

All tokens live on the `.volt` class in [`src/index.css`](src/index.css). Dark values apply when the element also has `data-theme="dark"`.

### Brand

| Token | Value | Role |
| --- | --- | --- |
| `--volt` | `#E3FF4A` | Money in: income bar, net chip, earnings cards, income rows, unread dot |
| `--volt-ink` | `#1B1E16` | Text and icons placed **on** volt, and on white discs inside the dark panel |
| `--volt-on-volt-muted` | `#3E4236` | Secondary text on volt (e.g. "Salary", "Upwork") |

### Neutrals

| Token | Light | Dark | Role |
| --- | --- | --- | --- |
| `--volt-page` | `#F1F2EC` | `#121410` | Screen background |
| `--volt-surface` | `#FFFFFF` | `#1F2219` | Rows, tiles, round header buttons, "See All" chips |
| `--volt-raised` | `#F1F2EC` | `#2C3025` | Icon squares inside surfaces, progress track |
| `--volt-text` | `#1B1E16` | `#F4F6EE` | Primary text |
| `--volt-muted` | `#6B6F62` | `#A3A898` | Secondary text: labels, subtitles, "Today" |
| `--volt-progress` | `#1B1E16` | `#F4F6EE` | Savings progress fill |
| `--volt-dot-ring` | `#1B1E16` | `#1F2219` | Ring around the unread dot |
| `--volt-error` | `#B42318` | `#FF8A80` | Form validation only: error text and the invalid-field ring. Never for expenses. |

### Balance panel

| Token | Light | Dark | Role |
| --- | --- | --- | --- |
| `--volt-panel` | `#1B1E16` | `#2A2E22` | Panel background; also `IconButton` with `tone="ink"` |
| `--volt-panel-raised` | `#2C3025` | `#3A3F30` | Pills, icon squares and progress track inside the panel |
| `--volt-panel-text` | `#FFFFFF` | `#F4F6EE` | Panel text, outcome bar segment, outcome disc |
| `--volt-panel-muted` | `#A9AE9C` | `#A3A898` | Panel labels; also inactive nav icons |

### Navigation and income rows

| Token | Light | Dark | Role |
| --- | --- | --- | --- |
| `--volt-nav` | `#1B1E16` | `#22251C` | Floating tab bar |
| `--volt-nav-border` | `transparent` | `#2C3025` | Separates the bar from a dark page |
| `--volt-nav-active` | `#FFFFFF` | `#F4F6EE` | Active tab circle |
| `--volt-income-icon-bg` | `#FFFFFF` | `#1B1E16` | Icon square on an income (volt) row |
| `--volt-income-icon-fg` | `#1B1E16` | `#E3FF4A` | Icon on an income row |

### Color rules

- **Never put text in volt on a light background**, and never put light text on volt. Volt against white is about 1.1:1. Volt is a fill; text on it is always `--volt-ink`.
- Expenses are **not** red. The minus sign and the white (or dark) row carry the meaning; yellow marks the exception (income). Red (`--volt-error`) is reserved for form errors.
- Club points and settings are not money, so they are never volt: the points panel is the dark panel, and a switch that's on uses `--volt-progress` (ink in light, near-white in dark).
- Color is never the only signal: income rows also carry a `+` sign, and the income/outcome bar has an accessible label with both amounts.

### Contrast (WCAG 2.1)

| Pair | Ratio |
| --- | --- |
| Text on page, light | 15.0:1 |
| Muted on surface, light | 5.2:1 |
| Muted on page, light | 4.6:1 |
| Ink on volt | 15.0:1 |
| On-volt muted on volt | 9.2:1 |
| Panel muted on panel, light | 7.4:1 |
| Text on surface, dark | 14.8:1 |
| Muted on surface, dark | 6.6:1 |
| Panel muted on panel, dark | 5.7:1 |
| Panel muted on panel-raised, dark | 4.5:1 |
| Inactive nav icon on nav, dark | 6.4:1 |
| Error on page, light | 5.8:1 |
| Error on surface, dark | 7.1:1 |

All text pairs pass AA (4.5:1). The tightest are `--volt-muted` on `--volt-page` in light (4.6:1) and `--volt-panel-muted` on `--volt-panel-raised` in dark (4.5:1); don't lighten those backgrounds or darken those texts.

---

## Typography

One family: **Space Grotesk** (400, 500, 600, 700), loaded from Google Fonts in `src/index.css` and set on `.volt`. Its squared numerals carry the personality, so no second display face is needed.

| Role | Size | Weight | Tracking | Example |
| --- | --- | --- | --- | --- |
| Balance | 50px, line-height 1 | 600 | −2.2px | `$25,000.40` |
| Goal percent | 44px, line-height 1 | 600 | −1.5px | `60%` |
| Card balance | 28px | 600 | −0.6px | `$10,000.00` |
| Earnings amount | 26px | 700 | −0.8px | `$3,000` |
| Section title | 22px | 600 | −0.5px | `Earnings` |
| Savings amount | 21px | 600 | −0.5px | `$1,499` |
| Name | 18px | 600 | −0.3px | `C Muthu Krishnan` |
| Row amount | 17px | 700 | −0.3px | `-$32.00` |
| Flow amount | 17px | 600 | — | `$20,000` |
| Row title / button | 15px | 600 / 500 | — | `Adobe Illustrator`, `My Wallet` |
| Body / label | 14px | 400 | — | `Total Balance`, `Today` |
| Secondary | 13px | 400–600 | — | `Subcription fee`, `See All`, `50%` |
| Meta | 12px | 400 | — | `Income` |

Rules:
- Sentence case everywhere. No all-caps labels.
- Negative tracking only at 17px and up; small text keeps default spacing.
- Money is formatted in code, never hand-typed: `formatUsd()` and `formatSignedUsd()` in [`src/lib/format.ts`](src/lib/format.ts). Whole dollars for summaries, cents for the balance and transactions.

---

## Shape

Radius steps down with the size of the thing:

| Element | Radius |
| --- | --- |
| Balance panel | 32px |
| Earnings card, goal card | 28px |
| Savings tile, payment card, add-card button | 26px |
| Transaction row, savings row | 24px |
| Icon square in a row | 15px |
| Icon square in a tile | 13px |
| Net chip | 8px |
| Buttons, chips, nav, discs, progress | fully round |

No shadows inside the screen. Depth comes from the surface/page contrast and, in dark mode, from `--volt-raised`.

## Spacing

- Screen padding: 20px sides, 56px top, 124px bottom on tab screens (clears the floating nav), 40px on pushed screens like Savings.
- Between sections: 28px (24px on Savings). Section title to content: 16px, or 14px when the content is a list of rows.
- Inside groups: 10px between tiles and cards, 12px between goal cards, 8px between rows.
- Horizontal rows (earnings, payment cards) bleed past the right edge and are sized so the next item peeks in.
- Touch targets are at least 44px (header buttons 44, nav items 52, rows 70).

---

## Motion

Motion is spent in one place, and otherwise only answers what the person does.

| Moment | What moves | Timing |
| --- | --- | --- |
| Home intro (first Home visit per session) | The balance counts up from $0 (ease-out quart); the income then outcome bar segments grow from the left; the net chip pops in when the count lands | Count 900ms; bars 700ms at +150ms and +400ms; chip 260ms at +850ms |
| Pressing a button, chip, tile or tab | Scales to 0.97 while held (`.volt-press`) | 120ms ease-out |
| Switching light/dark | The whole screen crossfades (View Transitions API, where supported); on Home the sun/moon icon spins in | 280ms crossfade; 320ms spin |
| Scrolling earnings | Cards snap to their start edge | Native scroll snap |

Rules:
- One easing for entrances: `cubic-bezier(0.2, 0.8, 0.2, 1)`. Keyframes live in `src/index.css` (`volt-grow`, `volt-pop`, `volt-spin-in`).
- No per-section fade/slide-ins and no hover animations on cards. A new animation needs a reason: it shows what changed after an action, or it is part of the single intro.
- The counting number is `aria-hidden`; screen readers get the final value from a `sr-only` copy. Use `tabular-nums` on any number that animates so it doesn't jitter.
- **Reduced motion:** with `prefers-reduced-motion: reduce`, `useCountUp` returns the final value at once, the keyframe classes and press scale are disabled, and the theme switches without the crossfade.

## Components

All live in [`src/components/volt/`](src/components/volt/).

| Component | What it is |
| --- | --- |
| `IconButton` | 44px round icon button. `tone="surface"` by default; `tone="ink"` for the one primary action on a screen (e.g. "Add savings goal"). Always takes a `label`. |
| `Avatar` | 44px round profile photo. |
| `HomeHeader` | Avatar, greeting and name on the left; theme toggle and notifications on the right. The unread dot is volt with a ring. |
| `ScreenHeader` | Three-column header for other screens: a 44px leading button, a centered 22px title and a 44px trailing button. |
| `BalancePanel` | Home's dark panel: centered balance, net chip (computed as income − outcome), income/outcome labels with direction discs, a split bar sized by the two amounts, and the "My Wallet" pill. |
| `SectionHeader` | 22px title and a "See All" surface chip, or any `action` in its place (Wallet uses a filter button). |
| `PaymentCard` | 270×196 card. `tone="ink"` for the primary card (Wallet's dark panel), `tone="surface"` for the rest. Shows balance, masked number, holder and expiry. Card balance is not income, so cards are never volt. |
| `AddCardButton` | 52×196 dashed outline with a plus, leading the card row. |
| `SavingsRow` | List version of a savings goal for Wallet: icon square, name, amount, progress bar and percent. |
| `ProfileHero` | 96px photo with a camera button (a file input that accepts images), name and email, centered. |
| `PointsPanel` | Profile's dark panel: points as a 44px number, tier chip, and a progress bar to the next tier with the points remaining. |
| `PersonalDetails` | Read-only rows (name, email, phone) with an Edit chip. Editing swaps in a form of `TextField`s with Cancel and "Save changes"; it validates on save and shows errors under each field. |
| `TextField` | Labelled input on `--volt-raised`; focus shows a text-colored ring, errors a `--volt-error` ring plus a message linked with `aria-describedby`. |
| `PaymentMethods` | One row per card (last four digits and expiry), a "Default" chip on the default card and "Make default" on the others, plus a dashed "Add card" row. |
| `ToggleRow` / `ValueRow` | 64px settings rows with an icon square and label. `ToggleRow` ends in a `Toggle` (a `role="switch"` button labelled by the row); `ValueRow` shows a read-only value. |
| `GoalCard` | Savings screen card: name, icon square, 44px percent, saved of target, progress bar, time left and a "See detail" chip. `featured` turns it into the dark panel. Saving is progress, not income, so goal cards are never volt. |
| `EarningCard` | 152×176 volt card: initial in an ink disc, an incoming arrow, source name and amount. Cards scroll horizontally and the row bleeds past the right edge to hint at more. |
| `SavingsTile` | Surface tile in a 2-column grid: icon square, percent, goal name, amount and a progress bar. |
| `TransactionRow` | 70px pill row. Pass a signed `amount`: negative renders on surface, positive renders on volt with the income icon colors. Transfers into savings ("Saving") are money out and stay neutral. |
| `TabBar` | Floating 72px pill pinned 28px from the bottom; the active tab is a solid circle with an ink icon. |
| `icons.tsx` | Inline stroke icons, 24 viewBox, 1.8 stroke, round caps, `currentColor`. Add new icons here in the same style. |

---

## Light and dark

- [`src/lib/useTheme.ts`](src/lib/useTheme.ts) holds the theme, used once in `App` and passed to every screen. It starts from the saved choice (`localStorage` key `financy-theme`), falling back to the OS `prefers-color-scheme`.
- Each screen passes `theme` to `PhoneFrame`, which renders the `.volt` root with `data-theme`; the dark token block in `index.css` keys off `.volt[data-theme='dark']`.
- The toggle lives in `HomeHeader` (moon in light mode, sun in dark mode, labelled "Switch to dark mode" / "Switch to light mode") and applies to the whole app.
- When adding a component, use only `--volt-*` tokens so it follows the theme for free. Hard-coded hex values are a bug.

---

## Copy

- Plain, short labels in sentence case: "Total Balance", "My Wallet", "See All", "Today".
- Amounts always carry their sign in lists (`-$32.00`, `+$32.00`).
- Icon-only buttons always have an `aria-label` that says what happens.

---

## Shared state

`App` owns the data that more than one screen shows: the theme, the user (name, email, phone, photo), notification and settings preferences, and the default card. Sample data lives in [`src/data/`](src/data/). Changing the name or photo in Profile updates the Home and Wallet headers; choosing a default card moves it to the front of Wallet as the ink card.

All of it is saved in `localStorage`, so it survives a reload:

| Key | Holds |
| --- | --- |
| `financy-theme` | `light` or `dark` ([`useTheme`](src/lib/useTheme.ts)) |
| `financy-user` | Name, email, phone, and the uploaded photo as a data URL |
| `financy-preferences` | The four notification and settings switches |
| `financy-default-card` | The default card's id |

[`usePersistentState`](src/lib/usePersistentState.ts) reads and writes each key, and the parsers in [`storedData.ts`](src/lib/storedData.ts) validate what comes back field by field, so stale or hand-edited data falls back to the defaults instead of breaking a screen. An uploaded photo is center-cropped to 256×256 JPEG ([`image.ts`](src/lib/image.ts)) before it's stored, which keeps it to a few KB. If storage is full or blocked, the app keeps working for the session without saving.

## Adding a new screen

1. Take `theme` as a prop and wrap the screen in `<PhoneFrame theme={theme}>`.
2. Start with `HomeHeader` (tab root with a greeting) or `ScreenHeader` (everything else); add `TabBar` only on tab screens.
3. Pick the screen's one dark panel before anything else, then build the rest from surface rows and tiles.
4. Before making anything volt, ask whether it is money arriving. If not, it isn't yellow.

## Data notes

The sample data comes from the original Figma file and isn't internally consistent: House is $30,500 on Home but $65,000 on Wallet and Savings, the House goal shows "$65,000 of $30,500", and the Macbook goal says 60% while $300 of $1,499 is 20%. Each screen shows its Figma values as-is. The bars now use the same number as the percent label, so the Macbook bar is drawn at 60%, not 71% as in Figma.
