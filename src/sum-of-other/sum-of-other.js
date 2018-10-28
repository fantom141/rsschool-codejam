module.exports = function sumOfOther(arr) {
  const resArr = [];

  if (arr.length === 1) {
    resArr.push(0);
    return resArr;
  }

  for (let i = 0; i < arr.length; i = +1) {
    const sum = arr.reduce((prev, cur, idx) => {
      if (idx !== i) {
        return prev + cur;
      }
      return prev;
    }, 0);

    resArr.push(sum);
  }

  return resArr;
};
