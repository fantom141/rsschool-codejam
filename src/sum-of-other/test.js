const assert = require('assert');
const sumOfOther = require('./sum-of-other.js');

describe('sumOfOther', () => {
    it('empty', () => {
        const solution = sumOfOther([]);
        assert.deepEqual(solution, []);
    });

    it('only one element', () => {
        const solution = sumOfOther([3]);
        assert.deepEqual(solution, [0]);
    });

    it('two elements', () => {
        const solution = sumOfOther([4, 7]);
        assert.deepEqual(solution, [7, 4]);
    });

    it('from task', () => {
        const solution = sumOfOther([2, 3, 4, 1]);
        assert.deepEqual(solution, [8, 7, 6, 9]);
    });

    it('with negative number', () => {
        const solution = sumOfOther([2, -7, 4, 0, -2]);
        assert.deepEqual(solution, [-5, 4, -7, -3, -1]);
    });
});