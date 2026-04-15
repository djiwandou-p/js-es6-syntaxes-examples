//class-obj-simpler.js
class Rectangle {
    // The constructor initializes the object's data
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    calculateArea() {
        return this.width * this.height;
    }
}

const myRect = new Rectangle(10, 5);
console.log(`Area: ${myRect.calculateArea()}`); // Output: Area: 50