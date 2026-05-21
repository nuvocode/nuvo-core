import * as React from "react";
import { Command } from "cmdk";
import { Search } from "lucide-react";
import { NcDialog, NcDialogContent, NcDialogTitle } from "@/components/primitives/Dialog";
import { NcKbd } from "@/components/primitives/Kbd";
import { cn } from "@/core/utils/cn";

export interface CommandItem {
  id: string;
  label: string;
  hint?: string;
  icon?: React.ReactNode;
  group?: string;
  shortcut?: string[];
  onSelect?: () => void;
}

interface NcCommandMenuProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  items: CommandItem[];
  placeholder?: string;
}

export function NcCommandMenu({
  open,
  onOpenChange,
  items,
  placeholder = "Search commands, components, docs…",
}: NcCommandMenuProps) {
  const groups = React.useMemo(() => {
    const m = new Map<string, CommandItem[]>();
    items.forEach((i) => {
      const g = i.group ?? "General";
      if (!m.has(g)) m.set(g, []);
      m.get(g)!.push(i);
    });
    return Array.from(m.entries());
  }, [items]);

  return (
    <NcDialog open={open} onOpenChange={onOpenChange}>
      <NcDialogContent className="max-w-xl gap-0 p-0">
        <NcDialogTitle className="sr-only">Command Menu</NcDialogTitle>
        <Command label="Command Menu" className="flex flex-col">
          <div className="flex items-center gap-2 border-b border-border-subtle px-4">
            <Search size={14} className="text-fg-faint" />
            <Command.Input
              placeholder={placeholder}
              className={cn(
                "h-12 flex-1 bg-transparent text-[13px] text-fg placeholder:text-fg-faint",
                "outline-none border-0",
              )}
            />
            <NcKbd>ESC</NcKbd>
          </div>
          <Command.List className="max-h-[360px] overflow-y-auto p-2">
            <Command.Empty className="px-3 py-8 text-center text-[12.5px] text-fg-subtle">
              No results found.
            </Command.Empty>
            {groups.map(([group, gi]) => (
              <Command.Group
                key={group}
                heading={group}
                className={cn(
                  "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5",
                  "[&_[cmdk-group-heading]]:font-mono [&_[cmdk-group-heading]]:text-[10px]",
                  "[&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-[0.12em]",
                  "[&_[cmdk-group-heading]]:text-fg-faint",
                )}
              >
                {gi.map((item) => (
                  <Command.Item
                    key={item.id}
                    value={`${item.label} ${item.hint ?? ""}`}
                    onSelect={() => {
                      item.onSelect?.();
                      onOpenChange(false);
                    }}
                    className={cn(
                      "group flex cursor-pointer items-center gap-2.5 rounded-[7px] px-2.5 py-2",
                      "text-[12.5px] text-fg-muted transition-colors",
                      "data-[selected=true]:bg-surface-3 data-[selected=true]:text-fg",
                    )}
                  >
                    {item.icon && <span className="text-fg-faint group-data-[selected=true]:text-[--color-brand-purple]">{item.icon}</span>}
                    <span className="flex-1">{item.label}</span>
                    {item.hint && <span className="text-[11px] text-fg-faint">{item.hint}</span>}
                    {item.shortcut && (
                      <span className="flex gap-1">
                        {item.shortcut.map((k, i) => (
                          <NcKbd key={i}>{k}</NcKbd>
                        ))}
                      </span>
                    )}
                  </Command.Item>
                ))}
              </Command.Group>
            ))}
          </Command.List>
          <div className="flex items-center justify-between border-t border-border-subtle px-4 py-2 text-[10px] text-fg-faint">
            <span className="font-mono tracking-wider">NUVO COMMAND · K</span>
            <span className="flex items-center gap-1.5">
              Navigate <NcKbd>↑</NcKbd> <NcKbd>↓</NcKbd> · Open <NcKbd>↵</NcKbd>
            </span>
          </div>
        </Command>
      </NcDialogContent>
    </NcDialog>
  );
}
