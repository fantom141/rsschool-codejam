const assert = require('assert');
const recursion = require('./recursion.js');

describe('recursion', () => {
    it('empty', () => {
        const tree = {};
        const solution = recursion(tree);
        assert.deepEqual(solution, [[]]);
    });

    it('from task', () => {
        const tree = {"value":100,"left":{"value":90,"left":{"value":70},"right":{"value":99}},"right":{"value":120,"left":{"value":110},"right":{"value":130}}};
        const solution = recursion(tree);
        assert.deepEqual(solution, [[100], [90, 120], [70,99,110,130]]);
    });
});