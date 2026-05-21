import * as React from "react";
import { cn } from "@/core/utils/cn";

export function NcKbd({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <kbd
      className={cn(
        "inline-flex h-5 min-w-5 items-center justify-center rounded-[5px] border border-border bg-surface-2 px-1.5",
        "font-mono text-[10px] font-medium text-fg-subtle",
        "shadow-[inset_0_-1px_0_rgb(0_0_0_/_0.3)]",
        className,
      )}
      {...props}
    />
  );
}
