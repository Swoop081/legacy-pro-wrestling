# LEGACY Pro Wrestling 8.3.7 Build 5 — Test Notes

## Consolidated fixes
- Rebalanced Career match simulation so AI receives a psychology response after every player choice.
- AI momentum can now pull the control meter toward the opponent and create comeback stretches.
- Reduced player Decision Impact inflation and increased opponent performance/decision weighting.
- Preserved an onboarding advantage only for the first Career match; later matches can be lost normally.
- Reduced routine 5-star/Standing Ovation results by factoring score margin and competitiveness into the final rating.
- Expanded decision-title cleanup to remove Heartbreaker, Rebel and other mechanical archetype/nickname prefixes.
- Added a mandatory Level Up interception before the Career Hub whenever a new level has not been celebrated.
- Ensured long match reports contain a working bottom Continue Broadcast/Continue action.
- Removed visible winner-art borders and shadows through the shared result layout.
- Added outcome presentation to legacy television confrontation choices.
- Added injury recovery dates, non-wrestling replacement segments, no physical training while injured, a doctor clearance screen and a two-month injury cooldown.
- Kept the shared weekly match log and real Match of the Week selection from Build 4.
- Updated service-worker, cache-busting and build identifiers to Build 5.

## Mandatory first test
1. Start a fresh Career.
2. Play the first match and confirm it is onboarding-friendly but not an extreme squash.
3. In the second and later matches, deliberately choose poor options and confirm the opponent can take the momentum meter.
4. Confirm at least one natural defeat becomes possible over several matches.
5. Confirm decision titles do not display Heartbreaker/Rebel prefixes.
6. Confirm the winner artwork has no red frame.
7. Scroll to the bottom of the report and confirm Continue Broadcast is present.
8. Level up and confirm the full-screen Level Up sequence appears before the hub.
9. If injured, confirm match/training restrictions, clearance and cooldown.
10. At weekly media, confirm Match of the Week agrees with the highest recorded player/AI match.
