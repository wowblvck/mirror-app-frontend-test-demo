import { Settings, SettingsDto } from "./types";

export const mapSettings = (data: SettingsDto): Settings => {
  const layout = data.layout.current;
  return {
    layout,
    navigation: data.navigation,
    template: data.template,
    columns: data.layout.params[layout].columns,
    rows: data.layout.params[layout].rows,
  };
};
