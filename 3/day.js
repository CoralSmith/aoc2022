const { readFileSync } = require("fs");
const path = require("path");

function getFileLines(input){
  return readFileSync(path.resolve(__dirname, input)).toString().split('\n');
}

function getPriority(character) {
    return [...'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'].indexOf(character) + 1
}

function findBadge(file){
    const rucksacks = getFileLines(file)
    const badges = []
    for (i=0; i <= rucksacks.length-3; i+=3){
        const [a, b, c] = rucksacks.slice(i, i+3)
        const dups = [...a].filter(a0 => [...b].includes(a0)).filter(a0 => [...c].includes(a0))
        badges.push(...Array.from(new Set(dups)))
    }
    return badges.map(getPriority).reduce((a, b) => a + b);
}

function getPrioritySum(file) {
    const duplicates = []
    getFileLines(file)
        .map(r => {
            const mid = (r.length / 2);
            return [r.slice(0, mid), r.slice(mid)];
        })
        .forEach(([compA, compB]) => {
            duplicates.push(...Array.from(new Set([...compA].filter(a => [...compB].includes(a)))));
        });

    const result = duplicates.map(getPriority).reduce((a, b) => a + b);
    return result;
}

module.exports = {getPrioritySum, findBadge}