# User lens plan — Rent · Buy · Land · Invest

**Date:** 2026-07-05  
**Status:** Phases 1–4 complete (2026-07-05)  
**Shipped handover:** [2026-07-05-user-lens-shipped.md](./2026-07-05-user-lens-shipped.md)  
**Trigger:** User feedback that renters see investor metrics (median sale, gross yield, land) on suburb and city profiles despite choosing Rent on home/explore.  
**Goal:** One coherent **lens** across home → explore → city → suburb → compare → rankings, with a dedicated **Invest** path for yield/opportunity and full reports.

---

## Summary

Propo’s dataset stays unified (`market_metrics`, `land_metrics`, trends, listings). What changes is the **presentation contract**: which metrics each audience sees on each surface.

| Lens | Audience | Core question |
| ---- | -------- | ------------- |
| **Rent** | Tenants | Where can I afford to rent? Is this listing fairly priced vs suburb rent? |
| **Buy** | Owner-occupiers | Where can I afford to buy? Is this sale price normal for the suburb? |
| **Land** | Stand buyers | Where is land affordable per sqm? *(already mostly shipped)* |
| **Invest** | Buy-to-rent / analysts | Where is yield and opportunity strongest? Give me the full market brief. |

**Product pitch (unchanged moat):** suburb-level intelligence from a continuously updated property database — but now through the right lens for each user.

**Key insight:** One dataset; **lens** controls which metrics each surface shows. Land (`?mode=land`) was the precedent; invest extends residential depth.

---

## Shipped state (2026-07-05)

All rows in the original gap table are addressed. Highlights:

| Surface | Shipped behaviour |
| ------- | ----------------- |
| **Home** | 4-mode hero (intent pills); invest `?mode=` sync; yield teaser **below** in-budget matches |
| **Explore** | Segmented **Focus**; lens-aware columns/cards/links |
| **Cities** | `LensSwitcher`; land uses `land_metrics` table; movers follow lens |
| **Suburb** | Lens-gated sections; rent report `?scope=rent`; invest full report CTA |
| **Compare** | Lens-filtered metrics; last lens from `propo_lens`; mixed-pin hint |
| **Rankings** | Lens switcher; Leaderboards + Movers only; land via Land lens |

**UI:** Segmented control (Rent·Buy·Invest + Land chip) on data surfaces; home keeps intent copy. See `web/DESIGN.md`.

---

## Problem statement (original)

A renter who selects **Rent** on the home page gets a rent-only explore table, then clicks a suburb and lands on a profile showing:

- Median sale, gross yield, opportunity score  
- Sale price trends and sale listings  
- Land stands and $/sqm metrics  
- “Similar suburbs” ranked by yield/opportunity  
- Export report with full investor snapshot  

That breaks the product promise (*where can you afford?*) and confuses non-investor users.

Investors, conversely, need yield, opportunity, cross-market context, and printable full reports — without diluting the renter/buyer experience.

---

## Current state vs gap (archived — pre-ship)

| Surface | Rent lens today | Gap |
| ------- | --------------- | --- |
| **Home** | Mode toggle; rent cards show rent price only | Movers teaser is rent-only (good); no invest entry |
| **Explore table** | `columnsForMode("rent")` — rent column only | Suburb links omit `?mode=rent` |
| **Explore cards** | Price + confidence; no yield in rent mode | Links omit mode |
| **City directory** | Shows rent + yield on every row | No lens |
| **City dashboard** | Always rent + sale + yield stats; suburb table uses `layout="city"` (all columns); yield/opportunity side lists | Hardcoded `mode="buy"` on suburb list/table |
| **Suburb profile** | Full residential + land unless `?mode=land` | No rent/buy/invest lens; related suburbs use yield/opp |
| **Suburb report** | Always full snapshot | Correct for invest; wrong CTA for renters |
| **Compare** | Mode toggle (rent/buy/land) but residential compare shows **all** metrics including yield | No invest mode; yield visible in rent compare |
| **Rankings** | Mixed: yield, opportunity, rent, sale, land, movers | No lens filter; investor-heavy by default |

### Code references (today)

