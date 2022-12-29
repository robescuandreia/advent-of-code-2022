import { expect, test } from "vitest";
import { getInput, solution1, solution2 } from ".";

const input = `
forward 5
down 5
forward 8
up 3
down 8
forward 2
`;

test("getInput", () => {
  expect(getInput(input)).toEqual([
    ["forward", 5],
    ["down", 5],
    ["forward", 8],
    ["up", 3],
    ["down", 8],
    ["forward", 2],
  ]);
});

test("solution1", () => {
  expect(solution1(input)).toEqual(150);
});

// test("solution2", () => {
  expect(solution2(input)).toEqual(900);
// });
