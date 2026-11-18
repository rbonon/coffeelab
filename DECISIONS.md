# DECISIONS — architectural decision history

This file is **append-only**. New sessions add entries at the bottom under a dated heading. Existing entries are never modified or removed. Each entry captures what was decided, why, and what rules or implications follow.

This file and `AGENTS.md` are the shared memory of this project across sessions and across AI tools. Any agent working on this repo should read this file before making significant changes.

---

## Entry format

```
## YYYY-MM-DD — <short description of session or topic>

### <Decision title>

**Decision:** What was decided.

**Rationale:** Why this decision was made. What alternatives were considered and why they were rejected.

**Implications:**
- Rule or consequence that follows from this decision
- Another rule or consequence
```

---

<!-- 
  INSTRUCTIONS FOR AI AGENTS:
  - Add new entries at the BOTTOM of this file, below all existing entries
  - Use today's date and a short description of the session or topic
  - Capture the essence of decisions — not the full conversation, just what was decided and why
  - If a decision reverses or supersedes an older one, note that in the new entry — do not edit the old one
  - Remove this instruction comment block once the first real entry has been added
-->

## 2026-11-18 — Greenfield Foundation

### One-time Foundation commit to main

**Decision:** The user approved committing and pushing the initial Foundation scaffold directly to `main`.

**Rationale:** The Greenfield bootstrap establishes the project board, planning documents, and workflow before definition work starts.

**Implications:**
- This approval applies to the initial Foundation batch.
- From Specification onward, each leaf uses its own GitHub issue, OpenSpec change, and feature branch.

### Discuss architecture during Specification

**Decision:** Discuss architecture alongside the requirements it affects. Use the Architecture stage to assemble and review the whole-system design.

**Rationale:** Offline brewing, access, and historical recipe settings affect both user experience and technical design.

## 2026-11-18 — Usage and hosting

**Decision:** Design for phone use during brewing and computer use for recipe management and reviewing results. Host the application online on Railway.

**Rationale:** The user confirmed this device workflow and selected Railway after comparing it with Vercel. Learning Railway for other projects is an explicit goal. The user accepts recurring hosting costs starting at $5 per month, with the final cost dependent on usage and architecture.

**Implications:** Database, authentication, photo storage, and environment topology still require decisions. The choice of Railway does not select those services.

## 2026-11-18 — Accounts and sign-in

**Decision:** Support multiple accounts with the owner's account as the sole initial account. The owner can enable additional accounts later. Each account owns its coffees, recipes, and brew history. Support email/password and Google sign-in, with both methods leading to one account and dataset for the same verified email.

**Rationale:** Coffee Lab is a personal project. Account management and both sign-in methods are also learning goals.

**Implications:** Specify controlled account creation, recovery, and secure identity linking before implementation. The authentication provider remains open.

### Admin-managed email allowlist

**Decision:** The owner manages an email allowlist through an admin screen inside Coffee Lab. An email address must be authorized before it can create an account using either sign-in method.

**Rationale:** The user wants to control future account creation from within the application.

**Implications:** Define the effect of removing an authorized email and protect administration with owner permissions.

### Removing an authorized email

**Decision:** Removing an email from the allowlist blocks further access while preserving the account and its data. Reauthorizing the email allows access to be restored.

**Rationale:** The user approved reversible access removal with data retention.

## 2026-11-18 — First-release brewing methods

**Decision:** The first release supports V60, AeroPress, French Press, Manual Espresso, and Espresso.

**Rationale:** The user explicitly selected these five methods during Specification.

**Implications:** Define recipe parameters, guidance, and extraction records for each method, including the intended distinction between Manual Espresso and Espresso.

### Brewing categories and pour-over brewers

**Decision:** Replace the first-release V60 category with Pour Over. Its brewer is selectable, with a starter list that users can extend. Recipes define technique separately from the brewer. The other categories remain AeroPress, French Press, Manual Espresso, and Espresso.

**Rationale:** The user wants to accommodate multiple pour-over brewers and techniques.

**Implications:** V60 is a pour-over brewer. The starter brewer entries remain to be confirmed. Manual Espresso means hand-operated lever brewing, and Espresso means pump-machine brewing, as confirmed by the user.

## 2026-11-18 — App and connected AI workflows

