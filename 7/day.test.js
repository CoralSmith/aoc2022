const { sumOfSmallDirs, buildFilesystem, getDirSizeToFreeSpace } = require("./day");
const { readFileSync } = require("fs");
const path = require("path");

describe("day 7", () => {
  it("sum of small dirs", () => {
    const data = readFileSync(path.resolve(__dirname, '../7/input0.txt')).toString(); 
    const filesystem = buildFilesystem(data)
    expect(filesystem['/']['a']['e'].size).toBe(584)
    expect(filesystem['/']['a'].size).toBe(94853)
    expect(filesystem['/']['d'].size).toBe(24933642)
    expect(filesystem['/'].size).toBe(48381165)
    const result = sumOfSmallDirs('../7/input0.txt')
    expect(result).toBe(95437);
  });

  it('gets total space of at least 30000000', () => {
    const result = getDirSizeToFreeSpace('../7/input0.txt')
    expect(result).toBe(24933642);
  })
});