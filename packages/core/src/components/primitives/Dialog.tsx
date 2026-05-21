import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "@/core/utils/cn";

export const NcDialog = DialogPrimitive.Root;
export const NcDialogTrigger = DialogPrimitive.Trigger;
export const NcDialogClose = DialogPrimitive.Close;
export const NcDialogPortal = DialogPrimitive.Portal;

export const NcDialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/70 backdrop-blur-sm",
      "data-[state=open]:animate-[nc-pulse_0.2s_ease-out] data-[state=open]:opacity-100",
      className,
    )}
    {...props}
  />
));
NcDialogOverlay.displayName = "NcDialogOverlay";

export const NcDialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <NcDialogPortal>
    <NcDialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4",
        "rounded-[14px] border border-border bg-surface-1 p-6 shadow-[var(--shadow-pop)]",
        "anim-slide-up focus-visible:outline-none",
        className,
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close
        className={cn(
          "absolute right-3 top-3 grid h-7 w-7 place-items-center rounded-[6px] text-fg-subtle",
          "transition-colors hover:bg-surface-2 hover:text-fg focus-visible:outline-none",
        )}
        aria-label="Close"
      >
        <X size={14} />
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </NcDialogPortal>
));
NcDialogContent.displayName = "NcDialogContent";

export const NcDialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col gap-1.5", className)} {...props} />
);

export const NcDialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn("text-[15px] font-semibold tracking-tight text-fg", className)}
    {...props}
  />
));
NcDialogTitle.displayName = "NcDialogTitle";

export const NcDialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-[13px] leading-relaxed text-fg-subtle", className)}
    {...props}
  />
));
NcDialogDescription.displayName = "NcDialogDescription";
