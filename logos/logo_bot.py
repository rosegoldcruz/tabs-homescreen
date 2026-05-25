#!/usr/bin/env python3
"""
AEON OPS — Logo Fetcher & Background Remover
=============================================
Fetches logos for every site in the dashboard via 4-stage pipeline:
  1. Clearbit Logo API  (best quality, often pre-transparent)
  2. BrandFetch CDN     (fallback, no key needed)
  3. Website OG/meta scrape (actual site logo)
  4. Google Favicon     (last resort, always works)

Then removes backgrounds with rembg → saves transparent PNG.
Outputs:
  logos/          PNG files (transparent)
  logo_manifest.json  {id: {label, domain, path, source, width, height}}
  logo_patch.js   drop-in JS to swap icons in the dashboard
"""

import os, io, json, time, hashlib, re, sys
import requests
from pathlib import Path
from urllib.parse import urlparse
from PIL import Image, ImageChops

try:
    from rembg import remove as rembg_remove, new_session
    REMBG = True
    # Use the lightweight u2netp model — fast, great for logos
    REMBG_SESSION = new_session("u2netp")
    print("[OK] rembg loaded with u2netp model")
except Exception as e:
    REMBG = False
    REMBG_SESSION = None
    print(f"[WARN] rembg unavailable: {e}")

try:
    from bs4 import BeautifulSoup
    BS4 = True
except ImportError:
    BS4 = False

# ── CONFIG ────────────────────────────────────────────────────────────────────
OUT_DIR   = Path("logos")
MANIFEST  = Path("logo_manifest.json")
PATCH_JS  = Path("logo_patch.js")
TIMEOUT   = 8
DELAY     = 0.4   # seconds between requests (be polite)
SIZE      = 128   # output pixel size

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
                  "(KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
    "Accept": "image/webp,image/apng,image/*,*/*;q=0.8"
}

