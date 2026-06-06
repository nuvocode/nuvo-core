import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { pages } from "./pages";

interface PageLayoutProps {
  eyebrow: string;
  title: string;
  description?: string;
  slug?: string;
  related?: { slug: string; label: string }[];
  children: React.ReactNode;
}

export function PageLayout({ eyebrow, title, description, slug, related, children }: PageLayoutProps) {
  const breadcrumbs = React.useMemo(() => {
    const parts = eyebrow.split(" · ");
    return [{ label: "Home", href: "#/intro" }, ...parts.map((p) => ({ label: p, href: null as string | null }))];
  }, [eyebrow]);

  const nav = React.useMemo(() => {
    if (!slug) return null;
    const idx = pages.findIndex((p) => p.slug === slug);
    if (idx === -1) return null;
    const prev = idx > 0 ? pages[idx - 1] : null;
    const next = idx < pages.length - 1 ? pages[idx + 1] : null;
    return { prev, next };
  }, [slug]);

  return (
    <article className="mx-auto w-full max-w-[1080px] px-10 py-12">
      <nav className="mb-6 flex items-center gap-1.5 font-mono text-[11.5px] text-fg-faint">
        {breadcrumbs.map((crumb, i) => (
          <React.Fragment key={i}>
            {i > 0 && <span className="text-fg-faint/50">/</span>}
            {crumb.href ? (
              <a href={crumb.href} className="transition-colors hover:text-fg">
                {crumb.label}
              </a>
            ) : (
              <span className={i === breadcrumbs.length - 1 ? "text-fg" : ""}>{crumb.label}</span>
            )}
          </React.Fragment>
        ))}
      </nav>

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

      {related && related.length > 0 && (
        <div className="mt-16 border-t border-border-subtle pt-8">
          <div className="label-mono mb-4">Related</div>
          <div className="flex flex-wrap gap-2">
            {related.map((r) => (
              <a
                key={r.slug}
                href={`#/${r.slug}`}
                className="inline-flex items-center gap-1.5 rounded-[8px] border border-border bg-surface-1 px-3 py-1.5 text-[12.5px] text-fg-muted transition-colors hover:border-[rgb(168_85_247_/_0.3)] hover:bg-surface-2 hover:text-fg"
              >
                {r.label}
              </a>
            ))}
          </div>
        </div>
      )}

      {nav && (
        <nav className="mt-16 flex items-center justify-between border-t border-border-subtle pt-8">
          {nav.prev ? (
            <a
              href={`#/${nav.prev.slug}`}
              className="group flex items-center gap-2 rounded-[8px] p-2 transition-colors hover:bg-surface-2"
            >
              <ChevronLeft size={14} className="text-fg-faint transition-colors group-hover:text-fg" />
              <div className="text-right">
                <div className="font-mono text-[10px] uppercase tracking-[0.1em] text-fg-faint">Previous</div>
                <div className="text-[13px] font-medium text-fg-muted">{nav.prev.label}</div>
              </div>
            </a>
          ) : (
            <div />
          )}
          {nav.next ? (
            <a
              href={`#/${nav.next.slug}`}
              className="group flex items-center gap-2 rounded-[8px] p-2 text-right transition-colors hover:bg-surface-2"
            >
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.1em] text-fg-faint">Next</div>
                <div className="text-[13px] font-medium text-fg-muted">{nav.next.label}</div>
              </div>
              <ChevronRight size={14} className="text-fg-faint transition-colors group-hover:text-fg" />
            </a>
          ) : (
            <div />
          )}
        </nav>
      )}
    </article>
  );
}
