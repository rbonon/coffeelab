# Vision inputs

[Receitas Pour Over](receitas-pour-over.md) preserves the source discussion and links to the mockup. Use these materials to inform product interviews. Approved choices belong in [DECISIONS.md](../../DECISIONS.md), the specification, architecture, and implementation plan.

## Historical pour-over source

The user designated the [shared Receitas Pour Over conversation](https://chatgpt.com/share/6afe1ae4-f7cc-83e8-8ce7-4df7543cae95) as the source for Coffee Lab's historical data. The files below preserve the accessible rendering captured on 2026-11-18.

| Artifact | Contents |
| --- | --- |
| [Source archive](receitas-pour-over-source.json) | All 177 message positions with IDs, roles, accessible text, 63 tables, links, and the browser DOM snapshot |
| [Readable transcript](receitas-pour-over-transcript.md) | Accessible content in message order, with explicit markers for unavailable bodies |
| [Import candidates](receitas-pour-over-import.json) | Two coffees, two provisional historical bag contexts, equipment evidence, 12 recipe/reference candidates, two retained Hoffmann executions, corrections, and missing-image references |

## Coverage and gaps

Of 89 assistant-message positions, 88 contain readable text and one represents a generated-image response. Of 88 user-message positions, 13 contain visible text or uploaded-image placeholders; 75 bodies are empty in the shared rendering. The transcript retains every position rather than filling those gaps.

Seventeen uploaded-image references remain placeholders. Their original bytes are unavailable through the observed shared page. External product illustrations are not the user's uploaded photos and do not establish ownership of the illustrated equipment. The existing repo mockup remains available separately.

The capture is the full accessible rendered material, not a complete original-chat export. Missing user statements, original images, some exact dates, and the source video transcripts still need recovery or review before application import. This extraction does not replace the existing shorter product-planning transcript.

## Import interpretation

The candidates are staged data for the future application. They have not been imported into a running Coffee Lab database. Each candidate links to source message IDs and sequence numbers. Many historical facts come from assistant summaries because the corresponding user message is unavailable.

- At the user’s request, the active import data and prototype retain only Hoffmann executions A06 and B01. A01, A02 and A04 were removed from both datasets. The original conversation archive/transcript remains documentary evidence, not an instruction to reimport excluded executions.
- Both A02 recipe candidates (earlier proposal and revised three-pour recipe) were excluded at the user’s request. Retained plans preserve their historical lineage separately without an active link to a deleted base recipe.
- B02 was explicitly renamed B01. Preserve B02 as an alias and import one execution.
- A03 has no recorded result, A05 is planned, and the Kasuya A06 plan was replaced by Hoffmann. Preserve their plans without inventing completed executions.
- The initial three-pour B01 plan is superseded by the final Hoffmann B01 assignment.
- Vô Zico's 2026-09-15 date is manufacture, with a 2027-09-15 best-before date. Its roast date remains unknown.
- Preserve A06's 249.0 g and B01's 252.3 g water values separately from their recipe targets. These are water-input records, not measured final drink yields.
- Numeric sensory slider defaults are not user ratings. Both retained executions have an explicit Gostei rating assigned by the user during the UI review; sensory scores remain empty. The directly available comparative tasting statement is preserved verbatim for A06 and B01.
- Historical bag identities are provisional contexts. The Vô Zico discussion mentions reserve packaging and jars, so the source does not establish a unique physical bag for every execution.

## Recovered photo supplied during review

The user supplied `Hoffman Vo Zico.jpg` during UI review. Its unchanged original is stored at [A06 final extraction photo](../assets/photos/hoffman-vo-zico-final.jpg), linked to A06 in the import candidates and prototype with attachment provenance. It shows the final bed and scale readings 3:23 / 249.0 g, consistent with that execution. The historical shared-page capture remains unchanged; this newly supplied file does not establish recovery of every original upload.

The user also supplied a [comparison photo of Stardust and Vô Zico](../assets/photos/hoffman-comparativo-stardust-vo-zico.jpg). One unchanged file is linked to both A06 and B01; attachment metadata preserves the original filename, while its caption avoids assigning sides from that filename.

## Field audit

The source supports the current dose, water, temperature, grind, timing, range, pour-target, technique, photo, and narrative-observation fields. The Specification field review added optional manufacture date, best-before date, original bag weight, origin altitude, storage notes, and corrected historical identifiers. The staged import file preserves the source evidence for these additions. Original bag weight does not require automatic remaining-inventory tracking.
