import { PageLayout } from "../registry/PageLayout";
import { Showcase, Subsection } from "../registry/Showcase";
import { NcCard, NcCardContent, NcCardDescription, NcCardFooter, NcCardHeader, NcCardTitle } from "@nuvo-code/core";
import { NcGlowOrb } from "@nuvo-code/core";
import { NcGridBackground } from "@nuvo-code/core";

export function SurfacesPage() {
  return (
    <PageLayout
      eyebrow="Foundations · Surfaces"
      title="Surfaces & elevation"
      slug="surfaces"
      description="Layered surfaces, geometric clip-paths, glass panels, ambient glow. Five distinct strategies — each one earns its place."
    >
      <Subsection title="Card surfaces" description="Three flavors: raised (above bg), sunken (deepest), glass (translucent).">
        <Showcase>
          <NcCard surface="raised" className="w-60">
            <NcCardHeader>
              <NcCardTitle className="text-[14px]">Raised</NcCardTitle>
              <NcCardDescription>Default card surface.</NcCardDescription>
            </NcCardHeader>
            <NcCardFooter>bg-surface-1</NcCardFooter>
          </NcCard>
          <NcCard surface="sunken" className="w-60">
            <NcCardHeader>
              <NcCardTitle className="text-[14px]">Sunken</NcCardTitle>
              <NcCardDescription>Below the page surface.</NcCardDescription>
            </NcCardHeader>
            <NcCardFooter>#0d0d10</NcCardFooter>
          </NcCard>
          <NcCard surface="glass" className="w-60">
            <NcCardHeader>
              <NcCardTitle className="text-[14px]">Glass</NcCardTitle>
              <NcCardDescription>Translucent over dynamic backdrop.</NcCardDescription>
            </NcCardHeader>
            <NcCardFooter>backdrop-blur(16px)</NcCardFooter>
          </NcCard>
        </Showcase>
      </Subsection>

      <Subsection title="Grid backgrounds" description="Two densities. Always paired with a radial fade to bg so edges dissolve.">
        <div className="grid gap-3 md:grid-cols-2">
          <NcGridBackground className="h-44 rounded-[14px] border border-border-subtle" />
          <NcGridBackground density="tight" className="h-44 rounded-[14px] border border-border-subtle" />
        </div>
      </Subsection>

      <Subsection title="Glow orbs" description="Ambient light. One per scene, two if intentional. Never decorative without purpose.">
        <div className="relative h-48 overflow-hidden rounded-[14px] border border-border-subtle bg-bg">
          <NcGlowOrb tone="purple" size={300} blur={70} intensity={0.16} style={{ top: "-20%", left: "10%" }} />
          <NcGlowOrb tone="pink" size={260} blur={60} intensity={0.12} style={{ bottom: "-30%", right: "15%" }} />
        </div>
      </Subsection>

      <Subsection title="Geometric clip" description="Sharp notch corner — used for infra panels, builds, and any 'system' UI.">
        <Showcase>
          <div className="clip-notch rounded-[12px] border border-border bg-surface-2 px-6 py-4 font-mono text-[11px] uppercase tracking-[0.12em] text-fg-muted">
            NUVOBUILD / INFRA
          </div>
          <div className="clip-notch-sm rounded-[10px] border border-border bg-surface-2 px-4 py-3 font-mono text-[11px] text-fg-muted">
            small notch
          </div>
        </Showcase>
      </Subsection>
    </PageLayout>
  );
}
