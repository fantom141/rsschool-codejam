module.exports = function recursion(tree, resArr = [], deepLevel = 0) {
  let arr = resArr;
  if (!arr[deepLevel]) {
    arr[deepLevel] = [];
  }

  if (Object.prototype.hasOwnProperty.call(tree, 'value')) {
    arr[deepLevel].push(tree.value);
  }
  if (tree.left) {
    arr = recursion(tree.left, arr, deepLevel + 1);
  }
  if (tree.right) {
    arr = recursion(tree.right, arr, deepLevel + 1);
  }
  return arr;
};
