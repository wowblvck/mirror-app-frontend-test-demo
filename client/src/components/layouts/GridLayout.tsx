import { FC } from "react";
import { LayoutTemplate } from "./types";

export const GridLayout: FC<LayoutTemplate> = ({
  settings,
  posts,
  children,
}) => {
  const { columns } = settings;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: "4px",
      }}
    >
      {posts.map(children)}
    </div>
  );
};
