# Vibe Hub

A personal project showcase built with React + Vite. Displays all projects from the VIBE:ADVANCED course as interactive cards with live status indicators.

## Features

- Project cards with title, description, tech stack tags, and module info
- Live status dot per card — pings each project URL on load (green = online, yellow = checking, red = offline)
- Responsive auto-fill grid layout
- Dark UI with subtle hover animations

## Tech Stack

- React 19
- React Router v7
- Vite 8
- Deployed on Vercel

## Projects Listed

| Project | Module | Stack |
|---|---|---|
| Quiz App | Module 5 | React, Supabase, Vercel |
| VIBE:ADVANCED | All modules | React, Vite, Supabase |
| Tip Calculator | Module 1 | React, Vite |
| Counter | Module 1 | React |
| Link-in-Bio | Module 6 | React, Supabase, Vercel |

## Dev

```bash
npm install
npm run dev
```

---

## Changelog

### 1.0.1 — 2026-04-25

- Fix Cloudflare Workers Assets deploy: replace `_redirects` with `wrangler.jsonc` SPA routing

### 1.0.0 — 2026-04-25

- Initial release: project showcase with 5 cards, live status dots, responsive grid, dark theme
