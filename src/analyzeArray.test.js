const analyzeArray = require('./analyzeArray');
const array = [1,8,3,4,2,6]

test('Return object with stats', () => {
  expect(analyzeArray(array)).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6
  });
});

test('Return empty object when given empty array', () => {
  expect(analyzeArray([])).toStrictEqual({});
});
