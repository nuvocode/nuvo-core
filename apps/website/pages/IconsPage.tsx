import * as Icons from "lucide-react";
import { PageLayout } from "../registry/PageLayout";
import { Subsection } from "../registry/Showcase";

const featured = [
  "ArrowRight", "Sparkles", "Terminal", "Zap", "Search", "Settings", "Bell",
  "User", "Cloud", "Database", "GitBranch", "GitCommit", "Activity",
  "BarChart3", "PieChart", "Server", "Cpu", "Box", "Layers", "Code2",
  "Globe", "Lock", "Key", "Shield", "Filter", "Plus", "Minus", "Check",
  "X", "ChevronRight", "ChevronDown", "Eye",
];

export function IconsPage() {
  return (
    <PageLayout
      eyebrow="Foundations · Icons"
      title="Iconography"
      description="Lucide is the icon system. 1.5 stroke at 14px, 1px stroke at 12px. Icons inherit color from text and shrink to font-size in primitives."
    >
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

      <Subsection title="Library" description="A starter set commonly used across Nuvo product surfaces.">
        <div className="grid grid-cols-4 gap-1 rounded-[12px] border border-border bg-surface-1 p-2 sm:grid-cols-6 md:grid-cols-8">
          {featured.map((name) => {
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
          })}
        </div>
      </Subsection>
    </PageLayout>
  );
}
