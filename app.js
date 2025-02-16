document.write("Have a happy weekend");
console.log('Today is a great day..');

// Declaration and initialization of variables
var a; // Declaration
a = 20; // Initialization
a = 300; // Re-initialization
console.log(a);
var a; // Re-declaration (allowed with var)

// Using `let` keyword
let b; // Declaration
b = 100; // Initialization
b = 90; // Re-initialization
console.log(b);
// `let` does not allow re-declaration
// let b; // Uncommenting this will throw an error

// Using `const` keyword
const c = 200; // Declaration and initialization
console.log(c);
// `const` does not allow re-initialization or re-declaration
// c = 90; // Uncommenting this will throw an error
// const c; // Uncommenting this will throw an error

// Template literal and string examples
let sname = 'Mahi';
const address = "Hyd";
let role = `Front-end developer`;

// Correct use of template literals
console.log(`Hello, I am ${sname} from ${address} and I am working as a ${role}`);

// typeof operator to check variable types
console.log(typeof sname); // string
console.log(typeof address); // string
console.log(typeof role); // string
