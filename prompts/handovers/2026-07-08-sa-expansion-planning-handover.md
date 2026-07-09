# Session Handover — 2026-07-08 (SA market expansion planning)

Planning session for expanding Propo into **South Africa** — data sources, infrastructure, domain, repo strategy, and Property24 scrape feasibility. **No scrapers or SA code shipped**; output is documentation and live HTML reconnaissance.

**Primary artifact:** [2026-07-08-sa-market-expansion-plan.md](./2026-07-08-sa-market-expansion-plan.md)

**Related (ZW baseline):**

- [2026-06-27-market-intelligence-roadmap.md](./2026-06-27-market-intelligence-roadmap.md) — feature set to port to SA
- [2026-07-03-land-mode-plan.md](./2026-07-03-land-mode-plan.md) — land mode **not** porting to SA v1
- [2026-07-05-user-lens-plan.md](./2026-07-05-user-lens-plan.md) — invest lens **not** porting to SA v1
- `scraper/propertybook_rentals.py` — scraper pattern to mirror for Property24

---

## Status at end of session

| Area | State |
| ---- | ----- |
| SA expansion plan | **Written** — `2026-07-08-sa-market-expansion-plan.md` |
| Property24 scraper | **Not implemented** — selectors and approach documented below |
| Private Property scraper | **Not started** |
| SA Supabase project | **Not created** |
| SA web deploy | **Not created** |
| Code changes | **Docs only** (plan + this handover) |

---

## Goal (SA product)

Launch a **rent + buy only** property data index for South Africa — same wedge as ZW (affordability / suburb medians, not a listings portal).

**Data sources (proposed):**

