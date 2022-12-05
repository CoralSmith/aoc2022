const { readFileSync } = require("fs");
const path = require("path");

function getFileContents(input){
  return readFileSync(path.resolve(__dirname, input)).toString().split('\n\n');
}

function simulateCrateMove(input) {
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
  
  const steps = stepBlock.split('\n')
  steps.forEach(step => {
    const [_i, quantity, _f, startPos, _t, endPos] = step.split(' ')
    for (i=0; i<quantity; i++) {
      const crate = stacks[startPos].pop()
      stacks[endPos].push(crate)
    }
  })
  const result = []
  for (const [k, val] of Object.entries(stacks)) {
    const c = val.pop()[1]
    result.push(c)
  }

  return result.join('')
}

module.exports = {simulateCrateMove}