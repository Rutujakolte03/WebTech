//! date object
let d = new Date()
console.log(d)

//console.log(d.getFullYear())
//console.log(d.getMonth())
//console.log(d.getDate())
//console.log(d.getDay())
//console.log(d.getTime())
//console.log(d.getHours())
//console.log(d.getMinutes())
//console.log(d.getSeconds())

//set -- 1947 aug 15
//d.setFullYear(1947)
//d.setMonth(7)
//d.setDate(15)

//console.log(d)

//!math object
//math.methodname

//!sqrt(num)
console.log(Math.sqrt(4))
console.log(Math.sqrt(10))

//!cbrt(num)
console.log(Math.cbrt(27))
console.log(Math.cbrt(90))

//!round(num) : round up the value to nearest integer
console.log(Math.round(90.78))
console.log(Math.round(96.18))
console.log(Math.round(40.56))
console.log(Math.round(-90.78))

//!ceil(num): round up the value to nearest highest integer
console.log(Math.ceil(90.67))
console.log(Math.ceil(9.127))
console.log(Math.ceil(-77.67))

//!floor(num) : round up the value to nearest lowest integer
console.log(Math.floor(88.45))
console.log(Math.floor(8.125))
console.log(Math.floor(56.95))
console.log(Math.floor(-68.45))

//!trunc(num) : returns only integer part
console.log(Math.trunc(90.89))
console.log(Math.trunc(-67.89))
console.log(Math.trunc(4.199))

//!max(num1,num2,num3,....)
console.log(Math.max(90,78,223,-90,-345))

//console.log(Math.random()) 
//console.log(text[Math.floor(Math.random()*text.length)])

function generateOtp() {
    let text = 'qwereothohhe'
    let otp = '';
    
    for(let i=1; i<=4; i++) {
        otp += text[Math.floor(Math.random()*text.length)]  //5  8

    }
    console.log('The OTP is' + otp)
}

//generateOtp()

//!string and string methods
let str = 'Hello good evening'
console.log(str.length)

//!slice(stratindex,endindex) : to get the part of the string
console.log(str.slice(2,6))
console.log(str.slice(3))
console.log(str.slice(-5))
console.log(str.slice(2,-3))


//!substring(startindex, endindex) : very similar to slice but we cannot pass negative index here
console.log(str.substring(2,6))
console.log(str.substring(3))
//console.log(str.substring(-5))

//!substr(startindex, lengthofstring) :
console.log(str.substring(2,8))

//!replace() :
console.log(str.replace('evening', 'morning'))
console.log(str.replace('o', 'O'))

//!replaceAll() :
console.log(str.replaceAll('o' , 'O'))

//!trim : remove the start and end spaces
//trimStart(), trimend()
let text = '    hello have a great sleep   '
console.log(text)
console.log(text.trim())

//indexOf() : returns index value of the specifier character 
console.log(str.indexOf('Hello'))
console.log(str.indexOf('o'))

//!lastIndexOf() :
console.log(str.lastIndexOf('o'))

//!includes(str) 
console.log(str.includes('good')) 
console.log(str.includes('h'))

//!repeat (num)
console.log(str.repeat(5))

//! charAt()
console.log(str.charAt(8))
console.log(str.charAt(91))

//!!charCodeAt()
console.log(str.charCodeAt(8))

//!tolowercase()
console.log(str.toLowerCase())

//!concat() 
console.log(str.concat(text))

//!padstart()
//XXXXXXXX89

let num = '89'
console.log(num.padStart(10,'X'))

//!padEnd()
//8976XXXXXX
let a = '8679'
console.log(a.padEnd(12, 'X'))