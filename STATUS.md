# Coffee Lab status

Foundation and [#2 — Specification](https://github.com/rbonon/coffeelab/issues/2) are complete. [#3 — UI/UX](https://github.com/rbonon/coffeelab/issues/3) is the current stage.

The user approved the consolidated [product specification](docs/spec/requirements.md), [user stories](docs/spec/user-stories.md), and [first-release boundaries](docs/spec/non-goals.md).

The specification is now aligned around recipe learning, coffee-specific variants across bags, selective execution logging, and AI comparisons based on recorded results. Routine Keeper brews may go unrecorded; usage totals are secondary.

The required/optional field matrix and recipe defaults are approved. Minimums support partial records; AI entry can populate all available relevant details.

The shared pour-over source is captured locally with a readable transcript and structured historical import candidates. See the [source inventory and coverage report](docs/vision/README.md#historical-pour-over-source). The shared rendering omits 75 user-message bodies and the original bytes for 17 uploaded-image references.

The source-field review added optional manufacture and best-before dates, original bag weight, altitude, storage notes, and historical identifier aliases. Source gaps remain an import-reconciliation follow-up.

The four approved UI/UX tasks are #22–#25, linked from [screens](docs/spec/screens.md#approved-uiux-tasks). They are assigned to v0. #22 is In Progress; #23–#25 remain Todo.

The six [user journeys](docs/spec/user-journeys.md) for #22 are implemented on `feat/map-recipe-brewing-result-journeys` and await human review. Next step: Review the journeys; archive and merge require explicit authorization. See [later-stage follow-ups](docs/planning/open-questions.md).

[GitHub Project](https://github.com/users/rbonon/projects/8)
