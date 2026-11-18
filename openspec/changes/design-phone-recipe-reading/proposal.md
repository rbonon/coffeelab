# Proposal

## Why

S04 needs a concrete phone-reading design to validate readable instructions without execution scrolling. The approved scale-timed workflow must work for long instructions, both interface languages, independent units, and interrupted screen-awake support.

## What Changes

- Document a manually paged instruction design with persistent quantities, method-specific ratios, explicit step timing, and no mandatory logging.
- Build a static, clearly labeled illustrative prototype covering the five categories, English/pt-BR, grams/ounces, Celsius/Fahrenheit, long text, and partial recipes.
- Exercise native screen wake lock with honest active/unavailable/released status and prepare the actual-device review checklist.
- Link the design and prototype from the screen inventory. Keep human phone validation pending until the user performs it.

## Capabilities

### New Capabilities

None. A design artifact and isolated prototype illustrate existing R03, R06 and R07 behavior; `skip_specs: true` applies.

### Modified Capabilities

None.

## Impact

Primary design: `docs/spec/phone-reading.md`. Prototype: `docs/prototypes/recipe-reading.html` and dedicated assets. Links: `docs/spec/screens.md`. Tracking: #24 under #3. No account data, app services, framework selection, timer, or persistent brew records.
