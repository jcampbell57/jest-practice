const reverseString = require('./reverseString');
const string = 'random string'

test('test1', () => {
  expect(reverseString(string)).toBe('gnirts modnar');
});
