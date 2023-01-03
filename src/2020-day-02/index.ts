import { getData, sum } from "../utils";

const data = getData(__dirname);

export const getInput = (input: string) => {
  const policies = input
    .trim()
    .replace(/(\r)/gm, "")
    .split("\n")
    .map((line) => [
      line
        .split(" ")[0]
        .split("-")
        .map((l) => Number(l.split(","))),
      line.split(" ")[1].replace(":", ""),
      line.split(" ")[2],
    ]);

  return policies;
};

export const solution1 = (input: string) => {
  const policies = getInput(input);

  let valid = 0;

  for (let i = 0; i < policies.length; i++) {
    const policy = policies[i];
    const password = policy[2];
    const letter = policy[1];
    const min = policy[0][0];
    const max = policy[0][1];
    let count = password.split(letter).length - 1;

    if (count >= min && count <= max) {
      valid += 1;
    }
  }

  return valid;
};

export const solution2 = (input: string) => {
  const policies = getInput(input);

  let valid = 0;

  for (let i = 0; i < policies.length; i++) {
    const policy = policies[i];
    const password = policy[2];
    const letter = policy[1];
    const firstPosition = policy[0][0];
    const secondPosition = policy[0][1];

    if (
      (password[firstPosition - 1] === letter &&
        password[secondPosition - 1] !== letter) ||
      (password[firstPosition - 1] !== letter &&
        password[secondPosition - 1] === letter)
    ) {
      valid += 1;
    }
  }
  return valid;
};

console.log(solution1(data));
// 572
console.log(solution2(data));
// 306
