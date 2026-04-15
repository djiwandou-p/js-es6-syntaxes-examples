//default-param-medium.js
// Implementation of a wishlist feature
// It extracts product details and sets a default quantity to 1
const addProductToWishlist = ({ name, price }, quantity = 1) => {
    console.log(`Added to Wishlist: ${name}`);
    console.log(`Price: ${price} | Quantity: ${quantity}`);
};

const product = { name: "Wireless Mouse", price: 250000, stock: 50 };

// Calling with the product object but no quantity
addProductToWishlist(product); 
// Output: Added to Wishlist: Wireless Mouse
// Output: Price: 250000 | Quantity: 1

// Calling with a specific quantity
addProductToWishlist(product, 3);
// Output: Price: 250000 | Quantity: 3
