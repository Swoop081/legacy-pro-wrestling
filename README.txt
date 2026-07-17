TAG TEAM GAUNTLET — CHARACTER IMAGE MANAGER 1.0 PATCH

Replace these three files in the repository root:
- game.js
- styles.css
- index.html

Included:
- Character Image Manager with per-wrestler scale, X offset and Y offset.
- Jack Mercer approved settings retained: scale 1.08, x 0, y 0.
- Jett Valentine approved settings retained: scale 1.12, x 0, y 0.
- Victor Royale three-image set enabled: full.png, portrait.png and victory.png.
- Victor initial settings: scale 1.10, x 0, y 0.
- Existing legacy wrestler fallback paths remain intact.
- index.html cache version updated so GitHub Pages/Safari loads the new code.

Future wrestlers only need one entry added to CHARACTER_IMAGE_MANAGER near the top of game.js.
