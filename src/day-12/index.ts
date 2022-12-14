import { getData } from "../utils";

const data = getData(__dirname);

export const getInput = (input: string) => {
  const steps = input.trim().replace(/(\r)/gm, "").split("\n");
  return steps;
};

function createMatrix(linesCount: number, columnCount: number, fill: number) {
  const matrix = [];
  for (let i = 0; i < linesCount; i++) {
    matrix.push([]);
    for (let j = 0; j < columnCount; j++) {
      matrix[i].push(fill);
    }
  }
  return matrix;
}

function lettersToNumbers(
  linesCount: number,
  columnCount: number,
  lines: string[]
) {
  let startI = 0;
  let startJ = 0;
  let endI = 0;
  let endJ = 0;
  const matrix = createMatrix(linesCount, columnCount, 0);

  for (let i = 0; i < linesCount; i++) {
    for (let j = 0; j < columnCount; j++) {
      const letter = lines[i][j];
      if (letter === "S") {
        startI = i;
        startJ = j;
        matrix[i][j] = 1;
      } else if (letter === "E") {
        endI = i;
        endJ = j;
        matrix[i][j] = 27;
      } else {
        matrix[i][j] = letter.charCodeAt(0) - 96;
      }
    }
  }
  return { matrix, startI, startJ, endI, endJ };
}

function getMinimumSteps(
  steps: never[][],
  endI: number,
  endJ: number,
  matrix: never[][]
) {
  let index = 0;
  while (steps[endI][endJ] === -1) {
    index++;
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (
          matrix[i][j] === matrix[i][j + 1] ||
          matrix[i][j] + 1 === matrix[i][j + 1] ||
          matrix[i][j] > matrix[i][j + 1]
        ) {
          if (steps[i][j] !== -1) {
            if (steps[i][j + 1] === -1) {
              steps[i][j + 1] = steps[i][j] + 1;
            } else {
              steps[i][j + 1] = Math.min(steps[i][j] + 1, steps[i][j + 1]);
            }
          }
        }

        if (
          i + 1 < matrix.length &&
          (matrix[i][j] === matrix[i + 1][j] ||
            matrix[i][j] + 1 === matrix[i + 1][j] ||
            matrix[i][j] > matrix[i + 1][j])
        ) {
          if (steps[i][j] !== -1) {
            if (steps[i + 1][j] === -1) {
              steps[i + 1][j] = steps[i][j] + 1;
            } else {
              steps[i + 1][j] = Math.min(steps[i][j] + 1, steps[i + 1][j]);
            }
          }
        }

        if (
          matrix[i][j] === matrix[i][j - 1] ||
          matrix[i][j] + 1 === matrix[i][j - 1] ||
          matrix[i][j] > matrix[i][j - 1]
        ) {
          if (steps[i][j] !== -1) {
            if (steps[i][j - 1] === -1) {
              steps[i][j - 1] = steps[i][j] + 1;
            } else {
              steps[i][j - 1] = Math.min(steps[i][j] + 1, steps[i][j - 1]);
            }
          }
        }

        if (
          i >= 1 &&
          (matrix[i][j] === matrix[i - 1][j] ||
            matrix[i][j] + 1 === matrix[i - 1][j] ||
            matrix[i][j] > matrix[i - 1][j])
        ) {
          if (steps[i][j] !== -1) {
            if (steps[i - 1][j] === -1) {
              steps[i - 1][j] = steps[i][j] + 1;
            } else {
              steps[i - 1][j] = Math.min(steps[i][j] + 1, steps[i - 1][j]);
            }
          }
        }
      }
    }
  }
}

export const solution1 = (input: string) => {
  const lines = getInput(input);
  const linesCount = lines.length;
  const columnCount = lines[0].length;

  const { matrix, startI, startJ, endI, endJ } = lettersToNumbers(
    linesCount,
    columnCount,
    lines
  );

  const steps = createMatrix(linesCount, columnCount, -1);

  steps[startI][startJ] = 0;

  getMinimumSteps(steps, endI, endJ, matrix);

  return steps[endI][endJ];
};

export const solution2 = (input: string) => {
  const lines = getInput(input);
  const linesCount = lines.length;
  const columnCount = lines[0].length;

  const { matrix, endI, endJ } = lettersToNumbers(
    linesCount,
    columnCount,
    lines
  );

  let min = Infinity;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (
        matrix[i][j] === 1 &&
        (matrix[i][j + 1] === 2 ||
          matrix[i][j - 1] === 2 ||
          (i < matrix.length - 1 && matrix[i + 1][j] === 2) ||
          (i > 0 && matrix[i - 1][j] === 2))
      ) {
        const steps = createMatrix(linesCount, columnCount, -1);

        steps[i][j] = 0;

        getMinimumSteps(steps, endI, endJ, matrix);
        min = Math.min(min, steps[endI][endJ]);
      }
    }
  }

  return min;
};


console.log(solution1(data));
// 484;
console.log(solution2(data));
// 478
