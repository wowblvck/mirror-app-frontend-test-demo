type Layout = "grid" | "masonry";
type LayoutElement = "columns" | "rows";
type Template = "classic" | "hover";
type Navigation = "load-more" | "pagination";

type LayoutConfig = Record<LayoutElement, number>;
type LayoutParams = Record<Layout, LayoutConfig>;

export interface Settings {
  layout: {
    current: Layout;
    params: LayoutParams;
  };
  template: Template;
  navigation: Navigation;
}
