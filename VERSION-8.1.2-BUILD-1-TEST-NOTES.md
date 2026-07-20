# LEGACY Pro Wrestling v8.1.2 Build 1

## Match Psychology 2.0 — UI Foundation

This incremental patch changes the active match decision screen only.

### Included
- Removes the global LEGACY/STREAK header during the live match broadcast.
- Removes the phase wording such as CONTROL DECISION.
- Leaves YOUR CALL as the sole decision heading.
- Removes favourable/balanced/risky labels and their green/gold/red styling.
- Makes all three decisions visually neutral and identical.
- Reduces decision-card height for improved mobile fit.

### Test
1. Begin a Career match broadcast.
2. Advance until a Your Call decision appears.
3. Confirm no streak header is visible.
4. Confirm the heading says only YOUR CALL.
5. Confirm all three cards use the same neutral appearance.
6. Confirm tapping each decision still advances the match normally.

The five-tier outcome engine and decision-driven meter animation are scheduled for the next implementation phase.
