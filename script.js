function convertToRoman(num) {
  const symbols = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1],
  ];

  let result = '';

  // Loop through the symbol-value pairs
  for (let [symbol, value] of symbols) {
    // While num is greater than or equal to the value
    while (num >= value) {
      result += symbol; // Add the symbol to the result
      num -= value; // Subtract the value from num
    }
  }

  return result;
}

// Example usage:
console.log(convertToRoman(14)); // Output: XIV
console.log(convertToRoman(798)); // Output: DCCXCVIII
console.log(convertToRoman(36)); // Output: XXXVI

// do not edit below this line
module.exports = convertToRoman;
