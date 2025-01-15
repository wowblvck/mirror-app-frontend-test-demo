export type LayoutDto = "grid" | "masonry";
export type LayoutElementDto = "columns" | "rows";
export type TemplateDto = "classic" | "hover";
export type NavigationDto = "load-more" | "pagination";

export type LayoutConfig = Record<LayoutElementDto, number>;
export type LayoutParams = Record<LayoutDto, LayoutConfig>;

export interface SettingsDto {
  layout: {
    current: LayoutDto;
    params: LayoutParams;
  };
  template: TemplateDto;
  navigation: NavigationDto;
}

export interface Settings extends LayoutConfig {
  layout: LayoutDto;
  template: TemplateDto;
  navigation: NavigationDto;
}
