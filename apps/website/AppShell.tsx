import * as React from "react";
import { Command as CommandIcon, Github, Moon, Sun, SunMoon } from "lucide-react";
import { cn } from "@nuvo-code/core";
import {
  NcButton,
  NcBadge,
  NcKbd,
  NcDot,
  NcSidebar,
  NcWordmark,
  NcCommandMenu,
  NcTooltipProvider,
} from "@nuvo-code/core";
import { useTheme, themes, type ThemeName } from "@nuvo-code/core/core";
import { groups, pages, pagesBySlug } from "./registry/pages";

function readHashSlug() {
  if (typeof window === "undefined") return "intro";
  const hash = window.location.hash.replace(/^#\/?/, "");
  return pagesBySlug.has(hash) ? hash : "intro";
}

export function AppShell() {
  const [slug, setSlug] = React.useState<string>(() => readHashSlug());
  const [cmdOpen, setCmdOpen] = React.useState(false);
  const { theme, setTheme } = useTheme();

  React.useEffect(() => {
    const sync = () => setSlug(readHashSlug());
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  React.useEffect(() => {
    if (window.location.hash !== `#/${slug}`) {
      window.history.replaceState(null, "", `#/${slug}`);
    }
    document.querySelector("main")?.scrollTo({ top: 0 });
  }, [slug]);

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setCmdOpen((o) => !o);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const Page = pagesBySlug.get(slug)!.component;

  return (
    <NcTooltipProvider delayDuration={150}>
      <div className="flex h-screen flex-col overflow-hidden bg-bg text-fg">
        <header className={cn(
          "flex h-[54px] shrink-0 items-center justify-between border-b px-5 backdrop-blur-[14px] transition-colors duration-300",
          "bg-bg/80 border-border-subtle",
          "theme-dark:bg-[rgb(9_9_11_/_0.78)] theme-dark:border-border-subtle",
          "theme-soft-dark:bg-[rgb(14_14_18_/_0.78)] theme-soft-dark:border-border-subtle",
          "theme-light:glass-light theme-light:border-border-strong",
        )}>
          <div className="flex items-center gap-3">
            <NcWordmark size={20} />
            <span className="hidden text-[12px] text-fg-subtle md:inline">Design System</span>
            <NcBadge tone="neutral" size="sm">v0.3 · INTERNAL</NcBadge>
          </div>

          <button
            onClick={() => setCmdOpen(true)}
            className="hidden h-9 w-80 items-center gap-2 rounded-[8px] border border-border bg-surface-1 px-3 text-[12.5px] text-fg-faint transition-colors hover:border-border-strong hover:text-fg-subtle md:inline-flex"
          >
            <CommandIcon size={13} />
            <span className="flex-1 text-left">Search components, docs…</span>
            <NcKbd>⌘</NcKbd>
            <NcKbd>K</NcKbd>
          </button>

          <div className="flex items-center gap-1.5">
            <ThemeSwitcher value={theme} onChange={setTheme} />
            <NcButton variant="ghost" size="icon" aria-label="Source">
              <Github size={14} />
            </NcButton>
            <span className="ml-2 flex items-center gap-1.5 font-mono text-[10.5px] text-fg-faint">
              <NcDot tone="green" pulse /> Active
            </span>
          </div>
        </header>

        <div className="flex flex-1 overflow-hidden">
          <NcSidebar
            className="w-[256px]"
            activeId={slug}
            onSelect={setSlug}
            groups={groups}
          />
          <main className="flex-1 overflow-y-auto bg-bg">
            <Page />
          </main>
        </div>

        <NcCommandMenu
          open={cmdOpen}
          onOpenChange={setCmdOpen}
          items={pages.map((p) => ({
            id: p.slug,
            label: p.label,
            hint: p.group,
            icon: p.icon,
            group: p.group,
            onSelect: () => setSlug(p.slug),
          }))}
        />
      </div>
    </NcTooltipProvider>
  );
}

function ThemeSwitcher({ value, onChange }: { value: ThemeName; onChange: (t: ThemeName) => void }) {
  const idx = themes.findIndex((t) => t.name === value);
  const next = themes[(idx + 1) % themes.length].name;
  const icon = value === "light" ? <Sun size={14} /> : value === "dark" ? <Moon size={14} /> : <SunMoon size={14} />;
  return (
    <NcButton
      variant="ghost"
      size="icon"
      aria-label={`Switch theme (currently ${value})`}
      onClick={() => onChange(next)}
    >
      {icon}
    </NcButton>
  );
}
