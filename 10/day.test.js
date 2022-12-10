const { getTotalSignal } = require("./day");

describe("day 10 - i am computer now", () => {
  it('gets the total signal strength emitted', () => {
    expect(getTotalSignal('../10/input0.txt')).toBe(13140)
  })
//   it("perform operation", () => {
//     expect(performOperation('noop', new CPU()).x).toBe(1);
//     expect(performOperation('addx 3', new CPU()).x).toBe(4);
//   });

//   it('calculates signal strength', () => {
//     const cpu = new CPU() 
//     performOperation('noop', cpu)
//     expect(cpu.getSignalStrength()).toBe(1)
//     performOperation('noop', cpu)
//     expect(cpu.getSignalStrength()).toBe(2)
//     performOperation('addx 2', cpu)
//     expect(cpu.getSignalStrength()).toBe(12)
//   })

//   it("run a program", () => {
//     const cpu = new CPU()
//     const prog = `noop
// addx 3
// addx -5`
//     runProgram(prog, cpu)

//     expect(cpu.x).toBe(-1)
//     expect(cpu.cycles).toBe(5)
//   });

//   it('runs a big program and emits signal strength', () => {
//     const cpu = new CPU()
//     const program = loadProgram('../10/input0.txt')
//     const display = []
//     cpu.connectDisplay(display)
//     runProgram(program, cpu)
//     expect(getTotalSignal(display)).toBe(13140)
//   }) // debugging output tests to get to a place i actually care about
});