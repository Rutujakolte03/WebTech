//! Rest parameter(...variable_name): improved way to handle the function parameters
//store rest ofthe values in the form of array
//rest parameter shd be at last parameter

//function demo(a,b,...r){
//console.log(a)
//console.log(b)
//console.log(C)
//}

//demo(2,4,4,5,6,7,8,5,7,9,4,9)

// function demo(...r) {
//     console.log(r)
// }

// demo(2,4,4,5,6,7,8,5,7,9,4,9)

// !spread operator(...iterator): to spread the elements of iterator

let arr = [1,2,3,4,5,6]

function nums(...rest) {
    console.log(rest)
}

//nums(arr[0],arr[1],arr[2],arr[3],arr[4],arr[5])
nums(...arr)

let even = [2,4,6,8,10]
let odd = [1,3,5,7,9]

let integers = [...even,...odd]
console.log(integers)


//!Destructuring : taking out the data only which we need

//?Array destructuring:

let players = ['virat', 'dhoni','manu', 'ronaldo', 'rohit', 'stokes'] 

//! destructure -- manu, ronaldo and stocks

let [, , a4,a5, ,a6]  = players
console.log(a4)
console.log(a5)
console.log(a6)

//!destructure -- virat, manu and rohit
let[a1, , a2, , a3, ,] = players
console.log(a1)
console.log(a2)
console.log(a3)

//let [p1,p2,p3,p4,p5,p6] = players;
//console.log(p1)
//console.log(p2)
//console.log(p3)