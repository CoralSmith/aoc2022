const { someOverlap, allOverlap } = require("./day");

describe("day 4", () => {
  it("finds how many elves overlap", () => {
    const result = someOverlap("../4/input0.txt");
    expect(result).toBe(4);
  });
  it("find how many elves have pointless assignments", () => {
    const result = allOverlap("../4/input0.txt");
    expect(result).toBe(2);
  });
});