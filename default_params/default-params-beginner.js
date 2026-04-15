//default-params-beginner.js
// Function greet logs a message with a default value of 'Guest'
const greet = (name = 'Guest') => {
    console.log(`Hello, ${name}!`);
};

greet();          // Output: Hello, Guest!
greet('Alice');   // Output: Hello, Alice!