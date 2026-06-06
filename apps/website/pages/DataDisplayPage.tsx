import { PageLayout } from "../registry/PageLayout";
import { PropTable, Showcase, Subsection } from "../registry/Showcase";
import { NcBadge } from "@nuvo-code/core";
import { NcDot } from "@nuvo-code/core";
import { NcProgressBar } from "@nuvo-code/core";
import { NcTag } from "@nuvo-code/core";
import { NcStatBlock } from "@nuvo-code/core";

const tableRows = [
  { id: "dpl_a3f8c12", svc: "launchpad-api", env: "production", status: "ready", time: "2m ago" },
  { id: "dpl_b04e2f1", svc: "lens-worker", env: "production", status: "ready", time: "12m ago" },
  { id: "dpl_c1d2e8a", svc: "studio-web", env: "preview", status: "building", time: "21s ago" },
  { id: "dpl_d77c11b", svc: "ai-router", env: "production", status: "failed", time: "1h ago" },
];

const statusMap = {
  ready: { tone: "green" as const, label: "Ready" },
  building: { tone: "amber" as const, label: "Building" },
  failed: { tone: "red" as const, label: "Failed" },
};

export function DataDisplayPage() {
  return (
    <PageLayout
      eyebrow="Components · Data"
      title="Data display"
      slug="data"
      related={[{ slug: "feedback", label: "Feedback" }, { slug: "cards", label: "Cards" }, { slug: "patterns", label: "Patterns" }]}
      description="Tags, badges, progress bars, tables, stat blocks. The visual vocabulary for surfacing numbers, state, and structure."
    >
      <Subsection title="Tags" description="Pill labels for short categorical state.">
        <Showcase
          importPath={`import { NcTag } from "@nuvo-code/core";`}
          code={`import { NcTag } from "@nuvo-code/core";

<NcTag>Neutral</NcTag>
<NcTag tone="accent">Accent</NcTag>
<NcTag tone="green">Stable</NcTag>
<NcTag tone="red">Failed</NcTag>`}
        >
          <NcTag>Neutral</NcTag>
          <NcTag tone="accent">Accent</NcTag>
          <NcTag tone="green">Stable</NcTag>
          <NcTag tone="blue">Info</NcTag>
          <NcTag tone="amber">Beta</NcTag>
          <NcTag tone="pink">Experimental</NcTag>
          <NcTag tone="red">Failed</NcTag>
        </Showcase>
      </Subsection>

      <Subsection title="Badges" description="Capsule with monospace label — used for build numbers, version pins, environment tags.">
        <Showcase
          code={`import { NcBadge } from "@nuvo-code/core";

<NcBadge>v1.2.3 · INTERNAL</NcBadge>
<NcBadge tone="accent">CORE DIRECTION</NcBadge>
<NcBadge tone="success">LIVE</NcBadge>`}
        >
          <NcBadge>v1.2.3 · INTERNAL</NcBadge>
          <NcBadge tone="accent">
            <NcDot tone="purple" pulse /> CORE DIRECTION
          </NcBadge>
          <NcBadge tone="success">
            <NcDot tone="green" /> LIVE
          </NcBadge>
          <NcBadge tone="warning">
            <NcDot tone="amber" /> WARN
          </NcBadge>
        </Showcase>
      </Subsection>

      <Subsection title="Status dots">
        <Showcase
          code={`import { NcDot } from "@nuvo-code/core";

<NcDot tone="green" pulse />
<NcDot tone="amber" />
<NcDot tone="red" />`}
        >
          {(["neutral", "green", "blue", "amber", "red", "purple"] as const).map((t) => (
            <div key={t} className="flex items-center gap-2 text-[12px] text-fg-subtle">
              <NcDot tone={t} pulse={t === "green" || t === "purple"} />
              {t}
            </div>
          ))}
        </Showcase>
      </Subsection>

      <Subsection title="Progress bars">
        <div className="rounded-[14px] border border-border bg-surface-1 p-6">
          <div className="space-y-3">
            <Row label="Build" value={100} tone="green" />
            <Row label="Test" value={100} tone="green" />
            <Row label="Deploy" value={65} tone="accent" />
            <Row label="Health" value={0} tone="neutral" />
          </div>
        </div>
      </Subsection>

      <Subsection title="Stat blocks" description="The visual unit of a dashboard. Label, value, optional delta and caption.">
        <Showcase
          code={`import { NcStatBlock } from "@nuvo-code/core";

<NcStatBlock
  label="API P99"
  value="12"
  unit="ms"
  delta={{ value: "8%", direction: "down", tone: "positive" }}
  caption="vs 7d"
/>`}
        >
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">
            <NcStatBlock label="API P99" value="12" unit="ms" delta={{ value: "8%", direction: "down", tone: "positive" }} caption="vs 7d" />
            <NcStatBlock label="Uptime" value="99.97" unit="%" delta={{ value: "0.01%", direction: "up", tone: "positive" }} />
            <NcStatBlock label="Throughput" value="24.7" unit="k/s" delta={{ value: "12%", direction: "up", tone: "positive" }} />
            <NcStatBlock label="Err rate" value="0.03" unit="%" delta={{ value: "stable", direction: "flat", tone: "neutral" }} />
          </div>
        </Showcase>
      </Subsection>

      <Subsection title="Table" description="Mono identifiers, sans labels, tags for state — the canonical Nuvo table.">
        <div className="overflow-hidden rounded-[12px] border border-border bg-surface-1">
          <table className="w-full text-left">
            <thead className="bg-surface-2">
              <tr>
                {["Deployment", "Service", "Environment", "Status", "Time"].map((h) => (
                  <th
                    key={h}
                    className="border-b border-border-subtle px-4 py-2.5 font-mono text-[10.5px] uppercase tracking-[0.12em] text-fg-faint"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableRows.map((row) => {
                const s = statusMap[row.status as keyof typeof statusMap];
                return (
                  <tr key={row.id} className="border-b border-border-subtle last:border-b-0 hover:bg-surface-2/50">
                    <td className="px-4 py-3 font-mono text-[11.5px] text-fg">{row.id}</td>
                    <td className="px-4 py-3 text-[12.5px] text-fg-muted">{row.svc}</td>
                    <td className="px-4 py-3 text-[12.5px] text-fg-subtle">{row.env}</td>
                    <td className="px-4 py-3">
                      <NcTag tone={s.tone} size="xs">
                        <NcDot tone={s.tone} /> {s.label}
                      </NcTag>
                    </td>
                    <td className="px-4 py-3 font-mono text-[11px] text-fg-faint">{row.time}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Subsection>

      <Subsection title="Props">
        <PropTable
          rows={[
            { prop: "NcTag", type: "—", default: "—", description: "Pill label. Props: tone (neutral/accent/green/blue/amber/pink/red), size (xs/sm/md)." },
            { prop: "NcBadge", type: "—", default: "—", description: "Capsule badge. Props: tone (neutral/accent/success/warning/danger), size (sm/md)." },
            { prop: "NcDot", type: "—", default: "—", description: "Status indicator dot. Props: tone (neutral/green/blue/amber/red/purple), pulse (boolean), size (xs/sm/md)." },
            { prop: "NcProgressBar", type: "—", default: "—", description: "Progress indicator. Props: value (0-100), tone (accent/green/neutral), size (sm/md/lg)." },
            { prop: "NcStatBlock", type: "—", default: "—", description: "Dashboard stat card. Props: label, value, unit, delta ({value, direction, tone}), caption." },
          ]}
        />
      </Subsection>
    </PageLayout>
  );
}

function Row({ label, value, tone }: { label: string; value: number; tone: "accent" | "green" | "neutral" }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-20 text-[12px] font-medium text-fg-muted">{label}</div>
      <NcProgressBar value={value} tone={tone} size="sm" className="flex-1" />
      <div className="w-12 text-right font-mono text-[10.5px] text-fg-faint">{value}%</div>
    </div>
  );
}
