import { PageLayout } from "../registry/PageLayout";
import { Subsection } from "../registry/Showcase";
import { NcDot } from "@nuvo-code/core";
import { NcTag } from "@nuvo-code/core";
import { NcDeployStatus } from "@nuvo-code/core";
import { NcTerminal } from "@nuvo-code/core";

export function PatternsPage() {
  return (
    <PageLayout
      eyebrow="Composition · Patterns"
      title="Patterns"
      slug="patterns"
      description="The recurring compositions that define Nuvo Code's voice — terminal output, deploy pipelines, edge region grids, infra telemetry."
    >
      <Subsection title="Terminal" description="Monospace command logs. Use for CLI examples, build output, and 'machine speaking' moments.">
        <NcTerminal
          title="nuvo-cli · ~/projects/launchpad"
          lines={[
            { kind: "command", text: "deploy --prod --watch" },
            { kind: "comment", text: "Initializing deployment pipeline..." },
            { kind: "output", tone: "success", text: "Environment validated" },
            { kind: "output", tone: "success", text: "Dependencies resolved", suffix: "(847ms)" },
            { kind: "output", tone: "success", text: "Build complete", suffix: "(2.3s)" },
            { kind: "output", tone: "success", text: "Tests passed", suffix: "(156 suites)" },
            { kind: "output", tone: "info", text: "Pushing to edge..." },
          ]}
        />
      </Subsection>

      <Subsection title="Deploy pipeline">
        <NcDeployStatus
          stages={[
            { id: "build", label: "Build", status: "done", duration: "2.3s" },
            { id: "test", label: "Test", status: "done", duration: "847ms" },
            { id: "deploy", label: "Deploy", status: "running", progress: 65 },
            { id: "health", label: "Health", status: "pending" },
          ]}
        />
      </Subsection>

      <Subsection title="Edge regions">
        <div className="rounded-[12px] border border-border bg-[#0d0d10] p-5">
          <div className="label-mono mb-4">EDGE REGIONS</div>
          <div className="flex flex-col gap-2 font-mono text-[11.5px]">
            {[
              { name: "US-EAST-1", latency: "8ms", tone: "green" as const },
              { name: "EU-WEST-2", latency: "14ms", tone: "green" as const },
              { name: "AP-SOUTH",  latency: "42ms", tone: "amber" as const, warn: true },
              { name: "US-WEST-2", latency: "11ms", tone: "green" as const },
            ].map((r) => (
              <div
                key={r.name}
                className={
                  r.warn
                    ? "flex items-center justify-between rounded-[6px] border border-[rgb(251_191_36_/_0.15)] bg-[rgb(251_191_36_/_0.06)] p-2"
                    : "flex items-center justify-between rounded-[6px] bg-surface-3 p-2"
                }
              >
                <span className="flex items-center gap-2">
                  <NcDot tone={r.tone} />
                  <span className={r.warn ? "text-[--color-signal-amber]" : "text-fg-muted"}>{r.name}</span>
                </span>
                <span className={r.warn ? "text-[--color-signal-amber]" : "text-fg-faint"}>{r.latency}</span>
              </div>
            ))}
          </div>
        </div>
      </Subsection>

      <Subsection title="Geometric infra panel" description="The angular voice for infrastructure surfaces.">
        <div className="overflow-hidden rounded-[12px] border border-border bg-[#0d0d10]">
          <div className="clip-notch border-b border-border bg-surface-3 px-5 py-3.5">
            <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-fg-muted">
              NUVOBUILD / INFRA
            </span>
          </div>
          <div className="p-5">
            <div className="mb-4 grid grid-cols-2 gap-3">
              {[
                { v: "847", label: "DEPLOYS" },
                { v: "99.9", label: "UPTIME %", color: "text-[--color-signal-green]" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="clip-notch-sm border border-border bg-surface-3 px-4 py-3 text-center"
                >
                  <div className={`text-[22px] font-bold tracking-[-0.02em] ${s.color ?? "text-fg"}`}>
                    {s.v}
                  </div>
                  <div className="mt-1 font-mono text-[9.5px] uppercase tracking-[0.1em] text-fg-faint">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
            <div className="border border-border border-l-[3px] border-l-[--color-brand-purple] bg-[rgb(168_85_247_/_0.04)] px-4 py-3 font-mono text-[11.5px] leading-relaxed text-fg-muted">
              <div>→ US-EAST-1 <NcTag tone="green" size="xs">HEALTHY</NcTag></div>
              <div>→ EU-WEST-2 <NcTag tone="green" size="xs">HEALTHY</NcTag></div>
              <div>→ AP-SOUTH <NcTag tone="amber" size="xs">WARN</NcTag></div>
            </div>
          </div>
        </div>
      </Subsection>
    </PageLayout>
  );
}
