import { getData, sum } from "../utils";

const data = getData(__dirname);

export const getInput = (input: string): [string, number][] => {
  const signals = input
    .trim()
    .replace(/(\r)/gm, "")
    .split("\n")
    .map((line) => [line.split(" ")[0], Number(line.split(" ")[1]) || 0]);

  return signals as [string, number][];
};

export const solution1 = (input: string) => {
  const signals = getInput(input);

  let cycle = 0;
  let x = 1;

  let cycleStrength = [];

  for (let i = 0; i < signals.length; i++) {
    let [command, valueofY] = signals[i];

    cycle += 1;
    if ((cycle - 20) % 40 === 0) {
      cycleStrength.push([x, cycle]);
    }

    if (command === "addx") {
      cycle += 1;
      if ((cycle - 20) % 40 === 0) {
        cycleStrength.push([x, cycle]);
      }
      x = x + valueofY;
    }
  }

  return sum(cycleStrength.map((line) => line[0] * line[1]));
};

export const solution2 = (input: string) => {
  const signals = getInput(input);

  let cycle = 0;
  let x = 1;
  let crt = [];

  for (let i = 0; i < signals.length; i++) {
    let [command, valueofY] = signals[i];

    cycle += 1;
    crt.push(Math.abs(x - ((cycle % 40) - 1)) <= 1 ? "#" : ".");

    if (command === "addx") {
      cycle += 1;
      crt.push(Math.abs(x - ((cycle % 40) - 1)) <= 1 ? "#" : ".");
      x = x + valueofY;
    }
  }
  const solution = [];
  for (let i = 0; i < crt.length; i += 40) {
    solution.push(crt.slice(i, i + 39).join(""));
  }
  console.log(solution);
  return solution;
};

console.log(solution1(data));
// 12460
console.log(solution2(data));
// ####.####.####.###..###...##..#..#.#...
// #.......#.#....#..#.#..#.#..#.#.#..#...
// ###....#..###..#..#.#..#.#..#.##...#...
// #.....#...#....###..###..####.#.#..#...
// #....#....#....#....#.#..#..#.#.#..#...
// ####.####.#....#....#..#.#..#.#..#.####
// EZFPRAKL
