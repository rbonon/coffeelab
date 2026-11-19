# Handoff — coffeelab — 2026-11-18

**Updated:** 2026-11-18T23:09:43-03:00
**Status:** active

> Advisory only. Board + STATUS.md win. Catch-up reads this until Status is `consumed` (no expiration).

## Context

The user ended the UI/UX review/data-curation session and requested commit/push. Announce every skill. Remaining UI/UX lifecycle operations are preauthorized, but pause for material product choices and human visual/device checks. No blanket human-validation pass was given.

## Control doc paths

- Decisions: `DECISIONS.md`
- Context: `CLAUDE.md` / `AGENTS.md`
- Session compass: `STATUS.md`
- Planning: `docs/planning/`
- Handoff: `docs/planning/handoff.md`

## Current state

- #22/#23 are archived/merged/closed. #24 phone reading and #25 components/validation are open/In Progress. Their tracked human checks remain incomplete.
- Current branch: `feat/define-ui-components-validation`, based on unmerged `feat/design-phone-recipe-reading`. Later #24 reading refinements were made on this current dependent branch. Reconcile the final reading work before archiving/merging; do not archive a stale branch or lose the subsequent refinements.
- The latest prototype supports source-based recipes, no-interaction full brewing schedules, Settings, Journal, Library, native history and full photo viewing. Portuguese is default. Filter logo only on Home. No top Back buttons or visible wake-lock status. The device must need no swiping/scrolling/tapping while brewing.
- Current records are real initial application data; never replace them with synthetic fixtures. Two displayed recipes and two executions use the agreed full names. Both executions are dated 18/11/2026 and Gostei. Excluded records must not reappear from archival source conversations. Keep internal source keys for relationships without displaying legacy codes.
- 18 original photos are committed: three execution/comparison photos, ten Stardust library photos, five Vô Zico library photos. User-supplied texts, explicit evaluations and corrections are preserved. No generated demo photograph is part of this dataset. The obsolete untracked `A01-01.jpg` was deleted at user request.
- Automated checks pass; they do not establish real-device wake-lock/readability or complete broader UI validation. Entry, rating-entry, comparison and partial/error design examples remain pending for #25.

## Artifacts

- Prototype: `docs/prototypes/recipe-reading.html`
- Screens/design: `docs/spec/screens.md`, `docs/spec/phone-reading.md`
- Real data/provenance: `docs/vision/README.md`, `docs/vision/receitas-pour-over-import.json`
- Preview data: `docs/assets/library-data.mjs`, `docs/assets/source-recipes.mjs`
- Original photos: `docs/assets/photos/`
- Supplied evaluation dialogue: `docs/vision/hoffmann-comparacao-avaliacao.md`
- Checks: `scripts/check-phone-reading.mjs`, `scripts/check-prototype-navigation.cjs`
- Open changes: `openspec/changes/design-phone-recipe-reading/`, `openspec/changes/define-ui-components-validation/`
- Board: https://github.com/users/rbonon/projects/8

## Preview and checks

During this session Python served the repo at 127.0.0.1:8765 and `docs/` at 127.0.0.1:8766. A temporary Cloudflare quick tunnel forwarded 8766; do not assume its URL/process survives. Inspect existing processes before starting duplicates. To recreate a phone HTTPS preview, serve only `docs/` and forward it with a temporary tunnel. `/tmp/coffeelab-preview-tunnel/cloudflared` was downloaded for this session. No application hosting decision changed from Railway.

`node scripts/check-phone-reading.mjs` needs no packages. Browser regression uses Playwright and Chrome; see script comments. Session install: `/tmp/coffeelab-browser-check/node_modules/playwright`, Chrome executable `/Applications/Google Chrome.app/Contents/MacOS/Google Chrome`. Do not claim all five method UIs have passed; only retained source schedules are visible and synthetic category fixtures remain data checks.

## Next session

Resume one-surface-at-a-time human review with the user, starting from the latest Library/Journal and collecting the outstanding actual-phone/browser/wake-lock verdict. Then continue #25's remaining design work. Do not auto-close the stages from the session-ending commit request.

## Suggested skills

- `rbo-catch-up` at session open; consume this handoff after use.
- `openspec-apply-change` for remaining #25 tasks; use existing changes rather than creating duplicates.
- `rbo-ui-standards` / `rbo-ui-validate` as applicable to concrete prototype refinement and human checks.
- `rbo-close-change` only once relevant human gates pass and the branch dependency is reconciled; user preauthorization covers routine UI/UX close-out.
