LEGACY Pro Wrestling 1.0 — Throwdown Begin Final Fix

- Adds deterministic routing for the visible Career Begin button.
- Thursday Throwdown always opens the televised show introduction.
- Other Career days continue through the normal Begin handler.
- Rewires the button after every Career screen render to prevent older inline handlers from taking control.
- Updates the service-worker cache key to lpw-1.0-begin2.

Verification:
- JavaScript syntax checks passed.
- Simulated Thursday click called show intro exactly once.
- Simulated non-Thursday click called the normal Career Begin handler exactly once.
- Package integrity checked after creation.
