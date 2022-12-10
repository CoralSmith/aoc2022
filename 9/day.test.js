const { modelRopeMovement, countTailMovement } = require("./day");

describe("day 9", () => {
  it("rope physics counting", () => {
    expect(countTailMovement('../9/input0.txt')).toBe(13);
    expect(countTailMovement('../9/input0.txt', 10)).toBe(1);
    expect(countTailMovement('../9/input01.txt', 10)).toBe(36);
  });

});