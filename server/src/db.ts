import { faker } from "@faker-js/faker";
import { createRandomPost } from "./posts/generator";
import { createRandomSettings } from "./settings/generator";
import { createRandomUser } from "./users/generator";
import { User } from "./users/interface";
import { Post } from "./posts/interface";

const settings = createRandomSettings();

const createPostsWithUsers = (
  postsCount: number
): { users: User[]; posts: Post[] } => {
  const users: User[] = [];
  const posts: Post[] = [];

  for (let i = 1; i <= postsCount; i++) {
    const userId = faker.string.uuid();
    const post = createRandomPost(userId);
    posts.push(post);
    const user = createRandomUser(userId, post.id);
    users.push(user);
  }

  return { users, posts };
};

const { posts, users } = createPostsWithUsers(100);

const data = {
  users: users,
  posts: posts,
  settings,
};

export default data;
