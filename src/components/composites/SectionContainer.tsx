import * as React from "react";
import { cn } from "@/core/utils/cn";

interface NcSectionProps extends Omit<React.HTMLAttributes<HTMLElement>, "title"> {
  eyebrow?: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  actions?: React.ReactNode;
  bordered?: boolean;
}

export function NcSection({
  eyebrow,
  title,
  description,
  actions,
  bordered = true,
  className,
  children,
  ...props
}: NcSectionProps) {
  return (
    <section className={cn("py-10", className)} {...props}>
      {(eyebrow || title || description || actions) && (
        <header className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            {eyebrow && <div className="label-mono mb-2">{eyebrow}</div>}
            {title && (
              <h2 className="text-[22px] font-semibold tracking-[-0.025em] text-fg">{title}</h2>
            )}
            {description && (
              <p className="mt-1.5 max-w-[560px] text-[13.5px] text-fg-subtle">{description}</p>
            )}
          </div>
          {actions && <div className="flex flex-wrap items-center gap-2">{actions}</div>}
        </header>
      )}
      {bordered && <div className="divider-h mb-6" />}
      {children}
    </section>
  );
}
