# Coffee Lab status

Foundation and Specification are complete. [#3 — UI/UX](https://github.com/rbonon/coffeelab/issues/3) is current. #22 journeys and #23 screen plan are merged/closed; #24 phone reading and #25 components/validation remain open and In Progress.

## Current work

The latest prototype and real initial data are on `feat/define-ui-components-validation`, based on the unmerged `feat/design-phone-recipe-reading`. Subsequent reading refinements also live on the current #25 branch. Preserve this dependency and reconcile the final #24 work before close-out; do not archive the stale reading branch blindly.

The user preauthorized remaining UI/UX proposals, apply, commits, pushes, archives and merges, with pauses for material decisions and human visual/device checks. Announce every skill. Preauthorization is not a visual-validation pass.

## Current prototype

[Open the static prototype](docs/prototypes/recipe-reading.html). Portuguese is the default. Home-only centered filter logo, gear Settings, independent units, settings-only screen-awake preference without visible status, and Início/Receitas/Diário/Biblioteca navigation are implemented. Native Back/Forward and image enlargement use browser history; redundant top Back buttons are removed.

Brewing shows preparation and the complete timed schedule at once: no swiping, scrolling, paging, tapping, app timer, or forced logging. Read the agreed design in [phone reading](docs/spec/phone-reading.md) and [screens](docs/spec/screens.md).

## Real initial application data

The curated [import dataset](docs/vision/receitas-pour-over-import.json), source documents and 18 unchanged original photos in `docs/assets/photos/` are real data for eventual application import, not disposable mock values. Preview data is in `docs/assets/library-data.mjs` and `source-recipes.mjs`; keep corresponding updates synchronized.

Only two executions and two displayed recipes remain: **Hoffman V60 Better - Stardust** and **Hoffman V60 Better - Vô Zico**. Both executions are dated 18/11/2026 and rated Gostei. Excluded executions and A02 recipes must not be restored from archived transcripts. Legacy codes remain internal only. Original evaluation dialogue, separate evaluation summaries, both final-filter photos and the shared cup-comparison photo are retained. See [source inventory](docs/vision/README.md) for coffee/bag/photo provenance and known gaps.

## Validation and next session

Automated checks pass for quantity/ratio equivalence, source provenance, wake-lock lifecycle, phone-size schedule fit, native Back/Forward/reload, photo enlargement and both coffee library galleries/fields. Runnable checks are `scripts/check-phone-reading.mjs` and `scripts/check-prototype-navigation.cjs` (requires Playwright/browser; invocation documented in file).

**Next:** resume human review of the latest Library/Journal details and collect explicit S25 Ultra browser/readability/wake-lock results. Continue #25 entry/comparison/partial/error-state designs, then required human review. Do not close UI/UX or merge the dependent branches before remaining checks pass. A temporary HTTPS preview was used; check/restart the local preview and tunnel if needed.

[Active handoff](docs/planning/handoff.md) · [Later-stage follow-ups](docs/planning/open-questions.md) · [GitHub Project](https://github.com/users/rbonon/projects/8)
