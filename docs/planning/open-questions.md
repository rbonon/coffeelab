# Coffee Lab open questions

The consolidated [requirements](../spec/requirements.md), [user stories](../spec/user-stories.md), and [first-release boundaries](../spec/non-goals.md) reflect the approved direction toward recipe learning, coffee-specific variants, and selective execution logging. Approved interview choices are recorded in [DECISIONS.md](../../DECISIONS.md).

## Specification review complete

The functional requirements, field minimums, ratio presentation, optional sensory entry, archive/deletion behavior, recipe variants, and recorded-execution statistics are defined. Source-backed optional fields are included. No product interview question remains open for this stage.

## UI/UX follow-ups

- Use the approved recipe-first priorities and delegated layout choices to produce the journeys, screen inventory, and reusable design components.
- The user rejected paging during brewing: preparation and the complete schedule must be visible without swiping, scrolling or tapping. Validate actual-phone readability and screen-awake behavior on the Samsung S25 Ultra with the available Brave or Dia browser.
- Check English/pt-BR layouts, independent measurement settings, incomplete entries, optional rating controls, and routine Keeper use without logging.
- Approved UI/UX tasks #22–#25 are linked in `docs/spec/screens.md`. Start each leaf through the issue/branch/OpenSpec lifecycle.

## Historical source verification

The current specification covers brewing and bypass water, finished yield, exact values and ranges, step timing, and flexible method-specific instructions. Verify their coverage against the full source export. The accessible Receita AeroPress exchanges include:

- Distinct brewing-water input, bypass water, and expected finished yield, including yield ranges. The source discusses 200 g of water and an expected 175–180 g drink, separately from an attempted 250 g finished-drink adaptation.
- Step start times and durations, including immersion, settling, and pressing. The source distinguishes a swirl at 2:00, settling until 2:30, and roughly 30 seconds of pressing.
- Explicit technique instructions such as traditional orientation, gentle swirl, no spoon stirring, and no bypass.
- Brewer model and capacity constraints. The source questions whether the larger adapted water quantity fits an AeroPress Original.
- Preserve the distinction between the source method, proposed adaptations, and the user's selected version when importing recipes.

The shared Receitas Pour Over link now supplies accessible earlier recipe and execution content. See the [capture, coverage report, and import candidates](../vision/README.md#historical-pour-over-source). The capture preserves all 177 message positions and 63 tables; 75 user bodies and original bytes for 17 uploaded-image references remain unavailable. The field audit includes optional manufacture date distinct from roast date, best-before date, original bag weight, altitude, storage notes, and corrected historical identifiers. The user subsequently supplied 18 original photos and confirmed current coffee/bag/execution details; see the source inventory. The curated retained dataset is real initial application data. Preserve unknowns and exclusions; the original shared rendering still has historical gaps.

## Architecture and later-stage questions

- Railway is selected for application hosting. Choose database, authentication, photo storage, and local/staging/production topology.
- Verify the proposed MCP integration with ChatGPT, particularly authorization, structured writes, original-photo transfer, and retries without duplicate records.
- Design query access across base recipes, variants, coffee identities, bags, equipment settings, and executions so AI comparisons can reference their supporting records.
- Define secure account linking, password recovery, initial owner provisioning, and access revocation for active app and AI sessions.
- Define backup frequency, retention, recovery objectives, and a restore test covering records and photos.
- Define full-export format and import reconciliation. Verify complete historical records and original photos from Receitas Pour Over and Receita AeroPress.

## Resolved during the interview

- Phone use during brewing and computer use for management and review.
- Multiple private accounts, owner as sole initial user, email/password and Google sign-in, and an owner-managed allowlist.
- Five brewing categories and an extendable pour-over brewer list.
- Experimental and Keeper recipes, explicit quantities, source attribution, and repeated executions.
- Selective execution logging, one-off adjustments, and reusable variants derived from successful executions, carried forward to new bags of the same coffee. Routine Keeper brews can go unrecorded.
- AI comparison of recorded recipe results and settings with supporting execution references. Usage totals are secondary and cover recorded executions only.
- Self-contained brew snapshots, distinct planned and actual values, and completed untracked brews using a standard recipe's execution quantities.
- ChatGPT access to the account's full data and the single explicit save gate.
- Photo entry through both paths, ChatGPT packaging interpretation, and retained original images.
- Optional text observations, four 1–5 sensory intensity scales, and a three-choice overall rating.
- Individual bags and purchase details, equipment records and photos, manual bag completion, and archiving.
- Journal filters, usage totals, full account export, filtered PDFs, and required backups and tested recovery.
- English and pt-BR with independent weight and temperature preferences.
