/* Declare variables using `let` for different data types in JavaScript, and verify their types using `typeof`, 
including an uninitialized variable. */

const { log } = require("node:console");

/* userName; // String
organization; // String
contactNumber; // Number
knowsAutomation; // Boolean
usesPlaywright; // Undefined (not assigned) */

let userName="testleaf";
console.log("logged username : " + userName);
console.log(typeof userName);

let organization='Amazon'
console.log("org name : "+organization);
console.log(typeof organization);

let contactNumber=9083454354
console.log("contact number is : "+contactNumber);
console.log(typeof contactNumber);

let knowsAutomation=true
console.log("this person knows automation : "+knowsAutomation);
console.log(typeof knowsAutomation);

let usesPlaywright=undefined;
console.log(usesPlaywright);
console.log(typeof usesPlaywright);






