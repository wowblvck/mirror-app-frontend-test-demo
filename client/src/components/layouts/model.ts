import { LayoutDto } from "@/models/settings/types";
import { ComponentType } from "react";
import { LayoutTemplate } from "./types";
import { GridLayout } from "./GridLayout";
import { MasonryLayout } from "./MasonryLayout";

export type Layouts = Record<LayoutDto, ComponentType<LayoutTemplate>>;

const layouts: Layouts = {
  grid: GridLayout,
  masonry: MasonryLayout,
};

export default layouts;