# ── ALL SITES ─────────────────────────────────────────────────────────────────
SITES = [
    # id, label, url
    ("ai_claude",       "Claude",            "https://claude.ai/"),
    ("ai_chatgpt",      "ChatGPT",           "https://chatgpt.com/"),
    ("ai_codex",        "Codex",             "https://chatgpt.com/"),
    ("ai_grok",         "Grok",              "https://grok.com/"),
    ("ai_gemini",       "Gemini",            "https://gemini.google.com/"),
    ("ai_perplexity",   "Perplexity",        "https://www.perplexity.ai/"),
    ("ai_mistral",      "Mistral",           "https://mistral.ai/"),
    ("ai_deepseek",     "DeepSeek",          "https://chat.deepseek.com/"),
    ("ai_meta",         "Meta AI",           "https://www.meta.ai/"),
    ("ai_copilot",      "Copilot",           "https://copilot.microsoft.com/"),
    ("ai_kimi",         "Kimi",              "https://www.kimi.com/"),
    ("ai_genspark",     "Genspark",          "https://www.genspark.ai/"),
    ("ai_minimax",      "MiniMax",           "https://agent.minimax.io/"),
    ("ai_elevenlabs",   "ElevenLabs",        "https://elevenlabs.io/"),
    ("ai_capcut",       "CapCut",            "https://www.capcut.com/"),
    ("ai_requesty",     "Requesty",          "https://app.requesty.ai/"),
    ("ai_polsia",       "Polsia",            "https://polsia.com/"),
    ("ai_xai",          "xAI",               "https://x.ai/"),
    ("ai_livekit",      "LiveKit",           "https://livekit.io/"),
    ("ai_fastgpt",      "FastGPT",           "https://fastgpt.cn/"),
    ("ai_zhipu",        "ZhipuAI",           "https://bigmodel.cn/"),
    ("ai_huggingface",  "HuggingFace",       "https://huggingface.co/"),
    ("ai_creatify",     "Creatify",          "https://app.creatify.ai/"),
    ("ai_zencoder",     "Zencoder",          "https://zencoder.ai/"),
    ("ai_roocode",      "Roo Code",          "https://roocode.com/"),
    ("ai_lambda",       "Lambda Cloud",      "https://lambda.ai/"),
    ("ai_collaby",      "Collaby AI",        "https://collaby.ai/"),
    ("ai_anthropic",    "Anthropic",         "https://anthropic.com/"),
    ("ai_openai",       "OpenAI",            "https://openai.com/"),
    ("ai_lovable",      "Lovable",           "https://lovable.dev/"),
    ("dv_github",       "GitHub",            "https://github.com/"),
    ("dv_gitlab",       "GitLab",            "https://gitlab.com/"),
    ("dv_vercel",       "Vercel",            "https://vercel.com/"),
    ("dv_v0",           "v0",                "https://v0.dev/"),
    ("dv_supabase",     "Supabase",          "https://supabase.com/"),
    ("dv_airtable",     "Airtable",          "https://airtable.com/"),
    ("dv_stripe",       "Stripe",            "https://stripe.com/"),
    ("dv_n8n",          "n8n",               "https://n8n.io/"),
    ("dv_zitadel",      "ZITADEL",           "https://zitadel.com/"),
    ("dv_cloudflare",   "Cloudflare",        "https://cloudflare.com/"),
    ("dv_clerk",        "Clerk",             "https://clerk.com/"),
    ("dv_railway",      "Railway",           "https://railway.com/"),
    ("dv_digitalocean", "DigitalOcean",      "https://digitalocean.com/"),
    ("dv_hivelocity",   "Hivelocity",        "https://hivelocity.net/"),
    ("dv_hetzner",      "Hetzner",           "https://hetzner.com/"),
    ("dv_vast",         "vast.ai",           "https://vast.ai/"),
    ("dv_lightning",    "Lightning AI",      "https://lightning.ai/"),
    ("dv_replicate",    "Replicate",         "https://replicate.com/"),
    ("dv_windsurf",     "Windsurf",          "https://windsurf.com/"),
    ("dv_cursor",       "Cursor",            "https://cursor.com/"),
    ("dv_augment",      "Augment",           "https://augmentcode.com/"),
    ("dv_sentry",       "Sentry",            "https://sentry.io/"),
    ("dv_posthog",      "PostHog",           "https://posthog.com/"),
    ("dv_zapier",       "Zapier",            "https://zapier.com/"),
    ("dv_notion",       "Notion",            "https://notion.so/"),
    ("dv_railway2",     "Railway",           "https://railway.app/"),
    ("dv_lovable",      "Lovable",           "https://lovable.dev/"),
    ("dv_emergent",     "Emergent",          "https://emergent.sh/"),
    ("ad_gmail",        "Gmail",             "https://gmail.com/"),
    ("ad_neo",          "NEO MAiL",          "https://neo.space/"),
    ("ad_mercury",      "Mercury",           "https://mercury.com/"),
    ("ad_gcloud",       "Google Cloud",      "https://cloud.google.com/"),
    ("ad_gdrive",       "Google Drive",      "https://drive.google.com/"),
    ("ad_ghl",          "GoHighLevel",       "https://gohighlevel.com/"),
    ("ad_spotify",      "Spotify",           "https://spotify.com/"),
    ("ad_telegram",     "Telegram",          "https://telegram.org/"),
    ("ad_canva",        "Canva",             "https://canva.com/"),
    ("ad_azure",        "Azure",             "https://azure.microsoft.com/"),
    ("ad_dropbox",      "Dropbox",           "https://dropbox.com/"),
    ("vd_hailuo",       "Hailuo AI",         "https://hailuoai.video/"),
    ("vd_leonardo",     "Leonardo AI",       "https://leonardo.ai/"),
    ("vd_kling",        "Kling AI",          "https://klingai.com/"),
    ("vd_runway",       "Runway",            "https://runwayml.com/"),
    ("vd_invideo",      "InVideo",           "https://invideo.io/"),
    ("vd_synthesia",    "Synthesia",         "https://synthesia.io/"),
    ("vd_ltx",          "LTX Studio",        "https://ltx.studio/"),
    ("vd_visla",        "Visla",             "https://visla.us/"),
    ("vd_luma",         "Luma AI",           "https://lumalabs.ai/"),
    ("vd_midjourney",   "Midjourney",        "https://midjourney.com/"),
    ("tl_telnyx",       "Telnyx",            "https://telnyx.com/"),
    ("tl_twilio",       "Twilio",            "https://twilio.com/"),
    ("ui_shadcn",       "shadcn/ui",         "https://ui.shadcn.com/"),
    ("ui_mui",          "MUI",               "https://mui.com/"),
    ("ui_magic",        "Magic UI",          "https://magicui.design/"),
    ("ui_aceternity",   "Aceternity",        "https://ui.aceternity.com/"),
    ("gg_sheets",       "Google Sheets",     "https://sheets.google.com/"),
    ("gg_calendar",     "Google Calendar",   "https://calendar.google.com/"),
    ("gg_analytics",    "Google Analytics",  "https://analytics.google.com/"),
    ("gg_apollo",       "Apollo",            "https://apollo.io/"),
    ("gg_hunter",       "Hunter.io",         "https://hunter.io/"),
    ("gg_notebooklm",   "NotebookLM",        "https://notebooklm.google.com/"),
]

