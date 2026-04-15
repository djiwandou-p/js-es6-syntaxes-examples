//destructure-assign-simpler.js
let platform = "RevoU";
let category = "Education";

// Using shorthand to create an object [12]
let learningSite = { platform, category };

// Destructuring it back
const { platform: siteName } = learningSite;

console.log(siteName); // Output: RevoU