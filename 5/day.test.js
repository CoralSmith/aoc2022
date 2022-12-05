const { simulateCrateMove } = require("./day");

describe("day 5 faffing with crates", () => {
  it("get top crate", () => {
    const result = simulateCrateMove('../5/input0.txt')
    console.log(simulateCrateMove('../5/input1.txt'))
    expect(result).toBe('CMZ');
  });
});