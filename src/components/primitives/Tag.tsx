import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/core/utils/cn";

const tagVariants = cva(
  "inline-flex items-center gap-1 rounded-[6px] border px-2 py-[2px] text-[11px] font-medium leading-none font-sans",
  {
    variants: {
      tone: {
        neutral: "bg-surface-2 border-border text-fg-subtle",
        accent: "bg-[rgb(168_85_247_/_0.08)] border-[rgb(168_85_247_/_0.3)] text-[--color-brand-purple]",
        green: "bg-[rgb(74_222_128_/_0.07)] border-[rgb(74_222_128_/_0.25)] text-[--color-signal-green]",
        blue: "bg-[rgb(96_165_250_/_0.07)] border-[rgb(96_165_250_/_0.25)] text-[--color-signal-blue]",
        amber: "bg-[rgb(251_191_36_/_0.07)] border-[rgb(251_191_36_/_0.25)] text-[--color-signal-amber]",
        pink: "bg-[rgb(236_72_153_/_0.07)] border-[rgb(236_72_153_/_0.25)] text-[--color-brand-pink]",
        red: "bg-[rgb(248_113_113_/_0.07)] border-[rgb(248_113_113_/_0.25)] text-[--color-signal-red]",
      },
      size: {
        xs: "text-[10px] px-1.5 py-[1px]",
        sm: "text-[11px] px-2 py-[2px]",
        md: "text-[12px] px-2.5 py-[3px]",
      },
    },
    defaultVariants: { tone: "neutral", size: "sm" },
  },
);

export interface NcTagProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof tagVariants> {}

export const NcTag = React.forwardRef<HTMLSpanElement, NcTagProps>(
  ({ className, tone, size, ...props }, ref) => (
    <span ref={ref} className={cn(tagVariants({ tone, size }), className)} {...props} />
  ),
);
NcTag.displayName = "NcTag";

export { tagVariants };
