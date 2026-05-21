import * as React from "react";
import { cn } from "@/core/utils/cn";

interface NcTerminalProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  lines: TerminalLine[];
  cursor?: boolean;
}

export type TerminalLine =
  | { kind: "command"; prompt?: string; text: React.ReactNode }
  | { kind: "output"; tone?: "neutral" | "success" | "warning" | "error" | "info"; text: React.ReactNode; suffix?: React.ReactNode }
  | { kind: "comment"; text: React.ReactNode };

const toneClass = {
  neutral: "text-fg-muted",
  success: "text-[--color-signal-green]",
  warning: "text-[--color-signal-amber]",
  error: "text-[--color-signal-red]",
  info: "text-[--color-signal-blue]",
} as const;

const toneGlyph: Record<NonNullable<Extract<TerminalLine, { kind: "output" }>["tone"]>, string> = {
  neutral: "·",
  success: "✓",
  warning: "!",
  error: "✗",
  info: "→",
};

export function NcTerminal({ title = "nuvo-cli", lines, cursor = true, className, ...props }: NcTerminalProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-[12px] border border-border bg-[#0a0a0d] font-mono text-[12px] leading-[1.75]",
        className,
      )}
      {...props}
    >
      <div className="flex items-center gap-1.5 border-b border-border-subtle bg-[#111114] px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-2 text-[10px] tracking-[0.06em] text-fg-faint">{title}</span>
      </div>
      <div className="p-4">
        {lines.map((line, i) => {
          if (line.kind === "command") {
            return (
              <div key={i} className="text-fg">
                <span className="text-[--color-brand-purple]">{line.prompt ?? "nuvo"}</span>{" "}
                <span className="text-fg-muted">{line.text}</span>
              </div>
            );
          }
          if (line.kind === "comment") {
            return (
              <div key={i} className="text-fg-faint">
                # {line.text}
              </div>
            );
          }
          const tone = line.tone ?? "neutral";
          return (
            <div key={i} className="flex">
              <span className={cn("mr-2", toneClass[tone])}>{toneGlyph[tone]}</span>
              <span className="flex-1 text-fg-muted">{line.text}</span>
              {line.suffix && <span className="text-fg-faint">{line.suffix}</span>}
            </div>
          );
        })}
        {cursor && (
          <span className="text-fg-faint">
            _<span className="anim-blink text-[--color-brand-purple]">▋</span>
          </span>
        )}
      </div>
    </div>
  );
}