**Decision:** Include guided brewing and direct manual logging for all five brewing categories in the first release. Support ChatGPT as the first connected AI client, with access to search and retrieve all data belonging to the authorized account, including every brew, recipe, coffee, equipment record, photo, and tasting note. Allow it to save recipes and brews when the user explicitly requests a save.

**Rationale:** The user wants to develop recipes conversationally, save agreed experiments, follow recipes on a phone, capture results, and discuss the full brewing history with AI.

**Implications:** MCP is the proposed connection mechanism. Verify ChatGPT compatibility and authorization during technical design. Define save confirmation and photo handling. The app also needs its own input workflow.

### Immediate authorized saves

**Decision:** An explicit user request to save a recipe or brew authorizes immediate saving through the AI connection. Coffee Lab does not require a second approval inside the app.

**Rationale:** The user confirmed that conversational authorization should complete the save.

## 2026-11-18 — Self-contained brew history

**Decision:** Each brew stores its own snapshot of the recipe as executed, including steps, targets, temperature, and grind setting, alongside actual measurements and tasting results. A source recipe link may support comparisons. Subsequent recipe edits or deletion must preserve the brew's saved details.

**Rationale:** The user considers independent historical brew records foundational to Coffee Lab.

**Implications:** Brew history must be readable without the source recipe. Separate recipe revision history remains outside this decision. Clarify how planned targets and execution adjustments are represented.

### Planned targets and actual results

**Decision:** Each brew preserves planned targets separately from actual measurements and execution adjustments.

**Rationale:** The user wants to compare intended and actual brewing parameters when evaluating results.

### Gradual brew completion

**Decision:** A brew can be saved with measurements and photos, then enriched with tasting notes later.

**Rationale:** The user wants to capture results during brewing and evaluate the coffee afterward.

### Optional tasting observations

**Decision:** Provide an optional free-text tasting-notes field and optional ratings for acidity, sweetness, body, bitterness, and overall enjoyment. Each field may be left empty independently.

**Rationale:** The user wants to describe impressions in their own words without requiring trained tasting vocabulary or a complete sensory evaluation.

### Sensory presentation and conversational entry

**Decision:** Use a 1–5 scale for optional sensory ratings, measuring intensity for acidity, sweetness, body, and bitterness and enjoyment for overall. Treat a free-text description alone as a complete tasting entry. Present that entry naturally without incomplete indicators caused by empty ratings.

**Rationale:** The user expects to describe impressions conversationally to AI most of the time and wants the app to feel complete when structured ratings are omitted.

**Implications:** Support conversational entry of tasting observations through the AI connection. Clarify whether AI may suggest or save inferred numeric ratings.

### Optional AI rating suggestions

**Decision:** AI may optionally suggest sensory scale values based on the user's description. Save inferred values only after the user approves them, and preserve the original description. Users can also enter ratings themselves.

**Rationale:** The user wants optional guidance while retaining control over the sensory record.

### Photo entry through app and ChatGPT

**Decision:** Include attaching brew photos directly in Coffee Lab and through ChatGPT in the first release. Photos from both paths belong to the same brew record.

**Rationale:** The user wants to capture brewing results through either entry path.

**Implications:** Verify the ChatGPT photo-transfer flow during technical design. Define how measurements read from scale photos are reviewed and saved.

### Single conversational save gate

**Decision:** The user's explicit save request is the single approval gate for AI-prepared input, including photo-derived measurements and optional inferred sensory ratings presented in the conversation. The request immediately saves the discussed content to Coffee Lab.

**Rationale:** The user reviews the conversation before asking to save and wants a streamlined entry workflow.

**Implications:** This supersedes the separate inferred-rating approval described above. The original tasting description remains preserved, and sensory ratings remain optional.

### Simple brewing reference and result capture

**Decision:** Use the scale's timer for brewing in the first release. Coffee Lab provides readable recipe instructions and records results, including photos of the bed, scale, and drink, elapsed time, final weight, and observations. Connected AI can extract visible measurements and record bed observations from submitted photos, using the agreed conversational save gate.

**Rationale:** The user wants to keep brewing simple and start result capture with a photo.

**Implications:** This narrows the earlier guided-brewing requirement to a recipe reference view. An app timer and offline brewing continuity are deferred. Phone recipe readability and keeping the screen awake remain design requirements whose supported-device behavior needs verification.

### Primary experiment workflow

