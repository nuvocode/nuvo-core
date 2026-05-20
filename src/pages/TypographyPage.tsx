import { PageLayout } from "@/registry/PageLayout";
import { Subsection } from "@/registry/Showcase";

const scale = [
  { name: "Display", className: "text-[64px] font-bold tracking-[-0.04em] leading-none", sample: "Build different.", meta: "64 / 800" },
  { name: "H1", className: "text-[34px] font-semibold tracking-[-0.03em]", sample: "A system, not a kit", meta: "34 / 600" },
  { name: "H2", className: "text-[24px] font-semibold tracking-[-0.025em]", sample: "Token-driven theming", meta: "24 / 600" },
  { name: "H3", className: "text-[18px] font-semibold tracking-[-0.015em]", sample: "Primitives ship typed", meta: "18 / 600" },
  { name: "Body", className: "text-[14.5px] leading-relaxed text-fg-muted", sample: "Surfaces stack from background up; foreground tones step down from full contrast.", meta: "14.5 / 400" },
  { name: "Small", className: "text-[13px] text-fg-subtle", sample: "Use for dense layouts and descriptions.", meta: "13 / 400" },
  { name: "Caption", className: "text-[11px] text-fg-faint", sample: "Labels, captions, helper text.", meta: "11 / 400" },
  { name: "Mono · Label", className: "font-mono text-[10.5px] uppercase tracking-[0.12em] text-fg-faint", sample: "SECTION · 02", meta: "10.5 mono" },
];

export function TypographyPage() {
  return (
    <PageLayout
      eyebrow="Foundations · Typography"
      title="Typography"
      description="Inter carries human voice. JetBrains Mono carries machine logic — labels, code, metrics, system telemetry. The boundary stays sharp."
    >
      <Subsection title="Type scale" description="Eight rungs covering display through caption. Tight tracking on display sizes, loosened progressively as size decreases.">
        <div className="overflow-hidden rounded-[12px] border border-border bg-surface-1">
          {scale.map((step) => (
            <div
              key={step.name}
              className="grid grid-cols-[120px_1fr_auto] items-baseline gap-6 border-b border-border-subtle px-6 py-5 last:border-b-0"
            >
              <div className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-fg-faint">{step.name}</div>
              <div className={step.className}>{step.sample}</div>
              <div className="font-mono text-[10.5px] text-fg-faint">{step.meta}</div>
            </div>
          ))}
        </div>
      </Subsection>

      <Subsection title="Font families">
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-[12px] border border-border bg-surface-1 p-6">
            <div className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-fg-faint">Sans</div>
            <div className="mt-3 text-[44px] font-semibold tracking-[-0.03em] text-fg">Inter</div>
            <div className="mt-1 text-[13px] text-fg-subtle">
              Optical sizing 14–32. Used everywhere a human reads.
            </div>
            <div className="divider-h my-4" />
            <div className="grid grid-cols-4 gap-1 text-fg">
              {[300, 400, 500, 600, 700, 800].map((w) => (
                <div key={w} className="flex flex-col items-center rounded-[7px] border border-border-subtle bg-surface-2 py-3">
                  <span className="text-[18px]" style={{ fontWeight: w }}>Aa</span>
                  <span className="mt-1 font-mono text-[9.5px] text-fg-faint">{w}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[12px] border border-border bg-surface-1 p-6">
            <div className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-fg-faint">Mono</div>
            <div className="mt-3 font-mono text-[44px] font-semibold tracking-tight text-fg">JetBrains</div>
            <div className="mt-1 text-[13px] text-fg-subtle">
              Code, metrics, labels, terminal voice. Never headlines.
            </div>
            <div className="divider-h my-4" />
            <div className="rounded-[8px] border border-border-subtle bg-[#0a0a0d] p-4 font-mono text-[12px] leading-relaxed">
              <div>
                <span className="text-[--color-signal-blue]">const</span>{" "}
                <span className="text-fg">system</span>{" "}
                <span className="text-fg-subtle">=</span>{" "}
                <span className="text-[--color-signal-green]">'nuvo'</span>
              </div>
              <div>
                <span className="text-[--color-signal-blue]">await</span>{" "}
                <span className="text-fg">deploy</span>
                <span className="text-fg-subtle">(system)</span>
              </div>
            </div>
          </div>
        </div>
      </Subsection>
    </PageLayout>
  );
}
