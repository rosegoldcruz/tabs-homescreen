# Cruz DigiDash

This folder is now a minimal Next.js App Router project that hosts the generated AEON OPS dashboard.

## What is in here

- `app/` - Next.js App Router files.
  - `app/page.tsx` renders the dashboard in a full-screen iframe.
  - `app/layout.tsx` sets the page metadata.
  - `app/globals.css` removes browser chrome around the iframe.
- `public/The-Digi-Dash.html` - the working generated dashboard HTML served by Next.
- `public/logo_patch.js` - the generated script that swaps emoji card icons for company logos.
- `public/logos/` - transparent PNG logo assets served at `/logos/...`.
- `The-Digi-Dash.html`, `logo_patch.js`, `logo_bot.py`, and `logos/` - the original generated source/export files.

## Run it

```powershell
npm.cmd run dev
```

Then open:

```text
http://localhost:3000
```

## Build it

```powershell
npm.cmd run build
```

## Notes

PowerShell script execution is disabled on this machine, so use `npm.cmd` instead of `npm`.

This first pass keeps the generated dashboard behavior intact. The next cleanup step is to move the HTML script into React components and state, then remove the iframe and render the cards/logos directly from typed data.
