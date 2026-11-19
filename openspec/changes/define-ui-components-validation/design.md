# Design

## Context

See proposal.md. #23 approved four main destinations; #24 supplied reading, settings and a Home recipe picker. The current user requests the surrounding screens and Home access. Human checks remain in progress.

## Goals / Non-Goals

Extend the static prototype without choosing an application framework or claiming persistence. Establish reusable semantic browsing patterns before moving to entry/comparison examples.

## Decisions

- Use a four-destination bottom navigation outside focused reading/settings. Keep the Home-only logo, settings gear and existing source-based reader.
- Render source-based recipe, journal and library rows with a shared text-safe DOM helper; detail uses the selected record and returns to the originating list. Never infer absent execution dates or sensory scores.
- Keep fixture data separate from interaction code. Preserve source identifiers, B02 alias to B01, coffee relationships and incomplete bag context.
- Use the existing semantic CSS properties and simple list/detail patterns. Entry, optional ratings, comparison, partial/empty/error examples follow as a separate task group after initial navigation review.
- Work on a branch based on #24 because the prototype depends on it. Both changes stay open until their required human checks pass.

## Risks / Trade-offs

- Historical candidates can look like verified live application records → keep source context and unknown fields explicit; no write controls pretend to save.
- Bottom navigation consumes brewing space → hide it completely during focused reading.
- Reviewing all pages at once overloads the user → start with Home navigation and Recipes, then review Journal and Library one at a time.
