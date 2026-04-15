//object-enhance-medium.js
const statusKey = "status";
const currentStatus = "Active";
const userName = "Dji";

const userProfile = {
    userName, // Property shorthand
    [statusKey]: currentStatus, // Dynamic key variable
    
    // Method shorthand
    displayInfo() {
        console.log(`User: ${this.userName}, Status: ${this.status}`);
    }
};

userProfile.displayInfo(); // Output: User: Dji, Status: Active