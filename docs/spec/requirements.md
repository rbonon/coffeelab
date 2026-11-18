# Coffee Lab product specification

Specification completed on 2026-11-18 from the product interview, approved reviews, and recovered source-field audit. The product centers on recipe learning, coffee-specific variants, and selective execution logging. UI/UX, technical design, and import-reconciliation follow-ups are tracked in [open questions](../planning/open-questions.md).

[User stories](user-stories.md) · [First-release boundaries](non-goals.md) · [Decision history](../../DECISIONS.md) · [Source discussion](../vision/receitas-pour-over.md)

## Product and primary workflow

Coffee Lab helps the user discover and repeat recipes they enjoy. It is the permanent repository for recipes, selected executions, coffee and equipment context, and results. The app emphasizes recipe retrieval and useful comparisons, with complete entry and correction forms. Connected ChatGPT supplies conversational analysis and a frequently used entry path.

The main workflow is to discuss and adapt a recipe using recorded history and external knowledge, save an experiment, select it on brew day, optionally adjust it or save a variation, and brew using a scale's timer. The user selectively records experiments and different results through ChatGPT or Coffee Lab. An experiment may be executed repeatedly, and routine Keeper brews may go unrecorded.

The working model links a base recipe to reusable coffee-specific variants and their recorded executions. A coffee identity spans individual purchased bags. Each execution preserves its own bag, equipment settings, recipe snapshot, and results. Successful execution adjustments can become a variant on user instruction. Keeper status remains the user's judgment.

## R01 — Online use and independent app entry

Coffee Lab SHALL run online on Railway and provide phone-oriented recipe reading and result capture, with computer access for recipe management and reviewing results.

Coffee Lab SHALL provide app forms for creating and correcting coffee, equipment, recipe, and brew records, with consistent validation and account permissions across app and connected-AI operations.

Coffee Lab SHALL allow recipes to be opened and followed without creating or completing a brew record, supporting selective logging of experiments, recipe changes, and different results.

Acceptance criteria

- A saved record is available when the account is opened on a phone or computer.
- The account holder can create and correct records through the app.
- Equivalent valid app and AI inputs produce equivalent records.
- Opening and following a Keeper can end without a brew record, completion prompt, or missing-task indicator.
- Database, authentication, photo storage, and environment topology remain technical-design decisions.

## R02 — Accounts and controlled access

Coffee Lab SHALL support multiple accounts with the owner's account as the sole initial account and private data owned by each account.

Coffee Lab SHALL offer email/password and Google sign-in, with the same verified email resolving to one account and dataset through a secure identity-linking flow.

Coffee Lab SHALL provide an owner-only admin screen for managing an email allowlist governing account creation through either sign-in method.

Coffee Lab SHALL block further access when an email is removed from the allowlist while retaining the account and data and allowing access to be restored through reauthorization.

Acceptance criteria

- An unauthorized email cannot create an account through either method.
- An ordinary account cannot view another account's coffee data or use the owner's administration controls.
- Authorized sign-in methods for one verified email reach the same dataset.
- After removal from the allowlist, app and AI access are denied and the data is retained.
- Recovery, initial owner setup, identity linking, and active-session revocation behavior require security design.

## R03 — Languages and units

Coffee Lab SHALL support English and Brazilian Portuguese from the first release in interface labels, validation messages, and PDF-generated labels, with localized date and number formatting.

Coffee Lab SHALL select the initial language from the browser and allow a saved account preference to override it, preserving the original language of recipes and personal notes.

Coffee Lab SHALL provide independent preferences for weight units (grams or ounces) and temperature units (Celsius or Fahrenheit), applying conversions consistently in the app and PDFs without changing underlying quantities.

Acceptance criteria

- English with grams and Celsius and Portuguese with ounces and Fahrenheit are supported.
- Changing display units preserves the quantity represented by existing recipes and brews.
- A saved language preference applies on subsequent sign-ins.
- A Portuguese tasting description stays Portuguese when interface language changes.

## R04 — Individual coffee bags

Coffee Lab SHALL track individual purchased bags, their roast dates, and associations between brews and the bag used.

