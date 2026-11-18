# Coffee Lab open questions

These questions come from the [Receitas Pour Over discussion](../vision/receitas-pour-over.md) and its linked mockup. Record approved decisions in `DECISIONS.md` and the relevant product documents.

## Specification

- Who will use the first release, and what access should they have?
- Which workflows must ship first? The source discusses basic coffee, recipe, and journal features, guided brewing, and the full eight-screen product.
- Which brewing methods and equipment must the first release support? When should espresso enter the product?
- What information must be captured at brew time, and how should we measure the proposed 30-second logging target?
- Which historical brews and recipes should we import, and where are their verified records?

## UI and architecture

- Should guided brewing work without connectivity or with the phone screen locked?
- Which recipe settings must remain visible in a historical brew after a recipe is edited?
- Which comparisons, photo features, export formats, and backup capabilities are needed in the first release?
- What deployment and data requirements should guide evaluation of the proposed Next.js, TypeScript, and Supabase stack?
