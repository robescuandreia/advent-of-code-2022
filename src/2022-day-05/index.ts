import { getData, sum } from "../utils";

const data = getData(__dirname);

export const getInput = (input: string) => {
  const data = input;
  let [stacks, moves] = data.replace(/(\r)/gm, "").split("\n\n");
  stacks = stacks
    .replaceAll("    ", "[0] ")
    .replaceAll(" ", "")
    .replaceAll("[", "")
    .replaceAll("]", "")
    .split("\n")
    .map((line) => line.split(""))

    .filter((line) => line != "");
  stacks.pop();
  stacks.reverse();

  const matrix = [];
  for (let j = 0; j < stacks[0].length; j++) {
    const stack = stacks[j];
    matrix.push([]);

    for (let i = 0; i < stacks.length; i++) {
      if (stacks[i][j] !== "0") {
        matrix[j].push(stacks[i][j]);
      }
    }
  }
  moves = moves
    .trim()
    .replaceAll(/[a-z]/g, "")
    .split("\n")
    .map((line) => line.trim().split("  ").map(Number));

  return [matrix, moves];
};

export const solution1 = (input: string) => {
  const [stacks, moves] = getInput(input);
  for (let i = 0; i < moves.length; i++) {
    const [elementsToMove, from, to] = moves[i];
    const fromStack = stacks[from - 1];
    const toStack = stacks[to - 1];

    for (let j = 0; j < elementsToMove; j++) {
      const lastElement = fromStack.pop();
      toStack.push(lastElement);
    }
  }

  let solution = "";
  for (let k = 0; k < stacks.length; k++) {
    const element = stacks[k];
    const lastCharacter = element.pop();
    solution += lastCharacter;
  }
  return solution;
};

export const solution2 = (input: string) => {
  const [stacks, moves] = getInput(input);
  for (let i = 0; i < moves.length; i++) {
    const [elementsToMove, from, to] = moves[i];
    const fromStack = stacks[from - 1];
    const toStack = stacks[to - 1];

    toStack.push(...fromStack.slice(-elementsToMove));
    fromStack.splice(-elementsToMove);
  }

  let solution = "";
  for (let k = 0; k < stacks.length; k++) {
    const element = stacks[k];
    const lastCharacter = element.pop();
    solution += lastCharacter;
  }
  return solution;
};

console.log(solution1(data));
// GFTNRBZPF
console.log(solution2(data));
// // // VRQWPDSGP
