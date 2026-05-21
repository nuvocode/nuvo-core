import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/core/utils/cn";

const trackVariants = cva("w-full overflow-hidden rounded-full bg-border", {
  variants: {
    size: {
      xs: "h-[3px]",
      sm: "h-1.5",
      md: "h-2",
    },
  },
  defaultVariants: { size: "xs" },
});

const fillTones = {
  accent: "bg-[image:var(--nc-grad)]",
  green: "bg-[--color-signal-green]",
  blue: "bg-[--color-signal-blue]",
  amber: "bg-[--color-signal-amber]",
  red: "bg-[--color-signal-red]",
  neutral: "bg-fg-subtle",
} as const;

export interface NcProgressBarProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "color">,
    VariantProps<typeof trackVariants> {
  value: number;
  max?: number;
  tone?: keyof typeof fillTones;
}

export function NcProgressBar({
  value,
  max = 100,
  tone = "accent",
  size,
  className,
  ...props
}: NcProgressBarProps) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100));
  return (
    <div
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={max}
      aria-valuenow={value}
      className={cn(trackVariants({ size }), className)}
      {...props}
    >
      <div
        className={cn("h-full rounded-full transition-[width] duration-500 ease-out", fillTones[tone])}
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}
