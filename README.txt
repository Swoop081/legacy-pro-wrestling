IMAGE FRAMEWORK 1.3 TARGETED PATCH

Replace only these two files in the repository root:
- game.js
- styles.css

Fixes:
- Restores all original wrestler images using the existing .webp files, with .png fallback.
- Applies Jack Mercer and Jett Valentine sizing directly inline on every screen.
- Jack scale: 1.95x
- Jett scale: 2.35x

Do not merge this folder as a repository. Copy the two files over the existing files, then commit and push in GitHub Desktop.
