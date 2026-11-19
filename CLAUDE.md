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

Foundation and Specification are complete. UI/UX is current with approved tasks #22–#25 in `docs/spec/screens.md`. The six journeys for #22 in `docs/spec/user-journeys.md` passed human review and are complete. #23 screen plan passed user review. Remaining UI/UX lifecycle steps are preauthorized through #25, with pauses for material product decisions and human visual/device checks (see DECISIONS.md). #24 phone-reading design/prototype is implemented on its feature branch and awaits real-device visual/wake-lock checks. #24 refinement separates language/unit configuration behind a gear icon; home stays recipe-focused and trials centered branding only on Home. Screen-awake control is settings-only without status markers; Home uses a light custom recipe picker with three source-derived pour-over recipes and a compact text-style reading action. The paged trial was rejected: brewing must show the full schedule without swiping, scrolling or tapping. Current three source-based schedules pass 412×800 browser fit checks; phone confirmation remains pending. #25 is In Progress on dependent branch `feat/define-ui-components-validation`; source-based Recipes/Journal/Library and bottom navigation are implemented. Browser history now supports native Back/Forward, reload restoration, without redundant top Back buttons; a runnable browser regression check is in `scripts/check-prototype-navigation.cjs`. Review Home navigation and Recipes first. Forms/comparison and human checks remain pending; do not merge before #24 closes. The spec centers on recipe learning, variants across bags, and selective execution logging. Railway hosting is selected. English/pt-BR and independent measurement preferences are required. Historical source gaps are tracked for import reconciliation. Track the next action in `STATUS.md`.
