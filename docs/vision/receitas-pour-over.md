# Receitas Pour Over

This ChatGPT discussion is an input for Coffee Lab product planning. It records candidate workflows, scope, and architecture. Product decisions belong in the approved specification and decision log.

[Source conversation](https://chatgpt.com/c/6af6149f-51d4-83ea-a9f4-51e9c90ac67f) · [Eight-screen mockup](../../mockups/Painel%20Coffee%202026_%20receitas%20e%20extra%C3%A7%C3%B5es.png)

## Workflow described

1. Choose a coffee and a recipe. The V60 example uses Stardust — Abigail or Café do Vô Zico and a JX-Pro grind setting.
2. Follow the recipe on a phone. The guided brew concept shows a timer, the current pour, the target water weight, and the next action.
3. Log the actual extraction parameters and elapsed time, then add tasting notes and photos. The discussion suggests a target of under 30 seconds for recording an extraction.
4. Revisit the extraction in a searchable journal and compare attempts with the same coffee. Suggested analytics include brew time versus grind setting and sensory results by recipe.

The discussion explores a custom mobile-first web app, a smaller first release, and the full eight-screen vision. It also mentions earlier V60 experiments A01–A06 and B01 and an AeroPress recipe as possible starting data. The mockup includes illustrative values. The source chat supplies context for those records, and the transcript below preserves what was available through chat history.

## Conversation transcript

The available text is in chronological order. The related visual is linked above.

### Exchange 1

**User**

Woudl it be advisable to treat this as a code product, use Code + GitHub?

**ChatGPT**

**Yes. For Coffee 2026, I think treating it as a small software product, using Codex + GitHub + Notion, is a better long-term approach.** Particularly because you want to keep experimenting, accumulating data and comparing extraction results.

But I would make an important architectural distinction: **Notion should be the user interface and operational database; GitHub should manage the code, configuration and version history.**

## Proposed architecture

**Notion — Coffee Lab**

Coffee library · Recipes · Brew journal · Dashboard

Notion API

**Coffee 2026 — Application Layer**

Data validation · Imports · Analytics · Automation

**GitHub**

Source code, tests, versioning

**ChatGPT / Codex**

Development and analysis

## Why this is better

| Capability | Notion only | Notion + GitHub + Codex |
|--------|--------|--------|
| Coffee and recipe databases | Yes | Yes |
| Brew history and photos | Yes | Yes |
| Custom calculations | Limited | Full control |
| Import historical experiments | Manual / CSV | Automated |
| Version-controlled recipes | Basic history | Git history |
| Statistical comparisons | Limited | Python / SQL |
| Automated data validation | Limited | Yes |
| Future custom web application | Rebuild needed | Reuse existing logic |

## How I would build it

I'd use a lightweight Python project with the Notion API, managed through GitHub.

**coffee-2026/**

schemas/ — database definitions

recipes/ — versioned brew protocols

imports/ — historical data migration

analytics/ — comparisons and calculations

tests/ — validation

notion\_client.py

README.md

A key principle would be to keep the **coffee data portable**\. I would maintain a documented export format (JSON or CSV) so that we're not permanently dependent on Notion.

I would also avoid overengineering the first version. No separate database server, no custom frontend, no cloud infrastructure. Just Notion, a small Python integration and GitHub.

## Development roadmap

1. **V1 — Foundation\:** GitHub repository, Notion database schemas, relationships and dashboard.
2. **V2 — Historical migration\:** Import our V60 and AeroPress experiments, including A06 and B01, with provenance and missing values clearly identified.
3. **V3 — Daily workflow\:** Fast mobile entry, recipe templates and automated calculations.
4. **V4 — Analytics\:** Compare coffees, grinder settings, brew times and sensory outcomes.

One distinction matters: GitHub versioning of recipe definitions does not automatically version every edit made inside Notion. We would need snapshots or exports if we want a complete, auditable history.

**My recommendation\:** start with this architecture and treat Coffee 2026 as a real, but deliberately small, software product. Codex would be the appropriate environment for implementation, while we continue using this conversation for coffee experimentation and product decisions.

The first deliverable should be a **technical specification and data model**, before writing code or connecting your Notion account.

### Exchange 2

**User**

Would it be simpler and eaiser to develo a web based app ?

**ChatGPT**

**Yes. For Coffee 2026, I now lean toward a small web application instead of Notion + API integration.** It would require more initial development, but could be simpler to operate, customize and extend.

The key is to avoid building an unnecessarily complex application.

## Comparing the approaches

| Dimension | Notion + API | Custom web app |
|--------|--------|--------|
| Initial development | Easier | Moderate |
| Custom user interface | Limited | Excellent |
| Mobile experience | Good | Can be excellent |
| Recipe management | Good | Fully customizable |
| Extraction logging | Database forms | Purpose-built workflow |
| Analytics | Requires additional work | Built in |
| Maintenance | Notion + integration | One application |
| Long-term flexibility | Moderate | Excellent |

For your use case, I think a web app has three important advantages.

### 1\. A brewing interface designed for coffee

Rather than filling in database properties, you could select a recipe and start an extraction.

**Coffee 2026**

V60 · New extraction

# James Hoffmann — 1 Cup

Coffee

Stardust — Abigail

Café do Vô Zico

JX-Pro setting

[Input value unavailable]

[Design brewing workflow]

Interactive concept — not yet connected to a database or timer.

We could eventually include a timer showing the current pouring stage, target water weight and next action.

### 2\. A better extraction journal

Each brew would be stored with its recipe, actual parameters, elapsed time, tasting notes and photos.

The application could automatically compare an extraction against previous attempts with the same coffee.

### 3\. More useful analytics

For example, we could plot extraction time against grind setting, compare the sensory results of different recipes, and identify which configurations consistently produce the sweetness and low bitterness you prefer.

## Architecture I would choose

**Responsive Web App / PWA**

Desktop, iPhone, Android

**Next.js + TypeScript**

Interface, recipes, calculations and analytics

**Supabase**

PostgreSQL, authentication and photos

**GitHub + Codex**

Source control, development and deployment

I'd host the application on Vercel, with Supabase for persistent data. For a small personal project, the free tiers may be sufficient, subject to provider limits.

## What I would build first

A deliberately small MVP with four screens\:

1. **Home\:** current coffees, recent extractions and favorite recipes.
2. **Recipes\:** brewing protocols with timed pouring instructions.
3. **Brew\:** guided brewing timer and quick extraction logging.
4. **Journal\:** history, comparisons, tasting notes and photos.

The initial dataset would include our existing V60 experiments and AeroPress recipe.

We would postpone sophisticated analytics, Bluetooth scales, grinder integrations and other advanced features.

### My recommendation

Given your interest in controlling the design, preserving data and potentially adding new capabilities, **I would choose the custom web app over Notion**\.

It also removes the need to maintain a Notion integration and gives us a more natural foundation for future features such as espresso shot tracking.

The main trade-off is that we would own application maintenance, hosting and database backups.

**I would build it as a private, mobile-first PWA, with GitHub as the source repository and Codex as the development environment.** That gives us a focused product without the overhead of a full commercial application.

### Exchange 3

**User**

Can you show me some draft examples of the pages we would eventually see?

**ChatGPT**

These are eight initial screen concepts for **Coffee 2026**, designed as a mobile-first web application.

The most important screens would be **Recipe**, **Brew** and **Log Extraction**\. Together, they would support the complete workflow: select a coffee, follow a guided brewing recipe, record the actual extraction and evaluate the result.

I would keep the visual design minimalist, with warm neutral colors, compact controls and coffee photography.

One important distinction: these are **visual mockups, not functional screens**\. Some dates, ratings and measurements shown are illustrative rather than actual historical records.

My suggestion is to refine the **Brew screen first**, since that is the one you'll interact with most frequently while preparing coffee.

### Exchange 4

**User**

Wow ,beaitigul but seems sa lot of work

**ChatGPT**

Thanks\! And yes, the mockups make it look like a substantial software project. But **we don't need to build all eight screens at once**\.

In fact, I think we should resist the temptation to overengineer Coffee 2026.

I'd start with just three things\:

1. **Coffee Library** — which beans we're using.
2. **Recipe Library** — our brewing methods and parameters.
3. **Brew Journal** — actual extractions and tasting results.

No authentication system, no advanced analytics, no integrations and no sophisticated brewing timer initially.

We could use **Codex + GitHub** to develop it incrementally, with a simple database for persistence. The polished interface can evolve without requiring a complicated architecture.

The advantage is that we already have real data and a clear use case: our V60 experiments A01–A06 and B01.

**My suggestion\:** build a minimal, functional version first, then add features only when we actually miss them.

And one thing I would prioritize from the beginning: **you should be able to record an extraction in less than 30 seconds**, ideally from your phone. That's more valuable than having eight beautiful screens.

### Exchange 5

**User**

Or we could do it all :D

**ChatGPT**

😂 Now we're talking. **Coffee 2026 — Full Edition.**

And actually, building all eight screens isn't unreasonable with Codex, provided we approach it as one coherent product rather than eight independent projects.

I'd go with the complete vision\:

- **Dashboard** — coffees, favorite recipes, recent brews.
- **Coffee Library** — origins, processing, roast dates, tasting profiles and photos.
- **Recipe Library** — V60, AeroPress and eventually espresso.
- **Guided Brewing** — live timer, pouring stages and target weights.
- **Extraction Logger** — actual parameters, tasting notes and photos.
- **Extraction Details** — complete historical records.
- **Journal** — searchable and filterable brewing history.
- **Analytics** — comparisons, trends and recipe performance.

We'd use **Next.js + TypeScript + Supabase**, with GitHub for version control and Codex for implementation.

One design decision I'd make immediately: build the underlying data model to support **espresso as well as pour-over**\. That means accommodating pressure, yield, brew ratio and extraction profiles without complicating the V60 interface.

I'd also include data export and backups from day one, so our experiments remain portable.

The mockups give us a visual direction. The next step would be turning them into a proper product specification and an implementation plan.

**I think this could be a genuinely enjoyable little engineering project — and one we'd actually use every morning.** ☕
