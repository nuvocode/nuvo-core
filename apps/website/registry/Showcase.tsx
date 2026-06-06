import * as React from "react";
import { NcCodeBlock } from "@nuvo-code/core";
import { cn } from "@nuvo-code/core/core";

interface ShowcaseProps {
  title?: string;
  description?: string;
  code?: string;
  importPath?: string;
  className?: string;
  previewClassName?: string;
  children: React.ReactNode;
}

export function Showcase({
  title,
  description,
  code,
  importPath,
  className,
  previewClassName,
  children,
}: ShowcaseProps) {
  return (
    <div className={cn("overflow-hidden rounded-[14px] border border-border bg-surface-1", className)}>
      {(title || description) && (
        <div className="border-b border-border-subtle px-5 py-3.5">
          {title && <div className="text-[13px] font-semibold text-fg">{title}</div>}
          {description && <p className="mt-1 text-[12px] text-fg-subtle">{description}</p>}
        </div>
      )}
      <div
        className={cn(
          "relative grid-bg-sm flex min-h-[180px] flex-wrap items-center justify-center gap-4 p-8",
          previewClassName,
        )}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,var(--color-bg)_85%)]"
        />
        <div className="relative z-[1] flex flex-wrap items-center justify-center gap-4">
          {children}
        </div>
      </div>
      {importPath && (
        <div className="border-t border-border-subtle bg-bg px-4 py-2.5">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[11px] text-fg-faint">{importPath}</span>
            <button
              onClick={() => navigator.clipboard.writeText(importPath)}
              className="grid h-6 w-6 place-items-center rounded-[5px] text-fg-faint transition-colors hover:bg-surface-2 hover:text-fg"
              aria-label="Copy import path"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
            </button>
          </div>
        </div>
      )}
      {code && (
        <div className="border-t border-border-subtle bg-bg p-3">
          <NcCodeBlock code={code} />
        </div>
      )}
    </div>
  );
}

interface PropTableProps {
  rows: { prop: string; type: string; default?: string; description: string }[];
}

export function PropTable({ rows }: PropTableProps) {
  return (
    <div className="overflow-hidden rounded-[12px] border border-border bg-surface-1">
      <table className="w-full text-left">
        <thead className="bg-surface-2">
          <tr>
            {["Prop", "Type", "Default", "Description"].map((h) => (
              <th
                key={h}
                className="border-b border-border-subtle px-4 py-2.5 font-mono text-[10.5px] uppercase tracking-[0.12em] text-fg-faint"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.prop} className="border-b border-border-subtle last:border-b-0">
              <td className="px-4 py-2.5 align-top font-mono text-[12px] text-fg">{row.prop}</td>
              <td className="px-4 py-2.5 align-top font-mono text-[11.5px] text-[--color-brand-purple]">
                {row.type}
              </td>
              <td className="px-4 py-2.5 align-top font-mono text-[11.5px] text-fg-subtle">
                {row.default ?? "—"}
              </td>
              <td className="px-4 py-2.5 align-top text-[12.5px] text-fg-subtle">{row.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

interface SubsectionProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  id?: string;
}

export function Subsection({ title, description, children, id }: SubsectionProps) {
  return (
    <section id={id} className="space-y-4">
      <header>
        <h3 className="text-[16px] font-semibold tracking-tight text-fg">{title}</h3>
        {description && <p className="mt-1 text-[13px] text-fg-subtle">{description}</p>}
      </header>
      {children}
    </section>
  );
}
