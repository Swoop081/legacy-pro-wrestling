# LEGACY Pro Wrestling 9.2.0

## Runtime consolidation build

This full build replaces the separate 9.1 hotfix files with one canonical runtime module loaded after the core game engine.

Key consolidation work:

- one shipping Career runtime file (`career-consolidated.js`)
- cold-launch and return-navigation menu parity
- current Career Hub, news, NPC, recap, preview, ranking and show-transition routes loaded from the same final runtime
- obsolete build reports and old version files removed from the release root
- version, manifest and service-worker cache aligned to 9.2.0
- `.nojekyll` preserved for GitHub Pages

Deploy the complete contents of this folder over the repository root.
