const analyzeArray = require('./analyzeArray');
const array = []

test('test1', () => {
  expect(analyzeArray(array)).toBe(1);
});