- [Property24](https://www.property24.com/) — largest SA portal
- [Private Property](https://www.privateproperty.co.za/) — second largest

**SA differentiators (post-MVP):**

- OSM suburb boundaries → maps (good coverage in SA metros)
- [Community Wolf SIA](https://safetyintelligence.communitywolf.com/) safety scores (`za-wc`, `za-gp`, etc.)

**Explicitly out of scope for SA v1:**

- Land / stands mode
- Invest lens, gross yield, opportunity score UX
- Commercial, farms, developments, auctions

---

## Key decisions from session

### Separate stack — yes

| Item | ZW (today) | SA (new) |
| ---- | ---------- | -------- |
| Supabase | existing project | **new project** |
| SQLite history | `data/easishop.db` | `data/propo-za.db` (proposed) |
| GitHub environment | `production` | `production-za` |
| Daily workflow | `daily-pipeline.yml` | `daily-pipeline-za.yml` |
| Public URL | `propo.fyi` | `za.propo.fyi` (MVP) |

**Why not one Supabase:** `market_id` is `{city}_{suburb}` with no country prefix; Johannesburg already appears in ZW `EXCLUDED_CITIES` (`web/src/lib/geo.ts`). Collisions and mixed-country UX/SEO if shared.

### Same repo — yes

No second git repo needed for MVP. Add SA scrapers, pipeline env, and country config (`COUNTRY=za`) in this repo. Split repos only if brand/team diverges later.

### Hosting — ZW runs Vercel **and** Cloudflare Workers

User confirmed Propo ZW is live on **both** platforms simultaneously (not CF-only as some docs imply). Vercel uses standard `npm run build`; Cloudflare uses OpenNext `npm run build:cf` (`web/wrangler.jsonc`). No `vercel.json` in repo — Vercel configured via dashboard (`.vercel/` gitignored).

**SA recommendation:** one primary host for v1 (`za.propo.fyi` → one canonical URL). Mirror dual-host only if intentional; set `rel=canonical` to avoid duplicate SEO.

### Domain — `propo.co.za` is taken

Do **not** plan around `propo.co.za`. MVP path:

1. **`za.propo.fyi`** — subdomain on existing zone, no registration
2. Later — available `.co.za` variant (`getpropo.co.za`, etc.) or `propo.africa`

---

## Property24 scrape reconnaissance

Live fetch performed against:

```
https://www.property24.com/to-rent/advanced-search/results?sp=cid%3d432%2c441&PropertyCategory=House%2cApartmentOrFlat%2cTownhouse
```

(`sp` decodes to `cid=432,441` — multi-suburb cluster IDs, Western Cape area in this example; ~3,190 results, ~20 tiles/page.)

### Feasibility

| Finding | Detail |
| ------- | ------ |
| HTTP | **200** with `requests` + browser User-Agent — **no Playwright required for list pages (today)** |
| HTML size | ~266 KB list page |
| JSON-LD on list | **None** |
| JSON-LD on detail | **None** (tested one listing) |
| Block risk | Higher than ZW portals; GHA datacenter IP may fail later — plan VM/residential IP fallback |

### Recommended scrape strategy

**Prefer per-metro city pages** over giant multi-`cid` advanced searches:

| Mode | Example seed URL |
| ---- | ---------------- |
| Rent | `https://www.property24.com/houses-to-rent/cape-town/western-cape/432` |
| Sale | `https://www.property24.com/for-sale/cape-town/western-cape/432` |

Paginate with `&page=2` or path `/results/p2?...` (both work). Dedupe on canonical URL **without** query params (`plId`, `plt`, `plsIds` are tracking).

Seed metros from Property24 footer (Johannesburg, Sandton, Durban, Cape Town, Pretoria, etc.).

### List tile selectors (verified)

```text
Container:  div.p24_tileContainer.js_resultTile
Listing ID: data-listing-number
Link:       a[href*="/to-rent/"]  or  a[href*="/for-sale/"]
Price:      .p24_price  (direct text node before .p24_description)  →  "R 9 500"
Suburb:     .p24_location
Title:      a title attr or .p24_description
Image:      img.js_P24_listingImage  →  images.prop24.com
Beds:       [title="Bedrooms"] span (last span)
Baths:      [title="Bathrooms"] span
Parking:    [title="Parking Spaces"] span
Floor size: .p24_size span  →  "47 m²"
Erf size:   same pattern, title="Erf Size" on houses
Available:  .p24_availableBadge
```

### URL path geography

Canonical listing path:

```text
/to-rent/{suburb-slug}/{city-slug}/{province-slug}/{area_id}/{listing_id}
```

Example:

```text
/to-rent/glenhaven/bellville/western-cape/8223/116438461
         suburb     city       province
```

**Note:** URL “city” is often a **metro/municipality** (Bellville), not the headline city (Cape Town). Requires SA geo normalization (`analytics/geo_overrides_za.py` — not yet created).

List-page fields are sufficient for Propo medians (~90%); detail fetch optional.

### Proposed scraper files (not yet created)

```text
scraper/property24_common.py
scraper/property24_rentals.py
scraper/property24_sales.py
scraper/privateproperty_rentals.py      # phase 1b
scraper/privateproperty_sales.py
scraper/scrape_all_za.py
source codes/property24/                # HTML samples
data/property24_rentals.json
data/property24_sales.json
```

Mirror structure of `scraper/propertybook_rentals.py` — session, retry, page loop, `SAVE_EVERY_PAGE`, 2–3s delay.

---

## Phasing (from plan)

```text
Phase 1  Supabase SA + Property24/PP scrapers + pipeline + production-za GHA
Phase 2  Web rent+buy at za.propo.fyi (country config; hide land/invest/yield)
Phase 3  OSM suburb boundary maps
Phase 4  Community Wolf SIA safety scores (cached nightly batch)
```

---

## Open questions (unresolved)

1. **Default SA city** — Johannesburg vs Cape Town for hero/defaults?
2. **`market_id` prefix** — adopt `za_{city}_{suburb}` in isolated DB or keep bare slugs?
3. **SA primary host** — Vercel, Cloudflare, or dual like ZW?
4. **ZW canonical host** — which of Vercel vs Cloudflare is canonical for `propo.fyi` today?
5. **Scraper runtime** — will GHA IP work for Property24 or need VM from day one?
6. **Alternate `.co.za` domain** — register variant or stay on `za.propo.fyi` long-term?
7. **Private Property** — same session as P24 or separate spike?

---

## Next session — suggested order

1. **Save HTML samples** — `source codes/property24/` (list + detail for rent and sale).
2. **Implement `property24_rentals.py`** — one metro (Cape Town), paginate, write `data/property24_rentals.json`.
3. **Smoke test from GHA IP** — if blocked, use local/VM for scrape step.
4. **Create SA Supabase project** — apply migrations `001`–`010`; skip `011`–`013` (land) unless needed.
5. **Wire `run_daily_za.py` + `daily-pipeline-za.yml`** — `production-za` secrets.
6. **Country config in web** — `COUNTRY=za`, ZAR formatting, rent/buy lenses only.
7. **Deploy `za.propo.fyi`** — one host, SA Supabase env vars.

Defer maps and SIA until Phase 1 medians are live.

---

## Files touched this session

| File | Change |
| ---- | ------ |
| `prompts/handovers/2026-07-08-sa-market-expansion-plan.md` | **Created** — full expansion plan |
| `prompts/handovers/2026-07-08-sa-expansion-planning-handover.md` | **Created** — this handover |
| `prompts/handovers/README.md` | Index entries added |

No Python, TypeScript, or workflow files modified.
