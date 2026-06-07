import json
from pathlib import Path
from collections import Counter

p = Path(__file__).resolve().parents[1] / 'data' / 'rentals.json'
if not p.exists():
    print('rentals.json missing')
    raise SystemExit(1)

arr = json.loads(p.read_text(encoding='utf-8'))
print('total listings:', len(arr))

# Get property type distribution
property_types = [x.get('property_type') for x in arr]
type_counts = Counter(property_types)
print('\nProperty type distribution:')
for ptype, count in sorted(type_counts.items(), key=lambda x: x[1], reverse=True):
    print(f'  {ptype}: {count}')

# Show examples for each type
print('\nExamples by property type:')
for ptype in sorted(set(property_types)):
    examples = [x for x in arr if x.get('property_type') == ptype][:2]
    print(f'\n{ptype}:')
    for ex in examples:
        print(f'  - {ex.get("title")} ({ex.get("listing_url")})')
