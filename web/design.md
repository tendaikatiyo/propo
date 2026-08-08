# Propo — Design System

**Propo** is a Zimbabwe property data index. Look up a suburb for rent, sale, and land market signals — it is not a listings portal.

This document describes the design system as implemented in `web/`. It supersedes the early ElevenLabs borrow (`eleven labs DESIGN.md`). Tokens live in `src/app/globals.css`, `src/lib/liquid-glass.ts`, and `src/lib/fonts.ts`.

---

## Brand & voice

| Principle | In practice |
| --- | --- |
| **Suburb first** | Lead with place — medians, yield, land, and trends on one profile — not “configure a budget”. |
| **Data index, not agency** | Copy positions Propo as aggregated market intelligence from public listings. |
| **Zimbabwe-specific** | Harare/Bulawayo photography, flag-accent footer orbs, `en_ZW` locale in metadata. |
| **Editorial calm** | Warm off-white canvas, near-black ink, restrained colour. Data carries the drama. |
| **Photographic heroes** | Real skyline photography on home; illustrated or city-specific heroes elsewhere. |

**Tagline:** *Look up a suburb*

**Wordmark:** lowercase `propo` in **Stack Sans Notch** — no icon, no capital P mark.

**Eyebrow pill:** `Zimbabwe property market intelligence` — uppercase, tracked, on glass over heroes.

---

## Typography

Four roles, four families. Do not collapse them.

| Role | Family | CSS utility | Use |
| --- | --- | --- | --- |
| **Display / wordmark** | Stack Sans Notch | `.font-display` | Home hero h1, logo in sidebar & mobile bar, footer wordmark |
| **Headings** | Geist Sans | `.font-heading` | Page titles, card titles, suburb names, table row labels |
| **Body** | Inter | default / `.font-body` | Paragraphs, nav labels, descriptions, buttons |
| **Data / labels** | Geist Mono | `.font-mono`, `.caption-label` | Table column headers, badges, opportunity scores, uppercase field labels |
| **Stats** | Geist Sans + tabular nums | `.font-stat` | Prices, yields, large numbers on cards |

### Hierarchy (implemented)

| Element | Size | Weight | Tracking | Font |
| --- | --- | --- | --- | --- |
| Home hero h1 | 28px → 64px | 500 | −0.03em | Display |
| Page header (display) | 36px → 48px | 500 | −0.02em | Display |
| Page header (default) | 24px → 30px | 500 | −0.01em | Heading |
| Card title | 18px | 500 | −0.01em | Heading |
| Body | 15–16px | 400 | +0.15–0.16px | Inter |
| Caption label | 11px uppercase | 500–600 | +0.06–0.08em | Mono |
| Button | 15px | 500 | normal | Inter |
| Mobile tab label | 10px | 500 / 600 active | normal | Inter |

### Table typography

| Cell type | Font |
| --- | --- |
| Column headings | Geist Mono (`.caption-label` or `.font-mono`) |
| Numbers in cells | Geist Mono or `.font-stat` |
| Row / suburb names | Geist Sans (`.font-heading`) |
| Supporting text | Inter |

### Loading fonts

```ts
// src/lib/fonts.ts
Inter          → --font-body
GeistSans      → --font-geist-sans
GeistMono      → --font-geist-mono
Stack_Sans_Notch → --font-display
```

---

## Color

Warm editorial neutrals inherited from the early ElevenLabs palette, adapted for a data product. Semantic red is used sparingly for alerts and notification badges — not as a brand CTA colour.

### Core tokens (`:root` in `globals.css`)

| Token | Hex | Role |
| --- | --- | --- |
| `--background` | `#f5f5f5` | Page canvas |
| `--foreground` | `#0c0a09` | Primary ink |
| `--card` | `#ffffff` | Cards, sidebar |
| `--primary` | `#292524` | Primary buttons, ink pills |
| `--primary-foreground` | `#ffffff` | Text on primary |
| `--secondary` | `#f0efed` | Active nav, badge plates |
| `--muted` | `#f0efed` | Subtle fills |
| `--muted-foreground` | `#777169` | Secondary text |
| `--border` | `#e7e5e4` | Hairlines |
| `--input` | `#d6d3d1` | Input borders |
| `--destructive` | `#dc2626` | Errors, pin-count badge |
| `--ring` | `#292524` | Focus rings |

### Chart / decorative pastels

Used in trend charts and (optionally) as soft atmosphere — not for primary CTAs.

| Token | Hex | Tone |
| --- | --- | --- |
| `--chart-1` | `#a7e5d3` | Mint |
| `--chart-2` | `#a8c8e8` | Sky |
| `--chart-3` | `#c8b8e0` | Lavender |
| `--chart-4` | `#f4c5a8` | Peach |
| `--chart-5` | `#e8b8c4` | Rose |

