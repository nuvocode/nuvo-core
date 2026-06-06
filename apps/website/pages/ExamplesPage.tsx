import { useState } from "react";
import { Cloud, Sparkles, Terminal as TerminalIcon } from "lucide-react";
import { PageLayout } from "../registry/PageLayout";
import { AIChatExample } from "@/examples/AIChatExample";
import { AuthExample } from "@/examples/AuthExample";
import { DashboardExample } from "@/examples/DashboardExample";
import { cn } from "@/core/utils/cn";

type ExampleId = "dashboard" | "ai-chat" | "auth";

const examples: { id: ExampleId; label: string; icon: React.ReactNode; description: string }[] = [
  { id: "dashboard", label: "Deployment dashboard", icon: <Cloud size={13} />, description: "The full workspace shell — sidebar nav, header, stats, throughput chart, terminal stream, edge region grid." },
  { id: "ai-chat", label: "AI workbench", icon: <Sparkles size={13} />, description: "Streaming assistant with citations, proposed actions, and inline code blocks." },
  { id: "auth", label: "Sign-in screen", icon: <TerminalIcon size={13} />, description: "Hero-grade auth surface — grid background, glow orbs, OAuth + email." },
];

export function ExamplesPage() {
  const [active, setActive] = useState<ExampleId>("dashboard");
  const current = examples.find((e) => e.id === active)!;

  return (
    <PageLayout
      eyebrow="Composition · Real surfaces"
      title="Examples"
      slug="examples"
      description="Real screens assembled from the system. Every pixel below is a primitive or composite — no bespoke styling."
    >
      <div className="flex flex-wrap gap-2">
        {examples.map((ex) => (
          <button
            key={ex.id}
            onClick={() => setActive(ex.id)}
            className={cn(
              "inline-flex items-center gap-2 rounded-[8px] border px-3 py-2 text-[12.5px] font-medium transition-colors",
              active === ex.id
                ? "border-[rgb(168_85_247_/_0.3)] bg-[rgb(168_85_247_/_0.08)] text-fg"
                : "border-border-subtle bg-surface-1 text-fg-subtle hover:border-border hover:text-fg",
            )}
          >
            <span className={active === ex.id ? "text-[--color-brand-purple]" : "text-fg-faint"}>{ex.icon}</span>
            {ex.label}
          </button>
        ))}
      </div>

      <p className="text-[13px] text-fg-subtle">{current.description}</p>

      <div className="h-[720px]">
        {active === "dashboard" && <DashboardExample />}
        {active === "ai-chat" && <AIChatExample />}
        {active === "auth" && <AuthExample />}
      </div>
    </PageLayout>
  );
}
