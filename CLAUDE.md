# Project: Financy prototype (studio workshop)

Clickable prototype of three screens. Dummy data only, no backend.

## Source of truth: Figma
- File: https://www.figma.com/design/o47r5B4SktmRMFDx3LkAa1
- Page "Design System": the Financy variables, text styles and components
- Page "Screens": Home (node 7:440), Wallet (node 7:590), Savings (node 7:363)
- Ignore the page "Archive – Savings app" and the variable collection "Tokens"; they belong to an old exercise

## Design system in code
- Tokens live in design-system/tokens.css, generated from the Figma collection "Financy" and the "Financy/" text styles
- Use semantic tokens (color-bg-app, color-text-secondary...), never primitive ones or raw hex values
- Components are described in design-system/components.md; reuse them, don't rebuild per screen
- Download every icon and image into assets/; never redraw or substitute them

## Language & layout
- Build screens as designed: English, LTR, 375px wide
- Hebrew / RTL only when asked (exercise 5), using the rtl-prototype skill

## Stack
- React + Vite, no backend. Ask before adding any library

## Way of working
- Read brief/client-brief.md before building a screen
- One screen per task, show a plan before writing code
- After building, compare to the Figma screenshot of that node
- After a screen works, suggest a git commit
