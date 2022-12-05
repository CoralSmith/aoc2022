const { simulateCrateMove9000, simulateCrateMove9001 } = require("./day");

describe("day 5 faffing with crates", () => {
  it("moves top crate", () => {
    const result = simulateCrateMove9000('../5/input0.txt')
    expect(result).toBe('CMZ');
  });
  it("moves n crates", () => {
    const result = simulateCrateMove9001('../5/input0.txt')
    expect(result).toBe('MCD');
  });
});