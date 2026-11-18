# Proposal

## Why

Coffee Lab's approved requirements describe recipe learning, variants across bags, and selective execution logging. The UI/UX stage needs end-to-end journeys that connect those decisions before screen layout and component design begin.

## What Changes

- Replace the user-journey placeholder with a documentation map of entry points, user actions, saved data, exits, and alternate paths.
- Cover routine Keeper reading without logging, experiment execution and optional result capture, execution adjustments promoted to variants, new-bag reuse, ChatGPT entry, and app correction.
- Trace journeys to existing requirements R01–R14 and distinguish app actions from actions in the connected ChatGPT conversation.
- Link the journey document from the screen inventory and the planning portal's journey page.

## Capabilities

### New Capabilities

None. This change documents already approved product behavior. The metadata declares `skip_specs: true` for this documentation-only task.

### Modified Capabilities

None.

## Impact

- Primary deliverable: `docs/spec/user-journeys.md`.
- Supporting links and portal summary: `docs/spec/screens.md` and `docs/planning/product-journeys.html`.
- Requirement sources: `docs/spec/requirements.md`, `docs/spec/user-stories.md`, and `DECISIONS.md`.
- Tracked by [#22 — Map recipe selection, brewing, and result-entry journeys](https://github.com/rbonon/coffeelab/issues/22), under #3 — UI/UX.
- Detailed screen layouts, application runtime, MCP implementation, and database design belong to their separate tasks.
