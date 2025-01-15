import { createEffect, createEvent, createStore, sample } from "effector";
import { Settings, SettingsDto } from "./types";
import { mapSettings } from "./map-settings";
import { BASE_URL } from "@/config/env";

export const getSettingsFx = createEffect(async () => {
  const res = await fetch(`${BASE_URL}/settings`);
  return mapSettings((await res.json()) as SettingsDto);
});

export const $isPending = getSettingsFx.pending;

export const $settings = createStore<Settings | null>(null).on(
  getSettingsFx.doneData,
  (_, payload) => payload
);

export const updateSettings = createEvent();

sample({
  clock: updateSettings,
  target: getSettingsFx,
});
