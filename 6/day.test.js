const { packetFinder, getStartPacket } = require("./day");

describe("day 6", () => {
  it("start of packet finder", () => {
    const result = packetFinder('../6/input0.txt')
    expect(result).toBe(7);
  });
  it("starter", () => {
    expect(getStartPacket('bvwbjplbgvbhsrlpgdmjqwftvncz')).toBe(5);
    expect(getStartPacket('nppdvjthqldpwncqszvftbrmjlhg')).toBe(6);
    expect(getStartPacket('nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg')).toBe(10);
    expect(getStartPacket('zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw')).toBe(11);
  });
  // it("s2", () => {
  //   const result = ('../6/input0.txt')
  //   expect(result).toBe('ooo');
  // });
});