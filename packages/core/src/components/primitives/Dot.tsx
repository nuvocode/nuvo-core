import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/core/utils/cn";

const dotVariants = cva("inline-block shrink-0 rounded-full", {
  variants: {
    tone: {
      neutral: "bg-border-strong",
      green: "bg-[--color-signal-green] shadow-[0_0_6px_rgb(74_222_128_/_0.5)]",
      blue: "bg-[--color-signal-blue] shadow-[0_0_6px_rgb(96_165_250_/_0.4)]",
      amber: "bg-[--color-signal-amber]",
      red: "bg-[--color-signal-red]",
      purple: "bg-[--color-brand-purple] shadow-[0_0_7px_rgb(168_85_247_/_0.55)]",
    },
    size: {
      xs: "h-1.5 w-1.5",
      sm: "h-[7px] w-[7px]",
      md: "h-2 w-2",
    },
    pulse: { true: "anim-pulse", false: "" },
  },
  defaultVariants: { tone: "neutral", size: "sm", pulse: false },
});

export interface NcDotProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof dotVariants> {}

export function NcDot({ className, tone, size, pulse, ...props }: NcDotProps) {
  return <span className={cn(dotVariants({ tone, size, pulse }), className)} {...props} />;
}
