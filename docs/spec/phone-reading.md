# Phone recipe reading — S04

Design for [#24](https://github.com/rbonon/coffeelab/issues/24), following [J01/J02](user-journeys.md) and R03, R06, R07 in the [requirements](requirements.md). Status: prototype implemented; human/device validation pending.

## Reading model

Before brewing, select the recipe and review supplied targets. Enter focused reading without creating a brew or starting an app timer. Keep a compact recipe heading and dose, brewing water or drink yield, temperature and explicitly based ratios above the instruction. Show supplied ranges as ranges in the application; the prototype uses exact illustrative values to test independent conversions.

Display one instruction card at a time. Previous and Next are manual and do not imply elapsed time, completion, or a saved execution. Long instructions are authored as continuation cards, retaining their sequence and timing context rather than shrinking text. Explicit step times should state whether they are start times or durations and whether espresso pre-infusion is included. Read timing on the scale. There is no auto-advance, countdown, pause, or required Finish action. Exit returns to recipe selection without saving.

For a pour, show both the addition and cumulative scale target. Filter recipes emphasize dose:brewing-water ratio. AeroPress with bypass also shows final-drink target and ratio without assuming a fixed dilution quantity. Espresso uses dose:beverage-yield. Missing values remain absent. A name/category-only recipe can be read without invented instructions or quantities; it may need enrichment before it is useful for brewing.

Home now offers source-derived Hoffmann/Stardust, Hoffmann/Café do Vô Zico, and revised A02 recipes from the captured pour-over import. The dedicated `source-recipes.mjs` retains source keys/message references, planned quantities, temperature and JX-Pro setting. Instruction cards are compact Portuguese excerpts with structured additions, cumulative targets and source timing; they remain Portuguese in an English interface. These are prototype reading examples, not newly saved executions. The synthetic five-category and long/partial fixtures remain available only to automated checks, outside the Home picker. Paired example text allows English/pt-BR layout testing; production interface language will not translate stored personal recipe text. Weight (g/oz) and temperature (°C/°F) are independent choices. Prototype choices reset on reload and never write personal data.

## Concrete prototype

Open [recipe-reading.html](../prototypes/recipe-reading.html) through an HTTP(S) server. The opening screen trials a small centered pour-over filter-and-drop logo with the Coffee Lab wordmark. Branding appears here only; settings and focused reading retain compact navigation without the logo. Choose a recipe on the opening screen. A small gear opens a separate Settings screen containing language, weight, temperature and a keep-screen-awake switch, with a Back action. Home uses a light custom disclosure picker for recipe selection instead of a native dropdown. Configuration fields stay off the opening and focused-reading screens. Home’s reading action is a compact text-style button. The reading screen contains the title, known grinder context, supplied target tiles, one instruction, paging controls and exit, with no screen-awake status marker.

The layout uses the existing warm palette via semantic CSS properties and roomy touch controls. The page is allowed to overflow at enlarged text or unusually small viewports so content is never clipped. That fallback is not a passed no-scroll check. Default-size readability and absence of required scrolling on the target phone must be verified by the user. Do not reduce text size or hide an instruction merely to claim a fit.

## Screen-awake behavior

The user chose a settings-only keep-screen-awake switch, enabled by default in this prototype, with no status markers on any page. Request a native screen wake lock when reading starts only if enabled; release it on exit/pagehide. Reacquire when the page becomes visible again if reading and the preference remain active. Ignore and release late successful requests after exit. Track native lifecycle internally for correctness; failure or release produces no visible marker, per the user's explicit design choice.

Remote phone testing requires HTTPS. Localhost can support development checks on the host computer; an HTTP LAN address can show the layout but cannot establish remote screen-awake support. OS power policy or visibility changes can interrupt the lock. There is no promise of keeping a screen awake against all device restrictions. If unavailable, reading remains usable; device timeout settings still govern. Native support must be measured during validation rather than inferred from the enabled preference.

References: [MDN Screen Wake Lock API](https://developer.mozilla.org/en-US/docs/Web/API/Screen_Wake_Lock_API), [W3C Screen Wake Lock](https://www.w3.org/TR/screen-wake-lock/). Native behavior and actual Brave/Dia availability must be verified on the Samsung S25 Ultra.

## Validation record

| Check | Status / evidence |
| --- | --- |
| Conversion equivalence and explicit ratio bases | Runnable check in `scripts/check-phone-reading.mjs` |
| Five categories plus partial and long fixtures | PASS: Chrome headless, 412 × 800 CSS pixels, English/pt-BR, all cards; no horizontal/vertical overflow or JS errors. oz/°F AeroPress values and both ratio bases checked. Not a device pass. |
| Wake-lock unavailable/rejected/released/reacquire/late completion | Mocked platform checks; these do not prove device behavior |
| Samsung S25 Ultra browser/version and default font size | Pending human input |
| English/pt-BR long example readable without scrolling during execution | Pending human check |
| All five categories, partial entry, independent g/oz and °C/°F | Pending human check |
| HTTPS wake acquisition past screen timeout; app switch/return; release on exit | Pending target-device check |

### Human review sequence

1. Open the prototype and choose Long instructions, Português (Brasil), g and °C. Enter reading. Confirm the instruction, all supplied targets, and both paging buttons fit and are readable. Advance through all three cards; each remains readable without scrolling at the normal phone text size. Report the browser/version and any clipping or needed scrolling.
2. After the first surface passes, check Pour Over addition/cumulative targets, AeroPress input/final ratios, both espresso categories, French Press, and Partial recipe. Repeat with English, oz and °F to confirm labels and independent preferences. None of these actions creates a record.
3. On a secure phone URL, enable Keep screen awake in Settings, enter reading and leave the page visible beyond the device's normal timeout, switch away and return, then exit reading. Record denial/release/interruption instead of assuming support. Do not count a desktop mock as a phone pass.

Archive remains pending until required human checks pass or the user explicitly revises the task acceptance criteria. #25 follows with reusable controls, tokens and broader visual validation; no application stack has been selected.