# ── HELPERS ───────────────────────────────────────────────────────────────────
def domain_of(url):
    try:
        d = urlparse(url).netloc
        return d.lstrip("www.")
    except:
        return ""

def safe_name(s):
    return re.sub(r"[^\w\-]", "_", s).strip("_").lower()

def fetch(url, stream=False):
    try:
        r = requests.get(url, headers=HEADERS, timeout=TIMEOUT, stream=stream)
        if r.status_code == 200:
            return r
    except Exception:
        pass
    return None

def to_pil(data):
    try:
        img = Image.open(io.BytesIO(data)).convert("RGBA")
        return img
    except Exception:
        return None

def is_transparent(img):
    if img.mode != "RGBA":
        return False
    a = img.split()[3]
    return a.getextrema()[0] < 240   # has some transparent pixels

def remove_bg_color(img, tolerance=30):
    """Remove solid white/light background via flood-fill approach."""
    img = img.convert("RGBA")
    data = img.load()
    w, h = img.size
    # Sample corners to detect background color
    corners = [data[0,0], data[w-1,0], data[0,h-1], data[w-1,h-1]]
    # Pick most common corner color
    bg = max(set(corners), key=corners.count)[:3]
    r,g,b = bg
    # Make pixels matching bg color transparent
    pixels = img.getdata()
    new_pixels = []
    for px in pixels:
        pr,pg,pb,pa = px
        if (abs(pr-r)<tolerance and abs(pg-g)<tolerance and abs(pb-b)<tolerance
                and (r>180 and g>180 and b>180)):  # only remove light backgrounds
            new_pixels.append((pr,pg,pb,0))
        else:
            new_pixels.append(px)
    img.putdata(new_pixels)
    return img

def remove_background(img):
    """Try rembg first, fall back to simple color removal."""
    if not is_transparent(img):
        if REMBG:
            try:
                buf = io.BytesIO()
                img.save(buf, format="PNG")
                result = rembg_remove(buf.getvalue(), session=REMBG_SESSION)
                out = Image.open(io.BytesIO(result)).convert("RGBA")
                # If rembg nuked too much, fall back
                a = out.split()[3]
                non_zero = sum(1 for p in a.getdata() if p > 10)
                if non_zero > 100:
                    return out
            except Exception as e:
                pass
        # Fallback: simple color removal
        img = remove_bg_color(img)
    return img

def resize(img, size=SIZE):
    img.thumbnail((size, size), Image.LANCZOS)
    out = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    x = (size - img.width) // 2
    y = (size - img.height) // 2
    out.paste(img, (x, y), img if img.mode == "RGBA" else None)
    return out

# ── FETCH STRATEGIES ──────────────────────────────────────────────────────────
def try_clearbit(domain):
    url = f"https://logo.clearbit.com/{domain}"
    r = fetch(url)
    if r:
        img = to_pil(r.content)
        if img and img.width >= 32:
            return img, "clearbit"
    return None, None

def try_brandfetch(domain):
    # BrandFetch CDN (public, no key needed for basic logos)
    url = f"https://cdn.brandfetch.io/{domain}/w/400/h/400?c=1idFjgBpJbX8uuH1cVp"
    r = fetch(url)
    if r and len(r.content) > 1000:
        img = to_pil(r.content)
        if img and img.width >= 32:
            return img, "brandfetch"
    return None, None

def try_scrape_og(site_url):
    if not BS4:
        return None, None
    r = fetch(site_url)
    if not r:
        return None, None
    try:
        soup = BeautifulSoup(r.text, "html.parser")
        candidates = []
        # og:image
        og = soup.find("meta", property="og:image")
        if og and og.get("content"):
            candidates.append(og["content"])
        # apple-touch-icon
        for rel in ["apple-touch-icon", "apple-touch-icon-precomposed"]:
            link = soup.find("link", rel=rel)
            if link and link.get("href"):
                href = link["href"]
                if not href.startswith("http"):
                    from urllib.parse import urljoin
                    href = urljoin(site_url, href)
                candidates.append(href)
        # logo img tag
        for img_tag in soup.find_all("img"):
            src = img_tag.get("src","")
            alt = img_tag.get("alt","").lower()
            cls = " ".join(img_tag.get("class",[])).lower()
            if "logo" in alt or "logo" in src.lower() or "logo" in cls:
                if not src.startswith("http"):
                    from urllib.parse import urljoin
                    src = urljoin(site_url, src)
                candidates.append(src)
                break
        for c in candidates[:3]:
            ri = fetch(c)
            if ri and len(ri.content) > 500:
                img = to_pil(ri.content)
                if img and img.width >= 32:
                    return img, "scraped"
    except Exception:
        pass
    return None, None

