import * as React from "react";
import * as Menu from "@radix-ui/react-dropdown-menu";
import { Check, ChevronRight } from "lucide-react";
import { cn } from "@/core/utils/cn";

export const NcDropdownMenu = Menu.Root;
export const NcDropdownMenuTrigger = Menu.Trigger;
export const NcDropdownMenuGroup = Menu.Group;
export const NcDropdownMenuPortal = Menu.Portal;
export const NcDropdownMenuSub = Menu.Sub;
export const NcDropdownMenuRadioGroup = Menu.RadioGroup;

export const NcDropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof Menu.Content>,
  React.ComponentPropsWithoutRef<typeof Menu.Content>
>(({ className, sideOffset = 6, ...props }, ref) => (
  <Menu.Portal>
    <Menu.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "z-50 min-w-[12rem] overflow-hidden rounded-[10px] border border-border bg-surface-1 p-1",
        "shadow-[var(--shadow-pop)]",
        "data-[state=open]:anim-slide-up",
        className,
      )}
      {...props}
    />
  </Menu.Portal>
));
NcDropdownMenuContent.displayName = "NcDropdownMenuContent";

export const NcDropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof Menu.Item>,
  React.ComponentPropsWithoutRef<typeof Menu.Item> & { inset?: boolean }
>(({ className, inset, ...props }, ref) => (
  <Menu.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center gap-2 rounded-[6px] px-2 py-1.5",
      "text-[12px] text-fg-muted outline-none transition-colors",
      "focus:bg-surface-3 focus:text-fg data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-7",
      className,
    )}
    {...props}
  />
));
NcDropdownMenuItem.displayName = "NcDropdownMenuItem";

export const NcDropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof Menu.Label>,
  React.ComponentPropsWithoutRef<typeof Menu.Label>
>(({ className, ...props }, ref) => (
  <Menu.Label
    ref={ref}
    className={cn(
      "px-2 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-fg-faint",
      className,
    )}
    {...props}
  />
));
NcDropdownMenuLabel.displayName = "NcDropdownMenuLabel";

export const NcDropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof Menu.Separator>,
  React.ComponentPropsWithoutRef<typeof Menu.Separator>
>(({ className, ...props }, ref) => (
  <Menu.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-border-subtle", className)}
    {...props}
  />
));
NcDropdownMenuSeparator.displayName = "NcDropdownMenuSeparator";

export const NcDropdownMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => (
  <span
    className={cn(
      "ml-auto font-mono text-[10px] tracking-wider text-fg-faint",
      className,
    )}
    {...props}
  />
);

export const NcDropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof Menu.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof Menu.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <Menu.CheckboxItem
    ref={ref}
    checked={checked}
    className={cn(
      "relative flex cursor-default select-none items-center gap-2 rounded-[6px] py-1.5 pl-7 pr-2",
      "text-[12px] text-fg-muted outline-none transition-colors",
      "focus:bg-surface-3 focus:text-fg",
      className,
    )}
    {...props}
  >
    <span className="absolute left-2 grid place-items-center">
      <Menu.ItemIndicator>
        <Check size={12} />
      </Menu.ItemIndicator>
    </span>
    {children}
  </Menu.CheckboxItem>
));
NcDropdownMenuCheckboxItem.displayName = "NcDropdownMenuCheckboxItem";

export const NcDropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof Menu.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof Menu.SubTrigger>
>(({ className, children, ...props }, ref) => (
  <Menu.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center gap-2 rounded-[6px] px-2 py-1.5",
      "text-[12px] text-fg-muted focus:bg-surface-3 focus:text-fg data-[state=open]:bg-surface-3",
      className,
    )}
    {...props}
  >
    {children}
    <ChevronRight size={12} className="ml-auto" />
  </Menu.SubTrigger>
));
NcDropdownMenuSubTrigger.displayName = "NcDropdownMenuSubTrigger";
