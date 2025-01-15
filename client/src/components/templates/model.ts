import { TemplateDto } from "@/models/settings/types";
import { ComponentType } from "react";
import { Template } from "./types";
import { ClassicCard } from "./ClassicCard";
import { HoverCard } from "./HoverCard";

export type Templates = Record<TemplateDto, ComponentType<Template>>;

const templates: Templates = {
  classic: ClassicCard,
  hover: HoverCard,
};

export default templates;