**Decision:** Organize the product around four user cases: develop and save experimental recipes through AI using account data and external knowledge; select an experiment in Coffee Lab and optionally adjust it through AI, updating it or saving a new one; brew from its instructions; and record results through either entry path, with AI expected to be used more often.

**Rationale:** The user explicitly summarized these as Coffee Lab's main use cases.

**Implications:** Use `docs/spec/user-stories.md` as the workflow reference. Define how experiment selection and resulting brew records are associated.

### Product role and reusable experiments

**Decision:** Coffee Lab is the permanent repository for coffee data, with polished recipe, brewing, journal, and statistics views and complete app entry and correction forms. Connected AI provides a conversational way to explore the data, assess recipes, and prepare and save authorized entries. An experiment can be brewed multiple times, with a separate self-contained record for each brew.

**Rationale:** The user confirmed this product role and expects AI to be the more frequent entry path.

**Implications:** Both entry paths share validation and account permissions. Prioritize readable presentation and reliable records. Verify ChatGPT structured saves and photo transfer early in technical design.

### Recipe statuses

**Decision:** Provide Experimental and Keeper recipe statuses. Users can promote a recipe to Keeper after evaluating its brews.

**Rationale:** The user approved these statuses to distinguish recipes being tested from those worth keeping.

### Individual coffee bags

**Decision:** Track individual purchased coffee bags, including their roast dates, and associate brews with the bag used.

**Rationale:** The user considers individual bags and roast dates important for interpreting brewing results.

**Implications:** Define bag details and their relationship to shared coffee information during specification.

### Bag purchase details

**Decision:** Include purchase price, purchase date, and retailer on individual bag records. Represent the price with its currency.

**Rationale:** The user requested these purchase details alongside roast dates.

### Optional purchase details and packaging photos

**Decision:** Purchase details are optional. Support multiple packaging photos per coffee bag, including different sides of a box or bag, for reference and AI-assisted entry.

**Rationale:** Coffee information may be spread across several packaging surfaces, and purchase details may be unavailable.

### Packaging interpretation through ChatGPT

**Decision:** Use ChatGPT to interpret packaging photos, combine extracted details with user-provided purchase information, and save the bag record upon an explicit save request. Retain the original packaging photos alongside the extracted fields. Coffee Lab provides simple forms for viewing, entering, and correcting bag details.

**Rationale:** The user prefers conversational photo entry to developing an in-app photo-interpretation interface.

### Individual grinders and brew settings

**Decision:** Track grinders as individual equipment records. Each brew preserves the grinder identity and setting used.

**Rationale:** The user wants equipment context available for brew comparisons and AI analysis, including grinder-specific settings such as the JX-Pro's 3.5.0 notation.

### Equipment library scope

**Decision:** Include grinders, brewers, espresso machines, scales, and kettles in the first-release equipment library, with name, model, and optional notes.

**Rationale:** The user approved this equipment context for recipe adaptation and brewing records.

### Equipment photos

**Decision:** Allow optional photos of the user's actual equipment on equipment records.

**Rationale:** The user wants visual references for their own equipment.

### Recipe sources and adaptations

**Decision:** Retain recipe source links, attribution, and notes explaining adaptations.

**Rationale:** The user wants to revisit the origin of a recipe and the reasons for changes when discussing and comparing experiments.

### Explicit recipe quantities

**Decision:** Save explicit quantities and steps for each recipe, including serving-size adaptations prepared through AI or the app. Defer automatic proportional recipe scaling in the first release.

**Rationale:** The user approved explicit recipe quantities so an adaptation can account for changes in technique and timing.

### Journal search and filters

**Decision:** Provide journal search and filters by coffee bag, recipe, brewing method, date, and equipment.

**Rationale:** The user approved these dimensions for finding and comparing brewing records.

### Fun brewing totals

**Decision:** Include fun statistics about total coffee grounds used and total coffee prepared, based on recorded brew quantities.

**Rationale:** The user wants cumulative consumption and usage statistics alongside brew comparisons.

**Implications:** Distinguish coffee dose, water input, and finished drink yield. Clarify whether consumption totals mean coffee prepared or coffee personally consumed, and how missing yield values are handled.

### Simple brew rating

**Decision:** Provide an optional three-choice brew rating: Didn't enjoy, Okay, and Enjoyed.

