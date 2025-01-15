import { PostDto } from "@/models/posts/types";
import { Settings } from "@/models/settings/types";

export type Template = {
  settings: Settings;
  post: PostDto;
};
