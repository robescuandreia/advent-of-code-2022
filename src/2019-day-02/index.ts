import { j } from "vitest/dist/index-9f5bc072";
import { getData } from "../utils";

const data = getData(__dirname);

export const getInput = (input: string) => {
  const stringValues = input.replace(/(\r)/gm, "").trim();
  const values = JSON.parse("[" + stringValues + "]");
  return values;
};

export const solution1 = (input: string) => {
  const values = getInput(input);

  values[1] = 12;
  values[2] = 2;

  for (let i = 0; i < values.length; i += 4) {
    let addIndex1 = values[i + 1];
    let addIndex2 = values[i + 2];
    let storeInIndex = values[i + 3];

    if (values[i] === 1) {
      values[storeInIndex] = values[addIndex1] + values[addIndex2];
    } else if (values[i] === 2) {
      values[storeInIndex] = values[addIndex1] * values[addIndex2];
    } else {
      break;
    }
  }
  return values[0];
};

export const solution2 = (input: string, expectedValue: number) => {
  const valuesOriginal = getInput(input);
  let values = [];

  for (let k = 0; k < 100; k++) {
    for (let l = 0; l < 100; l++) {
      values = [...valuesOriginal];

      values[1] = k;
      values[2] = l;

      for (let i = 0; i < values.length; i += 4) {
        let addIndex1 = values[i + 1];
        let addIndex2 = values[i + 2];
        let storeInIndex = values[i + 3];

        if (values[i] === 1) {
          values[storeInIndex] = values[addIndex1] + values[addIndex2];
        } else if (values[i] === 2) {
          values[storeInIndex] = values[addIndex1] * values[addIndex2];
        } else {
          break;
        }
      }
      if (values[0] === expectedValue) {
        return 100 * k + l;
      }
    }
  }
};

console.log(solution1(data));
// 3562672
console.log(solution2(data, 19690720));
// 8250
