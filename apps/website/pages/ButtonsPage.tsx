import { ArrowRight, Plus, Trash2 } from "lucide-react";
import { PageLayout } from "../registry/PageLayout";
import { PropTable, Showcase, Subsection } from "../registry/Showcase";
import { NcButton } from "@nuvocode/core";

export function ButtonsPage() {
  return (
    <PageLayout
      eyebrow="Components · Action"
      title="Button"
      description="Seven variants, five sizes. Built on Radix Slot — supports asChild for arbitrary trigger elements while preserving accessibility."
    >
      <Subsection title="Variants" description="Visual emphasis ladders from primary down through ghost.">
        <Showcase
          code={`<NcButton variant="primary">Deploy to Production <ArrowRight /></NcButton>
<NcButton variant="secondary">Stage</NcButton>
<NcButton variant="outline">Configure</NcButton>
<NcButton variant="ghost">Cancel</NcButton>
<NcButton variant="accent">Upgrade</NcButton>
<NcButton variant="destructive"><Trash2 /> Delete</NcButton>
<NcButton variant="link">Read changelog</NcButton>`}
        >
          <NcButton variant="primary">
            Deploy to Production <ArrowRight size={13} />
          </NcButton>
          <NcButton variant="secondary">Stage</NcButton>
          <NcButton variant="outline">Configure</NcButton>
          <NcButton variant="ghost">Cancel</NcButton>
          <NcButton variant="accent">Upgrade</NcButton>
          <NcButton variant="destructive">
            <Trash2 size={13} />
            Delete
          </NcButton>
          <NcButton variant="link">Read changelog</NcButton>
        </Showcase>
      </Subsection>

      <Subsection title="Sizes" description="xs through lg, plus a square icon variant.">
        <Showcase>
          <NcButton variant="primary" size="xs">Extra Small</NcButton>
          <NcButton variant="primary" size="sm">Small</NcButton>
          <NcButton variant="primary" size="md">Medium</NcButton>
          <NcButton variant="primary" size="lg">Large</NcButton>
          <NcButton variant="secondary" size="icon" aria-label="Add"><Plus size={14} /></NcButton>
        </Showcase>
      </Subsection>

      <Subsection title="States">
        <Showcase>
          <NcButton variant="primary">Default</NcButton>
          <NcButton variant="primary" disabled>Disabled</NcButton>
          <NcButton variant="secondary">
            <span className="anim-spin-slow inline-block">◌</span>
            Loading
          </NcButton>
        </Showcase>
      </Subsection>

      <Subsection title="Props">
        <PropTable
          rows={[
            { prop: "variant", type: '"primary" | "secondary" | "outline" | "ghost" | "accent" | "destructive" | "link"', default: '"secondary"', description: "Visual emphasis." },
            { prop: "size", type: '"xs" | "sm" | "md" | "lg" | "icon"', default: '"md"', description: "Control height + padding + radius." },
            { prop: "asChild", type: "boolean", default: "false", description: "Render as the immediate child (Radix Slot pattern)." },
            { prop: "disabled", type: "boolean", default: "false", description: "Native disabled — drops pointer events and dims to 50%." },
          ]}
        />
      </Subsection>

      <Subsection title="Accessibility">
        <ul className="space-y-2 text-[13px] text-fg-subtle">
          <li>· Always set <code className="font-mono text-fg">aria-label</code> on icon-only buttons.</li>
          <li>· The focus ring is universal — driven by <code className="font-mono text-fg">:focus-visible</code> on <code className="font-mono text-fg">html</code>, not per component.</li>
          <li>· When using <code className="font-mono text-fg">asChild</code> with a link, ensure the link itself is keyboard-reachable.</li>
        </ul>
      </Subsection>
    </PageLayout>
  );
}