Coffee Lab SHALL provide optional purchase date, price with currency, and retailer fields and support multiple packaging photos per bag.

Coffee Lab SHALL accept bag data prepared through ChatGPT from packaging photos and user-supplied details upon an explicit save request, retaining the original photos and providing simple app entry and correction forms.

Coffee Lab SHALL allow a bag to be saved with a name alone and enriched later, with roast date and other details optional.

Coffee Lab SHALL associate individual bags with a reusable coffee identity so coffee-specific recipe variants can carry forward across purchases while each execution retains the bag used.

Coffee Lab SHALL support optional roaster, origin, producer or farm, variety, processing, roast level, and packaging tasting descriptors, keeping packaging descriptors distinct from the user's tasting observations.

Coffee Lab SHALL support optional origin altitude on the coffee record and manufacture date, best-before date, original bag weight, and storage notes on the individual bag. Manufacture date SHALL remain distinct from roast date.

Acceptance criteria

- Separate purchases can have separate roast and purchase details.
- Two bags of the same coffee share its identity while retaining independent roast dates and execution histories.
- A bag can be saved with just its name and updated later with roast date, purchase details, and photos.
- Photos of multiple sides of a bag or box remain accessible with its record.
- A brew references the individual bag used.
- An unavailable roast date or descriptive field stays empty.
- Packaging descriptors and the user's own tasting observations can be viewed independently.
- Vô Zico's manufacture date can be saved while its unknown roast date stays empty.
- Stardust's 250 g original bag weight and 1,100 m origin altitude can be retained without enabling automatic remaining-inventory deduction.

## R05 — Equipment

Coffee Lab SHALL support individual grinders, brewers, espresso machines, scales, and kettles, with name, model, optional notes, and optional photos of the user's actual equipment.

Coffee Lab SHALL preserve the grinder identity and setting used in each brew where those values are known.

Coffee Lab SHALL require only a name and equipment type to save an equipment record.

Acceptance criteria

- Multiple grinders and brewers can be recorded in one account.
- Grinder-specific notation such as JX-Pro 3.5.0 is retained.
- Photos can be viewed on equipment records.
- A historical brew retains its recorded grinder identity and setting.

## R06 — Recipes and experiments

Coffee Lab SHALL support Pour Over, AeroPress, French Press, Manual Espresso, and Espresso in the first release. Manual Espresso means hand-operated lever brewing; Espresso means pump-machine brewing.

Coffee Lab SHALL provide a selectable pour-over brewer with V60, Kalita Wave, Chemex, and Origami as an extendable starter list, distinguishing the brewer from the recipe's technique, pours, timing, temperature, and agitation.

Coffee Lab SHALL support Experimental and Keeper recipe statuses, source links, attribution, adaptation notes, and explicit quantities and steps for each saved recipe.

Coffee Lab SHALL allow a recipe to be saved with only its name and brewing category and enriched later with instructions and quantities.

Coffee Lab SHALL default new recipes and variants to Experimental and allow the user to select Keeper status.

Coffee Lab SHALL support exact targets and ranges for recipe parameters, including timing and temperature, alongside written step instructions.

Coffee Lab SHALL distinguish the water quantity added during a pour from the cumulative scale target and display both when available.

Coffee Lab SHALL store brewing-water quantity, bypass-water quantity, and expected finished drink yield as separate recipe fields.

Coffee Lab SHALL calculate ratios from supplied quantities and make their basis explicit. Filter recipes prominently display coffee dose to brewing water; AeroPress with bypass also displays intended finished quantity and final-drink ratio; espresso displays coffee dose to beverage yield.

Coffee Lab SHALL preserve the intended final ratio separately from an execution's actual final ratio when recorded quantities are available, including bypass in finished drink quantity.

Coffee Lab SHALL allow final beverage measurements to be omitted on filter executions and intermediate pressing and bypass measurements to be omitted when only the finished-drink reading is recorded.

Coffee Lab SHALL support written pressure and pre-infusion instructions for Manual Espresso and Espresso recipes alongside dose, yield, temperature, grind, and time, with manually entered execution results.

Coffee Lab SHALL support method-specific techniques as ordered written instructions alongside structured quantities and timing, including AeroPress orientation and pressing and French Press steeping and decanting.

