import { useEffect, useState } from "react";

export type ThemeName = "dark" | "soft-dark" | "light";

const STORAGE_KEY = "nuvo-core:theme";
const CLASS_MAP: Record<ThemeName, string> = {
  dark: "theme-dark",
  "soft-dark": "theme-soft-dark",
  light: "theme-light",
};

function applyTheme(theme: ThemeName) {
  const root = document.documentElement;
  Object.values(CLASS_MAP).forEach((cls) => root.classList.remove(cls));
  root.classList.add(CLASS_MAP[theme]);
  root.dataset.theme = theme;
}

function readStoredTheme(): ThemeName {
  if (typeof window === "undefined") return "dark";
  const stored = window.localStorage.getItem(STORAGE_KEY) as ThemeName | null;
  return stored && stored in CLASS_MAP ? stored : "dark";
}

export function useTheme() {
  const [theme, setThemeState] = useState<ThemeName>(() => readStoredTheme());

  useEffect(() => {
    applyTheme(theme);
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  return { theme, setTheme: setThemeState } as const;
}

export const themes: { name: ThemeName; label: string; description: string }[] = [
  { name: "dark", label: "Dark", description: "Primary — pure zinc base, maximum contrast." },
  { name: "soft-dark", label: "Soft Dark", description: "Warmer, lower-contrast variant for long sessions." },
  { name: "light", label: "Light", description: "Inverted scale. Use for printable & embed contexts." },
];
