#!/usr/bin/env python3
"""Update the embedded atlas from data/atlas.json; standard library only."""
import json
import re
from pathlib import Path

root=Path(__file__).resolve().parent.parent
data=json.loads((root/'data/atlas.json').read_text(encoding='utf-8'))
assert data['places']
for name in data.get('baseCities',[]):
    assert name in data['places'], 'Unknown base city: '+name
for edge in data['connections']:
    assert edge['from'] in data['places'] and edge['to'] in data['places'], 'Missing connection endpoint'
for place in data['places'].values():
    lon,lat=place['coordinates']
    assert -180<=lon<=180 and -90<=lat<=90
payload=json.dumps(data,ensure_ascii=False,separators=(',',':')).replace('<','\\u003c')
index=root/'index.html'
text=index.read_text(encoding='utf-8')
text,count=re.subn(r'(<script type="application/json" id="atlas-data">).*?(</script>)',lambda m:m[1]+payload+m[2],text,count=1,flags=re.S)
assert count==1, 'Embedded atlas data block not found'
index.write_text(text,encoding='utf-8')
print(f'Updated {len(data["places"])} places and {len(data["connections"])} connections in index.html')
