const { readFileSync } = require("fs");
const path = require("path");

function getFileLines(input){
  return readFileSync(path.resolve(__dirname, input)).toString().split('\n');
}

function someOverlap(file) {
  const assignments = getFileLines(file);
  let dups = 0;
  assignments.forEach((pair) => {
    const [e1, e2] = pair
      .split(",")
      .map((a) => a.split("-").map((i) => parseInt(i)));

    const elf1 = [];
    for (i = e1[0]; i <= e1[1]; i++) elf1.push(i);
    const elf2 = [];
    for (i = e2[0]; i <= e2[1]; i++) elf2.push(i);

    if (
      elf1.some((val) => elf2.includes(val)) ||
      elf2.some((val) => elf1.includes(val))
    )
      dups++;
  });

  return dups;
}

function allOverlap(file) {
  const assignments = getFileLines(file);
  let dups = 0;
  assignments.forEach((pair) => {
    const [e1, e2] = pair
      .split(",")
      .map((a) => a.split("-").map((i) => parseInt(i)));

    const elf1 = [];
    for (i = e1[0]; i <= e1[1]; i++) elf1.push(i);
    const elf2 = [];
    for (i = e2[0]; i <= e2[1]; i++) elf2.push(i);

    if (
      elf1.every((val) => elf2.includes(val)) ||
      elf2.every((val) => elf1.includes(val))
    )
      dups++;
  });

  return dups;
}
module.exports = {someOverlap, allOverlap}