- Mode-aware columns: `web/src/lib/metric-tooltips.ts` → `columnsForMode()`, `columnsForCityDashboard()`
- Suburb profile always shows all residential metrics: `web/src/components/markets/suburb-profile.tsx`
- City dashboard hardcodes buy layout: `web/src/components/cities/city-dashboard.tsx` (`mode="buy"`, yield side lists)
- `suburbPath()` supports `?mode=` but cards/tables rarely pass it: `web/src/lib/slug.ts`, `web/src/components/markets/suburb-card.tsx`
- Land lens works via `parseExploreMode(sp.mode) === "land"` on suburb page

---

## Mental model

### Two axes (conceptual)

1. **Intent** — what are you shopping for? → Rent · Buy · Land  
2. **Depth** — how much market intel? → Standard (consumer) · Full (investor)

**Invest** is not a fifth listing type. It is a **depth layer** on residential markets: rent + sale + yield + opportunity + full report. It overlaps Buy data but serves a different job-to-be-done.

### Type proposal

```ts
// Extend ExploreMode OR add UserLens that maps 1:1 for UI
type UserLens = "rent" | "buy" | "land" | "invest";

// invest shares residential data with buy; land stays separate (LandMetric table)
```

### Persistence

- **URL:** `?mode=rent|buy|land|invest` on all residential flows (extend current `mode` param)
- **localStorage:** `propo_lens` — restore last lens on home/cities when no query param
- **Navigation:** every suburb/city link from explore, home, rankings must pass active lens

### SEO default

- Suburb URLs without `?mode=` default to **rent** lens (matches tagline *Where can you afford?*)
- Invest view: explicit `?mode=invest` or in-page tab “Investor view”
- Printable report: always full dossier (investor artifact); optional future “rent snapshot” PDF

---

## Metric matrix

Legend:

| Symbol | Meaning |
| ------ | ------- |
| **●** | Primary — prominent on page |
| **○** | Secondary — shown for context or in expandable section |
| **—** | Hidden |
| **📄** | Report / export only (invest lens CTA) |

### Core metrics

| Metric | Rent | Buy | Land | Invest |
| ------ | ---- | --- | ---- | ------ |
| Median rent (segment-aware) | ● | ○ | — | ● |
| Median sale (segment-aware) | — | ● | — | ● |
| Median $/sqm (land) | — | — | ● | — |
| Gross yield | — | — | — | ● |
| Opportunity score | — | — | — | ● |
| Confidence score | ● | ● | ● | ● |
| Rental sample size | ● | ○ | — | ● |
| Sale sample size | — | ● | — | ● |
| Land listing count | — | — | ● | — |
| Min / max rent range | ● | — | — | ● |
| Min / max sale range | — | ● | — | ● |
| Property mix bar | ● | ● | — | ● |
| Days on market (rent) | ○ | — | — | ○ |
| Days on market (sale) | — | ○ | — | ○ |
| Days on market (land) | — | — | ● | — |

### Trends

| Surface | Rent | Buy | Land | Invest |
| ------- | ---- | --- | ---- | ------ |
| Rent price trend (30/90/180d) | ● | — | — | ● |
| Rent supply trend | ● | — | — | ● |
| Sale price trend | — | ● | — | ● |
| Sale supply trend | — | ● | — | ● |
| Land price/supply trend | — | — | ○¹ | — |
| City/suburb movers (rent) | ● | — | — | ○ |
| City/suburb movers (sale) | — | ● | — | ○ |

¹ Land trends pending 2+ days of `land_snapshots_daily` history.

### Listings & fair value

| Surface | Rent | Buy | Land | Invest |
| ------- | ---- | --- | ---- | ------ |
| Rent listings + fair-value badges | ● | — | — | ● |
| Sale listings + fair-value badges | — | ● | — | ● |
| Land stand listings | — | — | ● | — |
| Budget listings preview (home) | ● | — | ● | ○² |

² Invest home may show pinned-style picks or top yield suburbs instead of budget slider.

### Tables — column visibility

