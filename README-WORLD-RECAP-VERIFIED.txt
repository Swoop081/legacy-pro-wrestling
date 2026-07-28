LEGACY Pro Wrestling 1.0 — Verified World Recap Shell Fix

Changes:
- Forces World Recap to render as a Career screen.
- Hides the global main-menu header on World Recap.
- Removes the broken header-image area above the Calendar button.
- Moves the Calendar button and recap content to the top of the mobile viewport.
- Clears the recap-only shell class when navigating to another screen.
- Keeps the release version at 1.0.

Validation:
- game.js syntax passed.
- career-consolidated.js syntax passed.
- Mobile layout rendered at 708 × 1536.
- The global header was not visible and had no layout box.
- Calendar rendered at y=11 px and World Recap heading at y=78 px in the test viewport.
