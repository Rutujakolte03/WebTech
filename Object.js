//!Object:  entity which has state and behaviour and we will used obj to store the data in the form of the key value pair

//!declaration
//?Object literal
//var/let/const object_name = {
// key1 : value1,
// key2 : value2,
// key3: value3
// }

let user = {
    uname : 'Anu',
    address : 'bng',
    age : 22
}

console.log(user) 

//dot notation(.) and bracket([]) notation

//!access --object_name.keyname, object_name['keyname']
// console.log(user.name)
// console.log(user["age"])


//? object constructor
let car = new Object()
car.brand = 'BMW';
car.color = "black";
car.cost = '2cr';
console.log(car);

//? constructor function
function student(sname, sid, address) {
    this.sname = sname;
    this.sid = sid;
    this.address = address;
}

// let std1 = new student(sname, sid, address) {
//     this.sname = sname;
//     this.sid = sid;
//     this.address = address
// }

// let std1 = new student('ram', 1, 'bng') 
// console.log(std1)

// let st2 = new student('rahul', 2, 'hyd') 
// console.log(std2)

let emp = {
    ename : 'Rahul',
    eid : 123, 
    salary: 45987.89,
    isDev : true,
    skills : ['HTML', 'CSS', 'JS', 'SQL', 'JAVA'] ,
    address : {
        city : 'Hyd',
        state : 'Telangana'
    },
    greet : function() {
        console.log(`Hello I am ${this.ename} from ${this.address.city}`)
    }
}
console.log(emp)
console.log(emp.salary)
console.log(emp.skills[1])
console.log(emp.address)
console.log(emp.address.city)
emp.greet()

//assign() used to merge multiple objects

let company = {
    cname : "HCL",
    dept : 'development',
    salary : 50000
}

// !Object methods
let student2 = {
    uname : 'Anu',
    address : 'bng',
    age : 21
}
console.log(user)

//keys() : returns array of keys
console.log(Object.keys(user))

//values() : returns array of values
console.log(Object.values(user))

//entries() : nested array -- key-value pair
console.log(Object.entries(user))

//hasOwn() : check the prop is present in the object or not
console.log(Object.hasOwn(user,'age'))
console.log(Object.hasOwn(user,'salary'))


console.log(student2)

//seal() used to sealed object we cannot add and delete
Object.seal(student2)
Object.isSealed(student2)

//!add
student2.salary = 50000;
console.log(student2);

//!delete
delete student2.uname
console.log(student2);

//!update
student2.age = 22
console.log(student2);

//access
console.log(user.uname);

//isSealed() : to check whether the obj is sealed or not
//console.log(Object.isSealed(user))

//freeze() : used to freeze the obj --- cannot add, delete and update
Object.freeze(user)

//!add
//!delete
//!update
//access

//isFrozen() : to check whether the obj is freezed or not 
console.log(Object.isFrozen(user))









//affecting the original obj
//to get the props of company obj in the user obj
//Object.assign(user,company)
//console.log(user)

//without affecting the original obj
let newObj = Object.assign({}, user, company) 
console.log(newObj)
console.log(user)
console.log(company)

