LEGACY Pro Wrestling 1.0 — World Recap + First Throwdown Verified Fix

Changes:
- Calendar remains anchored top-left on World Recap.
- LEGACY logo remains anchored top-right and is removed from normal document flow.
- Around LPW and World Recap begin directly below the two header controls with a compact clearance.
- Week 1, Month 1 Thursday Throwdown BEGIN now routes directly to the televised show intro.
- A capture-phase click safeguard handles the visible BEGIN button even if an older inline handler is stale.
- Cache key updated to lpw-1.0-recap5.

Verification:
- game.js syntax passed.
- career-consolidated.js syntax passed.
- service-worker.js syntax passed.
- Automated runtime test confirmed first Week 1 Throwdown calls gauntletLiveShowIntro.
- Automated runtime test confirmed non-Throwdown days continue through the previous day handler.
- Final CSS assertions confirmed Calendar top-left, logo top-right, absolute header positioning and compact recap spacing.
