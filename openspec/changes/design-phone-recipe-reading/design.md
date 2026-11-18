# Design

## Context

See proposal.md. The repository has static planning HTML and a warm light palette, but no application framework. S04 is a distinct reading flow with no required execution. This prototype is disposable design evidence and uses synthetic data.

## Goals / Non-Goals

Make step pagination, target readability, independent unit controls and wake-lock feedback reviewable. The prototype does not save records, reproduce historical recipes, or establish production browser support.

## Decisions

- Use a setup area before reading and a focused manually paged card during reading. Large Previous/Next controls advance instructions without a timer. Split lengthy instructions into numbered continuation cards instead of shrinking text or truncating it. Retain normal page overflow as an accessibility fallback when text zoom or a small viewport prevents a complete card fitting; the device check determines whether the default target layout meets no-scroll acceptance.
- Keep dose, method-appropriate ratio, water/yield and temperature available above the current instruction. Show per-pour addition and cumulative targets together when provided. Example step text is authored in both languages for layout testing; real user text is never auto-translated by an interface-language preference.
- Reuse the portal palette with semantic custom properties in a dedicated CSS file. No React/Tailwind assumption or application directory is introduced for an isolated static prototype.
- Use the native Screen Wake Lock API only while reading. Report request failure or release, reacquire on visible return when reading remains active, and release on exit. Guard outstanding requests against exit races. HTTPS is needed on a remote phone; local HTTP is sufficient only for inspecting layout, not proving wake support.
- Use browser automation for paging, conversions and viewport overflow checks where available. Actual Samsung S25 Ultra/browser and screen-timeout behavior remain a human validation gate.

## Risks / Trade-offs

- OS/browser restrictions can release the wake lock → show its actual status and offer retry; never promise unconditional always-on operation.
- Arbitrarily long text and increased font size can exceed a screen → continuation cards for the supplied examples and an honest accessible overflow fallback. Target-phone acceptance remains pending.
- HTTPS preview availability can block a phone check → provide a local desktop preview and the branch files; publish a secure preview only through an existing supported deployment mechanism, without silently merging an unvalidated change.
