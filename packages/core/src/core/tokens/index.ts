/**
 * Design tokens — typed reference of the values defined in
 * src/styles/globals.css. Components should read CSS variables
 * via Tailwind utilities rather than importing values from here;
 * this module exists so tooling and the live docs can introspect
 * the system.
 */

export const colors = {
  surface: {
    bg: "var(--color-bg)",
    s1: "var(--color-surface-1)",
    s2: "var(--color-surface-2)",
    s3: "var(--color-surface-3)",
  },
  border: {
    subtle: "var(--color-border-subtle)",
    base: "var(--color-border)",
    strong: "var(--color-border-strong)",
  },
  fg: {
    base: "var(--color-fg)",
    muted: "var(--color-fg-muted)",
    subtle: "var(--color-fg-subtle)",
    faint: "var(--color-fg-faint)",
  },
  brand: {
    purple: "#a855f7",
    pink: "#ec4899",
    indigo: "#818cf8",
    orange: "#f97316",
  },
  signal: {
    green: "#4ade80",
    blue: "#60a5fa",
    amber: "#fbbf24",
    red: "#f87171",
  },
} as const;

export const radii = {
  xs: "4px",
  sm: "6px",
  md: "8px",
  lg: "12px",
  xl: "14px",
  "2xl": "20px",
  pill: "999px",
} as const;

export const spacing = {
  px: "1px",
  0.5: "2px",
  1: "4px",
  2: "8px",
  3: "12px",
  4: "16px",
  5: "20px",
  6: "24px",
  8: "32px",
  10: "40px",
  12: "48px",
  16: "64px",
  20: "80px",
} as const;

export const typography = {
  display: { size: "4.5rem", weight: 800, tracking: "-0.04em", line: 1 },
  h1: { size: "1.6rem", weight: 700, tracking: "-0.025em", line: 1.2 },
  h2: { size: "1.25rem", weight: 600, tracking: "-0.02em", line: 1.3 },
  h3: { size: "1.1rem", weight: 600, tracking: "-0.015em", line: 1.4 },
  body: { size: "0.875rem", weight: 400, tracking: "-0.005em", line: 1.6 },
  small: { size: "0.8125rem", weight: 400, tracking: "0", line: 1.6 },
  caption: { size: "0.6875rem", weight: 400, tracking: "0", line: 1.5 },
  mono: { size: "0.6875rem", weight: 400, tracking: "0.06em", line: 1.5 },
} as const;

export const shadows = {
  card: "0 24px 56px rgb(0 0 0 / 0.35)",
  glowAccent: "0 0 0 1px rgb(168 85 247 / 0.15), 0 8px 28px rgb(168 85 247 / 0.1)",
  pop: "0 12px 32px rgb(0 0 0 / 0.45)",
} as const;

export const motion = {
  fast: "150ms",
  base: "200ms",
  slow: "320ms",
  easeOutSoft: "cubic-bezier(0.2, 0.7, 0.2, 1)",
} as const;

export type ColorTokens = typeof colors;
export type RadiiTokens = typeof radii;
export type TypeTokens = typeof typography;
