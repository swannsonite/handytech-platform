# HandyTech Platform

Multi-tenant Field Service PWA (beta foundation).

## Stack
- Vite + React + TypeScript
- PWA via vite-plugin-pwa
- Backend target: Supabase (Postgres + Auth + Storage + RLS) — not yet wired

## Local development
```bash
npm install
npm run dev
```

## Workflow
- Feature branches only
- Grok pushes feature branches
- User reviews and merges
- Deploy target: `app.muletownhandytech.com` from `main`

## Principles
- Location-isolated multi-tenancy from day one
- RLS for all data access
- Operator (office + tech) and customer experience first
- Abstractions kept so future native clients remain possible