| Column | Rent | Buy | Land | Invest |
| ------ | ---- | --- | ---- | ------ |
| Suburb | ● | ● | ● | ● |
| City | ● | ● | ● | ● |
| Median rent | ● | ○³ | — | ● |
| Median sale | — | ● | — | ● |
| Median $/sqm | — | — | ● | — |
| Yield | — | — | — | ● |
| Opportunity | — | — | — | ● |
| Land count | — | — | ● | — |
| Confidence | ● | ● | ● | ● |

³ Optional contextual column on buy table (“median rent nearby”) — defer unless user research asks for it.

`columnsForCityDashboard()` today always returns invest-style columns; replace with `columnsForLens(lens)`.

### Page-by-page matrix

#### Home (`/`)

| Block | Rent | Buy | Land | Invest |
| ----- | ---- | --- | ---- | ------ |
| Hero + mode toggle | ● Rent default | ● | ● | ● (4th tab or `/invest`) |
| Budget slider | ● monthly | ● purchase | ● $/sqm | — or optional price band |
| Property type filter | ● | ● | — | ○ |
| Affordability insights | ● rent | ● sale | — | — |
| Top suburb cards | ● rent price | ● sale price | ● $/sqm | ● yield + opp |
| Movers teaser | ● rent risers | — | — | ○ sale + rent movers |
| Budget listings preview | ● | ● | ● | — |
| Rankings teaser | — | — | — | ● yield / opportunity |

#### Explore (`/explore`)

| Block | Rent | Buy | Land | Invest |
| ----- | ---- | --- | ---- | ------ |
| Mode toggle | ● | ● | ● | ● |
| Budget filter | ● | ● | ● | ○ |
| Suburb cards | ● | ● | ● | ● + yield |
| Suburb table | ● rent cols | ● sale cols | ● land cols | ● all invest cols |
| Sort default | median_rent ↑ | opportunity ↓ | $/sqm ↑ | yield ↓ |
| Scope / methodology copy | ● | ● | ● | ● |

#### Cities directory (`/cities`)

| Block | Rent | Buy | Land | Invest |
| ----- | ---- | --- | ---- | ------ |
| City card subtitle | median rent | median sale | land count + $/sqm | avg yield |
| Lens switcher | ○ (global nav or query) | ○ | ○ | ○ |

#### City dashboard (`/cities/[city]`)

| Block | Rent | Buy | Land | Invest |
| ----- | ---- | --- | ---- | ------ |
| Header counts | rentals emphasis | sales emphasis | land emphasis | all counts |
| Stats grid (mobile) | median rent | median sale | median $/sqm | rent + sale + yield |
| Desktop stat cards | median rent | median sale | — | + yield + opportunity |
| City trend movers | rent tab default | sale tab default | — | both |
| Side rankings | cheapest rent suburbs | — | cheapest land | yield + opportunity |
| Suburb table | rent columns | buy columns | land columns | invest columns |
| Suburb list (mobile) | rent mode | buy mode | land mode | invest mode |

#### Suburb profile (`/cities/[city]/[suburb]`)

| Block | Rent | Buy | Land | Invest |
| ----- | ---- | --- | ---- | ------ |
| Page description copy | rent-focused | buy-focused | land-focused | full market |
| Metric cards | median rent | median sale | $/sqm + land stats | rent + sale + yield + opp |
| Trends section | rent only | sale only | land (when ready) | rent + sale tabs |
| Property mix | ● | ● | — | ● |
| Price context (min/median/max) | rent only | sale only | land range | both |
| Value listings | rent | sale | — | rent + sale |
| Land listings block | — | — | ● | — |
| Similar suburbs | sort by rent ↑ | sort by sale ↑ | sort by $/sqm | sort by yield/opp |
| Export report link | — | — | — | 📄 ● |
| In-page lens switcher | ○ | ○ | ○ | ○ |

#### Suburb report (`/cities/[city]/[suburb]/report`)

| Block | Rent | Buy | Land | Invest |
| ----- | ---- | --- | ---- | ------ |
| Access | — | — | — | ● (primary entry) |
| Full snapshot (rent+sale+yield+land) | 📄 | 📄 | 📄 | 📄 ● |
| Future: rent-only PDF | optional v2 | — | — | — |

