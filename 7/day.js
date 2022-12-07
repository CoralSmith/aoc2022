
const { readFileSync } = require("fs");
const path = require("path");

function sumOfSmallDirs(input) {
  const data = readFileSync(path.resolve(__dirname, input)).toString();
  const filesystem = buildFilesystem(data)

  const smolDirTotal = addSmolDirSize(filesystem)
  return smolDirTotal
}

function addSmolDirSize(fs) {
  let layerTotal = 0
  Object.values(fs).filter(i => i.type === 'dir').forEach(d => {
    if (d.size <= 100000) {
      layerTotal += d.size
    }
    layerTotal += addSmolDirSize(d)
  })
  return layerTotal
}

function buildFilesystem(data) {
  const filesystem = {}
  let parentDir = undefined
  let workingDir = filesystem

  data.split('\n')
    .forEach(command => {
      if (command.startsWith('$ cd')) {
        const dirName = command.split(' ').pop()
        if (dirName !== '..') {
          workingDir[dirName] = { type: 'dir', parent: workingDir, size: 0 }
          parentDir = workingDir
          workingDir = workingDir[dirName]
        } else {
          workingDir = parentDir
          parentDir = workingDir.parent
        }
      } else if (command.startsWith('$ ls')) {
        //do nothing?
      } else if (command.startsWith('dir')) {
        const dir = command.split(' ').pop()
        workingDir[dir] = { type: 'dir', parent: workingDir, size: 0 }
      } else {
        const [size, filename] = command.split(' ')
        workingDir[filename] = { type: 'file', size: parseInt(size) }
      }
    })

  calcDirSize(filesystem['/'])
  return filesystem
}

function calcDirSize(workingDir){
  for ([key, val] of Object.entries(workingDir)) {
    if (key === 'parent') delete workingDir[key]
    else if (val.type === 'dir') {
      workingDir.size += calcDirSize(workingDir[key])
    }
    else if (val.type === 'file') workingDir.size += val.size
  }
  return workingDir.size
}

function getDirSizeToFreeSpace(input) {
  const data = readFileSync(path.resolve(__dirname, input)).toString();
  const fs = buildFilesystem(data)

  const spaceNeeded = 30000000 - (70000000 - fs['/'].size)

  let nearestDirSize = getHelpfulDirSizes(fs, spaceNeeded).sort((a, b) => a-b)
  return nearestDirSize.shift()
}

function getHelpfulDirSizes(fs, target){
  let helpfulDirs = []
  if (fs.type === 'dir' && fs.size >= target) helpfulDirs.push(fs.size)
  Object.values(fs).filter(i => i.type === 'dir').forEach(d => {
    if (d.size >= target) {
      helpfulDirs.push(d.size)
    }
    helpfulDirs.push(...getHelpfulDirSizes(d, target))
  })
  return helpfulDirs
}


module.exports = {sumOfSmallDirs, buildFilesystem, getDirSizeToFreeSpace };

