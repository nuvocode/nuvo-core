import { ArrowUp, Box, Plus, Sparkles } from "lucide-react";
import { NcBadge } from "@/components/primitives/Badge";
import { NcButton } from "@/components/primitives/Button";
import { NcDot } from "@/components/primitives/Dot";
import { NcInput } from "@/components/primitives/Input";
import { NcTag } from "@/components/primitives/Tag";

export function AIChatExample() {
  return (
    <div className="flex h-full overflow-hidden rounded-[14px] border border-border bg-bg">
      <aside className="flex w-[240px] shrink-0 flex-col border-r border-border-subtle bg-surface-1">
        <div className="border-b border-border-subtle p-3">
          <NcButton variant="outline" size="sm" className="w-full justify-start">
            <Plus size={13} /> New conversation
          </NcButton>
        </div>
        <nav className="flex-1 overflow-y-auto p-2">
          <div className="px-2 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-fg-faint">RECENT</div>
          {[
            { t: "Edge latency analysis", ts: "Just now", active: true },
            { t: "Rewrite migration script", ts: "12m" },
            { t: "Audit IAM roles", ts: "1h" },
            { t: "Generate changelog", ts: "Yesterday" },
            { t: "Refactor pricing engine", ts: "2d" },
          ].map((c, i) => (
            <button
              key={i}
              className={
                c.active
                  ? "flex w-full flex-col rounded-[7px] bg-surface-3 px-2.5 py-2 text-left"
                  : "flex w-full flex-col rounded-[7px] px-2.5 py-2 text-left hover:bg-surface-2"
              }
            >
              <span className={`truncate text-[12.5px] ${c.active ? "text-fg" : "text-fg-muted"}`}>{c.t}</span>
              <span className="mt-0.5 font-mono text-[10px] text-fg-faint">{c.ts}</span>
            </button>
          ))}
        </nav>
      </aside>

      <main className="flex flex-1 flex-col overflow-hidden">
        <header className="flex h-14 items-center justify-between border-b border-border-subtle bg-surface-1 px-5">
          <div className="flex items-center gap-3">
            <div className="grid h-8 w-8 place-items-center rounded-[8px] border border-[rgb(168_85_247_/_0.3)] bg-[rgb(168_85_247_/_0.12)]">
              <Sparkles size={14} className="text-[--color-brand-purple]" />
            </div>
            <div>
              <div className="text-[13px] font-semibold text-fg">Edge latency analysis</div>
              <div className="flex items-center gap-1.5 text-[11px] text-fg-subtle">
                <NcDot tone="green" pulse /> Streaming · 3.8k tokens
              </div>
            </div>
          </div>
          <NcBadge tone="accent" size="sm">GPT-5 TURBO</NcBadge>
        </header>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          <div className="mx-auto flex w-full max-w-3xl flex-col gap-5">
            <Msg role="user">
              Why is EU-WEST-2 hot this morning? It went from 38ms p99 to 142ms around 14:21Z.
            </Msg>
            <Msg role="assistant">
              <p>
                Latency spiked because the v3 edge runtime rolled out at 14:18Z and your warm pool
                wasn't re-provisioned for that region. Cold starts on v3 average ~480ms; once you've
                accumulated enough cold requests, your p99 reflects them.
              </p>
              <div className="mt-3 rounded-[8px] border border-border bg-surface-3 p-3">
                <div className="mb-2 font-mono text-[10.5px] uppercase tracking-[0.12em] text-fg-faint">PROPOSED FIX</div>
                <pre className="overflow-x-auto font-mono text-[11.5px] text-fg-muted">
{`nuvo edge:warm-pool \\
  --region eu-west-2 \\
  --idle 200ms \\
  --min 4`}
                </pre>
              </div>
              <div className="mt-3 flex items-center gap-1.5">
                <NcTag tone="accent" size="xs">runtime · v3 release notes</NcTag>
                <NcTag size="xs">docs · edge-pricing</NcTag>
              </div>
            </Msg>
            <Msg role="user">Apply it across all EU regions.</Msg>
            <Msg role="assistant" streaming>
              On it. I'll propose a single change that covers EU-WEST-2, EU-CENTRAL-1 and EU-NORTH-1.
              <span className="anim-blink ml-1 text-[--color-brand-purple]">▋</span>
            </Msg>
          </div>
        </div>

        <footer className="border-t border-border-subtle bg-surface-1 p-4">
          <div className="mx-auto w-full max-w-3xl">
            <div className="flex items-center gap-2 rounded-[12px] border border-border bg-surface-2 px-3 py-2 focus-within:border-[rgb(168_85_247_/_0.5)] focus-within:bg-surface-1">
              <Box size={13} className="text-fg-faint" />
              <NcInput
                size="md"
                placeholder="Describe the action, paste a stack trace, attach a file…"
                className="flex-1 border-0 bg-transparent shadow-none focus:border-0 focus:bg-transparent focus:shadow-none"
              />
              <NcButton variant="primary" size="icon" aria-label="Send">
                <ArrowUp size={14} />
              </NcButton>
            </div>
            <div className="mt-1.5 flex items-center justify-between font-mono text-[10px] text-fg-faint">
              <span>↵ to send · shift+↵ for newline</span>
              <span>3,847 / 32,000 ctx</span>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

function Msg({
  role,
  children,
  streaming,
}: {
  role: "user" | "assistant";
  children: React.ReactNode;
  streaming?: boolean;
}) {
  if (role === "user") {
    return (
      <div className="flex justify-end">
        <div className="max-w-[80%] rounded-[12px_12px_4px_12px] border border-[rgb(168_85_247_/_0.2)] bg-[rgb(168_85_247_/_0.1)] px-4 py-3 text-[13.5px] text-fg-muted">
          {children}
        </div>
      </div>
    );
  }
  return (
    <div className="flex gap-3">
      <div className="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-[7px] border border-[rgb(168_85_247_/_0.3)] bg-[rgb(168_85_247_/_0.12)]">
        <Sparkles size={12} className="text-[--color-brand-purple]" />
      </div>
      <div className="max-w-[88%] rounded-[4px_12px_12px_12px] border border-border bg-surface-1 px-4 py-3 text-[13.5px] leading-relaxed text-fg-muted">
        {children}
        {streaming && <div className="mt-2 flex gap-1"><NcDot tone="purple" pulse /></div>}
      </div>
    </div>
  );
}
