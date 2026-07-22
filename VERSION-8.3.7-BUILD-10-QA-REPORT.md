# LEGACY Pro Wrestling 8.3.7 Build 10 — Broadcast Authenticity QA

## Verified one-year run

A deterministic headless run used the real `data.js` and `game.js` match, rivalry, SuperCard, recruitment, progression and day-advance functions. It completed all 12 in-game months and also exercised event screens and their first available actions.

- Matches played: 107
- Wins: 56
- Losses: 51
- Win rate: 52.3%
- SuperCards: 12
- SuperCard wins: 6
- SuperCard losses: 6
- Starting stable size: 1
- Final stable size: 7
- Wrestlers collected during the year: 6
- Average match rating: 2.73
- Final level: 20
- Injury diagnosis loops: 0
- Screen-language leaks detected after final pass: 0

## Monthly feud and SuperCard running sheet

1. Everest — won — collected
2. Mason Marks — won — collected
3. Ryder Phoenix — lost — not collected
4. Jack Mercer — won — collected
5. Sterling Sinclair — lost — not collected
6. El Rey del Cielo — won — collected
7. Marco Montana — lost — not collected
8. Elias Crowe — lost — not collected
9. Savannah Sinclair — won — collected
10. Bianca Balboa — lost — not collected
11. Axel Voss — won — collected
12. Rex Hunter — lost — not collected

No rival repeated during the 12-month run.

## NPC presenter usage during the run

These are presenter touchpoints recorded across opening screens, choices and outcome screens:

- Coach Hank Dawson: 169
- Ava Cross: 88
- Katie Morgan: 46
- Madison Price: 19
- Veronica Vale: 19
- Leon Ward: 17
- Olivia Chase: 16
- Dr. Lena Hart: 11
- Noah Grant: 10
- Marcus Steele: 7
- Derek Pierce: 1

The automated route did not naturally select every optional NPC. Mike Sullivan and Johnny Cannon still appear in show and recap presentation, but those passive broadcast appearances are not counted as decision-presenter touchpoints.

## Screen-by-screen continuity checks

Passed:

- The World Champion was not selected as the opening rival.
- Mike Sullivan's role and name render as separate lines.
- Commentary Desk outcomes retain Mike Sullivan.
- Katie Morgan interviews retain Katie Morgan.
- Coach Hank no longer replaces Katie on interview outcomes.
- First-match preview uses “LPW debut” rather than “Career appearance.”
- Consequence screens no longer say that a choice or result “has been saved.”
- “The Ripple Effect” has been replaced with “The Fallout.”
- World Recap editorial cards no longer repeat the exact result sentence.
- World Recap results use concise factual wording.
- Recent feud opponents are excluded to stop immediate rivalry recycling.

## Match balance

The control calculation was moved slightly toward the player without restoring guaranteed wins:

- Player performance: +5
- Player decision influence: +4
- Opponent performance: −3
- Opponent decision influence: −2

The verified year finished 56–51, while SuperCards split 6–6. Losses remain common and meaningful, but the player is no longer consistently overwhelmed.

## Files changed

- `game.js`
- `styles.css`
- `index.html`
- `service-worker.js`
- `update-manager.js`
- `version.json`
