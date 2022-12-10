const { readFileSync } = require("fs");
const path = require("path");

function countTailMovement(input, knots = 2) {
  const moves = readFileSync(path.resolve(__dirname, input))
    .toString()
    .split("\n")
    .map((m) => {
      const [dir, n_s] = m.split(" ");
      return { dir, num: parseInt(n_s) };
    });
  let t_locs = [];
  const rope = [...Array(knots).keys()].map(() => {
    return { x: 0, y: 0 };
  });
  t_locs.push(rope.at(-1));
  moves.forEach((move) => {
    for (let n = 0; n < move.num; n++) {
      switch (move.dir) {
        case "U":
          rope[0].y++;
          break;
        case "D":
          rope[0].y--;
          break;
        case "L":
          rope[0].x--;
          break;
        case "R":
          rope[0].x++;
          break;
      }

      for (let k=0; k < knots-1; k++){
        const ti = k+1
        const x_diff = rope[k].x - rope[ti].x;
        const y_diff = rope[k].y - rope[ti].y;
        if (Math.abs(x_diff) > 1 || Math.abs(y_diff) > 1) {
          rope[ti] = {
            x: rope[ti].x + Math.sign(x_diff),
            y: rope[ti].y + Math.sign(y_diff),
          };
          if (ti === knots-1) t_locs.push(rope[ti]);
        }
      }
    }
  });
  const pts_s = t_locs.map((pt) => `${pt.x},${pt.y}`);
  return Array.from(new Set(pts_s)).length;
}

module.exports = { countTailMovement };
