import { PageLayout } from "../registry/PageLayout";
import { Subsection } from "../registry/Showcase";

const scale = [
  { token: "0.5", px: 2 }, { token: "1", px: 4 }, { token: "2", px: 8 },
  { token: "3", px: 12 }, { token: "4", px: 16 }, { token: "5", px: 20 },
  { token: "6", px: 24 }, { token: "8", px: 32 }, { token: "10", px: 40 },
  { token: "12", px: 48 }, { token: "16", px: 64 }, { token: "20", px: 80 },
];

const radii = [
  { token: "xs", px: 4 }, { token: "sm", px: 6 }, { token: "md", px: 8 },
  { token: "lg", px: 12 }, { token: "xl", px: 14 }, { token: "2xl", px: 20 },
];

export function SpacingPage() {
  return (
    <PageLayout
      eyebrow="Foundations · Spacing"
      title="Spacing & radii"
      description="A 4-px base unit with named radii. Tight, controlled whitespace — the system breathes through proportion, not generosity."
    >
      <Subsection title="Spacing scale" description="Tailwind's default scale, anchored at 4px.">
        <div className="overflow-hidden rounded-[12px] border border-border bg-surface-1">
          {scale.map((s) => (
            <div
              key={s.token}
              className="flex items-center gap-6 border-b border-border-subtle px-5 py-3 last:border-b-0"
            >
              <div className="w-16 font-mono text-[11.5px] text-fg-faint">{s.token}</div>
              <div className="w-12 font-mono text-[11.5px] text-fg-subtle">{s.px}px</div>
              <div className="h-2 rounded-full bg-[image:var(--nc-grad)]" style={{ width: s.px * 2 }} />
            </div>
          ))}
        </div>
      </Subsection>

      <Subsection title="Radius scale" description="Larger radii belong to larger surfaces. Tags, inputs, and buttons stay sharp.">
        <div className="grid gap-3 sm:grid-cols-3 md:grid-cols-6">
          {radii.map((r) => (
            <div key={r.token} className="flex flex-col items-center">
              <div
                className="h-20 w-full border border-border-strong bg-surface-2"
                style={{ borderRadius: r.px }}
              />
              <div className="mt-2 text-[12.5px] font-medium text-fg">{r.token}</div>
              <div className="font-mono text-[10.5px] text-fg-faint">{r.px}px</div>
            </div>
          ))}
        </div>
      </Subsection>
    </PageLayout>
  );
}
