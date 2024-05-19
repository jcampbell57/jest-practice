const Calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(Calculator.sum(1, 2)).toBe(3);
});

test('subtracts 1 from 3 to equal 2', () => {
  expect(Calculator.subtract(3, 1)).toBe(2);
});

test('multiplies 2 * 3 to equal 6', () => {
  expect(Calculator.multiply(2, 3)).toBe(6);
});

test('divides 6 / 3 to equal 2', () => {
  expect(Calculator.divide(6, 3)).toBe(2);
});
