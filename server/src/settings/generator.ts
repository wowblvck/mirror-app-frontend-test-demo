import { faker } from "@faker-js/faker";
import { Settings } from "./interface";

export const createRandomSettings = (): Settings => {
  return {
    layout: {
      current: faker.helpers.arrayElement(["grid", "masonry"]),
      params: {
        grid: {
          columns: faker.number.int({ min: 1, max: 5 }),
          rows: faker.number.int({ min: 1, max: 5 }),
        },
        masonry: {
          columns: faker.number.int({ min: 1, max: 5 }),
          rows: faker.number.int({ min: 1, max: 5 }),
        },
      },
    },
    template: faker.helpers.arrayElement(["classic", "hover"]),
    navigation: faker.helpers.arrayElement(["load-more", "pagination"]),
  };
};
