import os
from dotenv import load_dotenv
from firecrawl import Firecrawl

load_dotenv()
api_key = os.environ.get('FIRECRAWL_API_KEY')
if not api_key:
    print('Missing FIRECRAWL_API_KEY')
    raise SystemExit(1)

app = Firecrawl(api_key=api_key)
url = 'https://www.propertybook.co.zw/houses/to-rent?page=1'
print('Scraping:', url)

doc = app.scrape(url, only_main_content=True, formats=[{'type': 'json', 'schema': {'type': 'object', 'properties': {'listings': {'type': 'array'}}}}])

if hasattr(doc, 'model_dump'):
    d = doc.model_dump()
elif hasattr(doc, 'dict'):
    d = doc.dict()
else:
    d = doc

listings = (d.get('data', {}) or {}).get('json', {}).get('listings') or (d.get('data', {}) or {}).get('listings') or (d.get('json', {}) or {}).get('listings') or d.get('listings') or []
print('Found listings:', len(listings))
if listings:
    print('Sample:', listings[0])
