AEON OPS — Logo Pack
====================
77 logos fetched, backgrounds removed (transparent PNG, 128x128)

DEPLOY TO VERCEL:
─────────────────
1. Add logos/ folder to your Vercel project root (next to index.html)
2. Add logo_patch.js to project root
3. Add ONE line to index.html before </body>:
   <script src="logo_patch.js"></script>
4. git push → Vercel auto-deploys

HOW IT WORKS:
─────────────
logo_patch.js watches the dashboard and swaps every emoji icon
for the real company logo automatically — even after drag-drops
and tab switches (MutationObserver re-runs on every re-render).

RE-RUN THE BOT:
───────────────
python3 logo_bot.py
Fetches any new sites you added to SITES list.
Skips files already in logos/ folder (add skip logic if needed).

MISSING LOGOS:
──────────────
Check logo_manifest.json for path=null entries.
Add manually to logos/ as {site_id}.png (128x128, transparent PNG).
