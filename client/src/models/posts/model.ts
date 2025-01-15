import { createEffect, createEvent, createStore, sample } from "effector";
import { GetPostsFxParams, PostDto, Posts } from "./types";
import { $settings } from "../settings/model";
import { BASE_URL } from "@/config/env";

export const getPostsFx = createEffect(
  async ({ page, limit = 10 }: GetPostsFxParams) => {
    const res = await fetch(
      `${BASE_URL}/posts?_expand=user&_page=${page}&_limit=${limit}`
    );
    const data = (await res.json()) as PostDto[];
    const total = Number(res.headers.get("X-Total-Count"));
    const totalPages = Math.ceil(total / limit);
    return {
      data,
      page,
      pageSize: limit,
      hasMore: totalPages > page,
      totalPages,
    };
  }
);

export const $posts = createStore<Posts | null>(null).reset($settings);

export const $isPending = getPostsFx.pending;

sample({
  clock: getPostsFx.doneData,
  source: {
    settings: $settings,
    posts: $posts,
  },
  fn: ({ posts: prevPosts, settings }, newPosts) => {
    const { navigation } = settings || {};

    if (navigation === "load-more") {
      return {
        ...newPosts,
        data: prevPosts ? [...prevPosts.data, ...newPosts.data] : newPosts.data,
      };
    }
    return newPosts;
  },
  target: $posts,
});

sample({
  clock: $settings,
  filter: (settings) => settings != null,
  fn: (settings) => ({
    page: 1,
    limit: (settings?.columns || 1) * (settings?.rows || 1),
  }),
  target: getPostsFx,
});

export const changePage = createEvent<number>();

sample({
  clock: changePage,
  source: $settings,
  fn: (settings, page) => {
    const limit = (settings?.columns || 1) * (settings?.rows || 1);
    return {
      page,
      limit,
    };
  },
  target: getPostsFx,
});
