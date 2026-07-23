# LEGACY Pro Wrestling 8.6.13 — Test Notes

## Featured Wrestler sizing fix
- Generated a dedicated `home-feature.webp` for every wrestler from the visible non-transparent subject bounds.
- Every visible subject is scaled to Sienna's exact alpha-bound height and placed on Sienna's baseline.
- The main menu now loads these dedicated assets only for the Featured Wrestler panel.
- Transparent padding in the original full-body files can no longer make wrestlers appear shorter or taller.
- Collection, profile, match, victory and other screens continue using their existing assets and presets.

## Versioning
- Updated HTML, JavaScript, service worker, cache keys and `version.json` to 8.6.13.
