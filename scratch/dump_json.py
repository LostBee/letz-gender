import urllib.request
import json
import sys

url = "https://lod.lu/api/lb/entry/WANDEREN1"
req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
try:
    with urllib.request.urlopen(req, timeout=10) as resp:
        data = json.loads(resp.read().decode("utf-8"))
        print(json.dumps(data, indent=2)[:3000])
except Exception as e:
    print(f"Error: {e}")
