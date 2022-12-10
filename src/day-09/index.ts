import { getData, sum } from "../utils";

const data = getData(__dirname);

export const getInput = (input: string) => {
  const steps = input
    .trim()
    .replace(/(\r)/gm, "")
    .split("\n")
    .map((line) => [line.split(" ")[0], Number(line.split(" ")[1])]);

  return steps;
};

export const solution1 = (input: string) => {
  const motions = getInput(input);

  const rope = [
    [0, 0],
    [0, 0],
  ];

  const movesSet = new Set();
  movesSet.add("0|0");

  for (let i = 0; i < motions.length; i++) {
    const [direction, steps] = motions[i];
    for (let j = 0; j < steps; j++) {
      if (direction === "R") {
        rope[0][1] += 1;
      } else if (direction === "L") {
        rope[0][1] -= 1;
      } else if (direction === "U") {
        rope[0][0] -= 1;
      } else if (direction === "D") {
        rope[0][0] += 1;
      }

      const difY = rope[0][1] - rope[1][1];
      const difX = rope[0][0] - rope[1][0];

      if (Math.abs(difY) === 2) {
        rope[1][1] += difY / 2;
        rope[1][0] = rope[0][0];
      }
      if (Math.abs(difX) === 2) {
        rope[1][0] += difX / 2;
        rope[1][1] = rope[0][1];
      }

      movesSet.add(rope[1][0] + "|" + rope[1][1]);
    }
  }

  return movesSet.size;
};

export const solution2 = (input: string) => {
  const motions = getInput(input);

  const rope = [
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
  ];

  const movesSet = new Set();
  movesSet.add("0|0");

  for (let i = 0; i < motions.length; i++) {
    const [direction, steps] = motions[i];
    for (let j = 0; j < steps; j++) {
      if (direction === "R") {
        rope[0][1] += 1;
      } else if (direction === "L") {
        rope[0][1] -= 1;
      } else if (direction === "U") {
        rope[0][0] -= 1;
      } else if (direction === "D") {
        rope[0][0] += 1;
      }

      for (let k = 1; k < rope.length; k++) {
        const difY = rope[k - 1][1] - rope[k][1];
        const difX = rope[k - 1][0] - rope[k][0];

        if (Math.abs(difX) === 2 && Math.abs(difY) === 2) {
          rope[k][1] += difY / 2;
          rope[k][0] += difX / 2;
        } else if (Math.abs(difY) === 2) {
          rope[k][1] += difY / 2;
          rope[k][0] = rope[k - 1][0];
        } else if (Math.abs(difX) === 2) {
          rope[k][0] += difX / 2;
          rope[k][1] = rope[k - 1][1];
        }
      }

      movesSet.add(rope[9][0] + "|" + rope[9][1]);
    }
  }

  return movesSet.size;
};

console.log(solution1(data));
// 6030
console.log(solution2(data));
// // 2545
