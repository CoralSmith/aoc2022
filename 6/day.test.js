const { packetFinder, getUniqueWindowIndex } = require("./day");
const { readFileSync } = require("fs");
const path = require("path");

describe("day 6", () => {
  it("start of packet finder", () => {
    const data = readFileSync(path.resolve(__dirname, '../6/input0.txt')).toString();
    const result = getUniqueWindowIndex(data, 4)
    expect(result).toBe(7);
  });

  it("unique block starter", () => {
    expect(getUniqueWindowIndex('mjqjpqmgbljsphdztnvjfqwrcgsmlb')).toBe(7);
    expect(getUniqueWindowIndex('bvwbjplbgvbhsrlpgdmjqwftvncz')).toBe(5);
    expect(getUniqueWindowIndex('nppdvjthqldpwncqszvftbrmjlhg')).toBe(6);
    expect(getUniqueWindowIndex('nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg')).toBe(10);
    expect(getUniqueWindowIndex('zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw')).toBe(11);
    expect(getUniqueWindowIndex('mjqjpqmgbljsphdztnvjfqwrcgsmlb', 14)).toBe(19);
    expect(getUniqueWindowIndex('bvwbjplbgvbhsrlpgdmjqwftvncz', 14)).toBe(23);
    expect(getUniqueWindowIndex('nppdvjthqldpwncqszvftbrmjlhg', 14)).toBe(23);
    expect(getUniqueWindowIndex('nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg', 14)).toBe(29);
    expect(getUniqueWindowIndex('zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw', 14)).toBe(26);
  });
});