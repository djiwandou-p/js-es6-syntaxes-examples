//let-const-medium.js
const category = "Electronics";

for (let i = 1; i <= 3; i++) {
    // 'i' is only accessible inside this loop's curly braces
    let itemID = `PROD-${i}`;
    console.log(`Processing ${category} ID: ${itemID}`);
}

// console.log(i); // Error: 'i' is not defined here
// console.log(itemID); // Error: 'itemID' is not defined here