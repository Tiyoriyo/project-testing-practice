function capitalize(string) {
  return string[0].toUpperCase();
}

function reverseString(string) {
  return Array.from(string).reverse().join('');
}

const calculator = (() => ({
  add(a, b) { return a + b; },
  subtract(a, b) { return a - b; },
  divide(a, b) { return a / b; },
  multiply(a, b) { return a * b; },
}))();

function caesarCipher(string, mode) {
  const array = [];
  const punctuation = /[A-Za-z]/;
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === ' ' || !punctuation.test(string[i])) { array.push(string[i]); } else {
      const prevCharCode = string.charCodeAt(i) + 5;
      const newChar = String.fromCharCode(prevCharCode);
      array.push(newChar);
    }
  }
  return array.join('');
}

module.exports = {
  capitalize, reverseString, calculator, caesarCipher,
};