Coffee Lab SHALL allow the user to update an experiment or save an adjusted recipe as a new experiment and execute one experiment multiple times.

Coffee Lab SHALL allow execution-specific adjustments, including ratio and grind setting, and support saving an execution's chosen settings as a recipe variant on user instruction, retaining links to its base recipe, coffee identity, relevant equipment, and originating execution.

Coffee Lab SHALL suggest the coffee-specific variant's saved settings as a starting point for a new bag of the same coffee and allow adjustments for that bag.

Coffee Lab SHALL require a name, base recipe, and coffee identity for a coffee-specific variant and inherit its brewing category from the base recipe.

Acceptance criteria

- V60 is selectable within Pour Over.
- A user can add another pour-over brewer.
- An experiment can be changed to Keeper.
- Keeper promotion is a user action, with no automatic minimum execution count.
- Two brews from one experiment remain distinct records.
- A serving-size adaptation retains its own quantities and steps.
- A recipe can retain a 93 °C target, a 30-second press step, and a target total duration of 3:30–3:45 without collapsing the duration range into a single value.
- A pour adding 50 g after a cumulative 100 g can display both the 50 g addition and the 150 g cumulative target.
- A recipe with 20 g coffee and 400 g finished drink displays an intended final-drink ratio of 1:20 without assuming its brewing-water or bypass quantities.
- A V60 recipe with 15 g coffee and 250 g brewing water shows 1:16.7; an execution with 252 g water shows 1:16.8 and may omit finished drink weight.
- An AeroPress recipe can specify 20 g coffee, 200 g brewing water, and top-up to 400 g finished drink, showing 1:10 before bypass and 1:20 final. An execution need not record intermediate or bypass weights to retain its measured finished weight.
- An espresso recipe with 18 g dose and 36 g yield shows 1:2; a recorded 38 g yield shows approximately 1:2.1.
- A lever-espresso recipe can describe a pressure ramp and pre-infusion without requiring a live pressure graph or machine connection.
- AeroPress and French Press recipes preserve their method-specific instructions without requiring every instruction to have a dedicated structured field.
- A Hoffmann execution adjusted from 1:15 to 1:17 for Stardust can be saved as a Stardust variant while preserving the base recipe and execution snapshots.
- A new bag of Café do Vô Zico can start from the saved Hoffmann variant for that coffee, with its settings adjustable for the new bag.
- Saving a variant from an execution leaves the base recipe and all earlier execution snapshots intact.
- The starter brewer list includes V60, Kalita Wave, Chemex, and Origami, with custom additions supported.

## R07 — Recipe reading during brewing

Coffee Lab SHALL provide clear phone-readable recipe steps, a recipe-reading layout that avoids scrolling while executing the instructions, and screen-awake support during recipe viewing.

Timing is performed on the user's scale. The selected phone/browser, layout for long recipes, and behavior when screen-awake support is unavailable require UI/UX verification.

Acceptance criteria

- The approved recipe-reading design is checked by the user on their actual phone.
- Instructions and targets remain readable during execution.
- Screen-awake support is exercised on the supported device/browser and interruptions are documented.
- Recipe reading supports the five selected brewing categories.

## R08 — Brew records and gradual entry

Coffee Lab SHALL require only a bag, brewing category, and date to save an execution, allowing other details to be added later.

Coffee Lab SHALL save a self-contained recipe snapshot for a brew with a known recipe, including its steps, target quantities, temperature, and grind setting where supplied, alongside recorded execution data.

Coffee Lab SHALL preserve the snapshot independently of subsequent source recipe changes or deletion and retain planned targets separately from actual measurements and execution adjustments.

Coffee Lab SHALL support result capture using coffee-bed, scale, and drink photos, elapsed time, final weight, and observations through the app or connected AI.

Coffee Lab SHALL allow a brew to be saved first and enriched later, without requiring photos, tasting descriptions, or ratings to complete the initial record.

Acceptance criteria