**Rationale:** The user requested a simple rating and affirmed the recommended three-choice option. Detailed tasting notes and sensory scales remain optional.

### One overall enjoyment measure

**Decision:** Replace the previously proposed 1–5 overall enjoyment score with the optional three-choice brew rating. Keep optional 1–5 intensity scales for acidity, sweetness, body, and bitterness.

**Rationale:** The user approved a single quick overall rating alongside the detailed sensory scales.

**Implications:** This supersedes the earlier decision to use a numeric overall enjoyment score.

### Full account export

**Decision:** Provide a full export of the user's account records and original photos from Coffee Lab in the first release.

**Rationale:** The user wants an independent copy of their accumulated coffee data.

**Implications:** Define the export format and recovery workflow during data and operations design.

### Readable PDF exports

**Decision:** Include PDF exports for full recipe details and the journal alongside the full account data export.

**Rationale:** The user wants readable copies of recipes and brewing history.

**Implications:** Define PDF contents, photo selection, and journal selection during specification. Backup and recovery requirements remain an open question.

### Filtered journal PDFs

**Decision:** Journal PDF exports use the currently selected journal filters, including an unfiltered export when no filters are applied.

**Rationale:** The user approved exporting the records currently selected in the journal.

### PDF contents and photos

**Decision:** Include recipe instructions, planned and actual brew values, notes, ratings, and photos where relevant to the exported recipe or journal records. Include photos by default and provide an option to omit them.

**Rationale:** The user approved complete readable exports with control over photo inclusion.

### Backups and tested recovery

**Decision:** Require automatic backups of records and original photos and a tested restore procedure before the first release goes live.

**Rationale:** The user approved protecting the accumulated coffee history and original images.

**Implications:** Define backup frequency, retention, and recovery objectives during operations design.

### Initial history from ChatGPT

**Decision:** Include importing existing coffee records, recipes, and brews from the user's existing ChatGPT conversations in the first release.

**Rationale:** The user states the historical records are contained in one or two ChatGPT chats.

**Implications:** Identify the complete source records and available photos, preserve provenance, and distinguish recipe proposals and estimates from actual brew observations.

### Confirmed import conversations

**Decision:** Import from Receitas Pour Over and Receita AeroPress. Prioritize Receitas Pour Over, which the user confirms already contains structured historical brew data.

**Rationale:** The user confirmed these exact source conversations.

### English and Brazilian Portuguese from the start

**Decision:** Support English and Brazilian Portuguese in the first release, including app interface, validation messages, and PDF-generated labels. Use browser language initially, with a saved account preference overriding it. Format dates and numbers for the selected language. Recipes and personal notes retain their original language.

**Rationale:** The user wants to avoid retrofitting multilingual support later.

**Implications:** Externalize interface text and verify layouts in both languages. This replaces the English-only bootstrap default for the app. Repository planning, portal copy, and Stage values remain English.

### Independent measurement preferences

**Decision:** Support grams and ounces for weight and Celsius and Fahrenheit for temperature. Allow users to choose weight and temperature units independently of each other and of interface language.

**Rationale:** The user explicitly wants combinations such as an English interface with grams and Celsius.

**Implications:** Preserve equivalent quantities when converting units and apply preferences consistently to app displays and PDF exports.

### Archiving items no longer in use

**Decision:** Include archiving coffees, bags, equipment, and recipes in the first release. Archived items leave everyday selection and remain available in history and searches. Finished coffee bags are a primary example.

**Rationale:** The user wants to retire finished or unused items while preserving brewing history.

### Manual bag completion and untracked brews

**Decision:** Manually marking a bag finished is sufficient for the first release. Support recording an untracked brew from a bag, including its method, date, and optional contextual note, without requiring a recipe, quantities, measurements, ratings, or results. Such entries belong to the account recording them; a separate account for the person who brewed is unnecessary.

**Rationale:** The user wants to record events such as a family member making an AeroPress from a bag without collecting detailed data.

**Implications:** Preserve unknown values as missing. Include these events in brew counts and history, and calculate quantity and sensory statistics only from available measurements. Detailed recipe snapshots apply when a recipe is known.

### Standard-recipe quantities for untracked brews

**Decision:** Allow an untracked brew to use quantities from an identified standard recipe for completeness. Preserve a snapshot of the source recipe and identify the resulting quantities as recipe-based estimates. Actual measurements can replace estimates when supplied later.

