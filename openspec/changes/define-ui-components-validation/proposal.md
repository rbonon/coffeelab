# Proposal

## Why

The refined reading prototype needs the surrounding screens and Home navigation to support the approved journeys. Reusable patterns, entry states and human review must be established before application implementation.

## What Changes

- Add the approved Home/Recipes/Journal/Library navigation and source-based browsing/detail surfaces to the static prototype.
- Document reusable navigation, list, detail, preparation, quantity and form patterns, including optional ratings and partial/error states.
- Develop remaining entry/comparison design examples incrementally, reviewing one visual surface at a time with the user.

## Capabilities

### New Capabilities

None. Static design artifacts illustrate existing approved requirements; `skip_specs: true` applies.

### Modified Capabilities

None.

## Impact

Tracks #25 under #3. Updates existing prototype HTML/CSS/modules and `docs/spec/screens.md`. Source data is captured historical input, not a live database. This branch starts from the unmerged #24 branch, which remains pending phone validation. Do not merge this dependent branch before #24 is validated and closed. Runtime persistence, authentication and app architecture remain later-stage work.
