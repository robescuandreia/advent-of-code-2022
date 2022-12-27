import { expect, test } from "vitest";
import { getInput, solution1, solution2 } from ".";

const input = `
Sabqponm
abcryxxl
accszExk
acctuvwj
abdefghi
`;

test("getInput", () => {
  expect(getInput(input)).toEqual([
    "Sabqponm",
    "abcryxxl",
    "accszExk",
    "acctuvwj",
    "abdefghi",
  ]);
});

test("solution1", () => {
  expect(solution1(input)).toEqual(31);
});
test("solution2", () => {
  expect(solution2(input)).toEqual(29);
});
