import { expect, test } from "vitest";
import { getInput, solution1, solution2 } from ".";

const input = `
2
14
1969
100756
`;

test("getInput", () => {
  expect(getInput(input)).toEqual([2, 14, 1969, 100756]);
});

// test("solution1", () => {
//   expect(solution1(input)).toEqual(34241);
// });

test("solution2", () => {
  expect(solution2(input)).toEqual(51314);
});
