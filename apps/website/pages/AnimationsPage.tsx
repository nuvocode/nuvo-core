import { PageLayout } from "../registry/PageLayout";
import { Subsection } from "../registry/Showcase";
import { NcDot } from "@nuvo-code/core";

export function AnimationsPage() {
  return (
    <PageLayout
      eyebrow="Foundations · Motion"
      title="Animations"
      slug="animations"
      description="Motion as information. Hovers lift 2px. Toggles slide. Pulses indicate liveness. Avoid spring physics — use ease-out with tight durations."
    >
      <Subsection title="Hover lift" description="180ms · transform + shadow. Reserved for actions; never decorative.">
        <div className="grid place-items-center rounded-[12px] border border-border bg-surface-1 p-10">
          <button className="rounded-[8px] border border-border-strong bg-surface-3 px-5 py-2 text-[12px] text-fg-muted transition-all duration-[180ms] hover:-translate-y-0.5 hover:bg-surface-2 hover:text-fg hover:shadow-[0_8px_24px_rgb(0_0_0_/_0.4)]">
            Deploy to Production
          </button>
        </div>
      </Subsection>

      <Subsection title="Pulse" description="2.5s ease-in-out. Signals liveness — heartbeat, streaming, active session.">
        <div className="flex items-center gap-6 rounded-[12px] border border-border bg-surface-1 p-10">
          <NcDot tone="green" pulse />
          <NcDot tone="purple" pulse />
          <NcDot tone="blue" pulse />
        </div>
      </Subsection>

      <Subsection title="Ping" description="2.2s ease-out. Used on active deploy node + streaming targets.">
        <div className="flex items-center justify-center rounded-[12px] border border-border bg-surface-1 p-10">
          <span className="relative grid h-9 w-9 place-items-center rounded-full border border-[rgb(168_85_247_/_0.4)] bg-[rgb(168_85_247_/_0.1)]">
            <span className="absolute inset-0 rounded-full border border-[--color-brand-purple] anim-ping" />
            <span className="h-2 w-2 rounded-full bg-[--color-brand-purple]" />
          </span>
        </div>
      </Subsection>

      <Subsection title="Cursor blink" description="1.1s step-end. Terminal voice indicator.">
        <div className="rounded-[12px] border border-border bg-[#0a0a0d] px-5 py-6 font-mono text-[13px] text-fg-muted">
          <span className="text-[--color-brand-purple]">nuvo</span>
          <span className="ml-2">deploy --watch</span>
          <span className="anim-blink ml-1 text-[--color-brand-purple]">▋</span>
        </div>
      </Subsection>

      <Subsection title="Shimmer text" description="3.5s linear loop. Use sparingly for hero subtitles and loading skeletons.">
        <div className="rounded-[12px] border border-border bg-surface-1 px-5 py-8 text-center">
          <span className="shimmer-text font-mono text-[12.5px] tracking-[0.06em]">
            Building edge bundle · Optimizing · Pushing to regions
          </span>
        </div>
      </Subsection>

      <Subsection title="Duration tokens">
        <div className="overflow-hidden rounded-[12px] border border-border bg-surface-1">
          {[
            { name: "fast", ms: 150, use: "Color, text" },
            { name: "base", ms: 200, use: "Lift, scale, slide" },
            { name: "slow", ms: 320, use: "Modal enter/exit" },
          ].map((d) => (
            <div key={d.name} className="flex items-center gap-6 border-b border-border-subtle px-5 py-3 last:border-b-0">
              <div className="w-20 font-mono text-[11.5px] text-fg-muted">{d.name}</div>
              <div className="w-16 font-mono text-[11.5px] text-fg-subtle">{d.ms}ms</div>
              <div className="text-[12.5px] text-fg-subtle">{d.use}</div>
            </div>
          ))}
        </div>
      </Subsection>
    </PageLayout>
  );
}
