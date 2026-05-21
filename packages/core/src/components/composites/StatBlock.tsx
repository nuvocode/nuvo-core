import * as React from "react";
import { cn } from "@/core/utils/cn";

interface NcStatBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  value: React.ReactNode;
  unit?: string;
  delta?: { value: string; direction?: "up" | "down" | "flat"; tone?: "positive" | "negative" | "neutral" };
  caption?: React.ReactNode;
  align?: "left" | "center";
}

export function NcStatBlock({
  label,
  value,
  unit,
  delta,
  caption,
  align = "left",
  className,
  ...props
}: NcStatBlockProps) {
  const deltaTone =
    delta?.tone ?? (delta?.direction === "up" ? "positive" : delta?.direction === "down" ? "negative" : "neutral");

  return (
    <div
      className={cn(
        "rounded-[10px] border border-border bg-surface-2 p-4",
        align === "center" && "text-center",
        className,
      )}
      {...props}
    >
      <div className="label-mono mb-2">{label}</div>
      <div className="flex items-baseline gap-1">
        <span className="text-[22px] font-semibold tracking-[-0.02em] text-fg">{value}</span>
        {unit && <span className="text-[12px] font-normal text-fg-subtle">{unit}</span>}
      </div>
      {(delta || caption) && (
        <div className="mt-1 flex items-center gap-1.5 text-[10px] font-mono">
          {delta && (
            <span
              className={cn(
                deltaTone === "positive" && "text-[--color-signal-green]",
                deltaTone === "negative" && "text-[--color-signal-red]",
                deltaTone === "neutral" && "text-fg-subtle",
              )}
            >
              {delta.direction === "up" ? "↑" : delta.direction === "down" ? "↓" : "→"} {delta.value}
            </span>
          )}
          {caption && <span className="text-fg-faint">{caption}</span>}
        </div>
      )}
    </div>
  );
}
