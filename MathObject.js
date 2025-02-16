// // Unlike other objects, the Math object has no constructor.
// // The Math object is static.
// // All methods and properties can be used without creating a Math object first.
// // The syntax for any Math property is : Math. method(number)


// Math.round(x)	Returns x rounded to its nearest integer
	
// Math.ceil(x)	Returns x rounded up to its nearest integer
	
// Math.floor(x)	Returns x rounded down to its nearest integer
	
// Math.trunc(x)	Returns the integer part of x (new in ES6)


let num = 4.7;

console.log("Round:", Math.round(num));  // Nearest integer → 5
console.log("Ceil:", Math.ceil(num));    // Round up → 5
console.log("Floor:", Math.floor(num));  // Round down → 4
console.log("Trunc:", Math.trunc(num));  // Remove decimal → 4
