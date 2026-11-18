# Proposal

## Why

The approved journeys need a screen and navigation plan before phone brewing and component design can proceed. The existing mockup supplies visual direction but predates selective logging, coffee-specific variants, and the revised optional rating model.

## What Changes

- Expand the screen inventory with purpose, primary actions, navigation, data states, and references to the approved journeys and requirements.
- Define phone and desktop information hierarchy for recipe-first home, recipe library/detail, journal, execution detail, and comparisons, with supporting libraries and account screens inventoried.
- Document the mockup elements to retain or adapt, including warm accents, light surfaces, photos, clear quantities, and compact cards.
- Provide low-fidelity layout diagrams in the screen document for home, recipe detail, and journal/comparison at phone and desktop sizes.
- Update the existing planning portal screen summary and link to the canonical inventory.

## Capabilities

### New Capabilities

None. This documentation-only change organizes approved behavior; metadata declares `skip_specs: true`.

### Modified Capabilities

None.

## Impact

- Primary artifact: `docs/spec/screens.md`.
- Portal summary: `docs/planning/screens.html`.
- Inputs: `docs/spec/user-journeys.md`, `requirements.md`, `user-stories.md`, and the PNG in `mockups/`.
- Tracking: [#23 — Define screens and responsive visual direction](https://github.com/rbonon/coffeelab/issues/23), under #3 — UI/UX.
- Application code, framework choice, detailed brewing interaction (#24), and token/component implementation (#25) remain separate work.