#### Compare (`/compare`)

| Metric row | Rent | Buy | Land | Invest |
| ---------- | ---- | --- | ---- | ------ |
| Median rent | ● | — | — | ● |
| Median sale | — | ● | — | ● |
| Min/max rent | ● | — | — | ○ |
| Min/max sale | — | ● | — | ○ |
| Gross yield | — | — | — | ● |
| Opportunity | — | — | — | ● |
| Confidence | ● | ● | ● | ● |
| Listing counts (rent/sale) | rent only | sale only | land metrics | both |
| Land compare table | — | — | ● | — |

Today `buildCompareMetrics()` filters by compare lens — **shipped**.

#### Rankings (`/rankings`)

| Leaderboard | Rent | Buy | Land | Invest |
| ----------- | ---- | --- | ---- | ------ |
| Cheapest rent | ● | — | — | ○ |
| Most expensive sale | — | ● | — | ○ |
| Top yield | — | — | — | ● |
| Top opportunity | — | — | — | ● |
| Land $/sqm cheap/expensive | — | — | ● | — |
| Movers (rent/sale) | ● / — | — / ● | — | ● both |

**Shipped:** Lens switcher on `/rankings`; land leaderboards under **Land** lens (no `?tab=land`).

---

## Navigation contract

Every internal link to a suburb or city should carry the active lens when applicable:

```ts
suburbPath(city, suburb, {
  type: propertyType,
  bedroom,
  mode: lens, // "rent" | "buy" | "land" | "invest"
});

cityPath(city, { mode: lens }); // extend cityPath if needed
```

**Files to update (non-exhaustive):**

| File | Change |
| ---- | ------ |
| `web/src/lib/mode.ts` | Add `invest` to modes, labels, parse, defaults |
| `web/src/lib/types.ts` | `ExploreMode` → include `invest` or `UserLens` type |
| `web/src/lib/metric-tooltips.ts` | `columnsForLens()`, invest column set |
| `web/src/lib/slug.ts` | Pass `invest` in query string |
| `web/src/components/markets/suburb-card.tsx` | Pass `mode` in href |
| `web/src/components/markets/suburb-table.tsx` | Pass `mode` in href; city layout uses lens |
| `web/src/components/markets/suburb-profile.tsx` | Lens prop; conditional sections |
| `web/src/components/cities/city-dashboard.tsx` | Lens from URL/storage; conditional stats |
| `web/src/components/cities/cities-directory.tsx` | Lens-aware subtitles |
| `web/src/components/mobile/city-list-row.tsx` | Lens-aware subtitle |
| `web/src/lib/explore.ts` | `buildCompareMetrics(filters, lens)` |
| `web/src/components/home/home-page.tsx` | Invest tab / section |
| `web/src/components/filters/explore-mode-toggle.tsx` | Fourth toggle or split Buy/Invest |

**Shared helper (recommended):**

```ts
// web/src/lib/lens.ts
export function profileSections(lens: UserLens): ProfileSectionConfig { ... }
export function columnsForLens(lens: UserLens): SortKey[] { ... }
export function compareMetricsForLens(lens: UserLens, filters): CompareMetricRow[] { ... }
```

Land mode pattern in `web/src/app/cities/[city]/[suburb]/page.tsx` becomes the template for all lenses.

---

## What NOT to rebuild

| Layer | Action |
| ----- | ------ |
| Python ETL / analytics | No change — yield already computed |
| `market_metrics` / `land_metrics` schema | No change |
| Fair-value logic | Already per listing mode |
| Land as separate metrics table | Keep |
| Explore filtering / segment medians | Extend, don’t replace |
| Full suburb report data fetching | Keep; gate access/CTA by lens |

---

## Implementation phases

### Phase 1 — Fix the disconnect (highest ROI)

**Goal:** Rent on explore → rent on profile. Buy on explore → buy on profile.

