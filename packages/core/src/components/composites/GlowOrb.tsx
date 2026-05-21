import * as React from "react";
import { cn } from "@/core/utils/cn";

interface NcGlowOrbProps extends React.HTMLAttributes<HTMLDivElement> {
  tone?: "purple" | "pink" | "blue";
  size?: number;
  blur?: number;
  intensity?: number;
}

const colors = {
  purple: "168 85 247",
  pink: "236 72 153",
  blue: "96 165 250",
} as const;

export function NcGlowOrb({
  tone = "purple",
  size = 400,
  blur = 80,
  intensity = 0.07,
  className,
  style,
  ...props
}: NcGlowOrbProps) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute rounded-full anim-orb", className)}
      style={{
        width: size,
        height: size,
        background: `rgb(${colors[tone]} / ${intensity})`,
        filter: `blur(${blur}px)`,
        ...style,
      }}
      {...props}
    />
  );
}
