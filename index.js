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

function caesarCipher(string) {
  const array = [];
  const alphabet = /[A-Za-z]/;
  for (let i = 0; i < string.length; i += 1) {
    if (!alphabet.test(string[i])) { array.push(string[i]); } else {
      const newChar = String.fromCharCode(string.charCodeAt(i) + 5);
      array.push(newChar);
    }
  }
  return array.join('');
}

function analyzeArray(array) {
  const average = () => {
    let total = 0; const count = array.length;
    for (let i = 0; i < array.length; i += 1) { total += array[i]; }
    return total / count;
  };

  const minValue = () => {
    let min = array[0];
    for (let i = 1; i < array.length; i += 1) { min = (array[i] < min) ? array[i] : min; }
    return min;
  };

  const maxValue = () => {
    let max = array[0];
    for (let i = 1; i < array.length; i += 1) { max = (array[i] > max) ? array[i] : max; }
    return max;
  };
  return {
    average: average(),
    min: minValue(),
    max: maxValue(),
    length: array.length,

  };
}

module.exports = {
  capitalize, reverseString, calculator, caesarCipher, analyzeArray,
};
