//spread-rest-beginner.js
const fruits = ["Apple", "Banana"];
const vegetables = ["Carrot", "Spinach"];

// Spreading both arrays into a new one
const groceryList = [...fruits, ...vegetables];

console.log(groceryList); // Output: ["Apple", "Banana", "Carrot", "Spinach"]