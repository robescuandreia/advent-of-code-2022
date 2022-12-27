import { expect, test } from "vitest";
import { getInput, solution1, solution2 } from ".";

const input = `
R 5
U 8
L 8
D 3
R 17
D 10
L 25
U 20
`;

test("getInput", () => {
  expect(getInput(input)).toEqual([
    ["R", 5],
    ["U", 8],
    ["L", 8],
    ["D", 3],
    ["R", 17],
    ["D", 10],
    ["L", 25],
    ["U", 20],
  ]);
});

test("solution1", () => {
  expect(solution1(input)).toEqual(88);
});

test("solution2", () => {
  expect(solution2(input)).toEqual(36);
});