### Zimbabwe flag accents (footer only)

Subtle radial orbs in `footer-orbs.tsx` — decoration, not interactive UI.

| Colour | RGBA stop |
| --- | --- |
| Green | `rgba(0, 99, 57, 0.4)` |
| Yellow | `rgba(252, 209, 22, 0.45)` |
| Red | `rgba(222, 32, 16, 0.35)` |

### Semantic data colours

| Pattern | Colours | Where |
| --- | --- | --- |
| **In budget** | `#ecfdf3` / `#166534` | `Badge variant="success"` |
| **Confidence high → low** | Green → yellow → orange → red tints | `confidence-badge.tsx` |
| **Fair value** | Green tint below median, red above | `listing-card.tsx` fair-value badges |
| **Pin notification** | `bg-destructive` + `text-white` | Hamburger menu badge |

---

## Layout

### Shell structure

```
┌─────────────┬──────────────────────────────────┐
│  Sidebar    │  Mobile top bar (lg:hidden)      │
│  240px      ├──────────────────────────────────┤
│  fixed      │  City compact hero (optional)    │
│             ├──────────────────────────────────┤
│  Nav        │  Main content                    │
│  Pin tray   │  max-w-6xl (except home hero)    │
│             ├──────────────────────────────────┤
│             │  Footer (lg:block)               │
│             │  Mobile tab bar (lg:hidden)      │
└─────────────┴──────────────────────────────────┘
```

| Surface | Width / height | File |
| --- | --- | --- |
| Sidebar | `w-60` (240px), `lg:flex` | `app-sidebar.tsx` |
| Main column | `max-w-6xl`, `px-4` → `px-8` | `app-shell.tsx` |
| Home main | `max-w-none` — full bleed | `app-shell.tsx` |
| Mobile top bar | `h-[52px]` sticky | `mobile-top-bar.tsx` |
| Mobile tab bar | `min-h-[52px]` + safe area | `mobile-tab-bar.tsx` |

### Spacing rhythm

- **Section padding:** `py-8` on inner pages; home hero is viewport-height.
- **Card padding:** `--card-spacing: 24px` (16px on `size="sm"`).
- **Card gap:** `gap-4`–`gap-6` in grids.
- **Safe areas:** `env(safe-area-inset-bottom)` on tab bar and home hero bottom padding.

### Grid patterns

| Context | Layout |
| --- | --- |
| Explore results | Responsive card grid |
| Compare | Up to 3 pinned suburbs, table + mobile cards |
| Cities directory | List rows on mobile, grid on desktop |
| Rankings | Leaderboard tables with mono numerals |

---

## Surfaces & depth

### Feature cards

`.feature-card` in `globals.css`:

- `rounded-2xl`, `border`, `bg-card`
- Flat at rest; `shadow-card` (`0 4px 16px rgba(0,0,0,0.04)`) on hover

### Section bands

`.section-band` — bordered, rounded card used for grouped content blocks.

### Liquid glass (`src/lib/liquid-glass.ts`)

Propo’s signature over photography. Frosted translucency with backdrop blur — evolved specifically for the home hero filter panel.

| Token | Opacity / blur | Use |
| --- | --- | --- |
| `liquidGlassPillClass` | `bg-white/25`, `blur-xl` | Eyebrow pills on photo |
| `liquidGlassHeroPanelClass` | `bg-white/58`, `blur-2xl`, milky | Home search prompt panel |
| `liquidGlassPanelClass` | `bg-white/18` | General frosted panels |
| `liquidGlassButtonDefault` | `bg-primary/80` on glass | Primary CTA on heroes |

**Hero glass legibility:** Pair `liquidGlassHeroPanelClass` with `.hero-glass-panel` in `globals.css`. This scopes dark text tokens so pills and inputs stay readable over photos — never white-on-white.

### Film grain

`.noise-grain` — SVG fractal noise overlay at 38% opacity, `mix-blend-mode: overlay`. Used on the home landing photo for editorial texture.

---

## Photography & heroes

| Context | Asset | Component |
| --- | --- | --- |
| **Home landing** | `harare_skyline_bg_photo_small2.webp` | `home-landing-hero.tsx` |
| **Harare city pages** | `harare_skyline_bg2.png` (illustration) | `site-chrome.tsx` |
| **Bulawayo city pages** | `joshua_nkomo_statue_byo.webp` | `site-chrome.tsx` |
| **Other cities** | Falls back to Harare illustration | `heroForCitySlug()` |

**Overlays on photos:** stacked gradients (`from-black/35`, side vignettes) + optional grain.

**Credits:** 10px link, bottom-right, `text-white/65` → `hover:text-white`. See `PHOTO_CREDITS.md`.

**OG image:** `/og_tag_image.webp` (1200×630) — social share only.

---

## Components

### Navigation

**Desktop sidebar** (`app-sidebar.tsx`)

