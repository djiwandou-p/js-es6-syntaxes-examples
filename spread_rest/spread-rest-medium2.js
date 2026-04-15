//spread-rest-medium2.js
const savedItems = ["T-Shirt", "Jeans"];
const wishlist = ["Running Shoes", "Watch", "PS5"];

// Function to merge using the spread operator
const mergeCarts = (cart1, cart2) => {
    return [...cart1, ...cart2];
};

const finalCart = mergeCarts(savedItems, wishlist);

console.log("Your combined shopping cart:", finalCart);
// Output: ["T-Shirt", "Jeans", "Running Shoes", "Watch"]