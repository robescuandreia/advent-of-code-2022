import { getData } from "../utils";

const data = getData(__dirname);

export const getInput = (input: string) => {
  const moves = input.trim();
  return moves;
};

export const solution1 = (input: string) => {
  const moves = getInput(input);

  const groupSize = 4;
  for (let i = 0; i < moves.length - 3; i++) {
    if (new Set(moves.slice(i, i + groupSize)).size === groupSize) {
      return i + groupSize;
    }
  }
};

export const solution2 = (input: string) => {
  const moves = getInput(input);

  const groupSize = 14;
  for (let i = 0; i < moves.length - 13; i++) {
    if (new Set(moves.slice(i, i + groupSize)).size === groupSize) {
      return i + groupSize;
    }
  }
};

console.log(solution1(data));
// 1300
console.log(solution2(data));
// 3986
