const { readFileSync } = require("fs");
const path = require("path");

function getFileContents(input){
  return readFileSync(path.resolve(__dirname, input)).toString().split('\n\n');
}

function getParsedFile(input){
  const [crateModel, stepBlock] = getFileContents(input);
  const crateLayers = crateModel.split('\n')
  const numStacks = crateLayers.pop().split('   ').length

  // PIVOT!
  const stacks = {}
  for (i=1; i<=numStacks; i++){
    stacks[`${i}`]=[]
    crateLayers.forEach(layer => {
      const val = layer.slice((i*4-4), (i*4-1))
      if (val !== '   ') stacks[`${i}`].push(val)
    })
    stacks[`${i}`].reverse()
  }
  return [stacks, stepBlock.split('\n')]
}

function simulateCrateMove9000(input) {
  const [stacks, steps] = getParsedFile(input);
  
  steps.forEach(step => {
    const [_i, quantity, _f, startPos, _t, endPos] = step.split(' ')
    for (i=0; i<quantity; i++) {
      const crate = stacks[startPos].pop()
      stacks[endPos].push(crate)
    }
  })

  return Object.values(stacks).map(i => i.pop()[1]).join('')
}

function simulateCrateMove9001(input) {
  const [stacks, steps] = getParsedFile(input);

  steps.forEach(step => {
    const [_i, quantity, _f, startPos, _t, endPos] = step.split(' ')
    const liftedCrates = stacks[startPos].splice(stacks[startPos].length-quantity, quantity)
    stacks[endPos].push(...liftedCrates)
  })

  return Object.values(stacks).map(i => i.pop()[1]).join('')
}

module.exports = {simulateCrateMove9000, simulateCrateMove9001}