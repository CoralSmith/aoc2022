const { readFileSync } = require("fs");
const path = require("path");

function packetFinder(input) {
  const data = readFileSync(path.resolve(__dirname, input)).toString();
  return getStartPacket(data);
}
function getStartPacket(data) {
  const packetStarts = [];
  for (i = 0; i <= data.length - 4; i += 1) {
    const maybeStart = Array.from(data.slice(i, i + 4));
    const isStartPacket = Array.from(new Set(maybeStart)).length === 4;
    if (isStartPacket) packetStarts.push(i + 4);
  }
  return packetStarts.shift();
}

module.exports = { packetFinder, getStartPacket };
