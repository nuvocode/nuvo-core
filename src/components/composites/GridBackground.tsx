import * as React from "react";
import { cn } from "@/core/utils/cn";

interface NcGridBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  density?: "default" | "tight";
  fade?: boolean;
}

export function NcGridBackground({
  className,
  density = "default",
  fade = true,
  children,
  ...props
}: NcGridBackgroundProps) {
  return (
    <div
      className={cn(
        "relative",
        density === "tight" ? "grid-bg-sm" : "grid-bg",
        className,
      )}
      {...props}
    >
      {fade && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,var(--color-bg)_85%)]"
        />
      )}
      {children}
    </div>
  );
}
