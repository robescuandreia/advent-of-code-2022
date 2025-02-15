import { expect, test } from "vitest";
import { getInput, solution1, solution2 } from ".";

const input = `
2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8
`;

test("getInput", () => {
  expect(getInput(input)).toEqual([
    [
      [2, 4],
      [6, 8],
    ],
    [
      [2, 3],
      [4, 5],
    ],
    [
      [5, 7],
      [7, 9],
    ],
    [
      [2, 8],
      [3, 7],
    ],
    [
      [6, 6],
      [4, 6],
    ],
    [
      [2, 6],
      [4, 8],
    ],
  ]);
});


test("solution1", () => {
  expect(solution1(input)).toEqual(2);
});

test("solution2", () => {
  expect(solution2(input)).toEqual(4);
});
