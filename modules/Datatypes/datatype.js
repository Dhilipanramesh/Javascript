// Data types
// JavaScript has several built-in data types that can be categorized into primitive and non-primitive types.
// Primitive data types include:
// number
let age = 25;
let price = 19.99;
console.log(age, price);    
let nanValue = NaN;
console.log( typeof nanValue);
console.log( nanValue);
// typeof operator
console.log(typeof age);    
console.log(typeof price);
// NaN is attract to any number, and any operation involving NaN will result in NaN
let testValue = NaN + 45;
console.log(testValue);





// bigint
// BigInt is a built-in object that provides a way to represent whole numbers larger than 2^53 - 1.
//
let largeNumber = 123456789012345678901234567890n;
console.log(largeNumber);   


// string
let name = "Alice";
let city = 'New York';
console.log(name, city);    

// boolean
let isStudent = true;
let isEmployed = false;
console.log(isStudent, isEmployed);

// null
let emptyValue = null;
console.log(emptyValue);

// undefined
let uninitializedVariable;
console.log(uninitializedVariable); 

// non-primitive data types include:
// object
let person = {
    name: "Alice",
    age: 25
};
console.log(person);      

// array
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);

