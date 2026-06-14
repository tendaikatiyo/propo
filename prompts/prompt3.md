Build a simple frontend dashboard for a Property Intelligence Engine using:

* HTML
* Bootstrap 5
* Vanilla JavaScript
* Chart.js (for graphs)
* Local JSON files (no backend)

==================================================
GOAL
====

Display property investment intelligence from:

/data/market_metrics.json
/data/cities.json
/data/rankings.json

The dashboard should focus on insights, not listings.

==================================================
LAYOUT
======

Create a single-page dashboard:

1. Top Navbar

* Title: "propo"
* Dropdown: Select City

2. Summary Cards (top row)

Show:

* Total Markets
* Average Yield
* Highest Yield Market
* Total Listings (rent + sale combined)

==================================================
SECTION 2: CITY OVERVIEW (GRAPH)
================================

Use Chart.js to create:

Bar chart:

* Cities vs Average Yield

Line chart:

* Cities vs Median Rent

Pie chart:

* Distribution of listings by city

==================================================
SECTION 3: MARKET TABLE
=======================

Table columns:

* City
* Suburb
* Median Rent
* Median Sale Price
* Yield %
* Confidence Score
* Opportunity Score

Features:

* sortable columns (JS only)
* filter by city dropdown
* highlight top 10 yields

==================================================
SECTION 4: TOP OPPORTUNITIES PANEL
==================================

From rankings.json show:

* Top 10 Highest Yield Markets
* Top 10 Best Opportunity Markets

Each card should show:

* market name
* yield %
* opportunity score

==================================================
SECTION 5: CITY DETAIL VIEW
===========================

When user selects a city:

Show:

* Total rental listings
* Total sale listings
* Average yield
* Median rent
* Median sale price

Include charts:

* Rent vs Sale comparison bar chart
* Yield distribution by suburb (if available)

==================================================
DATA LOADING
============

Use fetch():

fetch('/data/market_metrics.json')
fetch('/data/cities.json')
fetch('/data/rankings.json')

Store in memory:

* markets[]
* cities[]
* rankings[]

==================================================
UI REQUIREMENTS
===============

* Use Bootstrap 5 CDN
* Clean minimal layout
* Responsive design
* Cards for KPIs
* Tables for data
* Charts for trends
* No backend required

==================================================
CHART REQUIREMENTS
==================

Use Chart.js CDN.

Include:

* Bar chart (yield per city)
* Line chart (rent trends)
* Pie chart (distribution)

==================================================
IMPORTANT DESIGN PRINCIPLE
==========================

This is NOT a property listing website.

Do NOT show:

* property cards
* listings feed
* individual houses

Show:

* markets
* yields
* investment signals
* rankings
* analytics

==================================================
OUTPUT
======

Single folder:

/frontend
index.html
style.css
app.js

/data
market_metrics.json
cities.json
rankings.json

==================================================
GOAL OF THIS V0
===============

A user should be able to answer:

* Where should I invest in Zimbabwe?
* Which cities have the best yields?
* Which suburbs are undervalued?

using only this dashboard.


Use these exact fonts:
Logo: Stack Sans Notch
Headings & Body:
Roboto
Accents:
Instrument Serif
Colors:

Add this exact import to index.html:

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Instrument+Serif:ital@0;1&family=Roboto:ital,wght@0,100..900;1,100..900&family=Stack+Sans+Notch:wght@200..700&display=swap" rel="stylesheet">


Add a new feature to the Property Intelligence Engine dashboard using Bootstrap 5, vanilla JavaScript, and Bootstrap Icons.

==================================================
FEATURE NAME
============

Investment Finder (Budget vs Rental Return Filter)

==================================================
GOAL
====

Allow users to find suitable property markets based on:

* Maximum property purchase budget
* Minimum expected monthly rental income

Then show:

* matching suburbs/markets
* expected yield
* ranking by opportunity score

==================================================
UI COMPONENT
============

Create a Bootstrap card section titled:

"Find Your Investment Match"

Inside include:

1. Budget Slider

* label: "Max Property Budget (USD)"
* range: 20,000 → 1,000,000
* step: 5,000
* display selected value live

2. Rental Income Slider

* label: "Min Monthly Rental Income (USD)"
* range: 100 → 10,000
* step: 50
* display selected value live

Use Bootstrap icons:

* budget icon: bi-cash-stack
* rent icon: bi-house-door

==================================================
RESULTS SECTION
===============

Below sliders show:

"Matching Markets"

Display results as Bootstrap cards:

Each card includes:

* Suburb + City (title)
* Market ID badge (Bootstrap badge: bg-primary)
* Yield badge (bg-success)
* Confidence badge (bg-warning or bg-info)
* Opportunity score badge (bg-dark or bg-secondary)

Include icons:

* bi-geo-alt for location
* bi-graph-up for yield
* bi-lightning for opportunity score

==================================================
FILTER LOGIC (JavaScript)
=========================

Use market_metrics.json

A market matches if:

estimated_property_price <= budget_slider_value

AND

median_rent >= rent_slider_value

Fallback rule:

If no exact matches:

* show closest matches ranked by:

  * highest yield
  * highest opportunity score

==================================================
RANKING LOGIC
=============

Sort results by:

1. opportunity_score (descending)
2. yield_percent (descending)
3. confidence_score (descending)

Limit to top 10 results.

==================================================
DATA USED
=========

Load from:

/data/market_metrics.json

Each record contains:

* market_id
* city
* suburb
* median_rent
* median_sale_price
* yield_percent
* confidence_score
* opportunity_score

==================================================
ESTIMATION RULE
===============

If no direct property price exists per listing:

Use:

median_sale_price as proxy for property price

==================================================
INTERACTION
===========

* Sliders must update results in real-time (no refresh)
* Use event listeners (input event)
* Re-render results dynamically

==================================================
EMPTY STATE
===========

If no matches found:

Show Bootstrap alert:

"bi-exclamation-triangle"
"No markets match your criteria. Try increasing your budget or lowering expected rent."

==================================================
DESIGN RULE
===========

This is NOT a property listing search tool.

It is a decision engine.

Focus on:

* investment signals
* market comparison
* yield-based filtering

==================================================
OUTPUT
======

Add this feature into:

/frontend/index.html
/frontend/app.js
/frontend/style.css

Use Bootstrap 5 + Bootstrap Icons CDN.
