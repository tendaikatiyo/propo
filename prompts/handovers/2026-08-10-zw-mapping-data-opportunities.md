# Zimbabwe last-mile mapping — opportunities & public contribution

**Date:** 2026-08-10  
**Status:** Strategy / reference — not a committed product roadmap  
**Context:** Discussion sparked by misaligned road vectors vs satellite imagery in developing Harare estates (e.g. Sandton Park / Haydon Drive). Global map providers often lack ground truth for rapid sprawl, informal paths, and weak formal addressing.  
**Related:** [Propo](https://propo.fyi) is **property market intelligence** (suburbs, medians, land)—not a maps company. Spatial accuracy is adjacent data infrastructure, not a pivot to “Zimbabwe Google Maps.”

---

## Summary

The gap is **last-mile geospatial truth**: satellite shows reality; vector roads, addresses, and POIs are wrong, stale, or missing. That creates **paid B2B pain** (delivery, property, finance, utilities) while **open geometry and place names** can still be published for the wider ecosystem (chiefly **OpenStreetMap**; **Google Maps** via reviewed user edits or **Maps Content Partners** for organizations).

**Durable pattern:** monetize **freshness, accuracy, SLAs, and integrations**—not the existence of a base map.

---

## Why maps break in Zimbabwe (and why it’s monetizable)

| Factor | Effect |
| ------ | ------ |
| Fast greenfield estates | Platted “paper” grids on the map; actual dirt tracks and phased build-out differ |
| Informal / unpaved access | Road extraction and routing assume paved networks |
| Weak universal addressing | “Stand 1234, Estate X” beats street number geocoding |
| Sparse authoritative GIS public release | Providers rely on old imports + crowd edits |
| User-added POIs | Helpful but unverified (“stein’s home”, local shops) |

**Who pays for fixes:** e-commerce and couriers (failed drops), developers and agents (location quality), insurers/lenders (risk location), fleets (fuel + ETA), estates (visitor routing).

---

## Startup opportunities (profit + public-facing data)

### 1. Verified addressing & geocoding API (B2B SaaS + open baseline)

**Product:** Reliable pin for stand / corner / gate—estate-aware, suburb-aware—not only city + vague area.

**Buyers:** Couriers, banks (KYC location), telcos, property platforms.

**Public leg:** Suburb/estate polygons, public road centerlines (where verified), named places → **OSM** (ODbL). Avoid publishing exact private gate coords without consent.

**Moat:** Ground verification (GPS at gate, photos, agent visits)—not CV-only on satellite.

**Propo adjacency:** Suburb and stand language already exists in the product; geocoding with confidence scores extends intelligence without becoming a consumer maps app.

---

### 2. Logistics routing on actual navigable paths (B2B)

**Product:** Routing/ETA on estate internal roads, dirt tracks, gates—not phantom grid lines.

**Buyers:** Per-fleet SaaS, per-stop fees, marketplace revenue share.

**Public leg:** Open **public** driveable segments and turn restrictions to OSM after validation; optional anonymized road-quality metadata.

**Moat:** Fleet telemetry + human QA closing the loop on proposed geometry.

---

### 3. Property-linked spatial registry (B2B2C, partial open)

**Product:** Canonical link: estate → street/alley → stand → coordinates (where legal/ethically allowed), with alerts when new phases go live.

**Buyers:** Developers, agents, proptech, insurers.

**Public leg:** Estate/suburb boundaries and **public** road names; keep sensitive home pins private or opt-in.

---

### 4. Map improvement as a service (brands & estates)

**Product:** Paid verification: correct business pin, estate entrance, internal visitor map.

**Buyers:** SMEs, malls, schools, new estates.

**Public leg:** Verified roads/places to OSM; Google via Contribute or GMCP (see below)—policy-dependent.

**Risk:** Spammy POI SEO; **verification** (visit, photo, hours) is the product.

---

### 5. Satellite-to-vector + QA shop (data vendor)

**Product:** Corrected road/building footprints by city or corridor; annual refresh.

**Buyers:** Enterprise GIS consumers, logistics planning, researchers.

**Public leg:** Release older/coarser vintages openly; commercialize latest sub-meter QA and rich attributes (address, stand ID, access notes).

---

## Business models that balance profit and public good

| Model | Revenue | What can become public |
| ----- | ------- | ---------------------- |
| Freemium API | High-volume geocode/routing | Low-res or delayed layers; suburb polygons |
| Fleet-powered map | Courier SaaS | Anonymized graph updates → OSM |
| Verified POI marketplace | Listing + verification fee | Name, category, rough location on OSM |
| Open core | Hosted API, SLA, support | Community schema + OSM/GitHub |
| Grant + commercial | Enterprise refresh contracts | Prior-year roads as open release |

---

## What not to do (unless capital and legal are ready)

- Compete head-on with Google Maps as a **consumer** navigation app.
- Bulk-copy **Google ↔ OSM** (licenses are incompatible); use **own surveys, GPS traces, and rights-cleared imagery**.
- Open exact residential gate locations without **consent** (privacy/security).
- Rely on scraping portals for **map geometry** without a verification moat.

---

## Suggested wedge (Propo-adjacent, Harare-first)

1. **Open:** suburb and estate **boundaries + naming** (high public value, lower privacy risk).
2. **B2B:** geocode API—“Sandton Park, Stand …” → best-known access point + **confidence score**.
3. **Pilot:** one courier or fleet corridor to fund road corrections from GPS traces.
4. **Persistence:** documented QA pipeline into **OSM** so improvements outlive any single app.

This complements [all ZW cities on Propo](./2026-08-10-publish-all-zimbabwe-cities.md)—coverage of **markets** does not fix **pins and roads**.

---

## Contributing data to Google Maps

Google has **no** public bulk-upload path for individuals (Google Map Maker is discontinued). Two lanes:

### A. Individual / community edits (mobile-first)

Use the Maps app signed in → **Contribute**:

| Goal | Path |
| ---- | ---- |
| Add or fix road geometry | **Contribute** → **Update road** → **Missing road** or fix incorrectly drawn segment |
| Road name | **Update road** → name; supply **official** evidence when possible |
| Missing place | **Contribute** → **Add place** (or desktop: search area → **Add a missing place**) |
| Wrong address/pin | **Update address** or place → **Suggest an edit** |

**Official help:**

- [Add or fix a road](https://support.google.com/maps/answer/10271004)
- [Contribute tab (Android)](https://support.google.com/maps/answer/9678350)
- [Add a missing place](https://support.google.com/maps/answer/6320846)
- [Local Guides program](https://support.google.com/maps/answer/6225851) (unpaid; reputation from quality edits)

**Review:** All edits are moderated; publication often takes **days to weeks** (sometimes longer). **Road editing is not available in every country/region**—if **Update road** is missing, use places, addresses, and geotagged photos.

**Evidence that helps approval (especially ZW):**

| Change | Supporting evidence |
| ------ | ------------------- |
| New/moved road | Trace on **satellite**; **geotagged photos** (sign, entrance, junction) |
| Road name | Estate plan, council/developer documentation, registered address |
| Estate label | Named place at main entrance + category |
| Private vs through road | Clear note in edit where the UI allows |

**Estate workflow (misaligned vectors):**

1. Fix worst segment first (vector cutting through stands).
2. Draw along **visible track**, not existing grey line.
3. Add verified place at estate entrance if missing/wrong.
4. Attach ground photos to a nearby place or review where allowed.

**Businesses:** Owners use [Google Business Profile](https://business.google.com) (verify ownership)—separate from community map edits.

### B. Organization bulk feed — Google Maps Content Partners (GMCP)

For **datasets or recurring updates** (roads, POIs, authoritative GIS):

- Portal: [Google Maps Content Partners](https://cities.google/google-maps-content-partners)
- Formats: Shapefile, CSV (lat/lon), KML/KMZ, GeoJSON (per feature specs), or feed URL (e.g. ArcGIS Feature Service)
- Docs: [Geo data partnerships](https://support.google.com/mapcontentpartners/answer/10187434), [Share data feeds](https://support.google.com/mapcontentpartners/answer/14959379), [Content requirements](https://support.google.com/mapcontentpartners/answer/144284)

Requires **organization**, **licensed/authoritative** data, and partner review—not instant publish.

---

## OpenStreetMap (parallel public dataset)

OSM is the usual **open** layer consumed (directly or indirectly) by many apps. Google does **not** auto-ingest OSM.

| Action | Notes |
| ------ | ----- |
| Manual edits | [openstreetmap.org](https://www.openstreetmap.org) — trace from **your GPS** or imagery you may use under OSM policy |
| Bulk import | Follow [Import guidelines](https://wiki.openstreetmap.org/wiki/Import); coordinate with local community |
| Licensing | Do **not** trace Google Maps/Imagery into OSM; see [Potential Datasources](https://wiki.openstreetmap.org/wiki/Potential_Datasources) |

**Dual contribution:** Same **ground truth** can go to Google (Contribute/GMCP) and OSM **separately**, each with proper sourcing.

---

## Licensing & ethics (short)

- **Google:** User contributions grant Google rights under their terms; no reciprocal open license.
- **OSM:** ODbL — derivatives and share-alike rules apply to DB extracts.
- **Your startup:** Own surveys and fleet traces are the cleanest cross-platform source.

---

## Open questions (if this becomes a product line)

- Legal status of stand-level coordinates in listing/scrape data vs surveyed gates.
- Partnership with one Harare courier for trace collection and OSM/Google QA budget.
- Whether Propo publishes **only** suburb centroids/bounds openly vs any stand-level data.
- GMCP eligibility as individual vs registered entity.

---

## References

- Internal: [AGENTS.md](../../AGENTS.md) — Propo scope (market intelligence, all ZW cities, land separate from residential medians)
- External: Google Maps help links above; [OSM Import wiki](https://wiki.openstreetmap.org/wiki/Import)
