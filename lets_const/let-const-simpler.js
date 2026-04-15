//let-const-simpler.js
let num = 10;

if (true) {
    let num = 20; // This is a different 'num' only alive inside this block
    console.log(num); // Output: 20 (inner scope)
}

console.log(num); // Output: 10 (outer scope)