- Wordmark: `font-display text-xl`, lowercase
- Nav items: `rounded-xl`, active = `bg-secondary`
- Bottom: data freshness pill + pin tray

**Mobile top bar** (`mobile-top-bar.tsx`)

- On home: frosted `bg-black/25`, white text, overlays hero
- Elsewhere: `bg-background/80`, foreground text
- Hamburger opens drawer; red pin-count badge when suburbs are pinned

**Mobile tab bar** (`mobile-tab-bar.tsx`)

- 4 tabs: Home, Explore, Cities, Rankings
- Active: top hairline indicator + semibold label
- Frosted `bg-background/80 backdrop-blur-xl`

**Pin tray** (`pin-tray.tsx`)

- Secondary badges for pinned suburb chips
- Compare button disabled until ≥2 pins

### Buttons (`components/ui/button.tsx`)

All buttons are **pills** (`rounded-full`). Variants use liquid-glass styling.

| Variant | Treatment |
| --- | --- |
| `default` | Near-black glass primary |
| `outline` | Frosted white outline |
| `secondary` | Light glass plate |
| `ghost` | Transparent, glass on hover |
| `destructive` | Red-tinted glass |
| `link` | Underlined text |

Sizes: `xs` (28px) → `lg` (44px). Active state: `scale-[0.98]`.

### Badges (`components/ui/badge.tsx`)

Pill shape, mono uppercase at 11px.

| Variant | Use |
| --- | --- |
| `success` | “In budget”, “Stretch” on explore cards |
| `secondary` | Pin chips |
| `outline` + custom classes | Confidence score (colour from score) |
| `default` | Rare; ink pill |

### Forms & filters

| Control | Pattern |
| --- | --- |
| **Global Focus** | **Parked.** Switcher UI stays hidden. |
| **Home hero** | Suburb **search prompt** (rolling name shutter + suggested chips → profile). Secondary CTA to Explore. |
| **Explore surfaces** | Page tabs **Suburbs \| Land** (`ExploreSurfaceTabs`). |
| **Explore filters** | Collapsed by default. Optional city / thin-markets / land `$/sqm` budget. No Browse as / property type on Suburbs. |
| **Lens persistence** | Legacy: URL `?mode=` + `localStorage` `propo_lens`; default **invest**. Suburb profiles are full dossiers (not mode-gated). Land explore uses `?mode=land`. |

### User lens (audience modes)

**Parked for product UX (suburb-first cut).** Suburb profiles always show rent + sale + land + yield. Explore **Suburbs** is a directory (no intent stack). Explore **Land** is a land directory with optional $/sqm budget. `/contribute` remains rent/buy/land only.

| Mode | Where it still matters |
| --- | --- |
| **Rent / Buy / Land** | Contribute, some deep links, rankings/compare legacy |
| **Invest** | Soft default for Explore/legacy hydration; table columns on suburb directory |

**Accent colours (active segmented segment):** rent sky `#6B9FD4`, buy violet `#9B87C4`, land green `#7A9B76`, invest amber `#C49B6B`.

**Home:** suburb search prompt → profile; secondary CTA to Explore.

**Explore:** Suburbs \| Land tabs; filters accordion **closed by default**.

**Compare:** inherits last lens from `propo_lens` when `/compare` has no `?mode=`. Pins store `pinnedFromMode`.

**Mobile dock** (`web/src/lib/mobile-dock.ts`): one row above tab bar at `mobileDockBottom()` (tab 3.25rem + 8px gap + safe-area).

| Context | UI |
| --- | --- |
| Suburb profile | `SuburbActionBar` — View listings · Compare (n) · Pin (global compare bar hidden) |
| Other pages, ≥2 pins | `MobileCompareBar` |

**Focus UI:** global switcher / mobile chip stay **hidden**.

**Navigation:** `ScrollToTopOnNavigate` resets scroll on pathname change (not query-only updates).

**Lens hydration:** Explore/legacy still use `LensProvider` + `?mode=` / `propo_lens` (default invest). Suburb dossiers ignore Focus for section visibility.

**DataFreshnessPill:** client `useEffect` fetch to `/api/meta` (not React Query in layout chrome).

**Rankings:** Leaderboards + Movers tabs; land leaderboards via Explore land mode when used.

**City 90-day movers:** May still follow page `?mode=`; invest shows rent and sale blocks.

### Page header (`page-header.tsx`)

- `display={true}` → Stack Sans Notch at display sizes
- Default → Geist Sans heading scale
- Description: 15px muted Inter

### Data cards (`suburb-card.tsx`, tables)

- Suburb name: `CardTitle` (Geist Sans)
- Hero price: `.font-stat text-2xl`
- Confidence: coloured outline badge
- Yield / opportunity: mono accent for scores
- Pin button: bottom of card, pointer-events restored above link overlay

