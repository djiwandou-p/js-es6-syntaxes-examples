//class-obj-simplest.js
class Shape {
    // Method that returns a default value
    calculateArea() {
        return 0;
    }
}

const genericShape = new Shape();
console.log(genericShape.calculateArea()); // Output: 0