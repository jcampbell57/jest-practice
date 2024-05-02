const caesarCipher = require('./caesarCipher');
const string = 'random string'

test('test1', () => {
  expect(caesarCipher(string)).toBe('another random string');
});