**Rationale:** The user wants approximate quantities recorded even when the brew was not measured.

**Implications:** The source recipe must be identifiable. Define how estimated quantities contribute to usage totals while retaining their provenance.

### Completed untracked brews use recipe execution data

**Decision:** An untracked brew is a completed record. Use the selected standard recipe's quantities as its executed data and include those quantities in usage statistics. Preserve that the entry was untracked and recipe-derived. No later measurements or completion step are required.

**Rationale:** The user wants a simple finished entry for casual brews and complete usage statistics based on the recipe used.

**Implications:** This supersedes the earlier restriction of quantity statistics to measurements. Snapshot the selected recipe so later edits preserve the recorded execution. Tasting results remain empty unless provided.

## 2026-11-18 — Consolidated specification review

**Decision:** The user approved the consolidated requirements, acceptance criteria, user stories, and first-release boundaries presented for review.

**Implications:** Resolve the explicitly documented open Specification choices before stage completion. Technical verification and later architecture and operations design remain pending.

### Recipe-first app experience

**Decision:** Prioritize finding and opening a recipe to brew. Journal browsing, recent brews, active bags, and other information are secondary. The user delegates detailed UI/UX choices to the agent, guided by these priorities and the existing mockup.

**Rationale:** The user confirmed that recipe retrieval is Coffee Lab's primary direct-app use case.

### Target brewing phone

**Decision:** Target the user's Samsung S25 Ultra with Brave or Dia for the phone brewing view.

**Rationale:** The user identified this intended setup.

**Implications:** Verify browser availability, recipe readability, and screen-awake behavior on the actual setup during UI/UX validation.

### Minimal bag entry and later enrichment

**Decision:** A coffee bag can be saved with just a name, with roast date and other details optional and editable later. The user expects to usually provide multiple packaging photos through ChatGPT and request a save of the extracted information and photos.

**Rationale:** The user wants both complete photo-assisted entry and quick partial entry when information is unavailable.

### Correction, restoration, and deletion

**Decision:** Allow editing records and restoring archived items. Permanent deletion requires an explicit action, and existing brew snapshots remain intact when source records are removed.

**Rationale:** The user approved these controls for correcting mistakes and removing unwanted records.

### Untracked quantities count as actuals

**Decision:** For untracked brews, use the selected recipe's expected quantities as actual execution quantities in ordinary statistics. For example, an expected 250 g of finished coffee contributes 250 g to the coffee-brewed total. Do not add estimate labels, precision warnings, or separate estimated totals.

**Rationale:** The user values complete casual-brew records over distinguishing minor unmeasured differences.

**Implications:** This supersedes prior proposals for labeling untracked quantities as estimates. Retain the untracked designation and recipe snapshot. Treat water input and expected finished coffee as their respective recipe fields.

### First-release statistics scope

**Decision:** Include brew count, total coffee brewed, grounds used, brews over time, most-used methods and equipment, and the three-choice overall-rating distribution. Apply the journal filters to these statistics.

**Rationale:** The user approved this compact initial statistics scope.

### Selective execution logging and recipe learning

**Decision:** Center Coffee Lab on discovering and repeating enjoyable recipes. Routine executions of a Keeper may go unrecorded. Prioritize recording new experiments, changed recipes, and different results. Recipe viewing does not require creating or completing a brew record.

**Rationale:** The user values meaningful recipe and result differences over comprehensive tracking of every coffee brewed.

**Implications:** The journal represents selected recorded executions. Statistics describe those records and cannot represent complete consumption or total equipment usage. Previously selected consumption totals become secondary summaries of recorded data. Optional untracked entries remain available.

### Coffee-specific recipe variants across bags

**Decision:** Allow fine adjustments, including ratio and grind, to be recorded on an execution. On user instruction, save a successful execution as a reusable recipe variant linked to its base recipe, coffee identity, relevant equipment settings, and originating execution. Suggest that variant's saved settings as the starting point for a new bag of the same coffee, allowing further adjustments.

**Rationale:** The user wants Hoffmann adapted for Café do Vô Zico or Stardust to carry forward across purchases while recognizing variation between bags.

