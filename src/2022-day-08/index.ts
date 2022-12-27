import { getData, sum } from "../utils";

const data = getData(__dirname);

export const getInput = (input: string) => {
  const trees = input
    .trim()
    .replace(/(\r)/gm, "")
    .split("\n")
    .map((line) => line.split("").map(Number));
  return trees;
};

export const solution1 = (input: string) => {
  let trees = getInput(input);
  let transposedTrees = [];

  for (let i = 0; i < trees.length; i++) {
    transposedTrees.push([]);

    for (let j = 0; j < trees[i].length; j++) {
      transposedTrees[i].push(trees[j][i]);
    }
  }
  let visibleEdge = trees.length * 2 + (transposedTrees.length - 2) * 2;
  let visibleTree = 0;

  for (let i = 1; i < trees.length - 1; i++) {
    for (let j = 1; j < trees[i].length - 1; j++) {
      const tree = trees[i][j];

      let treeSlicedLeft = trees[i].slice(0, j);
      let treeSlicedRight = trees[i].slice(j + 1);

      let maxNumberSlicedLeft = Math.max(...treeSlicedLeft);
      let maxNumberSlicedRight = Math.max(...treeSlicedRight);

      let treeSlicedUp = transposedTrees[j].slice(0, i);
      let treeSlicedDown = transposedTrees[j].slice(i + 1);
      let maxNumberSlicedUp = Math.max(...treeSlicedUp);
      let maxNumberSlicedDown = Math.max(...treeSlicedDown);

      if (
        tree > maxNumberSlicedLeft ||
        tree > maxNumberSlicedRight ||
        tree > maxNumberSlicedUp ||
        tree > maxNumberSlicedDown
      ) {
        visibleTree += 1;
      }
    }
  }

  const visible = visibleEdge + visibleTree;

  return visible;
};

export const solution2 = (input: string) => {
  let trees = getInput(input);
  let myMax = 0;

  for (let i = 1; i < trees.length - 1; i++) {
    for (let j = 1; j < trees[i].length - 1; j++) {
      const tree = trees[i][j];

      let scoreLeft = 0;
      for (let k = j - 1; k >= 0; k--) {
        scoreLeft++;
        if (tree <= trees[i][k]) {
          break;
        }
      }

      let scoreRight = 0;
      for (let k = j + 1; k < trees[i].length; k++) {
        scoreRight++;
        if (tree <= trees[i][k]) {
          break;
        }
      }

      let scoreUp = 0;
      for (let k = i - 1; k >= 0; k--) {
        scoreUp++;
        if (tree <= trees[k][j]) {
          break;
        }
      }

      let scoreDown = 0;
      for (let k = i + 1; k < trees.length; k++) {
        scoreDown++;
        if (tree <= trees[k][j]) {
          break;
        }
      }

      let score = scoreDown * scoreLeft * scoreRight * scoreUp;
      myMax = Math.max(myMax, score);
    }
  }

  return myMax;
};

console.log(solution1(data));
// 1787
console.log(solution2(data));
// 440640
