const { readFileSync } = require("fs");
const path = require("path");

function countTrees(input) {
  const data = processGrid(input);
  return data.flat().filter((t) => t.visible).length;
}

function getHighestScenicScore(input) {
  const data = processGrid(input);
  return data
    .flat()
    .sort((a, b) => a.scenic - b.scenic)
    .pop().scenic;
}

function processGrid(input) {
  const raw = readFileSync(path.resolve(__dirname, input))
    .toString()
    .split("\n")
    .map((l) => l.split(""));

  const data = raw.map((r) =>
    r.map((c) => {
      return { size: parseInt(c), visible: null };
    })
  );

  for (let row = 0; row < data.length; row++) {
    for (let col = 0; col < data[0].length; col++) {
      const tree = data[row][col];
      const treeColumn = data.map((r) => r[col]);

      if (
        [0, data[0].length - 1].includes(col) ||
        [0, data.length - 1].includes(row)
      ) {
        tree.visible = true;
        tree.scenic = 0;
      } else {
        const left = data[row].slice(0, col);
        const right = data[row].slice(col + 1);
        const above = treeColumn.slice(0, row);
        const below = treeColumn.slice(row + 1);

        tree.visible =
          left.every((t) => t.size < tree.size) ||
          right.every((t) => t.size < tree.size) ||
          above.every((t) => t.size < tree.size) ||
          below.every((t) => t.size < tree.size);

        setScenicScore(tree, above.reverse(), right, below, left.reverse());
      }
    }
  }
  return data
}

function setScenicScore(tree, n, s, e, w) {
  const nn = countVisibleTrees(tree, n);
  const ne = countVisibleTrees(tree, e);
  const ns = countVisibleTrees(tree, s);
  const nw = countVisibleTrees(tree, w);
  tree.scenic = nn * nw * ne * ns;
}

function countVisibleTrees(tree, sightLine) {
  let sum = 0;
  for (i = 0; i < sightLine.length; i++) {
    sum++;
    if (sightLine[i].size >= tree.size) break;
  }
  return sum;
}

module.exports = { countTrees, getHighestScenicScore };
