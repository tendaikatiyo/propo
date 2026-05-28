import json
from firecrawl import Firecrawl

app = Firecrawl(api_key="fc-b2a5af5a7017454c9aac0bf359dfde60")

all_listings = []

for page in range(1, 20):
    url = f"https://www.propertybook.co.zw/houses/to-rent?page={page}"

    print("Scraping:", url)

    data = app.scrape(
        url,
        only_main_content=True,
        formats=[
            {
                "type": "json",
                "schema": {
                    "type": "object",
                    "properties": {
                        "listings": {
                            "type": "array",
                            "items": {
                                "type": "object",
                                "properties": {
                                    "id": {"type": "string"},
                                    "title": {"type": "string"},
                                    "url": {"type": "string"},
                                    "price_raw": {"type": "string"},
                                    "location": {"type": "string"}
                                }
                            }
                        }
                    }
                }
            }
        ]
    )

    # Firecrawl returns a Pydantic Document object; convert to plain dict when possible
    if hasattr(data, "model_dump"):
        doc = data.model_dump()
    elif hasattr(data, "dict"):
        doc = data.dict()
    else:
        doc = data

    listings = (
        (doc.get("data", {}) or {}).get("json", {}).get("listings")
        or (doc.get("data", {}) or {}).get("listings")
        or (doc.get("json", {}) or {}).get("listings")
        or doc.get("listings")
        or []
    )

    if not listings:
        break

    all_listings.extend(listings)

# remove duplicates by url
seen = set()
unique = []

for l in all_listings:
    if l.get("url") and l["url"] not in seen:
        seen.add(l["url"])
        unique.append(l)

with open("listings.json", "w", encoding="utf-8") as f:
    json.dump(unique, f, indent=2, ensure_ascii=False)

print("Saved:", len(unique), "listings")