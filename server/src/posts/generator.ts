import { type Post } from "./interface";
import { faker } from "@faker-js/faker";

export const createRandomPost = (userId: string): Post => {
  return {
    caption: faker.lorem.sentence(),
    id: faker.string.uuid(),
    date: faker.date
      .between({
        from: new Date().setMonth(new Date().getMonth() - 1),
        to: Date.now(),
      })
      .toISOString(),
    comments: faker.number.int({ min: 1, max: 1000 }),
    likes: faker.number.int({ min: 1, max: 1000 }),
    permalink: faker.internet.url(),
    userId,
  };
};
