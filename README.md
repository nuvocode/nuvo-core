# Nuvo Core

Engineering systems for builders and modern products.

A scalable, token-driven, dark-first design system extracted from the Nuvo Code
design exploration board. Built with **React · TypeScript · Tailwind CSS v4 ·
Radix UI · CVA · Lucide**.

## Getting started

```bash
pnpm install
pnpm dev
```

The dev server opens a live documentation viewer at `http://localhost:5173`.

## Architecture

```
src/
  core/
    tokens/       — typed reference of the token contract
    themes/       — theme switcher hook (dark · soft-dark · light)
    utils/        — cn() and shared helpers
  components/
    primitives/   — atomic, single-purpose (Button, Input, Card, Tag, …)
    composites/   — assembled from primitives (Sidebar, Terminal, CommandMenu)
    layouts/      — page shells (AppShell)
  registry/       — pages + Showcase used by the live docs
  pages/          — documentation pages (one per component family)
  examples/       — real-world compositions (Dashboard, AIChat, Auth)
  styles/
    globals.css   — @theme tokens · themes · keyframes · utility layer
```

## Design language

- **Dark-first** — three themes, all driven by CSS variables on `:root`
- **Sharp** — tight radii, no rounded-full buttons, calibrated whitespace
- **Engineering voice** — Inter for prose, JetBrains Mono for labels/metrics
- **Information motion** — pulses signal liveness, hovers lift 2px, never decorative

## Component naming

All public components are prefixed `Nc` (`NcButton`, `NcSidebar`, `NcTerminal`).
Tokens use semantic names: `bg`, `surface-1..3`, `border-subtle..strong`,
`fg`, `fg-muted..faint`.

## Scripts

| Script        | Purpose                  |
| ------------- | ------------------------ |
| `dev`         | Vite dev server          |
| `build`       | Type-check + bundle      |
| `preview`     | Preview production build |
| `typecheck`   | tsc no-emit              |

---

Internal · v0.3 · 2026