**Implications:** Distinguish a reusable coffee identity from individual purchased bags. Each execution records its actual bag and a self-contained snapshot. A separate Preparation object is unnecessary for this workflow. Suggestions do not change saved execution history or automatically equate different coffees.

### Align specification around recipe learning and AI comparisons

**Decision:** Align requirements, stories, screen priorities, and acceptance criteria around the approved recipe-learning workflow. Support AI comparisons across base recipes, variants, coffees, bags, equipment settings, and recorded executions, with the supporting records available for review.

**Rationale:** The user approved the usefulness of AI trend comparisons and instructed the agent to align the specification with the revised product direction.

**Implications:** Routine Keeper use requires no logging task. Usage statistics summarize recorded executions. Preserve missing observations and expose changed parameters when discussing trends. Keeper promotion stays under user control; an automatic count threshold is not specified.

### Exact targets and recipe ranges

**Decision:** Support both exact recipe targets and ranges, including timing and temperature, alongside written step instructions.

**Rationale:** The user approved representing recipes with values such as 93 °C, a 30-second press, or a target total duration of 3:30–3:45.

### Pour quantities and cumulative targets

**Decision:** Distinguish water added during a pour from the cumulative scale target and show both in recipe instructions when available.

**Rationale:** The user approved instructions such as add 50 g to reach 150 g for clarity during brewing.

### Espresso scope and current equipment context

**Decision:** Support written espresso pressure and pre-infusion instructions alongside dose, yield, temperature, grind, and time, with manually recorded results. The user currently has no espresso machine and expects a future purchase to most likely be lever-based.

**Rationale:** The user approved this first-release espresso scope and clarified their current equipment situation.

**Implications:** Record the future machine only after it is selected or owned. Live pressure graphs and machine connectivity remain outside the first-release scope. Manual Espresso and pump-machine Espresso remain supported recipe categories.

### Flexible method-specific instructions

**Decision:** Represent method-specific techniques through ordered written steps alongside shared structured quantities and timing. Examples include AeroPress orientation and pressing and French Press steeping and decanting.

**Rationale:** The user approved a balance of comparable values and flexible instructions across brewing methods.

### Coffee descriptive fields

**Decision:** Include optional roaster, origin, producer or farm, variety, processing, roast level, and packaging tasting descriptors. Keep packaging descriptors separate from the user's tasting observations.

**Rationale:** The user confirmed these fields are needed for coffee context and analysis while retaining name-only entry.

### Brewing water, bypass, and finished yield

**Decision:** Store water used for brewing, bypass water, and expected finished drink yield as separate recipe fields.

**Rationale:** The user approved distinguishing extraction water, subsequent dilution, and the resulting beverage quantity across methods.

### Intended final-drink ratio

**Decision:** Preserve the intended final-drink ratio alongside quantities so results can be compared. The user identifies their current main AeroPress recipe as 20 g coffee with 400 g final drink, corresponding to a 1:20 dose-to-final-drink ratio. Keep that ratio distinct from dose-to-brewing-water ratio.

**Rationale:** The user needs final dilution and recipe intent visible alongside the extraction quantities.

**Implications:** Final drink includes any bypass added. Brewing-water and bypass amounts for this example remain unspecified. Measured final quantities can support a distinct actual final ratio on an execution. Ratio calculations must identify their basis and use consistent units.

### Method-specific ratio presentation

**Decision:** Use coffee dose to brewing water as the prominent ratio for V60 and other filter recipes. For AeroPress with bypass, also show the intended final drink quantity and final-drink ratio. For espresso, use coffee dose to beverage yield. Calculate ratios from quantities and preserve recipe targets separately from execution values. Finished drink measurement is optional for filter brews, and intermediate pressing or bypass measurements may be omitted when only a final reading is recorded.

**Rationale:** The user approved illustrative recipe-and-execution displays for V60, AeroPress with bypass, and manual espresso.

**Implications:** This refines the earlier final-ratio decision by making prominence method-specific. The example values illustrate presentation and are not historical brew records or a complete definition of the user's current AeroPress recipe.

### Starter pour-over brewers

**Decision:** Include V60, Kalita Wave, Chemex, and Origami in the starter pour-over brewer list, with custom additions supported.

**Rationale:** The user approved this starter list during Specification.

### Minimal recipe entry

**Decision:** Allow recipes to be saved with just a name and brewing category, with instructions and quantities added later.

