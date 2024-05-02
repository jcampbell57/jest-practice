const capitalize = require('./capitalize');
const string = 'random string'

test('test1', () => {
  expect(capitalize(string)).toBe('Random string');
});
