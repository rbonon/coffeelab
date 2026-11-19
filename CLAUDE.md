# CLAUDE.md — Project Context
# Behavioral rules are in .claude/CLAUDE.md and loaded automatically by Claude Code

@AGENTS.md

## Why
Coffee Lab helps home brewers discover and repeat recipes they enjoy, using coffee-specific variants and selectively recorded executions to compare results.

## What
The source discussion is in `docs/vision/`, the visual reference is in `mockups/`, and OpenSpec changes live in `openspec/`. The stack will be selected during product definition.

## How
Follow `docs/planning/workflow.md`. Refresh the roadmap with `scripts/refresh-roadmap.sh`.

## Milestone

Foundation and Specification are complete. UI/UX is current. #22/#23 are merged; #24/#25 remain open. Latest work is on `feat/define-ui-components-validation`, stacked on unmerged #24, including subsequent reading refinements. Reconcile that dependency at close-out.

The user preauthorized routine remaining UI/UX lifecycle operations, with pauses for material decisions and human visual/device checks. Announce every skill. The full brewing schedule must be visible without interaction; Portuguese is the prototype default, settings are behind a gear, branding is Home-only, and browser history owns Back/Forward.

All current records are real initial application data. Keep `docs/vision/receitas-pour-over-import.json`, preview modules and original-photo associations synchronized. There are two named Hoffmann recipes/executions, both executed 18/11/2026 and rated Gostei, and 18 original photos. Excluded executions/A02 recipes must not be restored. Packaging descriptors/scores are distinct from user observations; unknowns stay unknown. See `docs/vision/README.md` for confirmed bag dates and source provenance.

Human phone/wake-lock validation and #25 entry/comparison/partial/error-state work remain pending. Read `STATUS.md` and `docs/planning/handoff.md` at session open. Railway hosting is chosen; application stack/auth/database/storage remain later-stage decisions.
