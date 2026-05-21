# Nuvo Core

Engineering systems for builders and modern products.

A scalable, token-driven, dark-first design system extracted from the Nuvo Code
design exploration board. Built with **React · TypeScript · Tailwind CSS v4 ·
Radix UI · CVA · Lucide**.

## Installation

```bash
pnpm add @nuvocode/core
```

## Quick Start

### 1. Import Components

```tsx
import { NcButton, NcCard, NcSidebar } from '@nuvocode/core';
```

### 2. Import Styles

Add this to your root file (e.g., `main.tsx` or `App.tsx`):

```tsx
import '@nuvocode/core/styles.css';
```

### 3. Use Theme Hook (Optional)

```tsx
import { useTheme } from '@nuvocode/core/core';

function App() {
  const { theme, setTheme } = useTheme();
  
  return (
    <div>
      <button onClick={() => setTheme('dark')}>Dark</button>
      <button onClick={() => setTheme('light')}>Light</button>
    </div>
  );
}
```

## Monorepo Structure

```
nuvo-core/
├── packages/
│   └── core/           # NPM package (@nuvocode/core)
│       ├── src/
│       ├── package.json
│       └── vite.lib.config.ts
└── apps/
    └── website/        # Nuvo Code website (CF Workers)
        ├── package.json
        └── vite.config.ts
```

## Development

### Install Dependencies

```bash
pnpm install
```

### Run Core Package (Library Watch Mode)

```bash
pnpm dev:core
```

### Run Website

```bash
pnpm dev:website
```

### Build

```bash
# Build everything
pnpm build

# Build only core package
pnpm build:core

# Build only website
pnpm build:website
```

## Architecture

### Core Package (`@nuvocode/core`)

```
packages/core/src/
  components/
    primitives/   — atomic components (NcButton, NcInput, NcCard, …)
    composites/   — complex components (NcSidebar, NcTerminal, NcCommandMenu)
    layouts/      — page shells (NcAppShell)
  core/
    tokens/       — typed design tokens
    themes/       — theme switcher hook (useTheme)
    utils/        — cn() and shared helpers
  styles/
    globals.css   — CSS variables and theme definitions
```

### Website (`apps/website`)

The website consumes the core package via workspace linking:
```json
{
  "dependencies": {
    "@nuvocode/core": "workspace:*"
  }
}
```

## Design Language

- **Dark-first** — three themes, all driven by CSS variables on `:root`
- **Sharp** — tight radii, no rounded-full buttons, calibrated whitespace
- **Engineering voice** — Inter for prose, JetBrains Mono for labels/metrics
- **Information motion** — pulses signal liveness, hovers lift 2px, never decorative

## Component Naming

All public components are prefixed `Nc` (`NcButton`, `NcSidebar`, `NcTerminal`).
Tokens use semantic names: `bg`, `surface-1..3`, `border-subtle..strong`,
`fg`, `fg-muted..faint`.

## Available Components

### Primitives

- `NcButton` — Button with variants (primary, secondary, ghost, outline, accent, destructive, link)
- `NcInput` — Text input with sizes (sm, md, lg)
- `NcTextarea` — Multi-line text input
- `NcCard` — Card container with header, content, footer
- `NcTag` — Small label/tag component
- `NcBadge` — Status badge with variants
- `NcDot` — Small dot indicator
- `NcDivider` — Horizontal/vertical divider
- `NcKbd` — Keyboard key display
- `NcProgressBar` — Progress indicator
- `NcSwitch` — Toggle switch
- `NcTabs` — Tab navigation
- `NcDialog` — Modal dialog
- `NcTooltip` — Tooltip popup
- `NcDropdownMenu` — Dropdown menu

### Composites

- `NcSidebar` — Navigation sidebar with groups
- `NcNavbar` — Top navigation bar
- `NcTerminal` — Terminal window simulation
- `NcStatBlock` — Statistics display block
- `NcCommandMenu` — Command palette (cmdk)
- `NcEmptyState` — Empty state placeholder
- `NcDeployStatus` — Deployment status indicator
- `NcSectionContainer` — Content container
- `NcCodeBlock` — Code display with syntax highlighting
- `NcGridBackground` — Grid pattern background
- `NcGlowOrb` — Decorative glow effect
- `NcLogo` — Nuvo Code logo

### Layouts

- `NcAppShell` — Main application layout

### Utilities

- `useTheme()` — Theme management hook
- `themes` — Available themes list
- `cn()` — Class merge utility
- Design tokens (colors, radii, typography, spacing, shadows, motion)

## Scripts

| Script          | Purpose                              |
| --------------- | ------------------------------------ |
| `dev:core`      | Core package watch mode              |
| `dev:website`   | Website dev server                   |
| `build:core`    | Build NPM package                    |
| `build:website` | Build website (CF Workers)           |
| `build`         | Build everything                     |
| `typecheck`     | TypeScript type checking             |

## Publishing

Publishing is automated via GitHub Actions and Semantic Release:

1. Commit with conventional commit format:
   - `feat: add NcTooltip component` → minor version
   - `fix: button hover state` → patch version
   - `BREAKING CHANGE: ...` → major version

2. Push to `main` branch

3. GitHub Actions will:
   - Run tests and build
   - Publish to npm (`@nuvocode/core`)
   - Create GitHub release
   - Update CHANGELOG

## License

MIT © Nuvo Code

---

@nuvocode/core · v0.1.0 · 2026
