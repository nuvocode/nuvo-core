import { useState } from "react";
import { Activity, Box, GitBranch, LayoutGrid, Settings, Users } from "lucide-react";
import { PageLayout } from "@/registry/PageLayout";
import { Subsection } from "@/registry/Showcase";
import { NcSidebar } from "@/components/composites/Sidebar";
import { NcTabs, NcTabsContent, NcTabsList, NcTabsTrigger } from "@/components/primitives/Tabs";
import { NcTag } from "@/components/primitives/Tag";

export function NavigationPage() {
  const [active, setActive] = useState("overview");

  return (
    <PageLayout
      eyebrow="Components · Navigation"
      title="Navigation"
      description="Sidebars, tabs, and breadcrumbs. The navigation language across Nuvo is mono labels for sections, sans for items, dots and tags for state."
    >
      <Subsection title="Sidebar" description="Grouped items with mono section labels. Active item highlights in surface-3; the icon picks up the accent tint.">
        <div className="overflow-hidden rounded-[14px] border border-border bg-bg">
          <div className="flex h-[360px]">
            <NcSidebar
              activeId={active}
              onSelect={setActive}
              header={<span className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-fg-faint">WORKSPACE</span>}
              groups={[
                {
                  id: "main",
                  items: [
                    { id: "overview", label: "Overview", icon: <LayoutGrid size={14} /> },
                    { id: "deployments", label: "Deployments", icon: <Box size={14} />, badge: <NcTag tone="accent" size="xs">3</NcTag> },
                    { id: "activity", label: "Activity", icon: <Activity size={14} /> },
                    { id: "branches", label: "Branches", icon: <GitBranch size={14} /> },
                  ],
                },
                {
                  id: "org",
                  label: "Organization",
                  items: [
                    { id: "team", label: "Team", icon: <Users size={14} /> },
                    { id: "settings", label: "Settings", icon: <Settings size={14} /> },
                  ],
                },
              ]}
            />
            <div className="flex-1 grid-bg-sm p-6 text-[13px] text-fg-subtle">
              <div className="label-mono mb-2">PREVIEW</div>
              <div className="text-[14px] text-fg">Selected: <span className="font-mono">{active}</span></div>
            </div>
          </div>
        </div>
      </Subsection>

      <Subsection title="Tabs" description="Inline segmented control. Use for filtered views inside a single page.">
        <div className="rounded-[14px] border border-border bg-surface-1 p-6">
          <NcTabs defaultValue="overview">
            <NcTabsList>
              <NcTabsTrigger value="overview">Overview</NcTabsTrigger>
              <NcTabsTrigger value="logs">Logs</NcTabsTrigger>
              <NcTabsTrigger value="metrics">Metrics</NcTabsTrigger>
              <NcTabsTrigger value="settings">Settings</NcTabsTrigger>
            </NcTabsList>
            <NcTabsContent value="overview" className="text-[13px] text-fg-subtle">Overview panel content.</NcTabsContent>
            <NcTabsContent value="logs" className="text-[13px] text-fg-subtle">Logs panel content.</NcTabsContent>
            <NcTabsContent value="metrics" className="text-[13px] text-fg-subtle">Metrics panel content.</NcTabsContent>
            <NcTabsContent value="settings" className="text-[13px] text-fg-subtle">Settings panel content.</NcTabsContent>
          </NcTabs>
        </div>
      </Subsection>

      <Subsection title="Breadcrumb">
        <div className="rounded-[12px] border border-border bg-surface-1 p-4">
          <nav className="flex items-center gap-1.5 font-mono text-[12px] text-fg-faint">
            <a className="hover:text-fg" href="#">nuvo</a>
            <span>/</span>
            <a className="hover:text-fg" href="#">launchpad-api</a>
            <span>/</span>
            <a className="hover:text-fg" href="#">deployments</a>
            <span>/</span>
            <span className="text-fg">dpl_a3f8c12</span>
          </nav>
        </div>
      </Subsection>
    </PageLayout>
  );
}