1. Pass `mode` on all suburb links (cards, table, rankings, home, city side lists).
2. Parse lens on suburb page (`rent` | `buy` | `invest` | `land`); default `rent` when absent.
3. `SuburbProfile`: hide sale/yield/opp/land when `rent`; hide rent/yield/land when `buy`; keep `land` block as today.
4. `SuburbValueListings`: show rent-only or sale-only by lens.
5. `SuburbTrendsSection`: default tab matches lens; hide other tab when not invest.
6. Related suburbs: sort by lens-appropriate metric.
7. `CityDashboard` + `SuburbTable` city layout: use `columnsForMode(lens)` not hardcoded buy.
8. Hide yield/opportunity side lists on city page when lens is rent.

**Acceptance:** User selecting Rent never sees yield, median sale, or land on suburb profile without switching lens.

### Phase 2 — Add Invest lens

1. Add `invest` to mode toggle (home, explore, compare) or dedicated `/invest` route that sets lens.
2. Invest suburb profile = current full residential view (rent + sale + yield + opp).
3. Prominent “Export full report” only in invest lens (or invest + buy with tooltip).
4. `buildCompareMetrics` filtered for invest includes yield + opportunity.
5. Home invest section: top yield / opportunity from rankings API.

**Acceptance:** Investor can browse yield-ranked suburbs and open full report without renters seeing yield on default paths.

### Phase 3 — City directory + rankings lens

1. Global lens switcher in nav or cities/rankings pages.
2. Rankings: tab per lens or filter leaderboards.
3. City directory rows show lens-relevant subtitle.

### Phase 4 — Optional polish

1. Rent-only printable summary (lighter PDF).
2. `cityPath(?mode=)` for city-level lens persistence.
3. Analytics events: track `lens` on suburb views and report exports.

---

## Invest vs Buy — decision record

| Option | Pros | Cons |
| ------ | ---- | ---- |
| **A. Fourth tab: Rent \| Buy \| Land \| Invest** | Clear; matches user mental model | Crowded toggle; buy and invest share budget UX |
| **B. Buy tab + “Investor view” toggle on profile** | Smaller nav change | Easy to miss; doesn’t fix home/rankings |
| **C. Separate `/invest` landing** | Strong investor SEO; distinct home | Two entry points to maintain |

**Recommendation:** **A** for explore/home toggle (consistent with land), plus **C** as an optional marketing route that deep-links to `?mode=invest`.

Buy lens = owner-occupier (sale price, fair value, no yield).  
Invest lens = everything today’s suburb profile shows for residential.

---

## Analytics & success signals

| Event | Notes |
| ----- | ----- |
| `lens_change` | home, explore, profile switcher |
| `suburb_view` | include `lens` dimension (already have `mode` on some clicks) |
| `report_export` | expect concentration in invest lens |
| Bounce on suburb from rent explore | should drop after Phase 1 |

---

## Open questions — resolved (2026-07-05)

| Question | Decision |
| -------- | -------- |
| **Buy table rent column?** | **Sale-only** — no median rent on buy tables; invest/compare for dual metrics. |
| **Report access?** | **Gated CTA** in UI (invest = full report, rent = rent summary); **open URL** at `/report` and `/report?scope=rent` for SEO/share. |
| **Default lens?** | **Hybrid:** bare suburb URLs default **rent** (server); home/cities/rankings use **last lens** from `localStorage` when no `?mode=`; URL always wins. |
| **Compare mixed pins?** | **Active lens only** for metrics; pins store `pinnedFromMode` for a hint when focus differs. |

---

## Open questions (archived)

---

## Related docs

- `prompts/handovers/2026-07-03-land-mode-plan.md` — precedent for mode-specific profile sections  
- `prompts/PROOF_OF_WORK.md` — product positioning  
- `web/DESIGN.md` — lens UI patterns (segmented control, accents, persistence)

---

## Agent instructions

When implementing this plan:

1. Do **not** add new pipeline metrics unless a lens needs data that doesn’t exist (it doesn’t).  
2. Follow the land-mode pattern: parse `mode` on server page → pass boolean or lens enum to client components.  
3. Phase 1 before Phase 2 — navigation + profile filtering unblocks renter feedback without designing invest home.  
4. Keep printable report content comprehensive; change **who sees the CTA**, not the report schema, in Phase 2.
