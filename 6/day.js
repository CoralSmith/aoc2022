const { readFileSync } = require("fs");
const path = require("path");

function getUniqueWindowIndex(input, window=4) {
  const data = readFileSync(path.resolve(__dirname, input)).toString();
  const packetStarts = [];
  for (i = 0; i <= data.length - window; i += 1) {
    const maybeStart = Array.from(data.slice(i, i + window));
    const isStartPacket = Array.from(new Set(maybeStart)).length === window;
    if (isStartPacket) packetStarts.push(i + window);
  }
  return packetStarts.shift();
}

module.exports = {getUniqueWindowIndex };
