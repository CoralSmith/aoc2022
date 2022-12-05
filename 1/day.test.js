const { getMaxCalories, getTopThreeCalories } = require("./day");

describe("count calories", () => {
  it("picks the right elf", () => {
    const result = getMaxCalories("../1/input0.txt");
    expect(result).toBe(24000);
  });

  it("picks adds top 3 cals", () => {
    const result = getTopThreeCalories("../1/input0.txt");
    expect(result).toBe(45000);
  });
});
