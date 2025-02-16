// ! Function  
// console.log('Hello Functions') 
 
// var a = 90 
// // Declaration 
// function demo(user){ 
//     console.log(Good evening ${user}) 
//     // return Good evening ${user} 
// } 
 
// // console.log(demo('Ram')) 
 
// demo('Vedant') 
 
 
// ! Types of function 
//! Named function/Function declaration : function with name 
// function add(num1,num2){ 
//     console.log(num1+num2) 
// } 
// add(2,4) 
 
//! Anonymous function : function without name 
//! Function with expression/functional expression : Entire function we will store in the variable, variable along with the function is known as FE 
//! first-class function/ first-citizen function : The function passed as a value to a variable 
// let greet = function (){ 
//     console.log('Hello students') 
// } 
// greet() 
 
//! Immediate Invoking function(IIF) : The function shd be called/invoked immediately after the declaration 
// one more way to execute anonymous function 
// (function(user){ 
//     console.log(user)  
// })('ram'); 
 
 
//! Nested function 
// function parent(){ 
//     let pland = 10 ; 
//     let phouse = 4 
//     console.log(Parent props ${pland}acers land and ${phouse} houses) 
//     function child(){ 
//         let cland = 5 ; 
//         let chouse = 2; 
//         console.log(Child props ${cland+pland}acers land and ${chouse} houses); 
//         // lexical scoping : The ability of js engine to search a variable in the outer scope when it is not available in the local scope is known as lexical scoping or scope chaining. 
//         // closures : required data 
//     } 
//     return child 
// } 
// parent()()  // js currying 
 


 
//! Arrow function : reduces the syntax 
// implicit return 
// let demo = (a,b) => console.log(a+b) 
 


// demo(4,8) 
 
// let greet = ()=>{ 
//     let user = "Rahul"; 
//     console.log(Hello ${user} ) 
// } 
 
// greet() 
 
// // explicit return 
// let mul = (x,y) => {return x*y} 
// console.log(mul(2,3)) 
 
 
//! Higher order function(HOF) : function which takes one more function as a value to its parameter or returns function 
// use to perform multiple tasks 
//! callback function : the function passed as an argument to one more function 
 
// function hof(a,b,task){ 
//     let result = task(a,b) 
//     return result; 
// } 

// let add = hof(10, 20, function(x, y) {
//     return x + y;
// });
// console.log(add);
 
// let add = hof(10,20,function(x,y){return x+y}) 
// console.log(add) 
 
// let mul = hof(2,3,(p,q)=>{return q*p}) 
// console.log(mul) 
 



// !generator function : used to generate the multiple values  
// yield : keyword  
 
// function* generate(){ 
//     yield 123; 
//     yield 'ram' 
//     yield true; 
//     yield 90.878 
// } 
 
// let res = generate() 
// console.log(res.next().value) 
// console.log(res.next().value) 
// console.log(res.next().value) 
 
// for(let i =1 ;i<=3;i++){ 
//     console.log(res.next().value)    
// }

