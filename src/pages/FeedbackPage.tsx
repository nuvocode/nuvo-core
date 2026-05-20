import { AlertTriangle, Box, CheckCircle2, Info, XCircle } from "lucide-react";
import { PageLayout } from "@/registry/PageLayout";
import { Showcase, Subsection } from "@/registry/Showcase";
import { NcButton } from "@/components/primitives/Button";
import { NcEmptyState } from "@/components/composites/EmptyState";

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

      <Subsection title="Empty state">
        <Showcase previewClassName="!min-h-[280px]">
          <NcEmptyState
            className="w-full max-w-md"
            icon={<Box size={16} />}
            title="No deployments yet"
            description="Push to main, or run nuvo deploy --prod to ship your first build."
            action={<NcButton variant="primary">Connect repository</NcButton>}
          />
        </Showcase>
      </Subsection>

      <Subsection title="Toast pattern" description="Small status notifications. Use sparingly — system-critical state belongs in alerts.">
        <Showcase>
          <div className="flex w-full max-w-md flex-col items-end gap-2">
            <div className="anim-slide-up flex items-center gap-3 rounded-[10px] border border-border bg-surface-1 px-4 py-2.5 shadow-[var(--shadow-pop)]">
              <CheckCircle2 size={14} className="text-[--color-signal-green]" />
              <span className="text-[12.5px] text-fg-muted">Workspace renamed</span>
              <span className="font-mono text-[10.5px] text-fg-faint">just now</span>
            </div>
          </div>
        </Showcase>
      </Subsection>
    </PageLayout>
  );
}
