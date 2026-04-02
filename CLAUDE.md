# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run lint     # ESLint check
```

No test runner is configured yet.

## Architecture

This is a **Next.js 16 App Router** tournament discovery app using **Feature Sliced Design (FSD)**. Layers are strictly separated and imported via path aliases:

| Alias | Layer | Purpose |
|-------|-------|---------|
| `@app/*` | app | Next.js routing, layouts, providers |
| `@pages/*` | pages | Page-level async components |
| `@widgets/*` | widgets | Composite UI blocks (header, footer, modal content) |
| `@features/*` | features | Feature-specific logic |
| `@entities/*` | entities | Domain models, types, and API classes |
| `@shared/*` | shared | HTTP client, UI primitives, utils, styles, constants |

FSD import direction: `app → pages → widgets → features → entities → shared`. Never import upward.

### Modal UX via Parallel Routes

Tournament modals use Next.js parallel + intercept routes:
- `src/app/@modals/(.)tournament/[id]/` intercepts `/tournament/[id]` navigations and renders a modal overlay
- `src/app/tournament/[id]/` is the standalone page for direct URL access
- Dismissal uses `router.back()` — the modal is a client component for this reason

### Data Fetching

API calls go through `HttpClient` (`src/shared/configs/api-client/httpClient.ts`) — an Axios-style fetch wrapper that prefixes `NEXT_PUBLIC_API_URL`, serializes JSON, and throws `HttpError` on non-2xx responses.

Domain APIs (e.g., `TournamentApi` in `src/entities/tournament/api/`) extend `HttpClient` and wrap methods with `React.cache()` for deduplication. Pages use the `'use cache'` directive with a 300-second TTL and cache tags (e.g., `['tournaments']`, `['tournament-${id}']`) for selective revalidation.

### Theming

Three themes: `light`, `dark`, `neon` (plus `system`). Managed by `next-themes` via a `data-theme` attribute. CSS variables for all colors are defined in `src/shared/styles/root.css`. Theme constants live in `src/shared/const/theme.ts`.

### Client vs Server Components

Components are Server Components by default. Add `'use client'` only when needed (router hooks, browser APIs, event handlers). The modal UI and header theme switcher are the main client components.

## Code Style

- **No semicolons**, **single quotes**, **4-space indentation**, print width 250
- `no-console` is a warning — avoid leaving console calls in committed code
- Imports are ordered and unused imports are auto-detected (eslint-plugin-unused-imports)
- Run `npm run lint` before committing; Prettier formatting is enforced via ESLint

## Environment

Requires `NEXT_PUBLIC_API_URL` in `.env` pointing to the tournaments API.
