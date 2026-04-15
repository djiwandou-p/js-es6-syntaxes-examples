//spread-rest-simplest.js
function listProducts(...products) {
    // 'products' is now an array containing all arguments
    console.log(products);
}

listProducts("Laptop", "Phone", "Tablet"); 
// Output: ["Laptop", "Phone", "Tablet"]