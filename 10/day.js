const { readFileSync } = require("fs");
const path = require("path");

class CPU {
  constructor() {
    this.x = 1;
    this.cycles = 0;
  }

  connectDisplay(display) {
    this.display = display;
  }

  cycle() {
    this.display.updateDisplay(this.cycles, [this.x-1, this.x, this.x+1].includes(this.cycles%40))
    this.cycles++;
    if ([20, 60, 100, 140, 180, 220].includes(this.cycles)) this.emitSignal();

  }

  getSignalStrength() {
    return this.x * this.cycles;
  }

  emitSignal() {
    const signal = this.getSignalStrength();
    if (this.display) this.display.input.push(signal);
  }
}

class Display {
  constructor() {
    this.pixels = [];
    this.input = [];
    this.initDisplay();
  }

  initDisplay(){
    const height = 6;
    const width = 40;
    for (let h = 0; h < height; h++) {
      const row = [];
      for (let w = 0; w < width; w++) {
        row.push(".");
      }
      this.pixels.push(row);
    }
  }

  updateDisplay(cycle, isLit){
    const row = Math.floor(cycle/40)
    const col = (cycle % 40)
    if (isLit) {
      this.pixels[row][col] = '#'
    }
  }

  printDisplay() {
    const display = this.pixels
      .map((r) => r.join(""))
      .join("\n")
      .trim();
    //console.log(display);
    return display;
  }
}

class Device {
  constructor() {
    this.cpu = new CPU();
    this.display = new Display();
    this.cpu.connectDisplay(this.display);
  }

  performOperation(op) {
    if (op === "noop") {
      this.cpu.cycle();
    } else if (op.startsWith("addx")) {
      this.cpu.cycle();
      this.cpu.cycle();
      this.cpu.x += parseInt(op.split(" ").pop());
    }
  }

  runProgram(input) {
    const ops = this.loadProgram(input).split("\n");
    ops.forEach((op) => this.performOperation(op));
  }

  loadProgram(input) {
    return readFileSync(path.resolve(__dirname, input)).toString();
  }
}

function printProgramDisplay(input) {
  const device = new Device();
  device.runProgram(input);
  return device.display.printDisplay();
}

function getTotalSignal(input) {
  const device = new Device();
  device.runProgram(input);
  return device.display.input.reduce((a, b) => a + b);
}

module.exports = {
  CPU,
  Device,
  getTotalSignal,
  printProgramDisplay,
};
