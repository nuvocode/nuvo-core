import * as React from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/core/utils/cn";

interface NcCodeBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  code: string;
  language?: string;
  filename?: string;
}

export function NcCodeBlock({ code, language = "tsx", filename, className, ...props }: NcCodeBlockProps) {
  const [copied, setCopied] = React.useState(false);

  const onCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    });
  };

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-[10px] border border-border bg-[#0a0a0d]",
        className,
      )}
      {...props}
    >
      <div className="flex items-center justify-between border-b border-border-subtle px-3 py-2">
        <div className="flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.12em] text-fg-faint">
          {filename ?? language}
        </div>
        <button
          type="button"
          onClick={onCopy}
          className={cn(
            "inline-flex h-6 items-center gap-1.5 rounded-[5px] border border-border-subtle bg-surface-2 px-2",
            "text-[10.5px] font-mono uppercase tracking-wider text-fg-subtle transition-colors",
            "hover:border-border hover:text-fg",
          )}
        >
          {copied ? <Check size={11} /> : <Copy size={11} />}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="m-0 overflow-x-auto p-4 font-mono text-[12px] leading-relaxed text-fg-muted">
        <code>{code}</code>
      </pre>
    </div>
  );
}
