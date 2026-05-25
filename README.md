# Cruz DigiDash

This folder is a Next.js App Router project for the React AEON OPS dashboard.

## What is in here

- `app/` - Next.js App Router files.
  - `app/page.tsx` renders the React dashboard root.
  - `app/layout.tsx` sets the page metadata.
  - `app/globals.css` contains the original dashboard styling.
- `src/components/` - client dashboard components.
- `src/lib/dashboard-data.ts` - typed default dashboard data extracted from the generated HTML.
- `src/lib/use-dashboard.ts` - localStorage-backed dashboard state and mutations.
- `public/The-Digi-Dash.html` - the original generated dashboard HTML source.
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
