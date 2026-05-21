import * as React from "react";
import { cn } from "@/core/utils/cn";

export interface SidebarItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  badge?: React.ReactNode;
}

export interface SidebarGroup {
  id: string;
  label?: string;
  items: SidebarItem[];
}

interface NcSidebarProps {
  groups: SidebarGroup[];
  activeId?: string;
  onSelect?: (id: string) => void;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}

export function NcSidebar({
  groups,
  activeId,
  onSelect,
  header,
  footer,
  className,
}: NcSidebarProps) {
  return (
    <aside
      className={cn(
        "flex h-full w-[240px] shrink-0 flex-col border-r border-border-subtle bg-surface-1",
        className,
      )}
    >
      {header && <div className="border-b border-border-subtle px-4 py-3">{header}</div>}
      <nav className="flex-1 overflow-y-auto p-3">
        {groups.map((group) => (
          <div key={group.id} className="mb-4">
            {group.label && (
              <div className="px-2 pb-2 pt-1 font-mono text-[10px] uppercase tracking-[0.12em] text-fg-faint">
                {group.label}
              </div>
            )}
            <ul className="flex flex-col gap-px">
              {group.items.map((item) => {
                const active = item.id === activeId;
                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => onSelect?.(item.id)}
                      className={cn(
                        "group flex w-full items-center gap-2 rounded-[7px] px-2.5 py-1.5 text-left",
                        "text-[12.5px] font-medium transition-colors duration-150",
                        active
                          ? "bg-surface-3 text-fg"
                          : "text-fg-subtle hover:bg-surface-2 hover:text-fg",
                      )}
                    >
                      {item.icon && (
                        <span
                          className={cn(
                            "grid h-4 w-4 place-items-center",
                            active ? "text-[--color-brand-purple]" : "text-fg-faint group-hover:text-fg-subtle",
                          )}
                        >
                          {item.icon}
                        </span>
                      )}
                      <span className="flex-1 truncate">{item.label}</span>
                      {item.badge}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
      {footer && <div className="border-t border-border-subtle px-4 py-3">{footer}</div>}
    </aside>
  );
}
