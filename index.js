#!/usr/bin/env node

const { getMaxCalories, getTopThreeCalories } = require("./1/day");
const { getTotalSignal } = require("./10/day");
const { inferScore, getScore } = require("./2/day");
const { getPrioritySum, findBadge } = require("./3/day");
const { allOverlap, someOverlap } = require("./4/day");
const { simulateCrateMove9000, simulateCrateMove9001 } = require("./5/day");
const {  getUniqueWindowIndex } = require("./6/day");
const { sumOfSmallDirs, getDirSizeToFreeSpace } = require("./7/day");
const { countTrees, getHighestScenicScore } = require("./8/day");
const { countTailMovement } = require("./9/day");

function main(){
    const day = parseInt(process.argv[2]??'0')
    const testFile = './input1.txt'

    if([0,1].includes(day)) {
        console.log(`Day 1:
    Elf with max calories has total of: ${getMaxCalories(testFile)}
    3 Elves with max cals have a total of: ${getTopThreeCalories(testFile)}`)
    }

    if([0,2].includes(day)) {
        console.log(`Day 2:
    What I think my RPD score is: ${getScore(testFile)}
    What my RPS score actually is: ${inferScore(testFile)}`)
    }

    if([0,3].includes(day)) {
        console.log(`Day 3:
    Max misorganised bag priority: ${getPrioritySum(testFile)}
    Mislabeled badges priority: ${findBadge(testFile)}`)
    }

    if([0,4].includes(day)) {
        console.log(`Day 4:
    Elves with duplicate assignments: ${someOverlap(testFile)}
    Elves with pointless assignments: ${allOverlap(testFile)}`)
    }

    if([0,5].includes(day)) {
        console.log(`Day 5:
    Simulated crate move with 9000 model: ${simulateCrateMove9000(testFile)}
    Simulated crate move with 9001 model: ${simulateCrateMove9001(testFile)}`)
    }

    if([0,6].includes(day)) {
        console.log(`Day 6:
    Star 0: ${getUniqueWindowIndex(testFile)}
    Star 1: ${getUniqueWindowIndex(testFile, 14)}`)
    }

    if([0,7].includes(day)) {
        console.log(`Day 7:
    Star 0: ${sumOfSmallDirs(testFile)}
    Star 1: ${getDirSizeToFreeSpace(testFile)}`)
    }

    if([0,8].includes(day)) {
        console.log(`Day 8:
    Star 0: ${countTrees(testFile)}
    Star 1: ${getHighestScenicScore(testFile)}`)
    }

    if([0,9].includes(day)) {
        console.log(`Day 9:
    Star 0: ${countTailMovement(testFile)}
    Star 1: ${countTailMovement(testFile, 10)}`)
    }

    if([0,10].includes(day)) {
        console.log(`Day 10:
    Star 0: ${getTotalSignal(testFile)}
    Star 1: ${countTailMovement(testFile, 10)}`)
    }

    return 0;
}

main()