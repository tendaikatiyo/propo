Build a real V0 property intelligence prototype using live scraped data from Propertybook Zimbabwe.

Tech stack:
- Node.js
- Firecrawl JS SDK
- Plain HTML
- Bootstrap 5
- Vanilla JavaScript
- Local JSON files as database

No React.
No Tailwind.
No TypeScript.
No fake/sample data.

==================================================
PROJECT GOAL
==================================================

Build a working ingestion pipeline that:

1. Scrapes live rental listings from:
https://www.propertybook.co.zw/rooms/to-rent/

2. Handles pagination

3. Extracts structured listing data

4. Stores raw listings in:
data/listings.json

5. Runs normalization logic

6. Generates suburb-level analytics into:
data/suburbs.json

7. Displays analytics in a simple Bootstrap dashboard


==================================================
PROJECT STRUCTURE
==================================================

project/
│
├── data/
│   ├── listings.json
│   └── suburbs.json
│
├── scraper/
│   ├── scrape.js
│   ├── normalize.js
│   └── aggregate.js
│
├── public/
│   ├── index.html
│   ├── style.css
│   └── app.js
│
├── package.json
└── .env

==================================================
FONTS
==================================================

Use these exact fonts:

Headings:
Instrument Serif

Body:
DM Sans

Add this exact import to index.html:

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet">

==================================================
BOOTSTRAP
==================================================

Use Bootstrap 5 CDN only.

==================================================
SCRAPING REQUIREMENTS
==================================================

Base URL:
https://www.propertybook.co.zw/rooms/to-rent/

Pagination strategy:

Loop pages:
?page=1
?page=2
?page=3
etc.

Crawler logic:

for page = 1 → N:
    scrape page
    extract listings
    stop when no new listings OR empty page

==================================================
FIRECRAWL SETUP
==================================================

Use Firecrawl JS SDK.

Install dependencies properly.

Use environment variable:

process.env.FIRECRAWL_API_KEY

==================================================
EXTRACTION REQUIREMENTS
==================================================

Extract these fields from each listing:

- id
- title
- type
- listing_type
- price_raw
- price
- currency
- bedrooms
- bathrooms
- lounges
- location
- suburb
- city
- image
- url
- scraped_at

==================================================
EXPECTED JSON STRUCTURE
==================================================

Store raw scraped listings in:

data/listings.json

Structure:

[
  {
    "id": "SMR637308",
    "title": "House to Rent in Milton Park",
    "type": "house",
    "listing_type": "rent",
    "price_raw": "USD 2,000/pm",
    "price": 2000,
    "currency": "USD",
    "bedrooms": 4,
    "bathrooms": 2,
    "lounges": 1,
    "location": "Milton Park, Harare West, Harare",
    "suburb": "Milton Park",
    "city": "Harare",
    "image": "https://...",
    "url": "https://...",
    "scraped_at": "2026-05-27T10:00:00Z"
  }
]

==================================================
SCRAPE.JS REQUIREMENTS
==================================================

Create:
scraper/scrape.js

Requirements:
- Use Firecrawl scrapeUrl()
- Use structured extraction schema
- Handle pagination
- Deduplicate listings by URL or ID
- Save raw results into data/listings.json
- Stop scraping when:
  - page empty
  - OR no new listings discovered

Use async/await properly.

==================================================
NORMALIZE.JS REQUIREMENTS
==================================================

Create:
scraper/normalize.js

Normalization logic:
- parse prices into integers
- extract suburb from location
- normalize currency
- normalize property type
- normalize listing_type

Example:
"USD 2,000/pm" → 2000

==================================================
AGGREGATE.JS REQUIREMENTS
==================================================

Create:
scraper/aggregate.js

Generate suburb analytics:

For each suburb calculate:
- listing_count
- median_rent
- average_rent
- min_rent
- max_rent

Save output into:

data/suburbs.json

==================================================
FRONTEND REQUIREMENTS
==================================================

Create a Bootstrap dashboard using live JSON data.

Sections:
1. Hero section
2. “Harare Rental Market” heading
3. Analytics cards
4. Suburb filter dropdown




==================================================
ANALYTICS SECTION
==================================================

Display:
- total listings
- overall median rent
- highest priced suburb

Load dynamically from suburbs.json

==================================================
DESIGN DIRECTION
==================================================

Style:
- editorial
- minimalist
- luxury proptech aesthetic
- lots of whitespace
- elegant typography
- responsive

Colors:
- off-white background
- charcoal text
- muted gray secondary text
- subtle borders

Effects:
- rounded cards


Typography:
- Instrument Serif for headings
- DM Sans for body

==================================================
IMPORTANT
==================================================

Keep everything:
- beginner-friendly
- readable
- modular
- extendable

No fake data.
No placeholders.
Use real scraped data only.

Everything should work with:

1. npm install
2. node scraper/scrape.js
3. node scraper/normalize.js
4. node scraper/aggregate.js
5. VS Code Live Server for frontend