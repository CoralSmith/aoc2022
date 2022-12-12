const { getShortestPath, getShortestHike } = require("./day");

describe("day 12 - hill climbing", () => {
  it('get fewest steps', () => {
    expect(getShortestPath('../12/input0.txt')).toBe(31)
  })
  it('get shortest hike steps', () => {
    expect(getShortestHike('../12/input0.txt')).toBe(29)
  })
});