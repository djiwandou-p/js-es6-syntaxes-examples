//object-enhance-simpler.js
let propKey = 'foo';

let obj = {
    // Square brackets allow the value of propKey to become the key name
    [propKey]: 'value'
};

console.log(obj.foo); // Output: value