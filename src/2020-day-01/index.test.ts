import { expect, test } from "vitest";
import { getInput, solution1, solution2 } from ".";

const input = `
1721
979
366
299
675
1456
`;

test("getInput", () => {
  expect(getInput(input)).toEqual([1721, 979, 366, 299, 675, 1456]);
});

test("solution1", () => {
  expect(solution1(input)).toEqual(514579);
});

test("solution2", () => {
  expect(solution2(input)).toEqual(241861950);
});
