//function which is passed as an argument to another function is called callback function

function first() {
    console.log("first");
}
function second() {
console.log("third");
}
function third(callback) {
    console.log("second");
    callback();
}
first();
third(second);

// //first(); → Prints "first".
// third(second); → Calls third function and passes second as a callback.
// Inside third:
// Prints "second".
// Calls callback(); (which is second), so second() runs and prints "third".