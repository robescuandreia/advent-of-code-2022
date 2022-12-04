import { getData, sum } from "../utils";

const data = getData(__dirname);

export const getMoves = (input: string) => {
  const moves = input.replace(/(\r)/gm, "").trim().split("\n");
  moves.map((move) => move.replace(" ", ""));

  return moves.map((move) => move.replace(" ", ""));
};


const movesMap = {
  BX: 1,
  CX: 2,
  AX: 3,
  CY: 6,
  AY: 4,
  BY: 5,
  AZ: 8,
  BZ: 9,
  CZ: 7,
};

export const getTotalSum = (input: string) => {
  const moves = getMoves(input);
  return sum(moves.map((move) => movesMap[move]));
};

export const getGreatestCalorieSumOfTopThree = (input: string) => {
  const elves = getMoves(input);
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

console.log(getTotalSum(data));
// 13565
// 12424
console.log(getGreatestCalorieSumOfTopThree(data));
// 198551
