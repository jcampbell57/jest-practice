const reverseString = require('./reverseString');
const string = 'random string'

test('reverse string', () => {
  expect(reverseString(string)).toBe('gnirts modnar');
});
