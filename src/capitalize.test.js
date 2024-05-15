const capitalize = require('./capitalize');
const string = 'random string'

test('capitalize first letter', () => {
  expect(capitalize(string)).toBe('Random string');
});

test('empty string', () => {
  expect(capitalize('')).toBe('');
});

test('null', () => {
  expect(capitalize(null)).toBe(null);
});

test('undefined', () => {
  expect(capitalize(undefined)).toBe(undefined);
});
