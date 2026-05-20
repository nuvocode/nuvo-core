import * as React from "react";
import { Check } from "lucide-react";
import { NcProgressBar } from "@/components/primitives/ProgressBar";
import { cn } from "@/core/utils/cn";

export interface DeployStage {
  id: string;
  label: string;
  status: "done" | "running" | "pending" | "failed";
  progress?: number;
  duration?: string;
}

interface NcDeployStatusProps {
  stages: DeployStage[];
  title?: string;
  className?: string;
}

export function NcDeployStatus({ stages, title = "PIPELINE STATUS", className }: NcDeployStatusProps) {
  return (
    <div className={cn("rounded-[12px] border border-border bg-[#0d0d10] p-5", className)}>
      <div className="label-mono mb-4">{title}</div>
      <div className="flex flex-col gap-3">
        {stages.map((stage) => (
          <StageRow key={stage.id} stage={stage} />
        ))}
      </div>
    </div>
  );
}

function StageRow({ stage }: { stage: DeployStage }) {
  const tone = stage.status;
  return (
    <div className={cn("flex items-center gap-3", tone === "pending" && "opacity-40")}>
      <StageGlyph status={tone} />
      <div className="flex-1 min-w-0">
        <div className="mb-1 text-[12px] font-medium text-fg">{stage.label}</div>
        <NcProgressBar
          value={
            tone === "done" ? 100 : tone === "running" ? stage.progress ?? 50 : tone === "failed" ? 100 : 0
          }
          tone={tone === "done" ? "green" : tone === "failed" ? "red" : "accent"}
        />
      </div>
      <span className="font-mono text-[10px] text-fg-faint w-12 text-right">
        {stage.duration ?? (tone === "running" ? `${stage.progress ?? 0}%` : "—")}
      </span>
    </div>
  );
}

function StageGlyph({ status }: { status: DeployStage["status"] }) {
  if (status === "done") {
    return (
      <span className="grid h-6 w-6 place-items-center rounded-full border border-[rgb(74_222_128_/_0.3)] bg-[rgb(74_222_128_/_0.15)]">
        <Check size={11} className="text-[--color-signal-green]" />
      </span>
    );
  }
  if (status === "running") {
    return (
      <span className="relative grid h-6 w-6 place-items-center rounded-full border border-[rgb(168_85_247_/_0.4)] bg-[rgb(168_85_247_/_0.1)]">
        <span className="absolute inset-0 rounded-full border border-[--color-brand-purple] anim-ping" />
        <span className="h-1.5 w-1.5 rounded-full bg-[--color-brand-purple]" />
      </span>
    );
  }
  if (status === "failed") {
    return (
      <span className="grid h-6 w-6 place-items-center rounded-full border border-[rgb(248_113_113_/_0.4)] bg-[rgb(248_113_113_/_0.1)] text-[--color-signal-red]">
        ✕
      </span>
    );
  }
  return (
    <span className="grid h-6 w-6 place-items-center rounded-full border border-border-strong">
      <span className="h-1.5 w-1.5 rounded-full bg-border-strong" />
    </span>
  );
}