### Listings (secondary surface)

Listing cards exist on suburb profiles and explore previews. They support fair-value badges but are **supporting evidence**, not the primary journey.

---

## Copy patterns

| Context | Tone |
| --- | --- |
| SEO / OG | Suburb lookup; rent, sale, land medians |
| Hero subtitle | Search a suburb → full market profile |
| Empty states | Plain, helpful — “No suburbs pinned yet” |
| Tooltips | Explain methodology, sample sizes, confidence |
| Legal | “Property market intelligence for Zimbabwe” |

Avoid: “Find your dream home”, portal language, agency CTAs.

---

## Responsive behaviour

| Breakpoint | Key changes |
| --- | --- |
| `< lg` (1024px) | Sidebar hidden; mobile top bar + bottom tabs; hamburger menu |
| `≥ lg` | Sidebar fixed; footer visible; pin tray in sidebar |
| Home mobile | Hero under nav (`-mt-[52px]`); search panel below headline |
| Home desktop | Split layout: copy left, glass search panel right |

### Touch targets

- Icon buttons: `size-11` (44px) on mobile top bar
- Tab items: `min-h-[52px]`
- Buttons: minimum 40px height (`h-10` default)

### Print

`.suburb-report` styles in `globals.css` — A4 margins, `break-inside: avoid` on sections.

---

## Do's and Don'ts

### Do

- Use **Stack Sans Notch** only for display moments (hero, wordmark).
- Use **Geist Mono** for data labels, table headers, and uppercase field captions.
- Use **`.font-stat`** for prices and yields (tabular nums).
- Keep the canvas warm off-white; cards pure white.
- Use liquid glass **only over photography** — not on plain canvas pages.
- Apply `.hero-glass-panel` whenever glass sits on a photo with form controls.
- Credit photographers when `creditUrl` is set.
- Lead product copy with **suburb lookup and market dossiers** (rent + sale + land).

### Don't

- Don't add a logo icon or uppercase “Propo” wordmark.
- Don't use saturated brand-red for primary CTAs — ink pill (`primary`) is the action colour.
- Don't use pastel chart colours as button fills.
- Don't bold display type; weight 500 is the ceiling for Stack Sans Notch heroes.
- Don't treat listings as the hero — medians and suburb signals come first.
- Don't use white text on translucent white glass without the hero-glass token overrides.

---

## Implementation map

| Concern | Path |
| --- | --- |
| CSS tokens & utilities | `src/app/globals.css` |
| Liquid glass classes | `src/lib/liquid-glass.ts` |
| Font loading | `src/lib/fonts.ts` |
| Hero assets | `src/lib/hero.ts`, `public/` |
| Buttons | `src/components/ui/button.tsx` |
| Badges | `src/components/ui/badge.tsx` |
| Cards | `src/components/ui/card.tsx` |
| Home hero | `src/components/home/home-landing-hero.tsx` |
| City / footer chrome | `src/components/layout/site-chrome.tsx` |
| App shell | `src/components/layout/app-shell.tsx` |
| Mobile chrome | `src/components/mobile/` (`mobile-dock.ts` offsets in `src/lib/mobile-dock.ts`) |
| Scroll on nav | `src/components/layout/scroll-to-top-on-navigate.tsx` |
| User lens helpers | `src/lib/lens.ts`, `src/components/providers/lens-provider.tsx` |
| Lens UI | `src/components/layout/global-lens-switcher.tsx`, `src/components/mobile/mobile-focus-chip.tsx`, `explore-mode-toggle.tsx` |
| Suburb mobile dock | `src/components/mobile/suburb-action-bar.tsx` |
| Mode accents | `src/lib/mode-accent.ts` |
| Footer orbs | `src/components/ui/footer-orbs.tsx` |
| Photo credits | `PHOTO_CREDITS.md` |
| SEO copy constants | `src/lib/constants.ts`, `src/lib/seo.ts` |

---

## Out of scope / known gaps

- Dark mode tokens exist in Tailwind config but the product is **light-mode only**.
- `harare_skyline_bg2.png` and some OG assets lack photographer credits (see `PHOTO_CREDITS.md`).
- Admin dashboard (`/admin`) uses the same tokens but is internal ops UI — not marketing-polished.
- Animation timings (hero entrance, chart transitions) are not spec’d.
- The legacy `eleven labs DESIGN.md` file is kept for historical reference only — do not follow it for new work.

---

## Quick reference — font assignment

```
Wordmark / hero headline     →  Stack Sans Notch  (.font-display)
Page & card headings         →  Geist Sans        (.font-heading)
Body, nav, buttons           →  Inter             (body default)
Prices, yields on cards      →  Geist Sans        (.font-stat)
Table columns, badges, labels → Geist Mono        (.font-mono / .caption-label)
Table row names              →  Geist Sans        (.font-heading)
```