- Editing a source recipe leaves existing brew instructions and targets intact.
- Where source-recipe deletion is supported, its removal leaves the historical brew readable.
- Target 250 g and actual 263 g remain distinguishable on a measured brew.
- A brew can be saved without tasting information and updated later.
- A family member's brew can be recorded under the user's account.

## R09 — Completed untracked brews

Coffee Lab SHALL allow a completed untracked brew to be recorded with a bag, method, date, and optional note, without requiring a separate account for the person who brewed or measured results.

Coffee Lab SHALL use a selected standard recipe's quantities as the untracked brew's execution data, preserving the recipe snapshot and recipe-derived provenance, and include those quantities in usage statistics without requiring later measurements or a completion step.

Coffee Lab SHALL count an untracked brew's expected recipe quantities as actual execution quantities in ordinary statistics, without estimate labels, precision warnings, or separate estimated totals.

Coffee Lab SHALL preserve unknown quantities when no source recipe or measurement is provided and leave unprovided tasting results empty.

Acceptance criteria

- “My wife made an AeroPress yesterday using this bag” can be saved as a completed entry.
- Selecting a known standard recipe supplies the recorded execution quantities and contributes to usage totals.
- Later source recipe changes leave that execution intact.
- The record indicates that the brew was untracked and its quantities came from a recipe.
- A recipe specifying 250 g of finished coffee contributes 250 g to the ordinary coffee-brewed total for an untracked execution.
- Unknown amounts stay missing when a recipe is unavailable.

## R10 — Optional tasting and quick rating

Coffee Lab SHALL provide optional free-text tasting descriptions and independently optional 1–5 intensity scales for acidity, sweetness, body, and bitterness.

Coffee Lab SHALL use an optional three-choice rating for overall enjoyment: Didn't enjoy, Okay, and Enjoyed.

Coffee Lab SHALL present a text-only tasting entry as complete, without empty rating placeholders or incomplete warnings, and preserve omitted ratings as missing values.

Acceptance criteria

- A description can be saved using the user's own vocabulary.
- Any subset of sensory scales can be filled.
- The quick rating is the sole overall enjoyment measure.
- Missing scores stay missing in comparisons.
- AI-suggested scores are optional and use the save gate in R12.

## R11 — Journal and statistics

Coffee Lab SHALL provide journal search and filters by coffee identity, individual bag, base recipe, recipe variant, brewing method, date, and equipment.

Coffee Lab SHALL allow the user to review recorded results for a base recipe and its variants across coffee bags and execution settings, emphasizing observations and enjoyment ratings.

Coffee Lab SHALL provide secondary coffee-grounds usage and coffee-prepared statistics using recorded execution quantities, including recipe-derived quantities for untracked brews, with explicit units and clear handling of missing data.

Coffee Lab SHALL provide brew count, total coffee brewed, grounds used, brews over time, most-used methods and equipment, and the three-choice overall-rating distribution, using the current journal filters.

Coffee Lab SHALL identify statistics as summaries of recorded executions, allowing comparison of a recipe's saved results without treating omitted routine brews as missing tasks or implying complete consumption coverage.

Acceptance criteria

- Journal selections retrieve matching recorded brews.
- An untracked brew appears in history and brew counts.
- Grounds totals include supplied measured doses and recorded recipe-derived doses.
- A missing value contributes no invented quantity or zero sensory score.
- Coffee-brewed totals use recorded finished-coffee quantities, including the recipe quantities recorded as actuals for untracked brews.
- Date, bag, recipe, method, and equipment filters narrow the statistics and corresponding journal records consistently.
- Coffee-identity and base-recipe views can retrieve related bags and variants while retaining the identity of each execution.
- Comparing two recorded Stardust executions exposes their ratio, grind setting, other supplied parameters, observations, and ratings.
- Unrated brews contribute to brew counts and are excluded from the three-choice rating distribution.
- Usage and popularity summaries refer to recorded executions and exclude omitted routine brews.

## R12 — Connected ChatGPT

Coffee Lab SHALL support ChatGPT as the first connected AI client in the first release, authorized to search and retrieve all of its account's coffees, bags, equipment, recipes, brews, notes, and photos.

Coffee Lab SHALL support AI-prepared entry of bags, equipment, recipes, and brews and updates to tasting observations, using the same account ownership and validation rules as the app.

