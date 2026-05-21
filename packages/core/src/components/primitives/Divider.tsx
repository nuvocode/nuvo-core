import * as React from "react";
import { cn } from "@/core/utils/cn";

interface NcDividerProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical";
  fade?: boolean;
}

export function NcDivider({
  className,
  orientation = "horizontal",
  fade = true,
  ...props
}: NcDividerProps) {
  if (orientation === "vertical") {
    return (
      <div
        role="separator"
        aria-orientation="vertical"
        className={cn(fade ? "divider-v h-full" : "bg-border w-px h-full", className)}
        {...props}
      />
    );
  }
  return (
    <div
      role="separator"
      aria-orientation="horizontal"
      className={cn(fade ? "divider-h w-full" : "bg-border h-px w-full", className)}
      {...props}
    />
  );
}
