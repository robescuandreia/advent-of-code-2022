import { getData, sum } from "../utils";

const data = getData(__dirname);

export const getInput = (input: string) => {
  const directions = input
    .trim()
    .replace(/(\r)/gm, "")
    .split("\n")
    .map((line) => [line.split(" ")[0], Number(line.split(" ")[1])]);

  return directions;
};

export const solution1 = (input: string) => {
  const directions = getInput(input);

  let horizontal = 0;
  let depth = 0;

  for (let i = 0; i < directions.length; i++) {
    const direction = directions[i];

    if (direction[0] === "forward") {
      horizontal += Number(direction[1]);
    } else if (direction[0] === "down") {
      depth += Number(direction[1]);
    } else {
      depth -= Number(direction[1]);
    }
  }

  return horizontal * depth;
};

export const solution2 = (input: string) => {
  const directions = getInput(input);

  let horizontal = 0;
  let depth = 0;
  let aim = 0;

  for (let i = 0; i < directions.length; i++) {
    const direction = directions[i];

    if (direction[0] === "forward") {
      horizontal += Number(direction[1]);
      depth += aim * Number(direction[1]);
    } else if (direction[0] === "down") {
      aim += Number(direction[1]);
    } else {
      aim -= Number(direction[1]);
    }
  }

  return horizontal * depth;
}

console.log(solution1(data));
// 1762050
console.log(solution2(data));
// 1855892637
