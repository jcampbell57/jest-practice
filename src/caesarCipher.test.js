const caesarCipher = require('./caesarCipher');
const string = "What a string!"

test('Caeser cipher #1', () => {
  expect(caesarCipher(string, 5)).toBe('Bmfy f xywnsl!');
});

test('Caeser cipher #2', () => {
  expect(caesarCipher(string, 6)).toBe('Cngz g yzxotm!');
});
