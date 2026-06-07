import json
from pathlib import Path
p = Path(__file__).resolve().parents[1] / 'data' / 'rentals.json'
if not p.exists():
    print('rentals.json missing')
    raise SystemExit(1)
arr = json.loads(p.read_text(encoding='utf-8'))
print('total listings:', len(arr))
mandara = [x for x in arr if 'mandara' in (x.get('location') or '').lower() or 'mandara' in (x.get('title') or '').lower()]
print('mandara count:', len(mandara))
for m in mandara[:10]:
    print(m.get('title'))
    print('  url:', m.get('listing_url'))
    print('  price_raw:', repr(m.get('price_raw')))
    print('  price:', m.get('price'))

no_price = [x for x in arr if not x.get('price_raw')]
print('listings with empty price_raw:', len(no_price))
for x in no_price[:5]:
    print(x.get('title'), x.get('listing_url'))
