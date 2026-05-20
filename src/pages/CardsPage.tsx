import { ArrowUpRight, Box } from "lucide-react";
import { PageLayout } from "@/registry/PageLayout";
import { Showcase, Subsection } from "@/registry/Showcase";
import { NcCard, NcCardContent, NcCardDescription, NcCardFooter, NcCardHeader, NcCardTitle } from "@/components/primitives/Card";
import { NcDot } from "@/components/primitives/Dot";
import { NcTag } from "@/components/primitives/Tag";
import { NcButton } from "@/components/primitives/Button";

export function CardsPage() {
  return (
    <PageLayout
      eyebrow="Components · Container"
      title="Card"
      description="A composable surface. Header, content, footer all opt-in. Interactive variants animate on hover with the accent ring."
    >
      <Subsection title="Anatomy">
        <Showcase previewClassName="!justify-start">
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
        <Showcase>
          <NcCard surface="raised" className="w-44 p-4 text-center text-[12.5px] text-fg-subtle">raised</NcCard>
          <NcCard surface="sunken" className="w-44 p-4 text-center text-[12.5px] text-fg-subtle">sunken</NcCard>
          <NcCard surface="flat" className="w-44 p-4 text-center text-[12.5px] text-fg-subtle">flat</NcCard>
          <NcCard surface="glass" className="w-44 p-4 text-center text-[12.5px] text-fg-subtle">glass</NcCard>
        </Showcase>
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
