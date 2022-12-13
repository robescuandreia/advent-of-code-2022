import { getData } from "../utils";

const data = getData(__dirname);

export const getInput = (input: string) => {
  const monkeys = input
    .trim()
    .replace(/(\r)/gm, "")
    .split("\n\n")
    .map((monkey) => {
      const lines = monkey.split("\n");

      const items = lines[1]
        .trim()
        .replace("Starting items: ", "")
        .split(", ")
        .map(Number);

      const operationArr = lines[2]
        .trim()
        .replace("Operation: new = old ", "")
        .split(" ");

      let operation = operationArr[0];
      let operationNumber = 0;
      if (operationArr[1] === "old") {
        operation = "**";
      } else {
        operationNumber = Number(operationArr[1]);
      }

      const divisibleBy = lines[3].trim().replace("Test: divisible by ", "");
      const ifTrue = lines[4].trim().replace("If true: throw to monkey ", "");
      const ifFalse = lines[5].trim().replace("If false: throw to monkey ", "");

      return [
        items,
        [operation, operationNumber],
        [Number(divisibleBy), Number(ifTrue), Number(ifFalse)],
      ];
    });
  return monkeys;
};

export const solution1 = (input: string) => {
  const monkeys = getInput(input);
  let throws = [];
  for (let i = 0; i < monkeys.length; i++) {
    throws.push(0);
  }

  for (let k = 0; k < 20; k++) {
    for (let i = 0; i < monkeys.length; i++) {
      let monkey = monkeys[i];
      let items = monkey[0];
      let operation = monkey[1][0];
      let operationNumber = Number(monkey[1][1]);
      let divisibleBy = Number(monkey[2][0]);
      let ifTrue = Number(monkey[2][1]);
      let ifFalse = Number(monkey[2][2]);
      let newItemValue = 0;

      while (items.length > 0) {
        let item = items.shift();

        if (operation === "*") {
          newItemValue = Math.trunc((Number(item) * operationNumber) / 3);
        } else if (operation === "+") {
          newItemValue = Math.trunc((Number(item) + operationNumber) / 3);
        } else if (operation === "**") {
          newItemValue = Math.trunc((Number(item) * Number(item)) / 3);
        }
        throws[i] += 1;

        if (newItemValue % divisibleBy !== 0) {
          monkeys[ifFalse][0].push(newItemValue);
        } else {
          monkeys[ifTrue][0].push(newItemValue);
        }
      }
    }
  }
  const monkeyMoves = throws.sort((a, b) => b - a);
  const topMonkeys = monkeyMoves.slice(0, 2);
  return topMonkeys[0] * topMonkeys[1];
};

export const solution2 = (input: string) => {
  const monkeys = getInput(input);
  let throws = [];
  for (let i = 0; i < monkeys.length; i++) {
    throws.push(0);
  }

  let multipleDividibleBy = 1;
  for (let i = 0; i < monkeys.length; i++) {
    multipleDividibleBy *= monkeys[i][2][0];
  }

  for (let k = 0; k < 10000; k++) {
    for (let i = 0; i < monkeys.length; i++) {
      let monkey = monkeys[i];
      let items = monkey[0];
      let operation = monkey[1][0];
      let operationNumber = Number(monkey[1][1]);
      let divisibleBy = Number(monkey[2][0]);
      let ifTrue = Number(monkey[2][1]);
      let ifFalse = Number(monkey[2][2]);
      let newItemValue = 0;

      while (items.length > 0) {
        let item = items.shift();
        throws[i] += 1;

        if (operation === "*") {
          newItemValue = Math.floor(Number(item) * operationNumber);
        } else if (operation === "+") {
          newItemValue = Math.floor(Number(item) + operationNumber);
        } else if (operation === "**") {
          newItemValue = Math.floor(Number(item) * Number(item));
        }

        newItemValue = newItemValue % multipleDividibleBy;

        if (newItemValue % divisibleBy !== 0) {
          monkeys[ifFalse][0].push(newItemValue);
        } else {
          monkeys[ifTrue][0].push(newItemValue);
        }
      }
    }
  }
  const monkeyMoves = throws.sort((a, b) => b - a);
  const topMonkeys = monkeyMoves.slice(0, 2);

  return topMonkeys[0] * topMonkeys[1];
};
console.log(solution1(data));
// 100345;
console.log(solution2(data));
// 28537348205
