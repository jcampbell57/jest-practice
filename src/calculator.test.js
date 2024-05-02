// class Calculator {
//   static add(a, b) {
//     return a + b
//   }

//   static subtract(a, b) {
//     return a - b
//   }

//   static multiply(a, b) {
//     return a * b
//   }

//   static divide(a, b) {
//     return a / b
//   }
// }

// export default Calculator

const sum = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