def try_google_favicon(domain):
    url = f"https://www.google.com/s2/favicons?domain={domain}&sz=256"
    r = fetch(url)
    if r:
        img = to_pil(r.content)
        if img:
            return img, "favicon"
    return None, None

def try_duckduckgo(domain):
    url = f"https://icons.duckduckgo.com/ip3/{domain}.ico"
    r = fetch(url)
    if r and len(r.content) > 200:
        img = to_pil(r.content)
        if img:
            return img, "ddg"
    return None, None

# ── MAIN PIPELINE ─────────────────────────────────────────────────────────────
def fetch_logo(site_id, label, url):
    domain = domain_of(url)
    print(f"  [{site_id}] {label} ({domain})")

    img, source = None, None

    # Stage 1: Clearbit
    img, source = try_clearbit(domain)

    # Stage 2: BrandFetch
    if img is None:
        time.sleep(DELAY)
        img, source = try_brandfetch(domain)

    # Stage 3: Scrape OG / apple-touch-icon
    if img is None:
        time.sleep(DELAY)
        img, source = try_scrape_og(url)

    # Stage 4: Google favicon
    if img is None:
        time.sleep(DELAY)
        img, source = try_google_favicon(domain)

    # Stage 5: DDG
    if img is None:
        time.sleep(DELAY)
        img, source = try_duckduckgo(domain)

    if img is None:
        print(f"    ✗ Failed all sources")
        return None

    # Remove background
    try:
        img = remove_background(img)
    except Exception as e:
        print(f"    ⚠ BG removal error: {e}")

    # Resize + center
    try:
        img = resize(img, SIZE)
    except Exception as e:
        print(f"    ⚠ Resize error: {e}")

    # Save
    fname = safe_name(site_id) + ".png"
    fpath = OUT_DIR / fname
    img.save(fpath, "PNG", optimize=True)
    print(f"    ✓ {source} → {fname} ({img.width}x{img.height})")
    return {"path": f"logos/{fname}", "source": source, "w": img.width, "h": img.height}

