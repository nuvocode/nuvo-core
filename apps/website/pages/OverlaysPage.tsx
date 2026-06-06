import { useState } from "react";
import { Activity, Cloud, Command as CommandIcon, GitBranch, LayoutGrid, Settings, User } from "lucide-react";
import { PageLayout } from "../registry/PageLayout";
import { PropTable, Showcase, Subsection } from "../registry/Showcase";
import { NcButton } from "@nuvo-code/core";
import { NcDialog, NcDialogContent, NcDialogDescription, NcDialogHeader, NcDialogTitle, NcDialogTrigger } from "@nuvo-code/core";
import { NcDropdownMenu, NcDropdownMenuContent, NcDropdownMenuItem, NcDropdownMenuLabel, NcDropdownMenuSeparator, NcDropdownMenuShortcut, NcDropdownMenuTrigger } from "@nuvo-code/core";
import { NcTooltip, NcTooltipContent, NcTooltipProvider, NcTooltipTrigger } from "@nuvo-code/core";
import { NcCommandMenu } from "@nuvo-code/core";

export function OverlaysPage() {
  const [cmdOpen, setCmdOpen] = useState(false);

  return (
    <PageLayout
      eyebrow="Components · Overlay"
      title="Overlays"
      slug="overlays"
      related={[{ slug: "buttons", label: "Buttons" }, { slug: "navigation", label: "Navigation" }, { slug: "feedback", label: "Feedback" }]}
      description="Dialogs, dropdowns, tooltips, and the command menu. All built on Radix primitives — keyboard-driven, focus-trapped, scroll-locked."
    >
      <Subsection title="Dialog">
        <Showcase
          importPath={`import { NcDialog, NcDialogTrigger, NcDialogContent, NcDialogHeader, NcDialogTitle, NcDialogDescription } from "@nuvo-code/core";`}
          code={`import { NcDialog, NcDialogTrigger, NcDialogContent, NcDialogHeader, NcDialogTitle, NcDialogDescription } from "@nuvo-code/core";

<NcDialog>
  <NcDialogTrigger asChild>
    <NcButton variant="primary">Open dialog</NcButton>
  </NcDialogTrigger>
  <NcDialogContent>
    <NcDialogHeader>
      <NcDialogTitle>Deploy to production</NcDialogTitle>
      <NcDialogDescription>
        This will replace the current production build.
      </NcDialogDescription>
    </NcDialogHeader>
    <NcButton variant="primary">Confirm deploy</NcButton>
  </NcDialogContent>
</NcDialog>`}
        >
          <NcDialog>
            <NcDialogTrigger asChild>
              <NcButton variant="primary">Open dialog</NcButton>
            </NcDialogTrigger>
            <NcDialogContent>
              <NcDialogHeader>
                <NcDialogTitle>Deploy to production</NcDialogTitle>
                <NcDialogDescription>
                  This will replace the current production build. Health checks must pass within 60 seconds.
                </NcDialogDescription>
              </NcDialogHeader>
              <div className="flex justify-end gap-2 pt-2">
                <NcButton variant="ghost">Cancel</NcButton>
                <NcButton variant="primary">Confirm deploy</NcButton>
              </div>
            </NcDialogContent>
          </NcDialog>
        </Showcase>
      </Subsection>

      <Subsection title="Dropdown menu">
        <Showcase
          code={`import { NcDropdownMenu, NcDropdownMenuTrigger, NcDropdownMenuContent, NcDropdownMenuItem, NcDropdownMenuLabel, NcDropdownMenuSeparator, NcDropdownMenuShortcut } from "@nuvo-code/core";

<NcDropdownMenu>
  <NcDropdownMenuTrigger asChild>
    <NcButton variant="outline">Workspace menu</NcButton>
  </NcDropdownMenuTrigger>
  <NcDropdownMenuContent>
    <NcDropdownMenuLabel>Workspace</NcDropdownMenuLabel>
    <NcDropdownMenuItem>Overview</NcDropdownMenuItem>
    <NcDropdownMenuItem>Activity</NcDropdownMenuItem>
    <NcDropdownMenuSeparator />
    <NcDropdownMenuItem>Settings <NcDropdownMenuShortcut>⌘,</NcDropdownMenuShortcut></NcDropdownMenuItem>
  </NcDropdownMenuContent>
</NcDropdownMenu>`}
        >
          <NcDropdownMenu>
            <NcDropdownMenuTrigger asChild>
              <NcButton variant="outline">Workspace menu</NcButton>
            </NcDropdownMenuTrigger>
            <NcDropdownMenuContent>
              <NcDropdownMenuLabel>Workspace</NcDropdownMenuLabel>
              <NcDropdownMenuItem><LayoutGrid size={12} /> Overview <NcDropdownMenuShortcut>⌘1</NcDropdownMenuShortcut></NcDropdownMenuItem>
              <NcDropdownMenuItem><Activity size={12} /> Activity</NcDropdownMenuItem>
              <NcDropdownMenuItem><GitBranch size={12} /> Branches</NcDropdownMenuItem>
              <NcDropdownMenuSeparator />
              <NcDropdownMenuItem><User size={12} /> Profile</NcDropdownMenuItem>
              <NcDropdownMenuItem><Settings size={12} /> Settings <NcDropdownMenuShortcut>⌘,</NcDropdownMenuShortcut></NcDropdownMenuItem>
            </NcDropdownMenuContent>
          </NcDropdownMenu>
        </Showcase>
      </Subsection>

      <Subsection title="Tooltip">
        <Showcase
          code={`import { NcTooltip, NcTooltipTrigger, NcTooltipContent, NcTooltipProvider } from "@nuvo-code/core";

<NcTooltipProvider delayDuration={150}>
  <NcTooltip>
    <NcTooltipTrigger asChild>
      <NcButton variant="ghost" size="icon" aria-label="Region">
        <Cloud size={14} />
      </NcButton>
    </NcTooltipTrigger>
    <NcTooltipContent>Region · US-EAST-1</NcTooltipContent>
  </NcTooltip>
</NcTooltipProvider>`}
        >
          <NcTooltipProvider delayDuration={150}>
            <NcTooltip>
              <NcTooltipTrigger asChild>
                <NcButton variant="ghost" size="icon" aria-label="Region">
                  <Cloud size={14} />
                </NcButton>
              </NcTooltipTrigger>
              <NcTooltipContent>Region · US-EAST-1</NcTooltipContent>
            </NcTooltip>
          </NcTooltipProvider>
        </Showcase>
      </Subsection>

      <Subsection title="Command menu" description="cmdk + Radix Dialog. Open with ⌘K from anywhere in the app.">
        <Showcase
          code={`import { NcCommandMenu } from "@nuvo-code/core";

<NcCommandMenu
  open={open}
  onOpenChange={setOpen}
  items={[
    { id: "1", label: "Go to Overview", group: "Navigate" },
    { id: "2", label: "Deploy to production", group: "Actions" },
  ]}
/>`}
        >
          <NcButton variant="outline" onClick={() => setCmdOpen(true)}>
            <CommandIcon size={13} />
            Open command menu
            <span className="ml-2 font-mono text-[10px] text-fg-faint">⌘ K</span>
          </NcButton>
        </Showcase>
        <NcCommandMenu
          open={cmdOpen}
          onOpenChange={setCmdOpen}
          items={[
            { id: "1", label: "Go to Overview", icon: <LayoutGrid size={13} />, group: "Navigate", shortcut: ["G", "O"] },
            { id: "2", label: "Open Activity", icon: <Activity size={13} />, group: "Navigate" },
            { id: "3", label: "Deploy to production", icon: <Cloud size={13} />, hint: "main", group: "Actions" },
            { id: "4", label: "Settings", icon: <Settings size={13} />, group: "Actions", shortcut: ["⌘", ","] },
          ]}
        />
      </Subsection>

      <Subsection title="Props">
        <PropTable
          rows={[
            { prop: "NcDialog", type: "DialogPrimitive.Root", default: "—", description: "Root dialog component. Accepts open/onOpenChange for controlled usage." },
            { prop: "NcDialogTrigger", type: "DialogPrimitive.Trigger", default: "—", description: "Trigger element. Use asChild to compose with a Button." },
            { prop: "NcDialogContent", type: "DialogPrimitive.Content", default: "—", description: "Modal panel. Includes overlay, close button, and slide-up animation." },
            { prop: "NcDialogHeader", type: "HTMLDivElement", default: "—", description: "Header wrapper for title and description." },
            { prop: "NcDialogTitle", type: "DialogPrimitive.Title", default: "—", description: "Dialog heading. Renders as h2." },
            { prop: "NcDialogDescription", type: "DialogPrimitive.Description", default: "—", description: "Supporting text below the title." },
          ]}
        />
      </Subsection>
    </PageLayout>
  );
}
