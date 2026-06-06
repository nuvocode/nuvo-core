import { AlertTriangle, Box, CheckCircle2, Info, Search, Shield, XCircle } from "lucide-react";
import { PageLayout } from "../registry/PageLayout";
import { PropTable, Showcase, Subsection } from "../registry/Showcase";
import { NcButton } from "@nuvo-code/core";
import { NcEmptyState } from "@nuvo-code/core";

interface AlertProps {
  tone: "info" | "success" | "warning" | "error";
  title: string;
  description: string;
}

const alertConfig = {
  info: { icon: Info, color: "blue", className: "border-[rgb(96_165_250_/_0.25)] bg-[rgb(96_165_250_/_0.06)]", iconClass: "text-[--color-signal-blue]" },
  success: { icon: CheckCircle2, color: "green", className: "border-[rgb(74_222_128_/_0.25)] bg-[rgb(74_222_128_/_0.06)]", iconClass: "text-[--color-signal-green]" },
  warning: { icon: AlertTriangle, color: "amber", className: "border-[rgb(251_191_36_/_0.25)] bg-[rgb(251_191_36_/_0.06)]", iconClass: "text-[--color-signal-amber]" },
  error: { icon: XCircle, color: "red", className: "border-[rgb(248_113_113_/_0.3)] bg-[rgb(248_113_113_/_0.06)]", iconClass: "text-[--color-signal-red]" },
} as const;

function Alert({ tone, title, description }: AlertProps) {
  const c = alertConfig[tone];
  const Icon = c.icon;
  return (
    <div className={`flex items-start gap-3 rounded-[10px] border px-4 py-3 ${c.className}`}>
      <Icon size={15} className={`mt-0.5 shrink-0 ${c.iconClass}`} />
      <div className="min-w-0 flex-1">
        <div className="text-[13px] font-medium text-fg">{title}</div>
        <div className="mt-0.5 text-[12.5px] text-fg-subtle">{description}</div>
      </div>
    </div>
  );
}

