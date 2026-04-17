//  variable  decleration
let name;
//  variable initialization
name = "Prince";
//  variable decleration and initialization
let age = 25;
let city = "New York";
let college = "Harvard University"; 
console.log(name, age, city, college);
// multiple variable decleration and initialization
let role = "Software Engineer", salary = 70000, experience = 5;
console.log(role, salary, experience);
// variable reassignment
name = "John";
age = 30;
city = "Los Angeles";
college = "Stanford University";
role = "Senior Software Engineer";
salary = 90000;
experience = 7;
console.log(name, age, city, college, role, salary, experience);
// rules for variable names
// Variable names must follow certain rules in JavaScript. Here are some of the key rules:
// 1. Variable names must start with a letter, underscore (_), or dollar sign ($).
_myVariable = "Hello";
$anotherVariable = "World";
// 2. Variable names can contain letters, digits, underscores, and dollar signs.
let variable1 = "Hello";
let variable_2 = "World";
let variable$3 = "JavaScript";
// 3. Variable names cannot be reserved keywords in JavaScript (e.g., var, let, const, if, else, etc.).
// 4. Variable names are case-sensitive (e.g., name and Name are different variables).  
let myVariable = "Hello";
let MyVariable = "World";
console.log(myVariable, MyVariable);

// 5. Variable names should be descriptive and meaningful to improve code readability.
let firstName = "Alice";
let lastName = "Smith";
let ageOfPerson = 30;
console.log(firstName, lastName, ageOfPerson);

// 6. Variable names should not contain spaces. Instead, you can use camelCase or underscores to separate words.
let userName = "Alice";
let user_name = "Bob";
console.log(userName, user_name);

// 7. Variable names should not start with a number.
// let 1stVariable = "Hello"; // This will cause an error
let firstVariable = "Hello"; // This is correct
console.log(firstVariable);


// constants
// hardcoded values that do not change throughout the program

const PI = 3.14;
const GRAVITY = 9.81;
console.log(PI, GRAVITY);

const COLLOR = "#00FF00";

console.log(COLLOR);





