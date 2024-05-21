function analyzeArray(arr) {
  if (!arr.length) return {};

  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const length = arr.length;
  const average = arr.reduce((sum, num) => sum + num, 0) / length;

  return {
    average: Math.round(average),
    min: min,
    max: max,
    length: length
  }
}

module.exports = analyzeArray;
