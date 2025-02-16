//!Array - store multiple values

//! declaration -- 2

//? Array literal method
//syntax : var/let/const array_name = [value1, value2, value3,.............]

let std = ['mahi', 'hyd', 123, 25087.88, true]

const arr = [10, 20, 30, 40, 50];
console.log(arr);
console.log(std);

//access
console.log(arr[1]);
console.log(arr[4]);

//update
arr[2] = 300
console.log(arr);

//add
arr[7] = 80
console.log(arr);

//? Array Constructor
//let nums = new Array(1,2,3,4,5,5,66)

let nums = new Array(4);
nums[0] = 10;
nums[1] = 20;
nums[2] = 30;
nums[3] = 40;
nums[4] = 50;

console.log(nums);

//generate passoword
let student = ['Rohini', 123, 'rohini@gmail.com', '8275159161']
//password -- first 4 characters of mailid and last 4 digits of contact num
//rohi7879


