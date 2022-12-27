import { getData, sum } from "../utils";

const data = getData(__dirname);

export const getInput = (input: string) => {
  const expenses = input
    .replace(/(\r)/gm, "")
    .trim()
    .split("\n")
    .map((e) => Number(e));
  return expenses;
};

export const solution1 = (input: string) => {
  const expenses = getInput(input);
  let entry = 0;
  let secondEntry = 0;
  let multipliedEntries = 0;

  for (let i = 0; i < expenses.length; i++) {
    let entry = expenses[i];
    let secondEntry = 2020 - entry;

    if (expenses.includes(secondEntry)) {
      multipliedEntries = entry * secondEntry;
    }
  }
  return multipliedEntries;
};

export const solution2 = (input: string) => {
  const expenses = getInput(input);
  let entry = 0;
  let secondEntry = 0;
  let thirdEntry = 0;
  let sum = 2020;
  let multipliedEntries = 0;

  for (let i = 0; i < expenses.length - 2; i++) {
    for (let j = i + 1; j < expenses.length - 1; j++) {
      for (let k = j + 1; k < expenses.length; k++) {
        let entry = expenses[i];
        let secondEntry = expenses[j];
        let thirdEntry = expenses[k];
        if (entry + secondEntry + thirdEntry === sum) {
          multipliedEntries = entry * secondEntry * thirdEntry;
        }
      }
    }
  }
  return multipliedEntries;
};
console.log(solution1(data));
// // 290784
console.log(solution2(data));
// 177337980
