import { ArrowRight, Copy, Terminal, Check, Package, Palette, Code2 } from "lucide-react";
import { PageLayout } from "../registry/PageLayout";
import { Showcase, Subsection } from "../registry/Showcase";
import { NcButton, NcCodeBlock } from "@nuvo-code/core";

export function GettingStartedPage() {
  return (
    <PageLayout
      eyebrow="Overview · Getting Started"
      title="Getting Started"
      slug="getting-started"
      description="Install Nuvo Core, configure Tailwind, import the CSS, and build your first component in under 2 minutes."
    >
      <Subsection title="1. Install" description="Add the package to your project.">
        <div className="space-y-3">
          <NcCodeBlock code="npm install @nuvo-code/core" />
          <NcCodeBlock code="pnpm add @nuvo-code/core" />
          <NcCodeBlock code="yarn add @nuvo-code/core" />
        </div>
        <p className="mt-3 text-[13px] text-fg-subtle">
          Requires <code className="font-mono text-fg">react</code> and <code className="font-mono text-fg">react-dom</code> 18+ as peer dependencies.
        </p>
      </Subsection>

      <Subsection title="2. Configure Tailwind" description="Add Nuvo Core to your Tailwind content paths so utility classes are generated.">
        <NcCodeBlock
          code={`// tailwind.config.ts (Tailwind v3)
export default {
  content: [
    "./src/**/*.{ts,tsx}",
    "./node_modules/@nuvo-code/core/dist/**/*.{js,mjs}",
  ],
  // ...
}`}
        />
        <p className="mt-3 text-[13px] text-fg-subtle">
          Nuvo Core uses Tailwind v4 with CSS-based configuration. If you're on Tailwind v4, no content paths are needed — just import the CSS.
        </p>
      </Subsection>

      <Subsection title="3. Import CSS" description="Import the stylesheet once, typically in your root layout or entry point.">
        <NcCodeBlock code={`// src/main.tsx or src/app/layout.tsx
import "@nuvo-code/core/styles.css";`} />
        <p className="mt-3 text-[13px] text-fg-subtle">
          This single import includes all CSS variables, theme definitions, utility classes, and keyframe animations.
        </p>
      </Subsection>

      <Subsection title="4. Set up theming" description="Use the useTheme hook to toggle between dark, soft-dark, and light themes.">
        <NcCodeBlock
          code={`import { useTheme } from "@nuvo-code/core/core";

function App() {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <button onClick={() => setTheme("light")}>
        Switch to light
      </button>
      {/* Your app content */}
    </div>
  );
}`}
        />
        <p className="mt-3 text-[13px] text-fg-subtle">
          The theme is persisted in <code className="font-mono text-fg">localStorage</code> and applied via a <code className="font-mono text-fg">data-theme</code> attribute on <code className="font-mono text-fg">&lt;html&gt;</code>.
          Available themes: <code className="font-mono text-fg">"dark"</code>, <code className="font-mono text-fg">"soft-dark"</code>, <code className="font-mono text-fg">"light"</code>.
        </p>
      </Subsection>

      <Subsection title="5. Build your first component" description="Import a component and use it. Every component is tree-shakeable.">
        <Showcase
          code={`import { NcButton } from "@nuvo-code/core";

export function App() {
  return (
    <NcButton variant="primary">
      Deploy to Production
    </NcButton>
  );
}`}
        >
          <NcButton variant="primary">
            Deploy to Production
            <ArrowRight size={13} />
          </NcButton>
        </Showcase>
      </Subsection>

      <Subsection title="Next steps">
        <div className="grid gap-3 sm:grid-cols-3">
          <StepCard
            icon={<Package size={14} />}
            title="Browse components"
            description="Explore all primitives and composites in the sidebar."
            slug="buttons"
          />
          <StepCard
            icon={<Palette size={14} />}
            title="Customize tokens"
            description="Override CSS variables to match your brand."
            slug="colors"
          />
          <StepCard
            icon={<Code2 size={14} />}
            title="Study examples"
            description="Real-world patterns: dashboards, auth, AI chat."
            slug="examples"
          />
        </div>
      </Subsection>
    </PageLayout>
  );
}

function StepCard({ icon, title, description, slug }: { icon: React.ReactNode; title: string; description: string; slug: string }) {
  return (
    <a
      href={`#/${slug}`}
      className="flex flex-col gap-2 rounded-[12px] border border-border bg-surface-1 p-4 transition-colors hover:border-[rgb(168_85_247_/_0.3)] hover:bg-surface-2"
    >
      <div className="grid h-7 w-7 place-items-center rounded-[7px] border border-[rgb(168_85_247_/_0.3)] bg-[rgb(168_85_247_/_0.12)] text-[--color-brand-purple]">
        {icon}
      </div>
      <div>
        <div className="text-[13px] font-semibold text-fg">{title}</div>
        <div className="mt-0.5 text-[12px] text-fg-subtle">{description}</div>
      </div>
    </a>
  );
}
