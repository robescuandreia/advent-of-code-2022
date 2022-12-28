import { getData, sum } from "../utils";

const data = getData(__dirname);

export const getInput = (input: string) => {
  const modules = input
    .replace(/(\r)/gm, "")
    .trim()
    .split("\n")
    .map((e) => Number(e));
  return modules;
};

export const solution1 = (input: string) => {
  const modules = getInput(input);

  let sumOfFuel = 0;
  let fuel = 0;

  for (let i = 0; i < modules.length; i++) {
    let mass = modules[i];

    fuel = Math.floor(mass / 3) - 2;
    sumOfFuel += fuel;
  }
  return sumOfFuel;
};

export const solution2 = (input: string) => {
  const modules = getInput(input);

  let sum = 0;

  for (let i = 0; i < modules.length; i++) {
    let result = modules[i];
    let newResult = Math.floor(result / 3) - 2;
    while (newResult > 0) {
      sum += newResult;
      newResult = Math.floor(newResult / 3) - 2;
    }
  }

  return sum;
};
console.log(solution1(data));
// // 3239890
console.log(solution2(data));
// 4856963
