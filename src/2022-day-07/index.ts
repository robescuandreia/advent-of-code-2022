import { getData, sum } from "../utils";

const data = getData(__dirname);

export const getInput = (input: string) => {
  const moves = input
    .trim()
    .replace(/(\r)/gm, "")
    .split("\n")
    .map((line) => line.split(" "));
  return moves;
};

const absolutePath = (lines) => {
  let path = "/";
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];
    if (line[0] === "$" && line[1] === "cd" && line[2] !== "..") {
      path = (path + "/" + line[2]).replace("//", "/");
      line[2] = path;
    }
    if (line[0] === "$" && line[1] === "cd" && line[2] === "..") {
      path = path.slice(0, path.lastIndexOf("/"));
      if (path === "") {
        path = "/";
      }
    }
  }
  return lines;
};

export const solution1 = (input: string) => {
  let lines = getInput(input);
  lines = absolutePath(lines);

  const sizes = [];
  calculateSizes(sizes, lines, 0);

  const sumSizes = sum(sizes.filter((size) => size < 100000));

  return sumSizes;
};

const calculateSizes = (sizes, lines, index) => {
  let path = lines[index][2];
  let sum = 0;
  for (let i = index + 1; i < lines.length; i++) {
    const line = lines[i];
    if (line[0] === "$" && line[1] === "cd") {
      break;
    }
    if (line[0] === "dir") {
      let newIndex = 0;
      let newPath = (path + "/" + line[1]).replaceAll("//", "/");

      for (let j = index + 1; j < lines.length; j++) {
        const el = lines[j];
        if (el[2] === newPath) {
          newIndex = j;
          break;
        }
      }
      sum = sum + calculateSizes(sizes, lines, newIndex);
    }
    if (line[0] !== "dir" && line[0] !== "$") {
      sum = sum + Number(line[0]);
    }
  }
  sizes.push(sum);
  return sum;
};

export const solution2 = (input: string) => {
  let lines = getInput(input);

  lines = absolutePath(lines);

  const sizes = [];
  calculateSizes(sizes, lines, 0);

  let sumSizes = 0;
  let unusedSpace = 70000000 - Math.max(...sizes);
  let toDelete = 30000000 - unusedSpace;

  const goodValues = sizes.filter((size) => size >= toDelete);

  return Math.min(...goodValues);
};

console.log(solution1(data));
// 1770595
console.log(solution2(data));
// 2195372
