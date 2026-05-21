import { ArrowUp, Sparkles } from "lucide-react";
import { PageLayout } from "../registry/PageLayout";
import { Subsection } from "../registry/Showcase";
import { NcBadge } from "@nuvocode/core";
import { NcButton } from "@nuvocode/core";
import { NcDot } from "@nuvocode/core";
import { NcProgressBar } from "@nuvocode/core";
import { NcTag } from "@nuvocode/core";

export function AIPage() {
  return (
    <PageLayout
      eyebrow="Components · AI"
      title="AI components"
      description="Inference panels, streaming responses, agent loops, citations. The visual language for surfaces where the system thinks aloud."
    >
      <Subsection title="Inference panel" description="A floating, glassy status card that surfaces what the model is doing right now.">
        <div className="rounded-[14px] border border-border bg-bg p-10">
          <div className="glass mx-auto max-w-[280px] rounded-[14px] p-5">
            <div className="mb-3 flex items-center gap-2">
              <NcDot tone="green" pulse />
              <span className="font-mono text-[10.5px] uppercase tracking-[0.08em] text-fg-subtle">
                NUVO AI · INFERENCE
              </span>
            </div>
            <div className="mb-3 font-mono text-[11px] leading-relaxed text-fg-subtle">
              <div><span className="text-fg-faint">→ </span><span className="text-fg-muted">Processing context</span></div>
              <div><span className="text-fg-faint">⟳ </span><span className="text-fg-muted">Tokens: 3,847</span></div>
            </div>
            <NcProgressBar value={72} tone="accent" />
            <div className="mt-1.5 flex justify-between font-mono text-[10px] text-fg-faint">
              <span>72%</span><span>180ms</span>
            </div>
          </div>
        </div>
      </Subsection>

      <Subsection title="Chat surface" description="User bubbles right-aligned with accent fill. Assistant bubbles left-aligned, neutral.">
        <div className="overflow-hidden rounded-[14px] border border-border bg-surface-1">
          <div className="flex items-center justify-between border-b border-border-subtle px-4 py-3">
            <div className="flex items-center gap-2">
              <Sparkles size={13} className="text-[--color-brand-purple]" />
              <span className="text-[12.5px] font-medium text-fg">Nuvo AI</span>
            </div>
            <NcBadge tone="accent" size="sm">GPT-5 TURBO</NcBadge>
          </div>
          <div className="flex flex-col gap-3 p-5 text-[13px]">
            <Bubble role="user">Analyze deployment latency for EU region.</Bubble>
            <Bubble role="assistant">
              EU-WEST-2 shows 14 ms avg. Root cause appears to be cold-start delta on edge function v3.
              Recommend enabling the warm-pool config with a 200 ms idle window.
            </Bubble>
            <div className="flex items-center gap-2 self-start rounded-[8px] border border-[rgb(74_222_128_/_0.25)] bg-[rgb(74_222_128_/_0.06)] px-3 py-2 text-[--color-signal-green]">
              <ArrowUp size={12} />
              <span className="text-[12.5px]">Apply suggestion</span>
            </div>
          </div>
          <div className="flex items-center gap-2 border-t border-border-subtle bg-surface-2 px-3 py-2.5">
            <input
              placeholder="Reply with context…"
              className="h-9 flex-1 rounded-[8px] border border-border bg-surface-1 px-3 text-[13px] text-fg outline-none placeholder:text-fg-faint focus:border-[rgb(168_85_247_/_0.5)]"
            />
            <NcButton variant="primary" size="sm">Send</NcButton>
          </div>
        </div>
      </Subsection>

      <Subsection title="Agent step trace" description="Plan → action → observation, mono throughout. Each step is timestamped.">
        <div className="overflow-hidden rounded-[12px] border border-border bg-[#0a0a0d] font-mono text-[12px] leading-relaxed">
          <div className="space-y-1 p-5">
            <Step ts="00:00.21" tone="info" label="plan" text="Identify root cause of latency spike." />
            <Step ts="00:00.32" tone="info" label="tool"  text='fetch_metrics(region="eu-west-2", window="1h")' />
            <Step ts="00:00.84" tone="neutral" label="obs" text="p99 = 142ms · baseline 38ms · spike at 14:21Z" />
            <Step ts="00:01.05" tone="info" label="tool"  text='inspect_edge_logs(region="eu-west-2")' />
            <Step ts="00:01.42" tone="warn" label="obs" text="Cold-start on edge fn v3 (480ms avg)" />
            <Step ts="00:01.51" tone="success" label="answer" text="Enable warm-pool with idle=200ms." />
          </div>
        </div>
      </Subsection>

      <Subsection title="Citations">
        <div className="rounded-[12px] border border-border bg-surface-1 p-5">
          <div className="text-[13px] leading-relaxed text-fg-muted">
            Edge function cold starts increased after the v3 runtime swap on March 14
            <Cite n={1} />. Warm pools mitigate this at the cost of a flat $0.002/h reservation per region
            <Cite n={2} />.
          </div>
          <div className="divider-h my-4" />
          <ul className="space-y-2 text-[12px] text-fg-subtle">
            <li className="flex gap-3">
              <NcTag tone="accent" size="xs">[1]</NcTag>
              <span>nuvo / runtime / changelog.md — &quot;v3 release notes&quot;</span>
            </li>
            <li className="flex gap-3">
              <NcTag tone="accent" size="xs">[2]</NcTag>
              <span>nuvo / docs / edge-pricing — &quot;warm-pool tier&quot;</span>
            </li>
          </ul>
        </div>
      </Subsection>
    </PageLayout>
  );
}

function Bubble({ role, children }: { role: "user" | "assistant"; children: React.ReactNode }) {
  if (role === "user") {
    return (
      <div className="self-end max-w-[80%] rounded-[10px_10px_2px_10px] border border-[rgb(168_85_247_/_0.2)] bg-[rgb(168_85_247_/_0.12)] px-3 py-2 text-fg-muted">
        {children}
      </div>
    );
  }
  return (
    <div className="self-start max-w-[88%] rounded-[2px_10px_10px_10px] border border-border bg-surface-3 px-3 py-2 text-fg-muted">
      {children}
    </div>
  );
}

function Step({ ts, tone, label, text }: { ts: string; tone: "info" | "neutral" | "warn" | "success"; label: string; text: string }) {
  const c = {
    info: "text-[--color-signal-blue]",
    neutral: "text-fg-muted",
    warn: "text-[--color-signal-amber]",
    success: "text-[--color-signal-green]",
  }[tone];
  return (
    <div className="flex gap-3">
      <span className="text-fg-faint">{ts}</span>
      <span className={`w-14 ${c}`}>{label}</span>
      <span className="flex-1 text-fg-muted">{text}</span>
    </div>
  );
}

function Cite({ n }: { n: number }) {
  return (
    <span className="ml-0.5 inline-flex h-4 min-w-4 items-center justify-center rounded-[3px] border border-[rgb(168_85_247_/_0.3)] bg-[rgb(168_85_247_/_0.1)] px-1 align-middle font-mono text-[9.5px] text-[--color-brand-purple]">
      {n}
    </span>
  );
}
