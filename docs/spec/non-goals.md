# First-release boundaries

First-release boundaries for the completed [product specification](requirements.md), reflecting the interview and recorded decisions.

## Deferred by agreement

- Application brew timer, automatic pour progression, and offline brewing continuity. Use the scale's timer and Coffee Lab's recipe reference view.
- Automatic proportional recipe scaling. Save explicit adapted quantities and steps through AI or app entry.

## Scope boundaries

- Execution logging is selective. Routine Keeper brews can go unrecorded, and statistics describe the saved executions rather than complete consumption.
- Coffee Lab provides its own record-entry and correction forms. Photo interpretation and conversational recipe research happen through the connected ChatGPT workflow.
- The owner is the sole initial user. Account support permits additional users later through an owner-managed allowlist.
- Recipe snapshots preserve brew history. A complete recipe revision-history feature has not been selected.
- Reusable recipe variants link to a base recipe, coffee identity, and originating execution. One-off execution adjustments can stay on that execution. A separate Preparation library is unnecessary for this workflow.
- Keeper status is selected by the user. No automatic promotion threshold or mandatory execution count is specified.
- Untracked brews are completed entries and require no later measurements.
- Tasting descriptions, sensory scales, and overall ratings are optional.
- Changing interface language preserves user content in its original language.

## Unapproved additions

These were mentioned or remain undecided and are excluded from the current draft commitment pending review.

- Automatic remaining-bag inventory deduction.
- Tracking how much each person drank.
- Additional AI clients beyond ChatGPT.
- In-app AI chat or an in-app photo interpretation interface.
- Hardware and Bluetooth-scale integration.
- Public recipe sharing and collaborative workspaces.
- A broader analytics chart catalog beyond the recorded-execution summaries and recipe comparisons currently specified.

## Technical verification before implementation planning

Prove the intended ChatGPT connection can authorize access, save structured records, and transfer original photos during technical design. Validate phone recipe readability and screen-awake behavior during UI/UX. The [follow-ups](../planning/open-questions.md) identify these checks and the source reconciliation needed before actual historical import.
