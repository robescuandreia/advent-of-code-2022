import { expect, test } from "vitest";
import { getInput, solution1, solution2 } from ".";

const input = `
1,9,10,3,2,3,11,0,99,30,40,50,7
`;

test("getInput", () => {
  expect(getInput(input)).toEqual([
    1, 9, 10, 3, 2, 3, 11, 0, 99, 30, 40, 50, 7,
  ]);
});

test("solution1", () => {
  expect(solution1(input)).toEqual(450);
});

test("solution2", () => {
  expect(solution2(input, 450)).toEqual(412);
});
