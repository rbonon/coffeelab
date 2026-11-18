# Design

## Context

See proposal.md for motivation. `docs/spec/screens.md` currently contains priorities and task links, while `user-journeys.md` supplies six approved flows. The reference PNG shows eight phone panels and no desktop layout. No application framework or component system is established.

## Goals / Non-Goals

Create a reviewable information architecture and responsive layout plan using the existing screen document. This is a design document delivery, without runtime scaffolding, new dependencies, or a claim of browser validation. Phone brewing controls and component tokens have separate owners in #24 and #25.

## Decisions

- Keep the canonical inventory in `docs/spec/screens.md` rather than introducing another source of screen definitions. Use stable screen identifiers, requirement/journey references, and explicit transitions so later tasks can cite it.
- Develop low-fidelity phone/desktop diagrams in Markdown alongside screen descriptions. This makes content hierarchy reviewable without prematurely choosing a UI framework or shipping prototype behavior. A working interactive prototype belongs to later UI implementation.
- Propose recipe access first, with home, recipes, journal, and coffee/equipment access organized for frequent actions. Explain secondary access to preferences, exports, and owner administration. Exact navigation labels and grouping are reviewable design choices within the delegated UI scope.
- Use the PNG as visual inspiration, not as evidence of owned equipment, measured results, or accepted interaction behavior. Preserve its warm accent/light-surface/photo direction while documenting the changes required by the current specification: no app timer, no forced brew completion, optional grind/time, four optional intensity scales, and three-choice enjoyment.
- Define phone layouts as stacked and touch-oriented, desktop layouts as space for browsing and side-by-side review. Comparison remains readable on phones through a narrow-screen arrangement rather than a compressed desktop table. Keep planned versus actual values and coffee identity versus individual bag visible in the information hierarchy.
- Record language expansion, independent units, missing optional data, photo absence, and archived records as design constraints. Detailed component styling and interaction states are handed to #25; actual screen-awake and no-scroll recipe reading are validated in #24.

## Risks / Trade-offs

- Documentation diagrams cannot prove visual quality or target-phone behavior → request review of hierarchy now and reserve concrete UI/device validation for the appropriate tasks.
- Mockup content may conflict with source evidence → label examples and never turn mockup dates or ratings into records.
- A broad inventory can grow into detailed design of every form → inventory supporting screens while focusing layout diagrams on home, recipe detail, and journal/comparison.

## Delivery

Expand the screen document, update the existing portal summary, verify local links and requirement/journey coverage, and present the result for human review. Record accepted design choices in the append-only decision history when confirmed. No data migration or runtime rollout is required.
