import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/core/utils/cn";

export const NcTabs = TabsPrimitive.Root;

export const NcTabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-9 items-center gap-1 rounded-[8px] border border-border-subtle bg-surface-2 p-1",
      className,
    )}
    {...props}
  />
));
NcTabsList.displayName = "NcTabsList";

export const NcTabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex h-7 items-center gap-1.5 rounded-[6px] px-3 text-[12px] font-medium text-fg-subtle transition-colors",
      "hover:text-fg",
      "data-[state=active]:bg-surface-3 data-[state=active]:text-fg data-[state=active]:shadow-[inset_0_1px_0_rgb(255_255_255_/_0.04)]",
      "focus-visible:outline-none",
      className,
    )}
    {...props}
  />
));
NcTabsTrigger.displayName = "NcTabsTrigger";

export const NcTabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn("mt-4 focus-visible:outline-none", className)}
    {...props}
  />
));
NcTabsContent.displayName = "NcTabsContent";
