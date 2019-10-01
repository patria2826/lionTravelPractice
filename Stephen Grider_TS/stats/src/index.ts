import fs from "fs"; //npm install @types/node

const matches = fs
  .readFileSync("football.csv", {
    encoding: "utf-8"
  })
  .split("\n")
  .map((row: string): string[] => {
    return row.split(",");
  });
console.log(matches);
