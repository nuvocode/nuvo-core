import { useState } from "react";
import { Activity, Cloud, Command as CommandIcon, GitBranch, LayoutGrid, Settings, User } from "lucide-react";
import { PageLayout } from "../registry/PageLayout";
import { Showcase, Subsection } from "../registry/Showcase";
import { NcButton } from "@nuvocode/core";
import { NcDialog, NcDialogContent, NcDialogDescription, NcDialogHeader, NcDialogTitle, NcDialogTrigger } from "@nuvocode/core";
import { NcDropdownMenu, NcDropdownMenuContent, NcDropdownMenuItem, NcDropdownMenuLabel, NcDropdownMenuSeparator, NcDropdownMenuShortcut, NcDropdownMenuTrigger } from "@nuvocode/core";
import { NcTooltip, NcTooltipContent, NcTooltipProvider, NcTooltipTrigger } from "@nuvocode/core";
import { NcCommandMenu } from "@nuvocode/core";

export function OverlaysPage() {
  const [cmdOpen, setCmdOpen] = useState(false);

  return (
    <PageLayout
      eyebrow="Components · Overlay"
      title="Overlays"
      description="Dialogs, dropdowns, tooltips, and the command menu. All built on Radix primitives — keyboard-driven, focus-trapped, scroll-locked."
    >
      <Subsection title="Dialog">
        <Showcase>
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
        <Showcase>
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
        <Showcase>
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
        <Showcase>
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
    </PageLayout>
  );
}
