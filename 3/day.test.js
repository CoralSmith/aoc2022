const { getPrioritySum, findBadge } = require("./day");

describe('day 3', () => {
    it('gets duplicates priority sum', () => {
        const result = getPrioritySum('../3/input0.txt');
        expect(result).toBe(157)
    })
    it('gets the badge priority sum', () => {
        const result = findBadge('../3/input0.txt');
        expect(result).toBe(70)
    })
})
