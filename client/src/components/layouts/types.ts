import { PostDto, Posts } from "@/models/posts/types";
import { Settings } from "@/models/settings/types";

export type LayoutTemplate = {
  settings: Settings;
  posts: Posts["data"];
  children: (post: PostDto) => React.ReactNode;
};
