import fs from "fs";
import path from "path";

export function getData(dir: string) {
  return fs.readFileSync(path.resolve(dir, "./input.txt"), {
    encoding: "utf-8",
  });
}

export const sum = (n: number[]) => n.reduce((value, sum) => value + sum, 0);
