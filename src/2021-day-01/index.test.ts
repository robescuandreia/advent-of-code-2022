import { expect, test } from "vitest";
import { getInput, solution1, solution2 } from ".";

const input = `
199
200
208
210
200
207
240
269
260
263
`;

test("getInput", () => {
  expect(getInput(input)).toEqual([
    199, 200, 208, 210, 200, 207, 240, 269, 260, 263,
  ]);
});

test("solution1", () => {
  expect(solution1(input)).toEqual(7);
});

test("solution2", () => {
  expect(solution2(input)).toEqual(5);
});
