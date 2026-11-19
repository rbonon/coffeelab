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
- The historical Stardust renaming was reconciled to one execution. At the user’s request, legacy identifier aliases are removed from current import data and display; the original conversation remains archival evidence.
- A03 has no recorded result, A05 is planned, and the Kasuya A06 plan was replaced by Hoffmann. Preserve their plans without inventing completed executions.
- The initial three-pour B01 plan is superseded by the final Hoffmann B01 assignment.
- Vô Zico's 2026-09-15 date is manufacture, with a 2027-09-15 best-before date. Its roast date remains unknown.
- Preserve A06's 249.0 g and B01's 252.3 g water values separately from their recipe targets. These are water-input records, not measured final drink yields.
- Numeric sensory slider defaults are not user ratings. Both retained executions have an explicit Gostei rating assigned by the user during the UI review; sensory scores remain empty. The directly available comparative tasting statement is preserved verbatim for A06 and B01.
- Historical bag identities are provisional contexts. The Vô Zico discussion mentions reserve packaging and jars, so the source does not establish a unique physical bag for every execution.

## Recovered photo supplied during review

The user supplied `Hoffman Vo Zico.jpg` during UI review. Its unchanged original is stored at [A06 final extraction photo](../assets/photos/hoffman-vo-zico-final.jpg), linked to A06 in the import candidates and prototype with attachment provenance. It shows the final bed and scale readings 3:23 / 249.0 g, consistent with that execution. The historical shared-page capture remains unchanged; this newly supplied file does not establish recovery of every original upload.

The user also supplied a [comparison photo of Stardust and Vô Zico](../assets/photos/hoffman-comparativo-stardust-vo-zico.jpg). One unchanged file is linked to both A06 and B01; attachment metadata preserves the original filename, while its caption avoids assigning sides from that filename.

The final-filter photo for B01 was subsequently supplied as `Hoffman Stardust.jpg` and saved unchanged as [Stardust final extraction](../assets/photos/hoffman-stardust-final.jpg). It is the first photo on B01, followed by the shared cup comparison; its scale readings match the saved 3:38 and 252.3 g. Both retained executions now have their own final-filter photo.

## Follow-up evaluation dialogue

The [user-supplied comparison/evaluation dialogue](hoffmann-comparacao-avaliacao.md) is preserved unchanged. A06 and B01 have separate evaluation summaries and observations derived from it, with the discussed hypotheses and suggested next trial clearly separated. Existing original tasting text and Gostei ratings remain intact; no numerical sensory scores or roast dates were inferred.

## Stardust library data confirmed during review

The user supplied ten original photos, retained unchanged under `docs/assets/photos/stardust/`. Packaging photos belong to the individual bag; the beans photo belongs to the coffee record. The import data and library preview share the same associations and attachment provenance.

Confirmed bag information: roast date 04/11/2026 from photo 09; purchase date 17/11/2026 and direct purchase at Abigail's Campinas store from the user; original weight 250 g; label shelf life 6 months. Price remains unspecified and no calendar expiry date is fabricated. These confirmations supersede the earlier missing roast/purchase dates and provisional Stardust bag context. The stable internal bag key keeps existing execution links intact.

Coffee label fields: Abigail Coffee Co., Fazenda Daterra Coffee, Cerrado Mineiro, 1,100 m, natural process and the packaging descriptors. Roast level, variety and an individual cupping score are not inferred from appearance or generic brand claims. The photos preserve additional packaging text without promoting advertising statements to verified measurements.

These are real curated initial application data, not disposable mock values. User corrections, original files and relationships must survive the eventual application import.

The user supplied the [official Stardust product link](https://abigailcoffee.com.br/products/produto-1?variant=49737048588547), now retained on the coffee record and linked from Library. Automated retrieval was blocked (HTTP 429); no price or product claims were added from unverified page contents.

## Vô Zico library photos confirmed during review

Five user-supplied originals are retained unchanged under `docs/assets/photos/vo-zico/`: four packaging/label photos on the bag and one beans photo on the coffee. Label fields include 500 g, 100% Arabica, Catuaí Vermelho, natural process, light roast, Cabo Verde–MG, volcanic soil and label descriptors/profile. The 82-point SCA Cupping sticker is retained as a packaging claim, separate from the user’s enjoyment rating and sensory observations.

The bag's manufacture date is 15/09/2026 and best-before date 15/09/2027. Roast date, purchase date, retailer, price and opening date remain unknown. The stated 30-day consumption recommendation after opening is stored as packaging conservation guidance, not as a fabricated opening/expiry date. The originals preserve distributor/manufacturer details and other label text.

## Field audit

The source supports the current dose, water, temperature, grind, timing, range, pour-target, technique, photo, and narrative-observation fields. The Specification field review added optional manufacture date, best-before date, original bag weight, origin altitude, storage notes, and corrected historical identifiers. The staged import file preserves the source evidence for these additions. Original bag weight does not require automatic remaining-inventory tracking.
