import { ArrowUpRight, Box } from "lucide-react";
import { PageLayout } from "../registry/PageLayout";
import { PropTable, Showcase, Subsection } from "../registry/Showcase";
import { NcCard, NcCardContent, NcCardDescription, NcCardFooter, NcCardHeader, NcCardTitle } from "@nuvo-code/core";
import { NcDot } from "@nuvo-code/core";
import { NcTag } from "@nuvo-code/core";
import { NcButton } from "@nuvo-code/core";

export function CardsPage() {
  return (
    <PageLayout
      eyebrow="Components · Container"
      title="Card"
      slug="cards"
      related={[{ slug: "buttons", label: "Buttons" }, { slug: "surfaces", label: "Surfaces" }, { slug: "layouts", label: "Layouts" }]}
      description="A composable surface. Header, content, footer all opt-in. Interactive variants animate on hover with the accent ring."
    >
      <Subsection title="Anatomy">
        <Showcase
          previewClassName="!justify-start"
          importPath={`import { NcCard, NcCardHeader, NcCardTitle, NcCardDescription, NcCardContent, NcCardFooter } from "@nuvo-code/core";`}
          code={`import { NcCard, NcCardHeader, NcCardTitle, NcCardDescription, NcCardContent, NcCardFooter } from "@nuvo-code/core";

<NcCard interactive>
  <NcCardHeader>
    <NcCardTitle>Nuvo Studio</NcCardTitle>
    <NcCardDescription>Developer tooling for shipping at the speed of thought.</NcCardDescription>
  </NcCardHeader>
  <NcCardContent>
    {/* Your content */}
  </NcCardContent>
  <NcCardFooter>
    <NcButton variant="ghost" size="xs">Open</NcButton>
  </NcCardFooter>
</NcCard>`}
        >
          <NcCard interactive className="w-[300px]">
            <NcCardHeader>
              <div className="flex items-center justify-between">
                <div className="grid h-8 w-8 place-items-center rounded-[7px] border border-border bg-surface-2">
                  <Box size={14} className="text-[--color-brand-purple]" />
                </div>
                <NcTag tone="accent">Primary</NcTag>
              </div>
              <NcCardTitle>Nuvo Studio</NcCardTitle>
              <NcCardDescription>Developer tooling for shipping at the speed of thought.</NcCardDescription>
            </NcCardHeader>
            <NcCardContent>
              <div className="flex flex-col gap-2 text-[12.5px] text-fg-muted">
                <Row label="Active workspaces" value="12" />
                <Row label="Pending invites" value="3" />
              </div>
            </NcCardContent>
            <NcCardFooter>
              <span className="flex items-center gap-1.5">
                <NcDot tone="green" />
                Operational
              </span>
              <NcButton variant="ghost" size="xs">
                Open <ArrowUpRight size={11} />
              </NcButton>
            </NcCardFooter>
          </NcCard>
        </Showcase>
      </Subsection>

      <Subsection title="Surfaces">
        <Showcase
          code={`<NcCard surface="raised">raised</NcCard>
<NcCard surface="sunken">sunken</NcCard>
<NcCard surface="flat">flat</NcCard>
<NcCard surface="glass">glass</NcCard>`}
        >
          <NcCard surface="raised" className="w-44 p-4 text-center text-[12.5px] text-fg-subtle">raised</NcCard>
          <NcCard surface="sunken" className="w-44 p-4 text-center text-[12.5px] text-fg-subtle">sunken</NcCard>
          <NcCard surface="flat" className="w-44 p-4 text-center text-[12.5px] text-fg-subtle">flat</NcCard>
          <NcCard surface="glass" className="w-44 p-4 text-center text-[12.5px] text-fg-subtle">glass</NcCard>
        </Showcase>
      </Subsection>

      <Subsection title="Props">
        <PropTable
          rows={[
            { prop: "surface", type: '"raised" | "sunken" | "flat" | "glass"', default: '"raised"', description: "Visual elevation style. Glass adds backdrop-blur." },
            { prop: "radius", type: '"md" | "lg" | "xl"', default: '"md"', description: "Border radius: 12px, 14px, or 20px." },
            { prop: "interactive", type: "boolean", default: "false", description: "Enables hover glow ring and translate animation." },
            { prop: "className", type: "string", default: "—", description: "Additional CSS classes." },
          ]}
        />
      </Subsection>

      <Subsection title="Sub-components">
        <PropTable
          rows={[
            { prop: "NcCardHeader", type: "HTMLDivElement", default: "—", description: "Top section, typically contains title and description." },
            { prop: "NcCardTitle", type: "HTMLHeadingElement", default: "—", description: "Card heading, renders as h3." },
            { prop: "NcCardDescription", type: "HTMLParagraphElement", default: "—", description: "Supporting text below the title." },
            { prop: "NcCardContent", type: "HTMLDivElement", default: "—", description: "Main body of the card." },
            { prop: "NcCardFooter", type: "HTMLDivElement", default: "—", description: "Bottom section, typically actions or metadata." },
          ]}
        />
      </Subsection>
    </PageLayout>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between border-b border-border-subtle pb-1.5 last:border-b-0">
      <span className="text-fg-subtle">{label}</span>
      <span className="font-medium text-fg">{value}</span>
    </div>
  );
}
