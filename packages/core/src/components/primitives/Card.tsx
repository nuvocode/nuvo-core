import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/core/utils/cn";

const cardVariants = cva("overflow-hidden transition-[border-color,box-shadow]", {
  variants: {
    surface: {
      raised: "bg-surface-1 border border-border",
      sunken: "bg-[#0d0d10] border border-border",
      flat: "bg-surface-2 border border-border-subtle",
      glass: "glass",
    },
    radius: {
      md: "rounded-[12px]",
      lg: "rounded-[14px]",
      xl: "rounded-[20px]",
    },
    interactive: {
      true: "cursor-pointer hover:border-border-strong hover:shadow-[0_0_0_1px_rgb(168_85_247_/_0.07),0_24px_56px_rgb(0_0_0_/_0.35)]",
      false: "",
    },
  },
  defaultVariants: { surface: "raised", radius: "lg", interactive: false },
});

export interface NcCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

export const NcCard = React.forwardRef<HTMLDivElement, NcCardProps>(
  ({ className, surface, radius, interactive, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardVariants({ surface, radius, interactive }), className)}
      {...props}
    />
  ),
);
NcCard.displayName = "NcCard";

export const NcCardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col gap-1.5 p-6", className)} {...props} />
  ),
);
NcCardHeader.displayName = "NcCardHeader";

export const NcCardTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn("text-[17px] font-semibold tracking-[-0.015em] text-fg", className)}
      {...props}
    />
  ),
);
NcCardTitle.displayName = "NcCardTitle";

export const NcCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p ref={ref} className={cn("text-[13px] leading-relaxed text-fg-subtle", className)} {...props} />
));
NcCardDescription.displayName = "NcCardDescription";

export const NcCardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("px-6 pb-6 pt-0", className)} {...props} />
  ),
);
NcCardContent.displayName = "NcCardContent";

export const NcCardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex items-center justify-between gap-3 border-t border-border-subtle px-6 py-3 text-[11px] text-fg-subtle",
        className,
      )}
      {...props}
    />
  ),
);
NcCardFooter.displayName = "NcCardFooter";
