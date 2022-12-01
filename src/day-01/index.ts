import { getData, sum } from "../utils";

const data = getData(__dirname);

export const getElves = (input: string) => {
  const elves = input
    .trim()
    .split("\n\n")
    .map((elve) => elve.split("\n").map(Number));

  return elves;
};

export const getGreatestCalorieSum = (input: string) => {
  const elves = getElves(input);
  return Math.max(...elves.map(sum));
};

export const getGreatestCalorieSumOfTopThree = (input: string) => {
  const elves = getElves(input);
  return sum(
    elves
      .map(sum)
      .sort((a, b) => b - a)
      .slice(0, 3)
  );
};

console.log(getGreatestCalorieSum(data));
// 66719
console.log(getGreatestCalorieSumOfTopThree(data));
// 198551
