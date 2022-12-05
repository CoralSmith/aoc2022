const { readFileSync } = require("fs");
const path = require("path");

function getFileContents(input){
  return readFileSync(path.resolve(__dirname, input)).toString();
}

function getMaxCalories(input) {
  const tracker = getFileContents(input)
  return tracker
    .split("\n\n")
    .map((item) =>
      item
        .split("\n")
        .map((i) => parseInt(i.trim()))
        .reduce((i0, i1) => i0 + i1)
    )
    .sort((a, b) => a - b)
    .pop();
}

function getTopThreeCalories(input) {
  const tracker = getFileContents(input)
  return tracker
    .split("\n\n")
    .map((item) =>
      item
        .split("\n")
        .map((i) => parseInt(i.trim()))
        .reduce((i0, i1) => i0 + i1)
    )
    .sort((a, b) => a - b)
    .slice(-3)
    .reduce((i0, i1) => i0 + i1);
}
module.exports = {getMaxCalories, getTopThreeCalories}