Coffee Lab SHALL treat the user's explicit save request as the single conversational approval gate and immediately save the discussed valid content, including photo-derived measurements and optional inferred sensory ratings.

Coffee Lab SHALL preserve original tasting descriptions alongside suggested ratings and accept original photos through the connected workflow for retention in the corresponding records.

Coffee Lab SHALL provide the connected AI access to the base-recipe, variant, coffee-identity, bag, equipment, and execution relationships needed to compare recorded results and propose further experiments.

Coffee Lab SHALL make execution references and recorded context available to support AI trend discussions, with analysis scoped to recorded executions and missing observations preserved.

MCP is the proposed interface. Its ChatGPT authorization, structured writes, and photo-transfer compatibility require early technical verification. External research and interpretation happen in the connected AI conversation.

Acceptance criteria

- The connected AI can retrieve historical records across the authorized account.
- The AI can retrieve Hoffmann executions for Café do Vô Zico and Stardust, then compare Stardust executions with different grind settings or ratios.
- The user can inspect the executions supporting a proposed trend. Comparisons expose recorded parameter differences and missing observations rather than implying controlled experiments or complete brewing coverage.
- An AI suggestion becomes a saved variant only upon the user's explicit save request.
- An explicitly requested experiment save creates a recipe available in the app.
- “Save this” authorizes the discussed data without a second Coffee Lab approval or a separate inferred-rating approval.
- A packaging-photo entry retains its images with the bag; brew photos appear with the brew.
- The integration cannot access another account's private records.
- A failed validation or upload is surfaced, with reliable retry behavior to be designed and tested.
- The technical check proves photo transfer through the intended ChatGPT workflow before the implementation plan assumes it works.

## R13 — Existing history and exports

Coffee Lab SHALL support initial import of existing coffee records, recipes, and brews from Receitas Pour Over as the primary source and Receita AeroPress as the secondary source, retaining provenance and preserving unavailable values.

Coffee Lab SHALL preserve corrected historical identifiers and aliases during import and separate planned or superseded recipes from recorded executions, preventing duplicate executions from renamed identifiers.

Coffee Lab SHALL provide a full export of the authorized account's records and original photos.

Coffee Lab SHALL provide readable PDFs of full recipe details and journal records, including relevant instructions, planned and actual values, notes, ratings, and photos, with photos included by default and an option to omit them.

Coffee Lab SHALL apply current journal filters to PDF exports and export all account journal records when no filters are selected.

Acceptance criteria

- Import candidates distinguish recorded brews from proposed recipes and illustrative mockup values.
- Available originals and missing source data are identified before importing.
- The historical B02-to-B01 correction creates one execution with its former identifier retained as an alias.
- A03 and A05 plans and the superseded Kasuya A06 assignment remain distinct from the recorded Hoffmann A06 execution.
- A full account export includes its records and original photos.
- A filtered journal PDF includes the matching records only.
- Both PDF languages and measurement preferences in R03 are respected.
- Export format, import reconciliation, and detailed PDF pagination remain design work.

## R14 — Archiving

Coffee Lab SHALL allow users to archive coffees, bags, equipment, and recipes, including manually marking a bag finished, hiding archived items from everyday selection while preserving access through history and searches.

Coffee Lab SHALL allow record editing and restoration of archived items and require an explicit action for permanent deletion, preserving existing brew snapshots when source records are removed.

Acceptance criteria

- A finished bag leaves the active bag selection.
- Earlier brews retain access to their bag and recipe history.
- Searches can retrieve archived items.
- An archived item can be restored to active selection.
- Records can be corrected, and permanent deletion requires an explicit action.
- Deleting a source record preserves existing brew snapshots.

## R15 — Backup and recovery

Coffee Lab SHALL automatically back up account records and original photos and have a tested restore procedure before first-release go-live.

Acceptance criteria

- The release checklist contains evidence of a successful restore test covering records and photos.
- Backup frequency, retention, recovery objectives, and staging/production procedures are specified during operations design.

## Agreed field matrix

This matrix organizes agreed fields and minimum save requirements. AI-assisted entry should populate all available relevant details; the minimums allow partial records when information is unavailable. Account ownership and generated record identifiers are system-managed.

