import { Activity, ArrowUpRight, Bell, Box, ChevronDown, Cloud, GitBranch, LayoutGrid, Search, Server, Settings, Users } from "lucide-react";
import { NcButton } from "@/components/primitives/Button";
import { NcDot } from "@/components/primitives/Dot";
import { NcInput } from "@/components/primitives/Input";
import { NcTag } from "@/components/primitives/Tag";
import { NcDeployStatus } from "@/components/composites/DeployStatus";
import { NcLogo } from "@/components/composites/Logo";
import { NcSidebar } from "@/components/composites/Sidebar";
import { NcStatBlock } from "@/components/composites/StatBlock";
import { NcTerminal } from "@/components/composites/Terminal";

export function DashboardExample() {
  return (
    <div className="flex h-full overflow-hidden rounded-[14px] border border-border bg-bg">
      <NcSidebar
        activeId="overview"
        header={<NcLogo size={20} />}
        footer={
          <div className="flex items-center gap-2">
            <div className="grid h-7 w-7 place-items-center rounded-full bg-[image:var(--nc-grad)] text-[11px] font-semibold text-white">
              MZ
            </div>
            <div className="min-w-0 flex-1">
              <div className="truncate text-[12px] font-medium text-fg">Mehmet Ö.</div>
              <div className="truncate font-mono text-[10px] text-fg-faint">mehmet@nuvo.dev</div>
            </div>
            <ChevronDown size={12} className="text-fg-faint" />
          </div>
        }
        groups={[
          {
            id: "main",
            items: [
              { id: "overview", label: "Overview", icon: <LayoutGrid size={14} /> },
              { id: "deployments", label: "Deployments", icon: <Box size={14} />, badge: <NcTag tone="accent" size="xs">3</NcTag> },
              { id: "activity", label: "Activity", icon: <Activity size={14} /> },
              { id: "branches", label: "Branches", icon: <GitBranch size={14} /> },
              { id: "regions", label: "Edge regions", icon: <Cloud size={14} /> },
            ],
          },
          {
            id: "org",
            label: "Organization",
            items: [
              { id: "team", label: "Team", icon: <Users size={14} /> },
              { id: "infra", label: "Infrastructure", icon: <Server size={14} /> },
              { id: "settings", label: "Settings", icon: <Settings size={14} /> },
            ],
          },
        ]}
      />

      <div className="flex flex-1 flex-col overflow-hidden">
        <header className="flex h-14 shrink-0 items-center justify-between border-b border-border-subtle bg-surface-1 px-5">
          <div className="flex items-center gap-2 font-mono text-[11.5px] text-fg-faint">
            <span>nuvo</span>
            <span>/</span>
            <span>launchpad-api</span>
            <span>/</span>
            <span className="text-fg">overview</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search size={12} className="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 text-fg-faint" />
              <NcInput size="sm" placeholder="Search…" className="w-56 pl-7" />
            </div>
            <NcButton variant="ghost" size="icon" aria-label="Notifications">
              <Bell size={14} />
            </NcButton>
            <NcButton variant="primary" size="sm">
              <Cloud size={12} />
              Deploy
            </NcButton>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto bg-bg p-6">
          <div className="mb-6 flex items-end justify-between">
            <div>
              <div className="label-mono mb-1.5">PRODUCTION · US-EAST-1</div>
              <h1 className="text-[22px] font-semibold tracking-[-0.025em] text-fg">launchpad-api</h1>
              <div className="mt-1 flex items-center gap-2 text-[12px] text-fg-subtle">
                <NcDot tone="green" pulse />
                Operational · 99.97% uptime over 30d
              </div>
            </div>
            <NcButton variant="ghost" size="sm">
              View source <ArrowUpRight size={12} />
            </NcButton>
          </div>

          <div className="grid grid-cols-4 gap-3">
            <NcStatBlock label="REQUESTS · 1H" value="142.8" unit="k" delta={{ value: "8%", direction: "up", tone: "positive" }} caption="vs prior hour" />
            <NcStatBlock label="P99 LATENCY" value="12" unit="ms" delta={{ value: "8%", direction: "down", tone: "positive" }} />
            <NcStatBlock label="ERR RATE" value="0.03" unit="%" delta={{ value: "stable", direction: "flat", tone: "neutral" }} />
            <NcStatBlock label="EDGE NODES" value="48" delta={{ value: "2", direction: "up", tone: "positive" }} caption="new" />
          </div>

          <div className="mt-3 grid grid-cols-3 gap-3">
            <div className="col-span-2 rounded-[12px] border border-border bg-surface-1 p-5">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <div className="text-[13px] font-semibold text-fg">Request throughput</div>
                  <div className="text-[11.5px] text-fg-subtle">Past 24 hours · k/s</div>
                </div>
                <div className="flex items-center gap-1 font-mono text-[10.5px] text-fg-faint">
                  <NcTag tone="accent" size="xs">24h</NcTag>
                  <NcTag size="xs">7d</NcTag>
                  <NcTag size="xs">30d</NcTag>
                </div>
              </div>
              <div className="flex h-28 items-end gap-1">
                {Array.from({ length: 36 }).map((_, i) => {
                  const h = 25 + Math.abs(Math.sin(i / 2.4)) * 60 + (i > 28 ? 15 : 0);
                  return (
                    <div
                      key={i}
                      className={
                        i > 28
                          ? "flex-1 rounded-t-[2px] bg-[image:var(--nc-grad)]"
                          : "flex-1 rounded-t-[2px] bg-[rgb(168_85_247_/_0.25)]"
                      }
                      style={{ height: `${h}%` }}
                    />
                  );
                })}
              </div>
              <div className="mt-3 flex justify-between font-mono text-[10px] text-fg-faint">
                <span>00:00</span><span>06:00</span><span>12:00</span><span>18:00</span><span>now</span>
              </div>
            </div>

            <NcDeployStatus
              title="LATEST DEPLOY"
              stages={[
                { id: "build", label: "Build", status: "done", duration: "2.3s" },
                { id: "test", label: "Test", status: "done", duration: "847ms" },
                { id: "deploy", label: "Deploy", status: "running", progress: 65 },
                { id: "health", label: "Health", status: "pending" },
              ]}
            />
          </div>

          <div className="mt-3 grid grid-cols-3 gap-3">
            <div className="col-span-2">
              <NcTerminal
                title="nuvo-cli · production logs"
                lines={[
                  { kind: "comment", text: "Streaming logs · launchpad-api · prod" },
                  { kind: "output", tone: "success", text: "GET /v1/projects 200 · 12ms · US-EAST-1" },
                  { kind: "output", tone: "info", text: "POST /v1/deploys 201 · 84ms · US-EAST-1" },
                  { kind: "output", tone: "success", text: "GET /v1/usage 200 · 9ms · EU-WEST-2" },
                  { kind: "output", tone: "warning", text: "GET /v1/usage 200 · 142ms · AP-SOUTH (cold)" },
                  { kind: "output", tone: "success", text: "GET /v1/projects 200 · 11ms · US-EAST-1" },
                ]}
              />
            </div>
            <div className="rounded-[12px] border border-border bg-[#0d0d10] p-5">
              <div className="label-mono mb-3">EDGE REGIONS</div>
              <div className="flex flex-col gap-2 font-mono text-[11px]">
                {[
                  { n: "US-EAST-1", l: "8ms", t: "green" as const },
                  { n: "US-WEST-2", l: "11ms", t: "green" as const },
                  { n: "EU-WEST-2", l: "14ms", t: "green" as const },
                  { n: "AP-SOUTH",  l: "42ms", t: "amber" as const },
                  { n: "SA-EAST-1", l: "21ms", t: "green" as const },
                ].map((r) => (
                  <div key={r.n} className="flex items-center justify-between rounded-[6px] bg-surface-3 p-2">
                    <span className="flex items-center gap-2">
                      <NcDot tone={r.t} />
                      <span className="text-fg-muted">{r.n}</span>
                    </span>
                    <span className="text-fg-faint">{r.l}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
