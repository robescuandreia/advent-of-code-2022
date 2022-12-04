import { expect, test } from "vitest";
import { getMoves, getTotalSum, getGreatestCalorieSumOfTopThree } from ".";

const input = `
A Y
B X
C Z
`;

test("getMoves", () => {
  expect(getMoves(input)).toEqual(["AY", "BX", "CZ"]);
});

test("getTotalSum", () => {
  expect(getTotalSum(input)).toEqual(12);
});
