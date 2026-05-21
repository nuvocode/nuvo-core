import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/core/utils/cn";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap select-none",
    "font-medium tracking-tight",
    "transition-[transform,background,border-color,box-shadow,color]",
    "duration-200 ease-[cubic-bezier(0.2,0.7,0.2,1)]",
    "disabled:pointer-events-none disabled:opacity-50",
    "focus-visible:outline-none",
    "[&_svg]:size-[1em] [&_svg]:shrink-0",
  ].join(" "),
  {
    variants: {
      variant: {
        primary:
          "bg-[image:var(--nc-grad)] text-white border border-transparent shadow-[inset_0_1px_0_rgb(255_255_255_/_0.18)] hover:-translate-y-px hover:shadow-[0_8px_24px_rgb(168_85_247_/_0.35)] active:translate-y-0",
        secondary:
          "bg-surface-3 text-fg border border-border-strong hover:bg-surface-2 hover:-translate-y-px hover:shadow-[0_8px_24px_rgb(0_0_0_/_0.4)] dark:hover:shadow-[0_8px_24px_rgb(0_0_0_/_0.5)]",
        ghost:
          "bg-transparent text-fg-subtle border border-transparent hover:bg-surface-2 hover:text-fg",
        outline:
          "bg-transparent text-fg border border-border hover:bg-surface-2 hover:border-border-strong",
        accent:
          "bg-[rgb(168_85_247_/_0.12)] text-[--color-brand-purple] border border-[rgb(168_85_247_/_0.3)] hover:bg-[rgb(168_85_247_/_0.18)]",
        destructive:
          "bg-[rgb(248_113_113_/_0.12)] text-[--color-signal-red] border border-[rgb(248_113_113_/_0.3)] hover:bg-[rgb(248_113_113_/_0.2)]",
        link:
          "bg-transparent text-fg-subtle border-0 underline-offset-4 hover:text-fg hover:underline px-0 h-auto",
      },
      size: {
        xs: "h-7 px-2.5 text-[11px] rounded-[6px]",
        sm: "h-8 px-3 text-[12px] rounded-[7px]",
        md: "h-9 px-4 text-[13px] rounded-[8px]",
        lg: "h-11 px-5 text-[14px] rounded-[10px]",
        icon: "h-9 w-9 rounded-[8px] text-[13px]",
      },
    },
    defaultVariants: {
      variant: "secondary",
      size: "md",
    },
  },
);

export interface NcButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const NcButton = React.forwardRef<HTMLButtonElement, NcButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  },
);
NcButton.displayName = "NcButton";

export { buttonVariants };
