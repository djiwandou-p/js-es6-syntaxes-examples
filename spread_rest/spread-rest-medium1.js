//spread-rest-medium1.js
function sum(...numbers) {
    // 'numbers' is an array, so we can use .reduce() on it
    return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sum(1, 2, 3)); // Output: 6