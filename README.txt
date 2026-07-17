TAG TEAM GAUNTLET — IMAGE FRAMEWORK 1.4 PATCH

Replace exactly these three files in the repository root:
- game.js
- styles.css
- index.html

The index.html change is required to force Safari/GitHub Pages to load the new JS and CSS rather than cached copies.

This patch tries both the original root asset paths and the newer assets/wrestlers paths, in PNG and WebP formats.