export function FeedbackPage() {
  return (
    <PageLayout
      eyebrow="Components · Feedback"
      title="Feedback"
      slug="feedback"
      related={[{ slug: "data", label: "Data Display" }, { slug: "overlays", label: "Overlays" }, { slug: "inputs", label: "Inputs" }]}
      description="Alerts, empty states, and toasts. Always communicate what changed, why it matters, and what to do next."
    >
      <Subsection title="Alerts">
        <div className="space-y-3">
          <Alert tone="info" title="Heads up" description="Edge regions in AP-SOUTH are experiencing elevated latency." />
          <Alert tone="success" title="Deploy complete" description="launchpad-api v2.4.1 promoted to production. Health checks passing." />
          <Alert tone="warning" title="Quota approaching" description="You've used 84% of your monthly inference budget." />
          <Alert tone="error" title="Build failed" description="Type-check failed in src/router.ts:42. Stage rollback initiated." />
        </div>
      </Subsection>

      <Subsection title="Empty state variations" description="Four common patterns: no data, no results, no access, and error.">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-[12px] border border-border bg-surface-1 p-6">
            <NcEmptyState
              icon={<Box size={16} />}
              title="No projects yet"
              description="Create your first project to start deploying."
              action={<NcButton variant="primary" size="sm">Create project</NcButton>}
            />
          </div>
          <div className="rounded-[12px] border border-border bg-surface-1 p-6">
            <NcEmptyState
              icon={<Search size={16} />}
              title="No results found"
              description="Try adjusting your search or filter criteria."
              action={<NcButton variant="ghost" size="sm">Clear filters</NcButton>}
            />
          </div>
          <div className="rounded-[12px] border border-border bg-surface-1 p-6">
            <NcEmptyState
              icon={<Shield size={16} />}
              title="Access restricted"
              description="You don't have permission to view this workspace. Request access from an admin."
              action={<NcButton variant="outline" size="sm">Request access</NcButton>}
            />
          </div>
          <div className="rounded-[12px] border border-border bg-surface-1 p-6">
            <NcEmptyState
              icon={<AlertTriangle size={16} />}
              title="Something went wrong"
              description="We couldn't load your deployments. Check your connection and try again."
              action={<NcButton variant="secondary" size="sm">Retry</NcButton>}
            />
          </div>
        </div>
      </Subsection>

      <Subsection title="Toast pattern" description="Small status notifications. Use sparingly — system-critical state belongs in alerts.">
        <Showcase
          importPath={`import { CheckCircle2 } from "lucide-react";`}
          code={`<div className="flex items-center gap-3 rounded-[10px] border border-border bg-surface-1 px-4 py-2.5 shadow-[var(--shadow-pop)]">
  <CheckCircle2 size={14} className="text-[--color-signal-green]" />
  <span className="text-[12.5px] text-fg-muted">Workspace renamed</span>
  <span className="font-mono text-[10.5px] text-fg-faint">just now</span>
</div>`}
        >
          <div className="flex w-full max-w-md flex-col items-end gap-2">
            <div className="anim-slide-up flex items-center gap-3 rounded-[10px] border border-border bg-surface-1 px-4 py-2.5 shadow-[var(--shadow-pop)]">
              <CheckCircle2 size={14} className="text-[--color-signal-green]" />
              <span className="text-[12.5px] text-fg-muted">Workspace renamed</span>
              <span className="font-mono text-[10.5px] text-fg-faint">just now</span>
            </div>
          </div>
        </Showcase>
      </Subsection>

      <Subsection title="Props">
        <PropTable
          rows={[
            { prop: "icon", type: "React.ReactNode", default: "—", description: "Icon displayed above the title." },
            { prop: "title", type: "string", default: "—", description: "Primary heading for the empty state." },
            { prop: "description", type: "string", default: "—", description: "Supporting text explaining the state." },
            { prop: "action", type: "React.ReactNode", default: "—", description: "Call-to-action element, typically a Button." },
            { prop: "className", type: "string", default: "—", description: "Additional CSS classes." },
          ]}
        />
      </Subsection>

      <Subsection title="Loading skeletons" description="Use shimmer placeholders while content loads. The nc-shimmer animation is built into the CSS.">
        <div className="space-y-6">
          <div>
            <div className="label-mono mb-3">Card skeleton</div>
            <div className="rounded-[14px] border border-border bg-surface-1 p-5">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-[8px] bg-surface-2 anim-shimmer" />
                <div className="flex-1 space-y-2">
                  <div className="h-3 w-2/3 rounded-[4px] bg-surface-2 anim-shimmer" />
                  <div className="h-2.5 w-1/2 rounded-[4px] bg-surface-2 anim-shimmer" />
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <div className="h-2.5 w-full rounded-[4px] bg-surface-2 anim-shimmer" />
                <div className="h-2.5 w-4/5 rounded-[4px] bg-surface-2 anim-shimmer" />
              </div>
            </div>
          </div>
          <div>
            <div className="label-mono mb-3">Table row skeleton</div>
            <div className="overflow-hidden rounded-[12px] border border-border bg-surface-1">
              <div className="space-y-0">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center gap-4 border-b border-border-subtle px-4 py-3 last:border-b-0">
                    <div className="h-3 w-24 rounded-[4px] bg-surface-2 anim-shimmer" />
                    <div className="h-3 w-32 rounded-[4px] bg-surface-2 anim-shimmer" />
                    <div className="h-3 w-16 rounded-[4px] bg-surface-2 anim-shimmer" />
                    <div className="ml-auto h-5 w-14 rounded-[20px] bg-surface-2 anim-shimmer" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <div className="label-mono mb-3">Stat block skeleton</div>
            <div className="grid gap-3 sm:grid-cols-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="rounded-[12px] border border-border bg-surface-1 p-4">
                  <div className="h-2.5 w-16 rounded-[4px] bg-surface-2 anim-shimmer" />
                  <div className="mt-2 h-6 w-20 rounded-[4px] bg-surface-2 anim-shimmer" />
                  <div className="mt-1 h-2 w-12 rounded-[4px] bg-surface-2 anim-shimmer" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Subsection>
    </PageLayout>
  );
}
