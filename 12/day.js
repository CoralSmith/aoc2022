const { readFileSync } = require("fs");
const path = require("path");

class Node {
  constructor(x, y, val) {
    this.x = x;
    this.y = y;
    this.val = val;
    this.distance = 9999999;
  }
}

function parseMap(input) {
  let start = null;
  const data = readFileSync(path.resolve(__dirname, input))
    .toString()
    .split("\n")
    .map((r, i) => {
      if (r.includes("S")) start = new Node(r.indexOf("S"), i, 96);
      return r.split("");
    });
  return { start, data };
}

function getNeighbours(pos, nodes) {
  const neighbours = [];
  if (nodes.some((n) => n.y === pos.y && n.x === pos.x - 1)) {
    neighbours.push(nodes.find((n) => n.y === pos.y && n.x === pos.x - 1));
  }
  if (nodes.some((n) => n.y === pos.y && n.x === pos.x + 1)) {
    neighbours.push(nodes.find((n) => n.y === pos.y && n.x === pos.x + 1));
  }
  if (nodes.some((n) => n.y === pos.y - 1 && n.x === pos.x)) {
    neighbours.push(nodes.find((n) => n.y === pos.y - 1 && n.x === pos.x));
  }
  if (nodes.some((n) => n.y === pos.y + 1 && n.x === pos.x)) {
    neighbours.push(nodes.find((n) => n.y == pos.y + 1 && n.x === pos.x));
  }
  return neighbours;
}

function getStepLength({ start, data }) {
  const nodes = [];
  const numRows = data.length;
  const numCols = data[0].length;
  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      const n = new Node(col, row, data[row][col].charCodeAt(0));
      if (row === start.y && col === start.x) {
        n.distance = 0;
        n.val = 96;
      }
      if (n.val === 69) n.val = 123;
      nodes.push(n);
    }
  }

  let setDistance = 0;
  const nodesToCheck = [];
  nodesToCheck.push(nodes.find((n) => n.x == start.x && n.y == start.y));
  while (nodesToCheck.length !== 0) {
    const node = nodesToCheck.shift();
    const neighbours = getNeighbours(node, nodes);
    neighbours.forEach((n) => {
      if (n.val <= node.val + 1 && n.distance > node.distance + 1) {
        n.distance = node.distance + 1;
        setDistance = node.distance + 1;
        nodesToCheck.push(n);
      }
    });
  }
  // const nodeMap = nodes.reduce((result, item) => ({
  //     ...result,
  //     [item.y]: `${result[item.y]?? ''} ${item.distance}:${String.fromCharCode(item.val)}`,
  //   }),
  //   {},)
  // console.log(nodeMap)
  return nodes.find((n) => n.val == 123)?.distance;
}

function getShortestPath(input) {
  return getStepLength(parseMap(input));
}
function getShortestHike(input) {
  const {_, data} = parseMap(input);
  const starts = []
  const numRows = data.length;
  const numCols = data[0].length;
  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      if (data[row][col]) {
        const n = new Node(col, row, data[row][col].charCodeAt(0));
        n.distance = 0;
        starts.push(n);
      }
    }
  }
  
  const steps = starts.map((start) =>{
    //console.log(data)
    return getStepLength({start, data})
  });
  return steps.sort((a, b) => a - b).shift()-1 //because who knows;
}

module.exports = {
  getShortestPath,
  getShortestHike,
};
