# Version 4.7 — Image Containment Bug Fix

## Fixed defects

1. **Classic Gauntlet preview used the unscoped full-art transform.**
   Upgraded wrestlers inherited their enlarged Collection/full scale on the Classic Mode landing page. The preview now uses an explicit `classicLanding` preset inside a fixed host.

2. **Generic Gauntlet cards used `full.png` without a screen preset.**
   Partner selection, Your Team, reward replacement and legendary-team overlays all called the image renderer with the default screen. The default could inherit a 1.5× full-art transform. Generic cards now use the dedicated `card` preset.

3. **Absolute-positioned full art could collapse its card and escape visually.**
   The global `.card.character-tile` rule positioned upgraded artwork absolutely while the card had no guaranteed artwork height. Cards now own a fixed, responsive artwork area and keep the image in normal layout flow.

4. **Unknown image contexts inherited enlarged transforms.**
   `imageTransform()` previously fell back to each wrestler's full transform. Unknown contexts now use a neutral contained transform instead.

5. **Pre-match portraits had no explicit screen identity.**
   Versus and challenger screens used the generic default context. They now use `preMatch`, while winner art uses `victory`.

6. **Compact match portraits depended on a narrow CSS override.**
   Compact cards now explicitly request `matchPortrait`, with a fixed portrait height and transform reset.

7. **Classic and Quick Match landing artwork shared overly broad CSS.**
   Classic Mode now has its own selector and cannot inherit Quick Match or Collection sizing.

8. **No final containment guard existed.**
   Managed PNGs now use layout/paint containment and maximum dimensions tied to their immediate host.

9. **Damian Black rename was incomplete in the supplied baseline.**
   Active roster data, relationships, commentary, decisions and IDs now use `damian-black` / `Damian Black`. His three-image asset configuration is included.

## Intentionally unchanged

- Approved Quick Match wrestler-selection card presets.
- Existing three-option Control Decision overlay.
- User-tuned Home, Collection and Quick Match landing presets.
- Root `.nojekyll`.
