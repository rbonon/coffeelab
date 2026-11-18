# Design

## Context

See proposal.md for motivation. The primary journey document is a placeholder; requirements R01–R15 and nine user stories define the approved behavior. Three sibling UI/UX tasks cover screen layout, phone recipe reading, and components.

## Goals / Non-Goals

The deliverable organizes the existing requirements into navigable flows with observable start and end states. Screen composition and infrastructure choices belong to the sibling design and later technical stages.

## Decisions

- Use one canonical journey document with a summary table and detailed numbered paths. Each path identifies its requirement references, starting context, user actions, saved records, optional exits, and recovery considerations. This keeps traceability in the existing planning structure.
- Map recipe viewing as a complete flow with an exit that saves no execution. Logging is a separate user choice. This follows selective logging and avoids making the journal an obligatory step.
- Distinguish the ChatGPT conversation from Coffee Lab's persisted state. A user can discuss and prepare values before the explicit save request; success is a record available in the app. Include validation failures and missing-photo handling as defined states pending technical verification.
- Reuse the same execution and variant flow for app and AI entry. Preserve base-recipe links, coffee identity, bag context, execution snapshots, and the single save gate.
- Use compact Mermaid flows where they clarify the branch between reading, optional execution recording, and saving a variant. Text remains sufficient to follow each path when a renderer lacks diagram support.

## Risks / Trade-offs

- Long journeys can imply interface decisions too early. Keep actions semantic and leave layouts to #23 and #24.
- AI photo transfer remains unverified. Mark it as a technical dependency while documenting the approved desired workflow.
- Historical source gaps can be mistaken for a product limitation. Refer to the source coverage report and preserve the separation between imported evidence and desired app behavior.

## Delivery

Update the journey document, link it from screens, and replace the portal journey stub with a concise summary. Verify requirement references, local links, and consistency with the approved stories, then present the document for human validation.
