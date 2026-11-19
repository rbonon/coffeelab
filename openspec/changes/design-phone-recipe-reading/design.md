# Design

## Context

See proposal.md. The repository has static planning HTML and a warm light palette, but no application framework. S04 is a distinct reading flow with no required execution. This prototype is disposable design evidence and uses source-derived pour-over recipes for Home; synthetic fixtures remain for data checks.

## Goals / Non-Goals

Make the complete no-interaction brewing schedule, readable targets, independent units and settings-only wake preference reviewable. The prototype does not save records, write historical executions, or establish production browser support.

## Decisions

- Show the complete source-based brewing schedule at once, with concise instructions and explicit times/additions/cumulative targets. No paging, swiping or tapping during brewing. This supersedes the rejected manually paged trial. Source paragraphs remain preserved separately; do not claim arbitrary long-recipe support until necessary cues fit readably.
- Keep dose, method-appropriate ratio, water/yield and temperature available above the complete schedule. Show per-pour addition and cumulative targets together when provided. Example step text is authored in both languages for layout testing; real user text is never auto-translated by an interface-language preference.
- Reuse the portal palette with semantic custom properties in a dedicated CSS file. No React/Tailwind assumption or application directory is introduced for an isolated static prototype.
- Use the native Screen Wake Lock API only while reading. Keep status internal per user instruction, reacquire on visible return when reading remains active, and release on exit. Guard outstanding requests against exit races. HTTPS is needed on a remote phone; local HTTP is sufficient only for inspecting layout, not proving wake support.
- Use browser automation for schedule completeness, conversions and viewport overflow checks where available. Actual Samsung S25 Ultra/browser and screen-timeout behavior remain a human validation gate.

## Risks / Trade-offs

- OS/browser restrictions can release the wake lock → test lifecycle internally and actual behavior on the device; never promise unconditional always-on operation.
- Arbitrarily long text and increased font size can exceed a screen → preserve accessible overflow, but treat any required scrolling as a failed target-layout check. Target-phone acceptance remains pending.
- HTTPS preview availability can block a phone check → provide a local desktop preview and the branch files; publish a secure preview only through an existing supported deployment mechanism, without silently merging an unvalidated change.
