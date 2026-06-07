Build a Python scraper using Requests + BeautifulSoup for Propertybook Zimbabwe rental listings.

Target URL:
https://www.propertybook.co.zw/houses/to-rent

The site has pagination. The scraper must automatically iterate through pages until no more listings are found.

Pagination strategy:

* Start at page 1
* Request:
  https://www.propertybook.co.zw/houses/to-rent?page=1
  https://www.propertybook.co.zw/houses/to-rent?page=2
  etc.
* Stop when:

  * no listing elements are found
  * OR no new listing URLs are discovered

For each listing, extract data from the HTML structure below.

The root listing container is:

div.listingDetails

Extract the following fields:

* title

  * from div.listingTitle

* listing_url

  * from the anchor wrapping the title

* price_raw

  * from div.price a

* location

  * from div.locationDetail

* description

  * from the paragraph immediately below div.listingTitle

* bedrooms

  * from the span containing icon class fa-bed

* bathrooms

  * from the span containing icon class fa-bath

* lounges

  * from the span containing icon class fa-couch

* agency_name

  * from the agency image alt attribute

* agency_logo

  * from the agency image src attribute

Additionally derive:

* suburb

  * first segment of location

* city

  * last segment of location

* property_type

  * infer from title
  * examples:

    * "House to Rent" → house
    * "Flat to Rent" → flat
    * "Apartment to Rent" → apartment
    * otherwise unknown

* price

  * convert:
    "USD 400/pm" → 400

Deduplicate listings using listing_url.

Store results in a JSON file named:

data/rentals.json

Output format:

[
{
"title": "House to Rent in Msasa Park",
"listing_url": "https://...",
"price_raw": "USD 400/pm",
"price": 400,
"location": "Msasa Park, Harare South, Harare",
"suburb": "Msasa Park",
"city": "Harare",
"property_type": "house",
"description": "...",
"bedrooms": 3,
"bathrooms": 1,
"lounges": 1,
"agency_name": "Gabriel Real Estate",
"agency_logo": "https://..."
}
]

Requirements:

* Use requests.Session()
* Set a realistic User-Agent header
* Handle network failures with retries
* Use time.sleep() between requests
* Save progress periodically
* Print page number and listing count while scraping
* Organize code into reusable functions:

  * fetch_page()
  * parse_listing()
  * scrape_page()
  * save_json()
  * main()

The code should be production-ready, readable, and easy to extend for scraping both rental and sale listings later.
