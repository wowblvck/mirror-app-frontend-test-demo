export interface PostDto {
  id: string;
  caption: string;
  permalink: string;
  date: string;
  likes: number;
  comments: number;
  userId: string;
  user: {
    id: string;
    username: string;
    postId: string;
  };
}

export type GetPostsFxParams = {
  page: number;
  limit?: number;
};

export type Posts = {
  data: PostDto[];
  page: number;
  pageSize: number;
  hasMore: boolean;
  totalPages: number;
};
