---
name: implement-figma-screen
description: Use when building a screen or component from a Figma node in this project.
---

1. Read CLAUDE.md and brief/client-brief.md if you have not in this session.
2. Get the design context and a screenshot for the exact Figma node. The screenshot is the visual target.
3. Map every color, font and spacing to design-system/tokens.css. If a value has no token, list it and ask.
4. Reuse components from src/components (see design-system/components.md); create a component only if it is missing.
5. Download every icon and image into assets/ and reference the local files. No temporary Figma URLs in code.
6. Show a short plan first. After building, run the app and compare to the screenshot; list any differences.
