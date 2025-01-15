import { Settings } from "@/models/settings/types";
import translations from "@/translations/translations";
import { Input } from "@nextui-org/react";
import { FC, memo, useMemo } from "react";

type SettingsListProps = {
  settings: Settings;
};

export const SettingsList: FC<SettingsListProps> = memo(({ settings }) => {
  const options = useMemo(() => {
    return Object.entries(translations).map(([_key, config]) => {
      const key = _key as keyof Settings;
      return {
        key,
        label: config.label,
        value: String(config.params?.[settings[key]] ?? settings[key]),
      };
    });
  }, [settings]);

  return (
    <div className="flex flex-col gap-2">
      {options.map(({ label, key, value }) => (
        <Input
          key={key}
          size="sm"
          label={label}
          disabled
          value={value}
          labelPlacement="outside"
        />
      ))}
    </div>
  );
});
