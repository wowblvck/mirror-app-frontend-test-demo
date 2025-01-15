import { FC } from "react";
import { LayoutTemplate } from "./types";
import MasonryFC from "@wowblvck/react-responsive-masonry";

export const MasonryLayout: FC<LayoutTemplate> = ({
  settings,
  posts,
  children,
}) => {
  return (
    <MasonryFC columnsCount={settings.columns} gutter="6px">
      {posts.map(children)}
    </MasonryFC>
  );
};