| Record | Minimum to save | Optional or conditional information |
| --- | --- | --- |
| Coffee identity | Name | Roaster, origin, origin altitude, producer/farm, variety, processing, roast level, packaging descriptors |
| Individual bag | Name | Associated coffee identity, roast date, manufacture date, best-before date, original bag weight, storage notes, purchase date, price/currency, retailer, multiple packaging photos. Resolve or create the coffee identity when linking a variant across bags. |
| Equipment | Name and equipment type | Model, notes, actual photos. Types are grinder, brewer, espresso machine, scale, kettle. |
| Base recipe | Name and brewing category | Ordered steps, explicit quantities, target ranges, equipment/grind guidance, sources, attribution, adaptation notes. Status defaults to Experimental and may be changed to Keeper. |
| Recipe variant | Name, base recipe, associated coffee identity; category inherited from base recipe | Saved chosen quantities, steps, equipment and grind settings, status, sources, adaptation notes. Retain an originating execution when created from one. |
| Recorded execution | Bag, brewing category, date | Recipe/variant, planned snapshot, actual quantities and settings, elapsed time, temperature, photos, description, sensory scales, quick rating. These are optional so partial and casual entries remain possible. |

Approved behavior for incomplete recipes: allow saving before steps or quantities are complete, preserving any supplied instructions and showing the targets that are available when reading it. Missing values remain empty, and viewing the recipe does not require execution logging.

### Recipe and execution quantities

| Field | Recipe representation | Execution representation |
| --- | --- | --- |
| Dose | Exact quantity or range | Recorded dose; optional |
| Brewing water | Exact quantity or range | Recorded input; optional |
| Bypass water | Explicit quantity, range, or top-up instruction | Recorded addition when supplied; optional |
| Finished drink | Target quantity or range | Recorded final quantity; optional for filter brews |
| Temperature | Exact target or range | Recorded temperature when supplied |
| Time | Total target and step timing, each exact or a range | Recorded elapsed time and optional step observations |
| Grinder | Suggested equipment and grinder-specific setting | Grinder identity and setting used when known |
| Ratio | Derived from quantities with the agreed method-specific basis | Derived from recorded quantities, preserving the recipe's intended ratio separately |
| Observations | Recipe guidance and adaptation notes | Optional free text, photos, four intensity scales, and three-choice overall enjoyment |

Amounts carry units. Unknown and zero are distinct. A missing bypass amount does not imply zero; an explicit no-bypass instruction can represent that choice. Step timing can include a start time, duration, or written timing instruction, with the reference point stated when needed. Espresso timing should state whether pre-infusion is included.

### Method-specific instructions

| Category | Quantities and targets when supplied | Flexible written technique |
| --- | --- | --- |
| Pour Over | Dose, brewing water, temperature, grind, total time, pour additions and cumulative targets | Brewer, filter preparation, bloom, pour pattern, agitation and drawdown |
| AeroPress | Dose, brewing water, bypass, final drink target, temperature, grind, immersion/settling/press timing | Orientation, swirl/stir instructions, pressing and top-up instructions |
| French Press | Dose, brewing water, temperature, grind, steeping and settling timing, optional finished yield | Agitation, crust handling, plunging and decanting |
| Manual Espresso | Dose, beverage yield, temperature, grind, pre-infusion and total time | Lever operation, pre-infusion and pressure instructions |
| Espresso | Dose, beverage yield, temperature, grind, pre-infusion and total time | Machine preparation, pre-infusion and pressure instructions |

These technique examples guide written instructions; they do not each require a separate database field.

### Completed untracked execution

A user may select a standard recipe to supply the execution quantities, then save the entry as completed and untracked. Those quantities count as actuals in ordinary statistics without estimate labels. Preserve the source snapshot and the untracked designation. No rating, photo, or follow-up measurement is required. If no recipe or quantity is supplied, keep unknown amounts empty.

### Historical import check

Reconcile this matrix with the complete Receitas Pour Over and Receita AeroPress export when it arrives. The current matrix does not establish that the older records or original photos have been fully retrieved.
