//class-obj-medium1.js
class Shape {
    calculateArea() {
        return 0;
    }
}

// Rectangle 'extends' Shape, inheriting its structure
class Rectangle extends Shape {
    constructor(width, height) {
        super(); // Calls the parent class (Shape) constructor
        this.width = width;
        this.height = height;
    }

    // Overriding the parent's calculateArea with specific logic
    calculateArea() {
        return this.width * this.height;
    }
}

const rect = new Rectangle(20, 10);
console.log(rect.calculateArea()); // Output: 200