**Rationale:** The user approved saving partial recipes for later enrichment.

### Default recipe status

**Decision:** New recipes and variants default to Experimental. The user selects Keeper status when desired.

**Rationale:** The user approved this default during Specification.

### Equipment and execution minimum fields

**Decision:** Require name and type to save equipment, and bag, brewing category, and date to save an execution. Other details can be added later.

**Rationale:** The user approved these minimums for lightweight entry.

### Variant minimums and rich AI entry

**Decision:** A coffee-specific variant requires a name, base recipe, and coffee identity, with its category inherited from the base recipe. Minimum fields define the threshold for saving partial records. AI-assisted entry should include all available relevant information, preserving unavailable details as missing.

**Rationale:** The user accepted the minimum-field approach and expects AI-assisted entry to usually supply comprehensive details.

### Discard entry-time target

**Decision:** Discard the earlier 30-second logging suggestion. Evaluation and entry have no completion time limit or fixed entry-time benchmark.

**Rationale:** The user considers the suggestion irrelevant to the intended workflow.

### Shared pour-over conversation as historical source

**Decision:** Preserve the accessible shared Receitas Pour Over conversation as the historical input for Coffee Lab and prepare source-linked import candidates covering recipes, coffees, equipment, and recorded executions.

**Rationale:** The user explicitly instructed the agent to recover the material from the shared link as the data source for Coffee Lab.

**Implications:** Preserve message IDs, tables, corrections, and missing-content references. Normalize B02 to its corrected B01 identity and retain plans separately from executions. The shared rendering omits some user text and original uploads, so the import remains staged with documented coverage limits.

### Source-field review and Specification close-out

**Decision:** Following the user's instruction to back up sources, finish the field review, complete Specification, and prepare UI/UX, include optional manufacture date, best-before date, original bag weight, origin altitude, storage notes, and historical identifier aliases. Track unavailable original images and user text as an import-reconciliation follow-up.

**Rationale:** These fields and corrections are supported by the recovered source. Keeping them preserves useful information without expanding into inventory automation.

**Implications:** Specification defines import behavior and acceptance criteria; source completeness is verified during actual import. The stage's documentation was produced through user-approved checkpoints on main rather than per-leaf OpenSpec changes. Preserve that history honestly. Subsequent UI/UX leaves follow the issue, branch, and OpenSpec lifecycle.

## 2026-11-18 — Remaining UI/UX workflow authorization

**Decision:** The user authorized proposals, apply, commits, pushes, archives, and merges for Coffee Lab's remaining UI/UX work without intermediate approval. Pause for material product decisions or human visual checks. Continue announcing every skill used.

**Implications:** This project-scoped authorization overrides routine approval gates in the applicable skills for issues #23–#25. It does not count as a passed device or visual check, and does not extend to later technical or implementation stages. The user approved #23's screen plan before granting this authorization.

## 2026-11-18 — Minimal opening screen and separate settings

**Decision:** The user requests a refined, minimalist, elegant design. A simple gear icon opens a separate, simple configuration screen for language and units. These fields must not be primary home-screen elements.

**Implications:** Recipe selection remains the opening focus. The #24 prototype now follows this arrangement; broader visual refinement remains iterative and human validation is pending.

## 2026-11-18 — Home-only centered branding trial

**Decision:** Try a centered vertical logo treatment on mobile Home only. Other screens reserve space for their own title, navigation and content, especially brewing instructions.

**Implications:** The prototype trials the bean-and-drop concept with a live Coffee Lab wordmark and a top-right settings gear. This is a visual trial, not final logo approval.

## 2026-11-18 — Filter logo direction

**Decision:** The user selected the third logo concept, a pour-over filter and drop, for the Home preview.

**Implications:** Replace the bean-and-drop trial with the filter symbol, keeping centered Home-only branding and compact navigation on other screens.

## 2026-11-18 — Quiet recipe picker and settings-only screen-awake control

**Decision:** The user moved keep-screen-awake control into Settings and explicitly removed its status markers from every page. Home recipe selection should feel light and elegant rather than using the native browser dropdown.

**Implications:** The prototype uses a custom disclosure/button picker with keyboard focus and Escape support. The settings switch governs wake-lock requests during reading; lifecycle remains tested internally without visible status. This supersedes the earlier visible-status prototype design. Actual-device timeout validation remains pending.
