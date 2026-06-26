#!/usr/bin/env python3
"""
fetch-audio.py — Download pronunciation audio from lod.lu for Lëtz Gender

Usage:
  python tools/fetch-audio.py <topic> <word1> [word2] [word3] ...

Examples:
  python tools/fetch-audio.py clothing Pyjama Nuetshiem Buedmantel
  python tools/fetch-audio.py sport Kraafttraining Beienkëscht Bikemachine

How it works:
  1. For each word, queries the LOD API: https://lod.lu/api/lb/entry/{WORD}1
  2. Extracts the pronunciation audio URL (uploads/AAC/...)
  3. Downloads the .m4a file to audio/<topic>/
  4. Prints the JS mapping line you can paste into js/data/<topic>.js

Notes:
  - The LOD entry ID is typically the word in UPPERCASE + "1" (e.g. PYJAMA1)
  - Pronunciation audio lives at: https://lod.lu/uploads/AAC/<id>.m4a
  - Example sentence audio lives at: uploads/examples/AAC/... (ignored)
  - If a word isn't found with suffix "1", the script tries "2", then bare.
"""

import sys
import os
import re
import json
import urllib.request
import urllib.parse
import urllib.error

# Force UTF-8 output on Windows
if sys.platform == "win32":
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")

BASE_API = "https://lod.lu/api/lb/entry"
BASE_URL = "https://lod.lu"
USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) LetzGender/1.0"

# Resolve project root (parent of tools/)
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_ROOT = os.path.dirname(SCRIPT_DIR)


def api_request(url):
    """Make a GET request and return parsed JSON, or None on failure."""
    req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    try:
        with urllib.request.urlopen(req, timeout=10) as resp:
            return json.loads(resp.read().decode("utf-8"))
    except urllib.error.HTTPError as e:
        return None
    except Exception as e:
        print(f"  [!] Network error: {e}")
        return None


def find_pronunciation_audio(data):
    """
    Extract the pronunciation audio URL from an LOD API response.
    Pronunciation audio lives under uploads/AAC/<id>.m4a (NOT uploads/examples/).
    """
    data_str = json.dumps(data)
    # Find all audio URLs
    all_audio = re.findall(r"uploads/(?!examples/)[^\s\"']+\.m4a", data_str)
    if all_audio:
        # Return the first pronunciation audio (not example audio)
        return f"{BASE_URL}/{all_audio[0]}"
    return None


def fetch_audio_url(word):
    """
    Try to find the pronunciation audio for a word by querying the LOD API.
    Attempts suffixes: 1, 2, 3, then bare word.
    Returns (audio_url, lod_id, lemma) or (None, None, None).
    """
    candidates = [f"{word.upper()}{s}" for s in ("1", "2", "3", "")]
    for lod_id in candidates:
        url = f"{BASE_API}/{urllib.parse.quote(lod_id)}"
        data = api_request(url)
        if data and "entry" in data:
            audio_url = find_pronunciation_audio(data)
            lemma = data["entry"].get("lemma", word)
            if audio_url:
                return audio_url, lod_id, lemma
            else:
                # Entry exists but has no pronunciation audio
                print(f"  [!] Entry {lod_id} found but has no pronunciation audio")
                return None, lod_id, lemma
    return None, None, None


def download_file(url, dest_path):
    """Download a file from url to dest_path. Returns True on success."""
    req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    try:
        with urllib.request.urlopen(req, timeout=15) as resp:
            os.makedirs(os.path.dirname(dest_path), exist_ok=True)
            with open(dest_path, "wb") as f:
                f.write(resp.read())
        return True
    except Exception as e:
        print(f"  [!] Download failed: {e}")
        return False


def main():
    if len(sys.argv) < 3:
        print(__doc__)
        sys.exit(1)

    topic = sys.argv[1]
    words = sys.argv[2:]
    audio_dir = os.path.join(PROJECT_ROOT, "audio", topic)

    print("=" * 56)
    print("  Letz Gender -- Audio Fetcher (lod.lu)")
    print("=" * 56)
    print(f"  Topic:  {topic}")
    print(f"  Words:  {len(words)}")
    print(f"  Dest:   audio/{topic}/")
    print("=" * 56)
    print()

    results = {"ok": [], "no_audio": [], "not_found": []}

    for word in words:
        print(f"[?] {word}...")
        audio_url, lod_id, lemma = fetch_audio_url(word)

        if audio_url is None and lod_id is None:
            print(f"  [X] Not found in LOD dictionary")
            results["not_found"].append(word)
            continue

        if audio_url is None:
            print(f"  [X] Entry {lod_id} exists but has no pronunciation audio")
            results["no_audio"].append((word, lod_id))
            continue

        # Derive local filename from the URL
        filename = audio_url.rsplit("/", 1)[-1]
        dest_path = os.path.join(audio_dir, filename)
        rel_path = f"audio/{topic}/{filename}"

        if os.path.exists(dest_path):
            size = os.path.getsize(dest_path)
            print(f"  [=] Already exists ({size:,} bytes): {rel_path}")
            results["ok"].append((word, rel_path, lod_id))
            continue

        print(f"  [v] Downloading from {audio_url}")
        if download_file(audio_url, dest_path):
            size = os.path.getsize(dest_path)
            print(f"  [+] Saved ({size:,} bytes): {rel_path}")
            results["ok"].append((word, rel_path, lod_id))
        else:
            results["no_audio"].append((word, lod_id))

    # -- Summary ---------------------------------------------------
    print()
    print("=" * 56)
    print("SUMMARY")
    print("=" * 56)

    if results["ok"]:
        print(f"\n  Downloaded ({len(results['ok'])}):")
        for word, path, lod_id in results["ok"]:
            print(f"    {word:<25} -> {path}")

    if results["no_audio"]:
        print(f"\n  No audio available ({len(results['no_audio'])}):")
        for word, lod_id in results["no_audio"]:
            print(f"    {word:<25} (LOD ID: {lod_id})")

    if results["not_found"]:
        print(f"\n  Not found in LOD ({len(results['not_found'])}):")
        for word in results["not_found"]:
            print(f"    {word}")

    # -- JS mapping snippet ----------------------------------------
    if results["ok"]:
        print()
        print("=" * 56)
        print("JS AUDIO MAPPING (copy into your data file)")
        print("=" * 56)
        for word, path, _ in results["ok"]:
            print(f'    audio: "{path}"')

    print()


if __name__ == "__main__":
    main()

