import { getData, sum } from "../utils";

const data = getData(__dirname);

// [
// "2-4,6-8",
// "2-3,4-5",
// "5-7,7-9",
// "2-8,3-7",
// "6-6,4-6",
// "2-6,4-8",
// ]

export const getInput = (input: string) => {
  const moves = input
    .replace(/(\r)/gm, "")
    .trim()
    .split("\n")
    .map((line) =>
      line.split(",").map((group) => group.split("-").map(Number))
    );

  return moves;
};

// [
//   [ [ 2, 4 ], [ 6, 8 ] ],
//   [ [ 2, 3 ], [ 4, 5 ] ],
//   [ [ 5, 7 ], [ 7, 9 ] ],
//   [ [ 2, 8 ], [ 3, 7 ] ],
//   [ [ 6, 6 ], [ 4, 6 ] ],
//   [ [ 2, 6 ], [ 4, 8 ] ]
// ]

export const solution1 = (input: string) => {
  const groups = getInput(input);
  let sum = 0;
  for (let i = 0; i < groups.length; i++) {
    const group = groups[i];
    const elf1 = group[0]; // [2, 8]
    const elf2 = group[1]; // [3, 7]

    if (
      (elf1[0] <= elf2[0] && elf2[1] <= elf1[1]) ||
      (elf2[0] <= elf1[0] && elf1[1] <= elf2[1])
    ) {
      sum += 1;
    }
  }
  return sum;
};

export const solution2 = (input: string) => {
  const groups = getInput(input);
  let noOverlap = 0;
  for (let i = 0; i < groups.length; i++) {
    const group = groups[i];
    const elf1 = group[0]; // [2, 8]
    const elf2 = group[1]; // [3, 7]

    if (elf2[0] > elf1[1] || elf1[0] > elf2[1]) {
      noOverlap += 1;
    }
  }
  return groups.length - noOverlap;
};

console.log(solution1(data));
// 530
console.log(solution2(data));
// // 903
