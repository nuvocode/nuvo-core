import { Search } from "lucide-react";
import { PageLayout } from "@/registry/PageLayout";
import { Showcase, Subsection } from "@/registry/Showcase";
import { NcInput, NcTextarea } from "@/components/primitives/Input";
import { NcSwitch } from "@/components/primitives/Switch";

export function InputsPage() {
  return (
    <PageLayout
      eyebrow="Components · Form"
      title="Inputs & controls"
      description="Quiet by default, focused with a soft purple ring. Mono mode for terminal-style fields, keys, and identifiers."
    >
      <Subsection title="Text input">
        <Showcase
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
        <Showcase>
          <div className="relative w-full max-w-md">
            <Search size={13} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-fg-faint" />
            <NcInput className="pl-9 pr-12" placeholder="Search components…" />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 font-mono text-[10.5px] text-fg-faint">⌘ K</span>
          </div>
        </Showcase>
      </Subsection>

      <Subsection title="Textarea">
        <Showcase>
          <NcTextarea
            placeholder="Describe what you are shipping…"
            className="w-full max-w-md"
            rows={4}
          />
        </Showcase>
      </Subsection>

      <Subsection title="Switch">
        <Showcase>
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
    </PageLayout>
  );
}
