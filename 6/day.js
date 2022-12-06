function getUniqueWindowIndex(data, window=4) {
  const packetStarts = [];
  for (i = 0; i <= data.length - window; i += 1) {
    const maybeStart = Array.from(data.slice(i, i + window));
    const isStartPacket = Array.from(new Set(maybeStart)).length === window;
    if (isStartPacket) packetStarts.push(i + window);
  }
  return packetStarts.shift();
}

module.exports = {getUniqueWindowIndex };
