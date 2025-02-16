//!JSON : Javascript object notation

let person = {
    pname : 'Rutuja',
    height: 6.5,
    address: 'Pune'
}

console.log(person)

//!JSON.stringify() : javascript object ---> json object
let jsonObj = JSON.stringify(person)
console.log(jsonObj)

//!JSON.parse() : json object --> normal javascript object
let newObj = JSON.parse(jsonObj)
console.log(newObj)