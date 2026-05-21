import * as React from "react";
import { cn } from "@/core/utils/cn";

interface NcEmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  action?: React.ReactNode;
}

export function NcEmptyState({
  icon,
  title,
  description,
  action,
  className,
  ...props
}: NcEmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-3 rounded-[14px] border border-dashed border-border bg-surface-1/40 px-8 py-14 text-center",
        className,
      )}
      {...props}
    >
      {icon && (
        <div className="grid h-10 w-10 place-items-center rounded-[10px] border border-border-subtle bg-surface-2 text-fg-subtle">
          {icon}
        </div>
      )}
      <div>
        <div className="text-[14px] font-semibold text-fg">{title}</div>
        {description && (
          <div className="mt-1 max-w-sm text-[12.5px] text-fg-subtle">{description}</div>
        )}
      </div>
      {action && <div className="mt-2">{action}</div>}
    </div>
  );
}