def run():
    OUT_DIR.mkdir(exist_ok=True)
    manifest = {}
    ok = 0
    fail = 0

    total = len(SITES)
    print(f"\n🦊 AEON OPS Logo Bot — {total} sites\n")

    for i, (site_id, label, url) in enumerate(SITES, 1):
        print(f"[{i}/{total}]", end=" ")
        result = fetch_logo(site_id, label, url)
        if result:
            manifest[site_id] = {"label": label, "url": url, **result}
            ok += 1
        else:
            manifest[site_id] = {"label": label, "url": url, "path": None, "source": None}
            fail += 1
        time.sleep(DELAY)

    # Write manifest
    MANIFEST.write_text(json.dumps(manifest, indent=2))
    print(f"\n✓ Manifest → {MANIFEST}")

    # Write patch JS — drop this into the dashboard HTML before </body>
    patch_lines = [
        "/* AEON OPS Logo Patch — auto-generated */",
        "(function(){",
        "  const LOGOS=" + json.dumps({
            sid: d["path"]
            for sid, d in manifest.items() if d.get("path")
        }, indent=4) + ";",
        "",
        "  // Map dashboard card IDs to logo keys",
        "  const ID_MAP = {",
    ]
    # Build mapping from dashboard card ids to logo keys
    id_map = {
        "ai1":  "ai_claude",
        "ai2":  "ai_chatgpt",
        "ai3":  "ai_codex",
        "ai4":  "ai_grok",
        "ai5":  "ai_gemini",
        "ai6":  "ai_perplexity",
        "ai7":  "ai_mistral",
        "ai8":  "ai_deepseek",
        "ai9":  "ai_meta",
        "ai10": "ai_copilot",
        "ai11": "ai_kimi",
        "ai12": "ai_genspark",
        "ai13": "ai_minimax",
        "ai14": "ai_elevenlabs",
        "ai15": "ai_capcut", # maxai - no exact match, skip
        "ai16": "ai_capcut",
        "ai17": "ai_requesty",
        "ai18": "ai_polsia",  # athenalab
        "ai19": "ai_polsia",
        "ai20": "ai_xai",
        "ai21": "ai_livekit",
        "ai22": "ai_fastgpt",
        "ai27": "ai_huggingface",
        "ai28": "ai_creatify",
        "ai31": "ai_zencoder",
        "ai33": "ai_roocode",
        "ai34": "ai_lambda",
        "ai35": "ai_collaby",
        "ai36": "ai_livekit",
        "ai37": "ai_anthropic",
        "ai38": "ai_openai",
        "ai39": "ai_gemini",
        "ai40": "ai_lovable",
        "dv1":  "dv_github",
        "dv2":  "dv_github",
        "dv3":  "dv_gitlab",
        "dv4":  "dv_vercel",
        "dv5":  "dv_v0",
        "dv6":  "dv_supabase",
        "dv7":  "dv_supabase",
        "dv8":  "dv_airtable",
        "dv9":  "dv_stripe",
        "dv10": "dv_n8n",
        "dv11": "dv_zitadel",
        "dv12": "dv_cloudflare",
        "dv13": "dv_cloudflare",
        "dv14": "dv_clerk",
        "dv15": "dv_railway",
        "dv16": "dv_digitalocean",
        "dv17": "dv_hivelocity",
        "dv18": "dv_hetzner",
        "dv19": "dv_vast",
        "dv20": "dv_lightning",
        "dv21": "dv_replicate",
        "dv22": "dv_windsurf",
        "dv23": "dv_cursor",
        "dv24": "dv_augment",
        "dv25": "dv_sentry",
        "dv26": "dv_posthog",
        "dv27": "dv_zapier",
        "dv34": "dv_notion",
        "ad1":  "ad_gmail",
        "ad2":  "ad_neo",
        "ad3":  "ad_mercury",
        "ad6":  "ad_gcloud",
        "ad7":  "ad_gdrive",
        "ad14": "ad_ghl",
        "ad15": "ad_spotify",
        "ad16": "ad_telegram",
        "ad17": "ad_canva",
        "ad12": "ad_azure",
        "vd1":  "vd_hailuo",
        "vd3":  "vd_leonardo",
        "vd4":  "vd_kling",
        "vd5":  "vd_runway",
        "vd6":  "vd_invideo",
        "vd9":  "vd_synthesia",
        "vd10": "vd_ltx",
        "vd11": "vd_visla",
        "vd12": "vd_luma",
        "vd14": "vd_midjourney",
        "tl2":  "tl_telnyx",
        "tl3":  "tl_telnyx",
        "tl4":  "tl_twilio",
        "ui1":  "ui_shadcn",
        "ui2":  "ui_mui",
        "ui10": "ui_magic",
        "ui11": "ui_aceternity",
        "gg1":  "gg_sheets",
        "gg4":  "gg_calendar",
        "gg7":  "gg_analytics",
        "gg11": "gg_apollo",
        "gg12": "gg_hunter",
        "gg6":  "gg_notebooklm",
    }
    for cid, lid in id_map.items():
        patch_lines.append(f'    "{cid}": "{lid}",')
    patch_lines += [
        "  };",
        "",
        "  function swapIcons() {",
        "    document.querySelectorAll('.card').forEach(card => {",
        "      const cid = card.dataset.cardId;",
        "      const lid = ID_MAP[cid];",
        "      if (!lid || !LOGOS[lid]) return;",
        "      const icon = card.querySelector('.card-icon');",
        "      if (!icon) return;",
        "      icon.innerHTML = `<img src=\"${LOGOS[lid]}\" ",
        "        style=\"width:22px;height:22px;object-fit:contain;border-radius:4px;\" ",
        "        loading=\"lazy\" alt=\"\" onerror=\"this.parentElement.textContent=this.parentElement.dataset.fallback\">`;",
        "      icon.dataset.fallback = icon.textContent;",
        "    });",
        "  }",
        "",
        "  // Run after cards are rendered",
        "  const obs = new MutationObserver(() => swapIcons());",
        "  obs.observe(document.getElementById('sections-container'), {childList:true, subtree:true});",
        "  swapIcons();",
        "})();",
    ]
    PATCH_JS.write_text("\n".join(patch_lines))
    print(f"✓ Patch JS → {PATCH_JS}")
    print(f"\n{'═'*48}")
    print(f"  ✓ Success : {ok}")
    print(f"  ✗ Failed  : {fail}")
    print(f"  Total     : {total}")
    print(f"{'═'*48}")
    print(f"\nNext steps:")
    print(f"  1. Copy logos/ folder to your Vercel project root")
    print(f"  2. Add to index.html before </body>:")
    print(f'     <script src="logo_patch.js"></script>')
    print(f"  3. Deploy — logos auto-swap into every card icon\n")

if __name__ == "__main__":
    run()
