import {
  Activity, AlertOctagon, BarChart3, Box, Boxes, Brush, Cpu, Eye,
  Frame, Hash, Image as ImageIcon, Keyboard, Layers, LayoutGrid, MousePointer2,
  Sparkles, SquareStack, Type, Workflow,
} from "lucide-react";
import type { ComponentType } from "react";
import {
  AIPage, AnimationsPage, ButtonsPage, CardsPage, ColorsPage, DataDisplayPage,
  ExamplesPage, FeedbackPage, IconsPage, InputsPage, IntroPage, LayoutsPage,
  NavigationPage, OverlaysPage, PatternsPage, SpacingPage, SurfacesPage, TypographyPage,
} from "../pages";

export interface NavItem {
  slug: string;
  label: string;
  icon: React.ReactNode;
  group: "Overview" | "Foundations" | "Components" | "Composition";
  component: ComponentType;
}

export const pages: NavItem[] = [
  { slug: "intro",       label: "Introduction", group: "Overview",     icon: <Hash size={14} />,       component: IntroPage },

  { slug: "colors",      label: "Colors",       group: "Foundations",  icon: <Brush size={14} />,      component: ColorsPage },
  { slug: "typography",  label: "Typography",   group: "Foundations",  icon: <Type size={14} />,       component: TypographyPage },
  { slug: "spacing",     label: "Spacing",      group: "Foundations",  icon: <Frame size={14} />,      component: SpacingPage },
  { slug: "surfaces",    label: "Surfaces",     group: "Foundations",  icon: <Layers size={14} />,     component: SurfacesPage },
  { slug: "icons",       label: "Icons",        group: "Foundations",  icon: <ImageIcon size={14} />,  component: IconsPage },
  { slug: "animations",  label: "Animations",   group: "Foundations",  icon: <Activity size={14} />,   component: AnimationsPage },

  { slug: "buttons",     label: "Buttons",      group: "Components",   icon: <MousePointer2 size={14} />, component: ButtonsPage },
  { slug: "inputs",      label: "Inputs",       group: "Components",   icon: <Keyboard size={14} />,   component: InputsPage },
  { slug: "cards",       label: "Cards",        group: "Components",   icon: <SquareStack size={14} />,component: CardsPage },
  { slug: "navigation",  label: "Navigation",   group: "Components",   icon: <Workflow size={14} />,   component: NavigationPage },
  { slug: "overlays",    label: "Overlays",     group: "Components",   icon: <Boxes size={14} />,      component: OverlaysPage },
  { slug: "data",        label: "Data Display", group: "Components",   icon: <BarChart3 size={14} />,  component: DataDisplayPage },
  { slug: "feedback",    label: "Feedback",     group: "Components",   icon: <AlertOctagon size={14} />, component: FeedbackPage },
  { slug: "ai",          label: "AI Components",group: "Components",   icon: <Sparkles size={14} />,   component: AIPage },

  { slug: "layouts",     label: "Layouts",      group: "Composition",  icon: <LayoutGrid size={14} />, component: LayoutsPage },
  { slug: "patterns",    label: "Patterns",     group: "Composition",  icon: <Box size={14} />,        component: PatternsPage },
  { slug: "examples",    label: "Examples",     group: "Composition",  icon: <Cpu size={14} />,        component: ExamplesPage },
];

export const pagesBySlug = new Map(pages.map((p) => [p.slug, p]));

export const groups = (["Overview", "Foundations", "Components", "Composition"] as const).map(
  (group) => ({
    id: group,
    label: group === "Overview" ? undefined : group,
    items: pages
      .filter((p) => p.group === group)
      .map((p) => ({ id: p.slug, label: p.label, icon: p.icon })),
  }),
);

export { Eye as PreviewIcon };
