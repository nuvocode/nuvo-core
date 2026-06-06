import { Search } from "lucide-react";
import { PageLayout } from "../registry/PageLayout";
import { PropTable, Showcase, Subsection } from "../registry/Showcase";
import { NcInput, NcTextarea } from "@nuvo-code/core";
import { NcSwitch } from "@nuvo-code/core";

export function InputsPage() {
  return (
    <PageLayout
      eyebrow="Components · Form"
      title="Inputs & controls"
      slug="inputs"
      related={[{ slug: "buttons", label: "Buttons" }, { slug: "feedback", label: "Feedback" }, { slug: "data", label: "Data Display" }]}
      description="Quiet by default, focused with a soft purple ring. Mono mode for terminal-style fields, keys, and identifiers."
    >
      <Subsection title="Text input">
        <Showcase
          importPath={`import { NcInput } from "@nuvo-code/core";`}
          code={`<NcInput placeholder="Project name" />
<NcInput size="lg" mono placeholder="ssh-rsa AAAAB3..." />`}
        >
          <div className="flex w-full max-w-md flex-col gap-3">
            <NcInput placeholder="Project name" />
            <NcInput size="lg" placeholder="you@nuvo.dev" />
            <NcInput mono placeholder="ssh-rsa AAAAB3NzaC1yc2EAAAA..." />
            <NcInput disabled placeholder="Disabled field" />
          </div>
        </Showcase>
      </Subsection>

      <Subsection title="Search field" description="A composed pattern — input with leading icon and a trailing key hint.">
        <Showcase
          code={`import { Search } from "lucide-react";

<div className="relative">
  <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-fg-faint" />
  <NcInput className="pl-9 pr-12" placeholder="Search components…" />
  <span className="absolute right-3 top-1/2 -translate-y-1/2 font-mono text-[10.5px] text-fg-faint">⌘ K</span>
</div>`}
        >
          <div className="relative w-full max-w-md">
            <Search size={13} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-fg-faint" />
            <NcInput className="pl-9 pr-12" placeholder="Search components…" />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 font-mono text-[10.5px] text-fg-faint">⌘ K</span>
          </div>
        </Showcase>
      </Subsection>

      <Subsection title="Textarea">
        <Showcase
          code={`<NcTextarea placeholder="Describe what you are shipping…" rows={4} />`}
        >
          <NcTextarea
            placeholder="Describe what you are shipping…"
            className="w-full max-w-md"
            rows={4}
          />
        </Showcase>
      </Subsection>

      <Subsection title="Switch">
        <Showcase
          code={`import { NcSwitch } from "@nuvo-code/core";

<NcSwitch defaultChecked />
<NcSwitch />`}
        >
          <div className="flex items-center gap-3">
            <NcSwitch defaultChecked />
            <span className="text-[13px] text-fg-muted">Auto-deploy on push</span>
          </div>
          <div className="flex items-center gap-3">
            <NcSwitch />
            <span className="text-[13px] text-fg-muted">Send weekly summary</span>
          </div>
        </Showcase>
      </Subsection>

      <Subsection title="Props">
        <PropTable
          rows={[
            { prop: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Control height and padding." },
            { prop: "mono", type: "boolean", default: "false", description: "Use monospace font for terminal-style fields." },
            { prop: "placeholder", type: "string", default: "—", description: "Placeholder text." },
            { prop: "disabled", type: "boolean", default: "false", description: "Native disabled state." },
            { prop: "className", type: "string", default: "—", description: "Additional CSS classes." },
          ]}
        />
      </Subsection>

      <Subsection title="NcTextarea Props">
        <PropTable
          rows={[
            { prop: "rows", type: "number", default: "3", description: "Number of visible text rows." },
            { prop: "placeholder", type: "string", default: "—", description: "Placeholder text." },
            { prop: "disabled", type: "boolean", default: "false", description: "Native disabled state." },
            { prop: "className", type: "string", default: "—", description: "Additional CSS classes." },
          ]}
        />
      </Subsection>

      <Subsection title="NcSwitch Props">
        <PropTable
          rows={[
            { prop: "defaultChecked", type: "boolean", default: "false", description: "Initial checked state (uncontrolled)." },
            { prop: "checked", type: "boolean", default: "—", description: "Controlled checked state." },
            { prop: "onCheckedChange", type: "(checked: boolean) => void", default: "—", description: "Change handler for controlled usage." },
            { prop: "disabled", type: "boolean", default: "false", description: "Native disabled state." },
          ]}
        />
      </Subsection>
    </PageLayout>
  );
}
