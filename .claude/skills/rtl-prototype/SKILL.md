---
name: rtl-prototype
description: Use when localizing a screen of this prototype to Hebrew and RTL.
---

1. Set dir="rtl" and lang="he" on the screen's root, not on the whole app.
2. Use logical CSS properties (margin-inline-start, padding-inline-end, inset-inline) instead of left/right.
3. Mirror directional icons (arrows, chevrons); keep logos, checkmarks and media icons as they are.
4. Numbers and currency: keep digits left-to-right; use ₪ with Hebrew formatting (1,240 ₪).
5. Translate UI text naturally, not word by word. Keep brand names in English.
6. Keep the same tokens and components; RTL changes layout direction, not the design system.
