//default-param-simplest.js
// Function calculateArea with default values for length (5) and width (3)
const calculateArea = (length = 5, width = 3) => length * width;

console.log(calculateArea());      // Output: 15 (5 * 3)
console.log(calculateArea(10));    // Output: 30 (10 * 3)
console.log(calculateArea(10, 2)); // Output: 20 (10 * 2)