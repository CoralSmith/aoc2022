const { countTrees } = require("./day");
const { readFileSync } = require("fs");
const path = require("path");

describe("day 8", () => {
  it("count trees", () => {
    const result = countTrees('../8/input0.txt')
    expect(result).toBe(21);
  });

});