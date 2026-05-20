import type { ComponentType, ReactNode } from "react";

export interface DocPage {
  slug: string;
  title: string;
  description?: string;
  category: "Foundations" | "Components" | "Patterns" | "Examples" | "Overview";
  icon?: ReactNode;
  component: ComponentType;
}

export interface ShowcaseExample {
  title: string;
  description?: string;
  preview: ReactNode;
  code?: string;
}
