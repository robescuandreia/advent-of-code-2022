import { i } from "vitest/dist/index-9f5bc072";
import { getData, sum } from "../utils";

const data = getData(__dirname);

export const getElves = (input: string) => {
  const elves = input.replace(/(\r)/gm, "").trim().split("\n\n");

  for (let i = 0; i < elves.length; i++) {
    const elf = elves[i];
    elves[i] = elf.split("\n").map((v) => Number(v));
  }
  return elves;
};

// [
//   [ 1000, 2000, 3000 ],
//   [ 4000 ],
//   [ 5000, 6000 ],
//   [ 7000, 8000, 9000 ],
//   [ 10000]
// ]

export const getGreatestCalorieSum = (input: string) => {
  const elves = getElves(input);
  for (let i = 0; i < elves.length; i++) {
    const elf = elves[i];
    elves[i] = sum(elf);
  }
  return Math.max(...elves);
};

export const getGreatestCalorieSumOfTopThree = (input: string) => {
  const elves = getElves(input);
  for (let i = 0; i < elves.length; i++) {
    const elf = elves[i]; //[ 1000, 2000, 3000 ]

    let sum = 0;
    for (let j = 0; j < elf.length; j++) {
      sum = sum + elf[j];
    }
    elves[i] = sum;
  }
  elves.sort((a, b) => a - b);
  return sum(elves.slice(-3));
};

console.log(getGreatestCalorieSum(data));
// 66719
console.log(getGreatestCalorieSumOfTopThree(data));
// 198551
