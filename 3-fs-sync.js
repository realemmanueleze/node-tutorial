const { readFileSync, writeFileSync } = require("fs");

console.log("start")
const first = readFileSync("./Content/first.txt", "utf8");
console.log("starting task 2")
const second = readFileSync("./Content/second.txt", "utf8");

console.log("starting task 3")
// Flag appends result to the exixting result everytime the code runs
writeFileSync(
  "./Content/result-sync.txt",
  `Here's the result: ${first}, ${second}`,
  { flag: "a" }
);
console.log("done with task 3")

console.log("starting new task")
