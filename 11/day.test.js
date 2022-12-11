const { parseNotes, piggyInTheMiddleRound, getMonkeyBusiness } = require("./day");

describe("day 11 - bloody monkeys", () => {
  it('get monkey business level', () => {
    expect(getMonkeyBusiness('../11/input0.txt')).toBe(10605)
  })
  it('get monkey business level pt 2', () => {
    expect(getMonkeyBusiness('../11/input0.txt', 10000, false)).toBe(2713310158)
  })
});