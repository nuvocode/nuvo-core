import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cn } from "@/core/utils/cn";

export const NcTooltipProvider = TooltipPrimitive.Provider;
export const NcTooltip = TooltipPrimitive.Root;
export const NcTooltipTrigger = TooltipPrimitive.Trigger;

export const NcTooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 6, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      "z-50 overflow-hidden rounded-[6px] border border-border bg-surface-1 px-2 py-1",
      "text-[11px] font-medium text-fg-muted shadow-[var(--shadow-pop)]",
      "data-[state=delayed-open]:anim-slide-up",
      className,
    )}
    {...props}
  />
));
NcTooltipContent.displayName = "NcTooltipContent";
