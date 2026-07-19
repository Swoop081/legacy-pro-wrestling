# LEGACY Pro Wrestling 7.1 Career Overhaul Test

This reversible test build adds:

- Dynamic Your Call guidance with favourable/balanced/risky colour coding, attributes and context.
- Feud origin scenes before each new month.
- Event Director pacing with Ava social-media stories, Leon Ward security incidents, interviews, training, world recaps and rare manager events.
- Manager recruitment limited to one offer per month and stopped while a manager is active.
- Player match prioritised in World Recap.
- No XP for losses.
- Larger, frameless Career match and feud result artwork.
- Portrait-based scalable monthly wrestler selection.
- Super Card logo treatment and Ethan Brooks ring introduction.
- Expanded contextual event copy and choices.

## Reversibility

Decision guidance is controlled by `LPW_DECISION_GUIDANCE` near the end of `game.js`. Set it to `false` to return the Your Call cards to their earlier description presentation.
