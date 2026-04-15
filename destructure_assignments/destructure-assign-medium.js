//destructure-assign-medium.js
// Function that destructures an object directly in the parameters
const addProductToWishlist = ({ name, price }, quantity = 1) => {
    // Uses default parameters and template literals
    console.log(`Added ${quantity} units of ${name} (Price: ${price}) to wishlist.`);
};

const item = { name: "Mechanical Keyboard", price: 1500000, stock: 10 };

// We pass the whole object, but the function only extracts what it needs
addProductToWishlist(item, 2);