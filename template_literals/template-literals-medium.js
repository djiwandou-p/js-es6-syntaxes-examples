//template-literals-medium.js
// Contoh menggunakan Arrow Function dan Template Literals
const greet = (name) => `Hello, ${name}! Welcome to the platform.`;

console.log(greet("Alice"));

// Contoh menggunakan IIFE (Immediately Invoked Function Expression)
((userName) => {
    console.log(`System Alert: ${userName} has logged in.`);
})("Admin");