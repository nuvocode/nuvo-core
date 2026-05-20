import * as React from "react";
import { cn } from "@/core/utils/cn";

interface NcLogoProps extends React.SVGAttributes<SVGElement> {
  size?: number;
}

let uid = 0;

export function NcLogo({ size = 24, className, ...props }: NcLogoProps) {
  const id = React.useMemo(() => `nc-logo-${++uid}`, []);
  return (
    <img src="/favicon.png" id={id} className={`w-[${size}] aspect-square ${className}`} />
  );
}

export function NcWordmark({ size = 24, className }: { size?: number; className?: string }) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <NcLogo size={size} />
      <span className="text-[14px] font-semibold tracking-[-0.01em] text-fg">
        Nuvo <span className="grad-text">Core</span>
      </span>
    </div>
  );
}
