const { packetFinder, getStartPacket } = require("./day");

describe("day 6", () => {
  it("start of packet finder", () => {
    const result = packetFinder('../6/input0.txt')
    expect(result).toBe(7);
  });
  it("packet starter", () => {
    expect(getStartPacket('bvwbjplbgvbhsrlpgdmjqwftvncz')).toBe(5);
    expect(getStartPacket('nppdvjthqldpwncqszvftbrmjlhg')).toBe(6);
    expect(getStartPacket('nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg')).toBe(10);
    expect(getStartPacket('zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw')).toBe(11);
  });
  it("starter", () => {
    expect(getStartPacket('mjqjpqmgbljsphdztnvjfqwrcgsmlb', 14)).toBe(19);
    expect(getStartPacket('bvwbjplbgvbhsrlpgdmjqwftvncz', 14)).toBe(23);
    expect(getStartPacket('nppdvjthqldpwncqszvftbrmjlhg', 14)).toBe(23);
    expect(getStartPacket('nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg', 14)).toBe(29);
    expect(getStartPacket('zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw', 14)).toBe(26);
  });
  // it("s2", () => {
  //   const result = ('../6/input0.txt')
  //   expect(result).toBe('ooo');
  // });
});