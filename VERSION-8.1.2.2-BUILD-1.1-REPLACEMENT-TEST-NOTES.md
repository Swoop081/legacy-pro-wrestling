# LEGACY Pro Wrestling v8.1.2.2 — Build 1.1 Replacement

## Fixes
- Career mode now uses a persistent game-mode state. The LEGACY/STREAK header stays hidden after live matches and on all Career result screens.
- Tag Team Gauntlet retains the STREAK header.
- Career onboarding screens use two shared templates:
  - Screens 1 and 3: `live-onboarding-full`
  - Screens 2 and 4: `live-onboarding-portrait`
- Matching pairs now use the same image container dimensions, alignment, object positioning, and transforms.

## Test checklist
1. Open Career and confirm the global STREAK header is absent.
2. Complete both a Career win and loss; confirm the header does not return.
3. Compare onboarding screens 1 and 3.
4. Compare onboarding screens 2 and 4.
5. Open Classic Tag Team Gauntlet and confirm STREAK remains visible.
