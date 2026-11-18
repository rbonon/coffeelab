# Coffee Lab open questions

The consolidated [requirements](../spec/requirements.md), [user stories](../spec/user-stories.md), and [first-release boundaries](../spec/non-goals.md) reflect the approved direction toward recipe learning, coffee-specific variants, and selective execution logging. Approved interview choices are recorded in [DECISIONS.md](../../DECISIONS.md).

## Remaining Specification decisions

1. Home priorities are approved: recipe retrieval first, journal and recent activity second. Detailed UI/UX is delegated to the agent. The target phone is Samsung S25 Ultra with Brave or Dia. Verify the available browser setup and validate long-recipe readability and screen-awake behavior during UI/UX.
2. The field minimums and Experimental default are approved across the matrix, including coffee-specific variant name, base recipe, and coffee identity with inherited category. Reconcile the five-category matrix with the full ChatGPT export when available.
3. Resolved: allow record correction and archive restoration; permanent deletion requires an explicit action and preserves existing brew snapshots when source records are removed.
4. Resolved: recipe-result comparisons and overall ratings take priority. Brew count, coffee brewed, grounds used, brews over time, methods, and equipment summaries describe recorded executions only. Untracked brews use expected recipe quantities as actuals without estimate labels. Keep water input distinct from finished coffee in recipe fields.
5. The assembled first-release scope and acceptance criteria are approved. Keep explicitly open choices visible as they are resolved.

The earlier 30-second logging suggestion is unapproved. Decide whether a measurable entry-time target is needed while refining the forms.

## Recipe field review from available source chats

Proposed additions for review, based on the accessible Receita AeroPress exchanges:

- Distinct brewing-water input, bypass water, and expected finished yield, including yield ranges. The source discusses 200 g of water and an expected 175–180 g drink, separately from an attempted 250 g finished-drink adaptation.
- Step start times and durations, including immersion, settling, and pressing. The source distinguishes a swirl at 2:00, settling until 2:30, and roughly 30 seconds of pressing.
- Explicit technique instructions such as traditional orientation, gentle swirl, no spoon stirring, and no bypass.
- Brewer model and capacity constraints. The source questions whether the larger adapted water quantity fits an AeroPress Original.
- Preserve the distinction between the source method, proposed adaptations, and the user's selected version when importing recipes.

The available Receitas Pour Over history exposes five recent product-planning exchanges, with no older-page cursor. It references A01–A06 and B01 but does not expose their recipe tables or full brew records. A complete historical field audit remains pending retrieval of that content. These access limits do not establish that the original chat lacks the records.

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
