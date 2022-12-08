const { getUniqueWindowIndex } = require("./day");

describe("day 6", () => {
  it("start of packet finder", () => {
    const result = getUniqueWindowIndex("../6/input0.txt", 4);
    expect(result).toBe(7);
  });
});
