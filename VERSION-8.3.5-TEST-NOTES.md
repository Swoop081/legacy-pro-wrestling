# LEGACY Pro Wrestling 8.3.5 — Verified Founder Selection Repair

- Fixed a runtime initialization error caused by unguarded legacy `resolveDecision` and `showDecision` hooks.
- Restored complete execution of `game.js`, including fictional calendar constants and Career Mode setup.
- Rebuilt founder selection with explicit click listeners on four clean two-column cards.
- Career save is committed before optional rivalry and monthly-plan setup.
- Verified in a headless Chromium interaction test: selecting Jack Mercer advances from `CHOOSE YOUR WRESTLER` to the feud-origin screen and writes the Career save without browser errors.
