import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/core/utils/cn";

const inputVariants = cva(
  [
    "flex w-full bg-surface-2 text-fg placeholder:text-fg-faint",
    "border border-border rounded-[8px]",
    "transition-[border-color,box-shadow,background] duration-150",
    "hover:border-border-strong",
    "focus:outline-none focus:border-[rgb(168_85_247_/_0.5)] focus:bg-surface-1",
    "focus:shadow-[0_0_0_3px_rgb(168_85_247_/_0.12)]",
    "disabled:opacity-50 disabled:cursor-not-allowed",
    "font-sans",
  ].join(" "),
  {
    variants: {
      size: {
        sm: "h-8 px-2.5 text-[12px]",
        md: "h-9 px-3 text-[13px]",
        lg: "h-11 px-4 text-[14px]",
      },
      mono: { true: "font-mono", false: "" },
    },
    defaultVariants: { size: "md", mono: false },
  },
);

export interface NcInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {}

export const NcInput = React.forwardRef<HTMLInputElement, NcInputProps>(
  ({ className, size, mono, type = "text", ...props }, ref) => (
    <input
      ref={ref}
      type={type}
      className={cn(inputVariants({ size, mono }), className)}
      {...props}
    />
  ),
);
NcInput.displayName = "NcInput";

export interface NcTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const NcTextarea = React.forwardRef<HTMLTextAreaElement, NcTextareaProps>(
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn(
        inputVariants({ size: "md" }),
        "h-auto min-h-[88px] py-2.5 leading-relaxed resize-y",
        className,
      )}
      {...props}
    />
  ),
);
NcTextarea.displayName = "NcTextarea";
