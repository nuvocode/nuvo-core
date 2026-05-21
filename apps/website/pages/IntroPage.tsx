import { ArrowRight, Sparkles, Terminal, Zap } from "lucide-react";
import {
  NcBadge,
  NcButton,
  NcCard,
  NcCardContent,
  NcCardDescription,
  NcCardHeader,
  NcCardTitle,
  NcDivider,
  NcDot,
  NcGlowOrb,
  NcGridBackground,
  NcLogo,
  NcTag,
} from "@nuvo-code/core";

export function IntroPage() {
  return (
    <div className="w-full">
      <NcGridBackground className="relative overflow-hidden border-b border-border-subtle">
        <NcGlowOrb tone="purple" size={520} blur={90} intensity={0.07} style={{ top: "-10%", left: "-8%" }} />
        <NcGlowOrb tone="pink" size={420} blur={80} intensity={0.06} style={{ top: "30%", right: "-6%" }} />

        <div className="relative mx-auto w-full max-w-[1080px] px-10 pb-24 pt-20 text-center">
          <NcBadge tone="accent" className="mx-auto mb-8 inline-flex">
            <NcDot tone="purple" pulse />
            <span className="ml-1">v0.3 · Internal Draft</span>
          </NcBadge>

          <div className="mb-6 flex items-center justify-center gap-4">
            <NcLogo size={48} />
            <h1 className="text-[64px] font-bold leading-none tracking-[-0.04em] text-fg">
              <span className="grad-text">Nuvo</span> Core
            </h1>
          </div>
          <p className="mx-auto max-w-xl text-[16px] font-light text-fg-subtle">
            Engineering systems for builders and modern products.
          </p>
          <p className="mt-3 font-mono text-[11.5px] tracking-[0.06em] shimmer-text">
            Tokens · Primitives · Composites · Patterns · Examples
          </p>

          <div className="mt-10 flex items-center justify-center gap-3">
            <NcButton variant="primary" size="lg">
              Explore the system
              <ArrowRight size={14} />
            </NcButton>
            <NcButton variant="ghost" size="lg">
              <Terminal size={14} />
              View source
            </NcButton>
          </div>

          <div className="mt-14 flex items-center justify-center gap-10">
            <Stat value="32" label="Components" />
            <NcDivider orientation="vertical" fade={false} />
            <Stat value="14" label="Primitives" />
            <NcDivider orientation="vertical" fade={false} />
            <Stat value="3" label="Themes" />
          </div>
        </div>
      </NcGridBackground>

      <div className="mx-auto w-full max-w-[1080px] px-10 py-16">
        <div className="label-mono mb-3">Philosophy · Three Pillars</div>
        <h2 className="text-[24px] font-semibold tracking-[-0.025em]">
          A system, not a kit.
        </h2>
        <p className="mt-2 max-w-[560px] text-[13.5px] text-fg-subtle">
          Tokens flow through themes into primitives, primitives compose into patterns,
          patterns assemble into real product surfaces. One direction. No layers fight.
        </p>
        <div className="divider-h my-8" />

        <div className="grid gap-4 md:grid-cols-3">
          <FeatureCard
            icon={<Sparkles size={14} />}
            title="Engineering-first"
            tag="Sharp"
            description="Every primitive is typed, variant-driven, and composable. No surprise overrides."
          />
          <FeatureCard
            icon={<Zap size={14} />}
            title="Token-driven theming"
            tag="Calm"
            description="CSS variables under semantic tokens. Swap themes by toggling a class, not a tree of providers."
          />
          <FeatureCard
            icon={<Terminal size={14} />}
            title="Dashboard-native"
            tag="Premium"
            description="Built for developer tools and infra surfaces. Mono labels, terminal voice, signal colors."
          />
        </div>
      </div>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-[26px] font-semibold tracking-[-0.02em] text-fg">{value}</div>
      <div className="mt-1 font-mono text-[10.5px] uppercase tracking-[0.12em] text-fg-faint">{label}</div>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  tag,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  tag: string;
  description: string;
}) {
  return (
    <NcCard interactive radius="lg">
      <NcCardHeader>
        <div className="mb-2 flex items-center justify-between">
          <div className="grid h-7 w-7 place-items-center rounded-[7px] border border-[rgb(168_85_247_/_0.3)] bg-[rgb(168_85_247_/_0.12)] text-[--color-brand-purple]">
            {icon}
          </div>
          <NcTag tone="accent" size="xs">
            {tag}
          </NcTag>
        </div>
        <NcCardTitle className="text-[15px]">{title}</NcCardTitle>
        <NcCardDescription>{description}</NcCardDescription>
      </NcCardHeader>
      <NcCardContent>
        <div className="flex items-center gap-1.5 font-mono text-[10.5px] text-fg-faint">
          <NcDot tone="green" size="xs" />
          Stable
        </div>
      </NcCardContent>
    </NcCard>
  );
}
