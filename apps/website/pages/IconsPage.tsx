import * as React from "react";
import * as Icons from "lucide-react";
import { Search } from "lucide-react";
import { PageLayout } from "../registry/PageLayout";
import { Subsection } from "../registry/Showcase";
import { NcInput } from "@nuvo-code/core";

const featured = [
  "ArrowRight", "Sparkles", "Terminal", "Zap", "Search", "Settings", "Bell",
  "User", "Cloud", "Database", "GitBranch", "GitCommit", "Activity",
  "BarChart3", "PieChart", "Server", "Cpu", "Box", "Layers", "Code2",
  "Globe", "Lock", "Key", "Shield", "Filter", "Plus", "Minus", "Check",
  "X", "ChevronRight", "ChevronDown", "Eye",
];

export function IconsPage() {
  const [query, setQuery] = React.useState("");

  const filtered = React.useMemo(() => {
    if (!query.trim()) return featured;
    const q = query.toLowerCase();
    return featured.filter((name) => name.toLowerCase().includes(q));
  }, [query]);

  return (
    <PageLayout
      eyebrow="Foundations · Icons"
      title="Iconography"
      slug="icons"
      description="Lucide is the icon system. 1.5 stroke at 14px, 1px stroke at 12px. Icons inherit color from text and shrink to font-size in primitives."
    >
      <Subsection title="Import">
        <div className="rounded-[12px] border border-border bg-surface-1 p-4">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[12px] text-fg-muted">import &#123; Zap, Cloud, Shield &#125; from "lucide-react";</span>
            <button
              onClick={() => navigator.clipboard.writeText('import { Zap, Cloud, Shield } from "lucide-react";')}
              className="grid h-6 w-6 place-items-center rounded-[5px] text-fg-faint transition-colors hover:bg-surface-2 hover:text-fg"
              aria-label="Copy import"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
            </button>
          </div>
        </div>
      </Subsection>
      <Subsection title="Stroke + size">
        <div className="rounded-[12px] border border-border bg-surface-1 p-8">
          <div className="flex items-end justify-center gap-12">
            {[
              { size: 12, label: "12 / 1.5" },
              { size: 14, label: "14 / 1.5" },
              { size: 16, label: "16 / 1.5" },
              { size: 20, label: "20 / 1.75" },
              { size: 24, label: "24 / 2" },
            ].map((s) => (
              <div key={s.size} className="flex flex-col items-center text-fg-muted">
                <Icons.Zap size={s.size} strokeWidth={1.5} />
                <span className="mt-2 font-mono text-[10.5px] text-fg-faint">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </Subsection>

      <Subsection title="Library" description="A starter set commonly used across Nuvo product surfaces. Type to filter.">
        <div className="mb-3">
          <div className="relative w-full max-w-xs">
            <Search size={13} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-fg-faint" />
            <NcInput
              className="pl-9"
              placeholder="Filter icons…"
              value={query}
              onChange={(e) => setQuery((e.target as HTMLInputElement).value)}
            />
          </div>
        </div>
        <div className="grid grid-cols-4 gap-1 rounded-[12px] border border-border bg-surface-1 p-2 sm:grid-cols-6 md:grid-cols-8">
          {filtered.length === 0 ? (
            <div className="col-span-full py-12 text-center text-[13px] text-fg-subtle">
              No icons match "{query}"
            </div>
          ) : (
            filtered.map((name) => {
            const Icon = (Icons as unknown as Record<string, React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>>)[name];
            if (!Icon) return null;
            return (
              <div
                key={name}
                className="group flex aspect-square cursor-pointer flex-col items-center justify-center gap-1 rounded-[7px] text-fg-subtle transition-colors hover:bg-surface-3 hover:text-fg"
              >
                <Icon size={16} strokeWidth={1.5} />
                <span className="font-mono text-[9px] tracking-tight text-fg-faint opacity-0 transition-opacity group-hover:opacity-100">
                  {name}
                </span>
              </div>
            );
          })
          )}
        </div>
      </Subsection>
    </PageLayout>
  );
}
