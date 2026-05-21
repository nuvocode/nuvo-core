import * as React from "react";

interface PageLayoutProps {
  eyebrow: string;
  title: string;
  description?: string;
  children: React.ReactNode;
}

export function PageLayout({ eyebrow, title, description, children }: PageLayoutProps) {
  return (
    <article className="mx-auto w-full max-w-[1080px] px-10 py-12">
      <header className="mb-10">
        <div className="label-mono mb-3">{eyebrow}</div>
        <h1 className="text-[34px] font-semibold tracking-[-0.03em] text-fg">{title}</h1>
        {description && (
          <p className="mt-3 max-w-[640px] text-[14.5px] leading-relaxed text-fg-subtle">
            {description}
          </p>
        )}
        <div className="divider-h mt-8" />
      </header>
      <div className="space-y-12">{children}</div>
    </article>
  );
}
