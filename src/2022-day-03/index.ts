import { i } from "vitest/dist/index-9f5bc072";
import { getData, sum } from "../utils";

const data = getData(__dirname);

export const getInput = (input: string) => {
  const moves = input.replace(/(\r)/gm, "").trim().split("\n");
  moves.map((move) => move.replace(" ", ""));

  return moves.map((move) => move.replace(" ", ""));
};

// [
//   "vJrwpWtwJgWrhcsFMMfFFhFp",
//   "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL",
//   "PmmdzqPrVvPwwTWBwg",
//   "wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn",
//   "ttgJtRGJQctTZtZT",
//   "CrZsJsPPZsGzwwsLwLmpwMDw",
// ]

const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(
  ""
);

export const solution1 = (input: string) => {
  const moves = getInput(input);
  let sum = 0;
  for (let i = 0; i < moves.length; i++) {
    const move = moves[i];
    let firstHalf = move.split("").slice(0, move.length / 2);
    let secondHalf = move.split("").slice(move.length / 2, move.length);
    let intersection = "";
    for (let j = 0; j < firstHalf.length; j++) {
      const letter = firstHalf[j];
      if (secondHalf.includes(letter)) {
        intersection = letter;
      }
    }
    sum = sum + letters.indexOf(intersection) + 1;
  }
  return sum;
};

export const solution2 = (input: string) => {
  const moves = getInput(input).map((move) => move.split(""));
  let sum = 0;
  for (let i = 0; i < moves.length; i += 3) {
    const pack1 = moves[i];
    const pack2 = moves[i + 1];
    const pack3 = moves[i + 2];
    let intersection = "";
    for (let j = 0; j < pack1.length; j++) {
      const letter = pack1[j];
      if (pack2.includes(letter) && pack3.includes(letter)) {
        intersection = letter;
      }
    }
    sum = sum + letters.indexOf(intersection) + 1;
  }

  return sum;
};

console.log(solution1(data));
// 7817
console.log(solution2(data));
// 2444
