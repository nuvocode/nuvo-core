import { PageLayout } from "@/registry/PageLayout";
import { Subsection } from "@/registry/Showcase";
import { colors } from "@/core/tokens";

const surfaces = [
  { name: "bg", value: colors.surface.bg, hex: "#09090b", purpose: "Page background" },
  { name: "surface-1", value: colors.surface.s1, hex: "#111113", purpose: "Cards, panels" },
  { name: "surface-2", value: colors.surface.s2, hex: "#18181b", purpose: "Inputs, headers" },
  { name: "surface-3", value: colors.surface.s3, hex: "#1f1f23", purpose: "Buttons, hover states" },
];

const borders = [
  { name: "border-subtle", value: colors.border.subtle, hex: "#1a1a1e", purpose: "Internal seams" },
  { name: "border", value: colors.border.base, hex: "#27272a", purpose: "Card borders, default" },
  { name: "border-strong", value: colors.border.strong, hex: "#3f3f46", purpose: "Emphasized borders" },
];

const fg = [
  { name: "fg", value: colors.fg.base, hex: "#fafafa", purpose: "Primary text" },
  { name: "fg-muted", value: colors.fg.muted, hex: "#a1a1aa", purpose: "Secondary text" },
  { name: "fg-subtle", value: colors.fg.subtle, hex: "#71717a", purpose: "Tertiary, descriptions" },
  { name: "fg-faint", value: colors.fg.faint, hex: "#52525b", purpose: "Labels, captions" },
];

const signals = [
  { name: "brand-purple", hex: "#a855f7", purpose: "Primary accent" },
  { name: "brand-pink", hex: "#ec4899", purpose: "Gradient terminus" },
  { name: "brand-indigo", hex: "#818cf8", purpose: "Cool shift" },
  { name: "brand-orange", hex: "#f97316", purpose: "Warm shift" },
  { name: "signal-green", hex: "#4ade80", purpose: "Success, healthy" },
  { name: "signal-blue", hex: "#60a5fa", purpose: "Info, links" },
  { name: "signal-amber", hex: "#fbbf24", purpose: "Warning, pending" },
  { name: "signal-red", hex: "#f87171", purpose: "Error, destructive" },
];

const gradients = [
  { name: "Primary", css: "linear-gradient(135deg,#a855f7 0%,#ec4899 100%)", stops: "#a855f7 → #ec4899" },
  { name: "Cool", css: "linear-gradient(135deg,#818cf8 0%,#a855f7 100%)", stops: "#818cf8 → #a855f7" },
  { name: "Warm", css: "linear-gradient(135deg,#f97316 0%,#ec4899 100%)", stops: "#f97316 → #ec4899" },
  {
    name: "Subtle Fill",
    css: "linear-gradient(135deg,rgb(168 85 247 / 0.18),rgb(236 72 153 / 0.08))",
    stops: "Opacity overlay",
  },
];

export function ColorsPage() {
  return (
    <PageLayout
      eyebrow="Foundations · Color"
      title="Color system"
      description="Color is information first, decoration second. Surfaces stack from background up; foreground tones step down from full contrast. Signal colors carry semantic meaning across the system."
    >
      <Subsection title="Surface scale" description="A four-step elevation system. Lower numbers sit further from the viewer.">
        <Swatches rows={surfaces} />
      </Subsection>

      <Subsection title="Border scale" description="Borders mirror surfaces. Use the next step up from the surface you're separating.">
        <Swatches rows={borders} />
      </Subsection>

      <Subsection title="Foreground scale" description="Four steps of text emphasis. Most paragraph text lives at fg-muted or fg-subtle.">
        <Swatches rows={fg} />
      </Subsection>

      <Subsection title="Brand & signal" description="Brand colors are reserved for accents. Signal colors must always carry meaning — never use signal-green decoratively.">
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {signals.map((s) => (
            <div key={s.name} className="overflow-hidden rounded-[10px] border border-border bg-surface-1">
              <div className="h-14" style={{ background: s.hex }} />
              <div className="border-t border-border-subtle p-3">
                <div className="text-[12px] font-medium text-fg">{s.name}</div>
                <div className="mt-0.5 font-mono text-[10.5px] text-fg-faint">{s.hex}</div>
                <div className="mt-1 text-[11.5px] text-fg-subtle">{s.purpose}</div>
              </div>
            </div>
          ))}
        </div>
      </Subsection>

      <Subsection title="Gradients" description="Restrained. Use only for primary actions, accent strokes, and brand wordmarks.">
        <div className="grid gap-2 md:grid-cols-2">
          {gradients.map((g) => (
            <div key={g.name} className="overflow-hidden rounded-[10px] border border-border bg-surface-1">
              <div className="h-16" style={{ background: g.css }} />
              <div className="flex items-center justify-between border-t border-border-subtle px-3 py-2.5">
                <span className="text-[12px] font-medium text-fg">{g.name}</span>
                <span className="font-mono text-[10.5px] text-fg-faint">{g.stops}</span>
              </div>
            </div>
          ))}
        </div>
      </Subsection>
    </PageLayout>
  );
}

function Swatches({ rows }: { rows: { name: string; hex: string; purpose: string }[] }) {
  return (
    <div className="overflow-hidden rounded-[10px] border border-border bg-surface-1">
      {rows.map((r, i) => (
        <div
          key={r.name}
          className="flex items-center gap-4 border-b border-border-subtle px-4 py-3 last:border-b-0"
        >
          <div
            className="h-9 w-9 shrink-0 rounded-[7px] border border-border-subtle"
            style={{ background: r.hex }}
            aria-label={`${r.name} swatch ${i}`}
          />
          <div className="flex-1">
            <div className="text-[12.5px] font-medium text-fg">{r.name}</div>
            <div className="text-[11.5px] text-fg-subtle">{r.purpose}</div>
          </div>
          <div className="font-mono text-[11px] text-fg-faint">{r.hex}</div>
        </div>
      ))}
    </div>
  );
}
