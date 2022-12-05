const { getScore, inferScore, getOutcome } = require("./day");

describe("rps", () => {
  it("gets total", () => {
    const result = getScore("../2/input0.txt");
    expect(result).toBe(15);
  });

  it("determines choice", () => {
    const result = inferScore("../2/input0.txt");
    expect(result).toBe(12);
  });

  it("gets outcome", () => {
    expect(getOutcome(["1", "1"])).toBe(4);
    expect(getOutcome(["1", "2"])).toBe(8);
    expect(getOutcome(["1", "3"])).toBe(3);
    expect(getOutcome(["2", "1"])).toBe(1);
    expect(getOutcome(["2", "2"])).toBe(5);
    expect(getOutcome(["2", "3"])).toBe(9);
    expect(getOutcome(["3", "1"])).toBe(7);
    expect(getOutcome(["3", "2"])).toBe(2);
    expect(getOutcome(["3", "3"])).toBe(6);
  });
});