import { expect, test } from "vitest";
import { getInput, solution1, solution2 } from ".";

const input = `
1-3 a: abcde
1-3 b: cdefg
2-9 c: ccccccccc
`;

test("getInput", () => {
  expect(getInput(input)).toEqual([
    [[1, 3], "a", "abcde"],
    [[1, 3], "b", "cdefg"],
    [[2, 9], "c", "ccccccccc"],
  ]);
});

test("solution1", () => {
  expect(solution1(input)).toEqual(2);
});

test("solution2", () => {
expect(solution2(input)).toEqual(1);
});
