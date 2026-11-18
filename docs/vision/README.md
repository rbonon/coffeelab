# Vision inputs

[Receitas Pour Over](receitas-pour-over.md) preserves the source discussion and links to the mockup. Use these materials to inform product interviews. Approved choices belong in [DECISIONS.md](../../DECISIONS.md), the specification, architecture, and implementation plan.

## Historical pour-over source

The user designated the [shared Receitas Pour Over conversation](https://chatgpt.com/share/6afe1ae4-f7cc-83e8-8ce7-4df7543cae95) as the source for Coffee Lab's historical data. The files below preserve the accessible rendering captured on 2026-11-18.

| Artifact | Contents |
| --- | --- |
| [Source archive](receitas-pour-over-source.json) | All 177 message positions with IDs, roles, accessible text, 63 tables, links, and the browser DOM snapshot |
| [Readable transcript](receitas-pour-over-transcript.md) | Accessible content in message order, with explicit markers for unavailable bodies |
| [Import candidates](receitas-pour-over-import.json) | Two coffees, two provisional historical bag contexts, equipment evidence, 14 recipe/reference candidates, five recorded executions, corrections, and missing-image references |

## Coverage and gaps

Of 89 assistant-message positions, 88 contain readable text and one represents a generated-image response. Of 88 user-message positions, 13 contain visible text or uploaded-image placeholders; 75 bodies are empty in the shared rendering. The transcript retains every position rather than filling those gaps.

Seventeen uploaded-image references remain placeholders. Their original bytes are unavailable through the observed shared page. External product illustrations are not the user's uploaded photos and do not establish ownership of the illustrated equipment. The existing repo mockup remains available separately.

The capture is the full accessible rendered material, not a complete original-chat export. Missing user statements, original images, some exact dates, and the source video transcripts still need recovery or review before application import. This extraction does not replace the existing shorter product-planning transcript.

## Import interpretation

The candidates are staged data for the future application. They have not been imported into a running Coffee Lab database. Each candidate links to source message IDs and sequence numbers. Many historical facts come from assistant summaries because the corresponding user message is unavailable.

- Completed executions supported by the available records are A01, A02, A04, A06, and B01.
- B02 was explicitly renamed B01. Preserve B02 as an alias and import one execution.
- A03 has no recorded result, A05 is planned, and the Kasuya A06 plan was replaced by Hoffmann. Preserve their plans without inventing completed executions.
- The initial three-pour B01 plan is superseded by the final Hoffmann B01 assignment.
- Vô Zico's 2026-09-15 date is manufacture, with a 2027-09-15 best-before date. Its roast date remains unknown.
- A01's 20 g dose is explicitly unconfirmed. Leave the normalized actual dose empty and retain the candidate in its review notes.
- Preserve A02's 323.9 g, A04's 375.8 g, A06's 249.0 g, and B01's 252.3 g water values separately from their recipe targets. These are water-input records, not measured final drink yields.
- Numeric sensory slider defaults are not user ratings. Quick ratings and sensory scores stay empty. The directly available comparative tasting statement is preserved verbatim for A06 and B01.
- Historical bag identities are provisional contexts. The Vô Zico discussion mentions reserve packaging and jars, so the source does not establish a unique physical bag for every execution.

## Field audit

The source supports the current dose, water, temperature, grind, timing, range, pour-target, technique, photo, and narrative-observation fields. It additionally exposes manufacture date, best-before date, original bag weight, origin altitude, storage notes, and corrected historical identifiers. These are review candidates in the import file, pending Specification review. Original bag weight does not require automatic remaining-inventory tracking.
