const { readFileSync } = require("fs");
const path = require("path");

class Monkey {
  constructor(summary, dropWorry) {
    this.inspected = 0;
    this.worryReducer = 3;
    const lines = summary.split("\n");
    this.items = lines[1]
      .split(":")
      .pop()
      .split(",")
      .map((i) => i.trim())
      .map((i) => parseInt(i));

    this.operation = (old) => eval(lines[2].split("=").pop());

    this.divisor = parseInt(lines[3].split(" ").pop().trim());
    const tval = parseInt(lines[4].split(" ").pop().trim());
    const fval = parseInt(lines[5].split(" ").pop().trim());

    this.test = (item, monkeys) => {
      if (dropWorry) item = Math.floor(item / 3)
      else item = item % this.worryReducer
      if (item % this.divisor === 0) {
        monkeys[tval].items.push(item);
      } else {
        monkeys[fval].items.push(item);
      }
    };
  }

  reduceWorryBy(n){
    this.worryReducer = n
  }

  inspect(monkeys) {
    let item = this.items.shift();
    this.inspected++;
    item = this.operation(item);
    this.test(item, monkeys);
  }
}

function parseNotes(input, dropWorry) {
  const data = readFileSync(path.resolve(__dirname, input)).toString();
  const monkeys = data.split("\n\n").map((sum) => {
    return new Monkey(sum, dropWorry);
  });
  const cm = monkeys.map(m=>m.divisor).reduce((a,c)=> a*c)
  monkeys.forEach(m=> m.reduceWorryBy(cm))
  return monkeys
}

function piggyInTheMiddleRound(monkeys) {
  monkeys.forEach((monkey, i) => {
    const len = monkey.items.length;
    for (let i = 0; i < len; i++) {
      monkey.inspect(monkeys);
    }
  });
}

function getMonkeyBusiness(input, rounds = 20, dropWorry=true) {
  const monkeys = parseNotes(input, dropWorry);
  for (let r = 0; r < rounds; r++) {
    piggyInTheMiddleRound(monkeys);
  }
  monkeys.sort((a, b) => a.inspected - b.inspected);
  return monkeys.at(-1).inspected * monkeys.at(-2).inspected;
}

module.exports = {
  parseNotes,
  piggyInTheMiddleRound,
  getMonkeyBusiness,
};
