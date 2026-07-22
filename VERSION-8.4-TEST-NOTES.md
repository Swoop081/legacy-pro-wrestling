# LEGACY Pro Wrestling 8.4 — Test Notes

## Headline systems

- Career Mode now contains only the LPW World Championship. Television, Heritage and Tag Team titles are inactive and removed from Career championship and Power Rankings presentation.
- Power Rankings remain the canonical roster-wide standings.
- Every wrestler now owns a persistent Living Career: ranking points, record, streak, momentum, popularity, rivalry status, history, XP and level remain attached to that wrestler.
- Wrestler selection is available only after the monthly SuperCard.
- Wrestlers not selected by the player continue under CPU control and can rise, fall, win, lose, build streaks and begin rivalries.
- Switching back to a previously controlled wrestler restores their current CPU-evolved career rather than the position they had when last controlled.
- March now hosts an eight-wrestler single-elimination #1 Contender Tournament.
- The player’s selected wrestler is always included; the World Champion is excluded.
- Quarter-finals run across Weeks 1–2, semi-finals in Week 3, the final on Week 4 Mayhem, and the contract signing on Week 4 Throwdown.
- The tournament winner challenges the World Champion at the March SuperCard. If the player is eliminated, the tournament and title match continue under CPU control.
- Tournament victories do not recruit opponents. Existing SuperCard recruitment rules remain in place outside the tournament.

## First test path

1. Start a fresh Career and open Championships: only the LPW World Championship should appear.
2. Open Power Rankings and confirm the name remains **Power Rankings**, with the World Champion shown above one unified ranking list.
3. Win the first SuperCard, recruit the opponent, and choose them for Month 2.
4. Confirm the recruited wrestler begins from their existing Power Ranking and record, not the bottom.
5. At the end of Month 2, return to the original wrestler and confirm their ranking, record and streak changed while CPU-controlled.
6. Confirm there is no mid-month character-switch action.
7. Reach March and verify Veronica Vale announces the eight-person tournament.
8. Confirm the bracket excludes the World Champion and includes the active wrestler.
9. Test both paths: advance to the final/title match, and lose early while the CPU completes the tournament.
10. Confirm only a normal SuperCard feud victory recruits an opponent; tournament-round wins do not.

## Compatibility

Existing 8.3.7 saves are migrated on load. Previous non-World championship data is discarded from Career Mode, while the existing World Champion is preserved.
