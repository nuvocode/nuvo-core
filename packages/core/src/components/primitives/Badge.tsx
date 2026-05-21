import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/core/utils/cn";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono uppercase tracking-[0.1em]",
  {
    variants: {
      tone: {
        neutral: "bg-surface-2 border-border text-fg-subtle",
        accent: "grad-accent-dim border-[rgb(168_85_247_/_0.2)] text-[--color-brand-purple]",
        success: "bg-[rgb(74_222_128_/_0.07)] border-[rgb(74_222_128_/_0.25)] text-[--color-signal-green]",
        warning: "bg-[rgb(251_191_36_/_0.07)] border-[rgb(251_191_36_/_0.25)] text-[--color-signal-amber]",
      },
      size: {
        sm: "text-[10px] px-2.5 py-0.5",
        md: "text-[11px] px-3 py-1",
      },
    },
    defaultVariants: { tone: "neutral", size: "md" },
  },
);

export interface NcBadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export const NcBadge = React.forwardRef<HTMLSpanElement, NcBadgeProps>(
  ({ className, tone, size, ...props }, ref) => (
    <span ref={ref} className={cn(badgeVariants({ tone, size }), className)} {...props} />
  ),
);
NcBadge.displayName = "NcBadge";
