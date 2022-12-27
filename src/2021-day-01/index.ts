import { getData, sum } from "../utils";

const data = getData(__dirname);

export const getInput = (input: string) => {
  const depths = input
    .replace(/(\r)/gm, "")
    .trim()
    .split("\n")
    .map((e) => Number(e));
  return depths;
};

export const solution1 = (input: string) => {
  const depths = getInput(input);
  let increases = 0;

  for (let i = 0; i < depths.length; i++) {
    if (depths[i] < depths[i + 1]) {
      increases += 1;
    }
  }
  return increases;
};

export const solution2 = (input: string) => {
  const depths = getInput(input);
  let sumIncreases = 0;

  for (let i = 0; i <= depths.length - 3; i++) {
    if (depths[i] < depths[i + 3]) {
      sumIncreases += 1;
    }
  }
  return sumIncreases;
};
console.log(solution1(data));
// // 1298
console.log(solution2(data));
// 1248
