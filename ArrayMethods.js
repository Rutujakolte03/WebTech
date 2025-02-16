//! ArrayMethods
let flipkart = ['book', 'laptop', 'mobile', 'bottles', 'clothes'];
console.log(flipkart);

//push: add multiple elements at the end of the array
//flipkart.push('shoes', 'bluetooth', 'toys')
//console.log('After push')
//console.log(flipkart)

////!unshift: add multiple elements from the starting of the array
//flipkart.unshift('watch', 'bags', 'shirt')
//console.log('After unshift')
//console.log(flipkart)

//!pop : to delete last array element
//flipkart.pop();
//console.log('After pop');
//console.log(flipkart)

//!shift: to delete first element array
//flipkart.shift();
//console.log('After shift');
//console.log(flipkart)

//!splice(start_index, delete_count, replacement_element) : to delete and add the array element
//['book', 'laptop', 'mobile', 'bottles', 'cloths']

//adding and deleting
//flipkart.splice(1,2, 'shirt', 'kurtha', 'kajal',watch', 'ketchain')

//just adding
//flipkart.splice(2,0,'toys', 'bike')

//just deleting
flipkart.splice(2,1)
console.log(flipkart)

//!slice 
//let slicedArr = flipkart.slice(3)
//console.log(slicedArr)
//console.log(flipkart)

//! indexOf() : returns the index position of the specified element
console.log(flipkart.indexOf('mobile'))
console.log(flipkart.indexOf('tv'))

//!includes(): check the specified element is present in the array or not
console.log(flipkart.includes('laptop'))
console.log(flipkart.includes('refrig'))

//!at(): returns the element present in the specified index position
console.log(flipkart.at(2))
console.log(flipkart.push(100))

//join() : will join all the array elements into single string
console.log(flipkart.join());

//! toString(): will join all the array elements into single string
console.log(flipkart.toString())
console.log(flipkart.toString())

//! concat() : to merge multiple arrays
let newStock = ['ring', 'AC', 'teddy']
console.log(flipkart.concat(newStock))
console.log(flipkart)


//console.log(str.split('')) //['hello', 'good', 'evening']
//console.log(str.split('e')) //['h', 'llo good', 'v', 'ning']

console.log(filteredArr);  //[2000, 1500, 3600, 1000, 600]

//!map() -- to map each element
let mappedArr = filteredArr.map((value,ind) => {
let dis = 2/100*value
return value-dis
})

console.log(mappedArr)  //[1960, 1470, 3528, 980, 588]
//! reduce() -- reduce the array into single values
let totalcost = mappedArr.reduce((accumulator, value) => {
    return accumulator+value;
},0)

console.log(totalcost)




