import { SettingsList } from "@/components/SettingsList";
import { $isPending, $settings, updateSettings } from "@/models/settings/model";
import { Button, Spinner } from "@nextui-org/react";
import { useUnit } from "effector-react";
export const Settings = () => {
  const [handleUpdateSettings, isLoading, settings] = useUnit([
    updateSettings,
    $isPending,
    $settings,
  ]);

  if (isLoading) return <Spinner size="md" className="m-auto" />;

  if (!settings) return null;

  return (
    <div className="flex flex-col gap-6">
      <Button size="sm" className="w-full" onPress={handleUpdateSettings}>
        Обновить
      </Button>
      <SettingsList settings={settings} />
    </div>
  );
};
