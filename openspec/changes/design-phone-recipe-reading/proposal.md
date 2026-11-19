# Proposal

## Why

S04 needs a concrete phone-reading design to validate readable instructions without execution scrolling. The approved scale-timed workflow must work for long instructions, both interface languages, independent units, and interrupted screen-awake support.

## What Changes

- Document a complete no-interaction brewing schedule with persistent quantities, method-specific ratios, explicit step timing, and no mandatory logging.
- Build a static reading prototype using the two real source-based Hoffmann recipes selected by the user, English/pt-BR and independent units. Retain synthetic five-category/partial examples for data checks; broader category/long-recipe UI validation remains pending.
- Exercise native screen wake lock controlled from Settings without visible status, per user refinement and prepare the actual-device review checklist.
- Link the design and prototype from the screen inventory. Keep human phone validation pending until the user performs it.

## Capabilities

### New Capabilities

None. A design artifact and isolated prototype illustrate existing R03, R06 and R07 behavior; `skip_specs: true` applies.

### Modified Capabilities

None.

## Impact

Primary design: `docs/spec/phone-reading.md`. Prototype: `docs/prototypes/recipe-reading.html` and dedicated assets. Links: `docs/spec/screens.md`. Tracking: #24 under #3. Real curated records and original photos are persisted as repository input data; this is not a running account/database service. No application framework or app timer is introduced.
