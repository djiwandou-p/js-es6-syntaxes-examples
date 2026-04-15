//class-obj-medium2.js
class Product {
    // Initializing properties for name, price, and stock
    constructor(name, price, stock) {
        this.name = name;
        this.price = price;
        this.stock = stock;
    }

    // Method to display product details professionally
    displayProduct() {
        console.log(`Item: ${this.name} | Price: Rp${this.price} | In Stock: ${this.stock}`);
    }
}

// Creating different product objects
const laptop = new Product("Gaming Laptop", 15000000, 5);
const mouse = new Product("Wireless Mouse", 250000, 50);

laptop.displayProduct(); // Output: Item: Gaming Laptop | Price: Rp15000000 | In Stock: 5
mouse.displayProduct();  // Output: Item: Wireless Mouse | Price: Rp250000 | I