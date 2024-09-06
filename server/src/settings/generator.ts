import { faker } from "@faker-js/faker";
import { Settings } from "./interface";

export const createRandomSettings = (): Settings => {
  return {
    layout: faker.helpers.arrayElement(["grid", "masonry"]),
    template: faker.helpers.arrayElement(["classic", "hover"]),
    columns: {
      grid: faker.number.int({ min: 1, max: 10 }),
      masonry: faker.number.int({ min: 1, max: 5 }),
    },
  };
};
