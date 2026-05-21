import * as React from "react";
import { cn } from "@/core/utils/cn";

interface NcNavbarProps extends React.HTMLAttributes<HTMLElement> {
  start?: React.ReactNode;
  center?: React.ReactNode;
  end?: React.ReactNode;
  height?: number;
}

export function NcNavbar({
  start,
  center,
  end,
  height = 54,
  className,
  ...props
}: NcNavbarProps) {
  return (
    <nav
      className={cn(
        "sticky top-0 z-40 flex items-center justify-between border-b border-border-subtle px-6",
        "bg-[rgb(9_9_11_/_0.78)] backdrop-blur-[14px]",
        className,
      )}
      style={{ height }}
      {...props}
    >
      <div className="flex items-center gap-3">{start}</div>
      {center && <div className="hidden md:flex items-center gap-4">{center}</div>}
      <div className="flex items-center gap-3">{end}</div>
    </nav>
  );
}
