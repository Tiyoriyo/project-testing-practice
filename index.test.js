const {
  capitalize, reverseString, calculator, caesarCipher,
} = require('./index');

// test('Receive D from doNkey', () => {
//   expect(capitalize('doNkey')).toMatch(/D/);
// });

// test('Receive reverse of the given strings', () => {
//   expect(reverseString('Ragnirac')).toMatch(/caringaR/);
//   expect(reverseString('12345')).toMatch(/54321/);
//   expect(reverseString('BOMBOCLAT')).toMatch(/TALCOBMOB/);
//   expect(reverseString('racecar')).toMatch(/racecar/);
// });

// test('Receive correct calculation result for all four calculations', () => {
//   const a = 5; const b = 10;
//   const c = -20; const d = -30;
//   expect(calculator.add(a, b)).toBe(15);
//   expect(calculator.add(c, d)).toBe(-50);
//   expect(calculator.subtract(a, b)).toBe(-5);
//   expect(calculator.subtract(c, d)).toBe(10);
//   expect(calculator.divide(a, b)).toBe(0.5);
//   expect(calculator.divide(c, d)).toBeCloseTo(0.66666666666);
//   expect(calculator.multiply(a, b)).toBe(50);
//   expect(calculator.multiply(c, d)).toBe(600);
// });

test('Receive encrypted/decrypted message from given string', () => {
  expect(caesarCipher('This is fantastic!')).toMatch(/Ymnx nx kfsyfxynh!/);
});

test('Receive encrypted/decrypted message from given string', () => {
  expect(caesarCipher('A')).toMatch(/F/);
});
