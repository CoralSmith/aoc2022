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
    this.cycles++;
    if ([20, 60, 100, 140, 180, 220].includes(this.cycles)) this.emitSignal();
  }

  getSignalStrength() {
    return this.x * this.cycles;
  }

  emitSignal() {
    const signal = this.getSignalStrength();
    if (this.display) this.display.push(signal);
  }
}

class Device {
  constructor(){
    this.cpu = new CPU()
    this.display = []
    this.cpu.connectDisplay(this.display)
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

function getTotalSignal(input) {
  const device = new Device()
  device.runProgram(input)
  return device.getDisplay().reduce((a, b) => a + b);
}

module.exports = {
  CPU,
  Device,
  getTotalSignal,
};
