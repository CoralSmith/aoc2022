const { readFileSync } = require("fs");
const path = require("path");

function getFileLines(input){
  return readFileSync(path.resolve(__dirname, input)).toString().split('\n');
}
// choice rock = 1, paper = 2, scissors = 3
// outcome win = 6, draw = 3, lose = 0

function inferScore(input) {
  const games = []
  getFileLines(input)
    .map((round) =>
      round.trim().replace("A", "1").replace("B", "2").replace("C", "3")
    )
    .forEach((round) => {
      const op = round[0]
      if (round.includes("X")) {
        //lose
        const me = op == "1" ? "3" : (parseInt(op)-1).toString();
        games.push([op, me])
      } else if (round.includes("Y")) {
        //draw
        games.push([op, op])
      } else {
        //win
        const me = op == "3" ? "1" : (parseInt(op)+1).toString();
        games.push([op, me])
      }
    })
  const myScores = [];
  games.forEach((round) => myScores.push(getOutcome(round)));
  return myScores.reduce((i, j) => i + j);
}

function getScore(input) {
  const rounds = getFileLines(input)
    .map((round) =>
      round
        .trim()
        .replace("A", "1")
        .replace("X", "1")
        .replace("B", "2")
        .replace("Y", "2")
        .replace("C", "3")
        .replace("Z", "3")
        .split(" ")
    );

  const myScores = [];
  rounds.forEach((round) => myScores.push(getOutcome(round)));
  return myScores.reduce((i, j) => i + j);
}

function getOutcome([o, m]) {
  const me = parseInt(m);
  const op = parseInt(o);
  isDraw = me === op;
  isWin =
    (op === 1 && me === 2) || (op === 2 && me === 3) || (op === 3 && me === 1);
  const outcome = isDraw ? 3 : isWin ? 6 : 0;
  return outcome + me;
}
module.exports = {getScore, getOutcome, inferScore}