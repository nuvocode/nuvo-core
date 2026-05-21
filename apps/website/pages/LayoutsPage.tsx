import { Activity, Box, Eye, GitBranch, LayoutGrid, Server, Settings } from "lucide-react";
import { PageLayout } from "../registry/PageLayout";
import { Subsection } from "../registry/Showcase";
import { NcDot, NcStatBlock } from "@nuvocode/core";

export function LayoutsPage() {
  return (
    <PageLayout
      eyebrow="Composition · Layouts"
      title="Layouts"
      description="The OS-style workspace shell. Sidebar nav · main content · inspector column. Calm, dense, console-like."
    >
      <Subsection title="Workspace shell">
        <div className="flex h-[440px] overflow-hidden rounded-[14px] border border-border bg-bg">
          <aside className="flex w-[200px] shrink-0 flex-col gap-px border-r border-border-subtle bg-surface-1 p-3">
            <div className="px-2 pb-2 pt-1 font-mono text-[10px] uppercase tracking-[0.12em] text-fg-faint">
              WORKSPACE
            </div>
            {[
              { icon: LayoutGrid, label: "Overview", active: true },
              { icon: Box, label: "Deployments" },
              { icon: Activity, label: "Activity" },
              { icon: GitBranch, label: "Branches" },
            ].map((it) => (
              <div
                key={it.label}
                className={
                  it.active
                    ? "flex items-center gap-2 rounded-[7px] bg-surface-3 px-2.5 py-1.5 text-[12.5px] text-fg"
                    : "flex items-center gap-2 rounded-[7px] px-2.5 py-1.5 text-[12.5px] text-fg-subtle"
                }
              >
                <it.icon size={13} className={it.active ? "text-[--color-brand-purple]" : "text-fg-faint"} />
                {it.label}
              </div>
            ))}
            <div className="flex-1" />
            <div className="px-2 pb-2 pt-1 font-mono text-[10px] uppercase tracking-[0.12em] text-fg-faint">
              MODULES
            </div>
            {[
              { icon: Server, label: "Infrastructure" },
              { icon: Settings, label: "Settings" },
            ].map((it) => (
              <div key={it.label} className="flex items-center gap-2 rounded-[7px] px-2.5 py-1.5 text-[12.5px] text-fg-subtle">
                <it.icon size={13} className="text-fg-faint" />
                {it.label}
              </div>
            ))}
          </aside>
          <main className="grid-bg-sm flex-1 overflow-hidden p-5">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-[13px] font-semibold text-fg">Overview</span>
              <span className="flex items-center gap-1.5 font-mono text-[10.5px] text-fg-faint">
                <NcDot tone="green" pulse /> Live · 2s ago
              </span>
            </div>
            <div className="mb-3 grid grid-cols-3 gap-3">
              <NcStatBlock label="Deploys today" value="24" />
              <NcStatBlock label="Avg latency" value="8" unit="ms" delta={{ value: "12%", direction: "down", tone: "positive" }} />
              <NcStatBlock label="Active services" value="12" />
            </div>
            <div className="rounded-[10px] border border-border bg-surface-2 p-4">
              <div className="label-mono mb-3">THROUGHPUT · 7d</div>
              <div className="flex h-12 items-end gap-1">
                {[40, 60, 45, 80, 65, 90, 100].map((h, i) => (
                  <div
                    key={i}
                    className={
                      i === 6
                        ? "flex-1 rounded-t-sm bg-[image:var(--nc-grad)]"
                        : "flex-1 rounded-t-sm bg-[rgb(168_85_247_/_0.3)]"
                    }
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
          </main>
          <aside className="hidden w-[200px] shrink-0 flex-col gap-3 border-l border-border-subtle bg-surface-1 p-4 md:flex">
            <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-fg-faint">INSPECTOR</div>
            {[
              { k: "Service", v: "launchpad-api" },
              { k: "Environment", v: "production" },
              { k: "Last deploy", v: "2m ago" },
              { k: "Commit", v: "a3f8c12" },
            ].map((p, i) => (
              <div key={p.k} className={i < 3 ? "border-b border-border-subtle pb-2.5" : ""}>
                <div className="text-[10px] text-fg-faint">{p.k}</div>
                <div className="mt-0.5 text-[12px] text-fg-muted">{p.v}</div>
              </div>
            ))}
            <div className="mt-auto flex items-center gap-1.5 text-[11px] text-fg-faint">
              <Eye size={11} /> 1,284 sessions today
            </div>
          </aside>
        </div>
      </Subsection>
    </PageLayout>
  );
}
