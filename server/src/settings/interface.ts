type Layout = "grid" | "masonry";
type Template = "classic" | "hover";

export interface Settings {
  layout: Layout;
  template: Template;
  columns: Record<Layout, number>;
}
