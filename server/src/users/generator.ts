import { type User } from "./interface";
import { faker } from "@faker-js/faker";

export const createRandomUser = (userId: string, postId: string): User => {
  return {
    id: userId,
    username: faker.internet.username(),
    postId,
  };
};
