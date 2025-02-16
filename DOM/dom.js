// console.log(document) 
 
// // ! direct access 
// // console.log(document.body) 
// // console.log(document.baseURI) 
// // console.log(document.head) 
// // console.log(document.title) 
// // console.log(document.images) 
// // console.log(document.links) 
// // console.log(document.forms) 
 
// // ! DOM targetting methods 
 
// // getElementById(id) : targets the single element with specified unique id 
// console.log(document.getElementById('heading')) 
 
// // getElementsByClassName(classname) : multiple elements with specified classname 
// // returns html collection : array like object 
// let sections = document.getElementsByClassName('data') 
// console.log(sections) 
 
// // Array.from() : convert html collection ---> array 
// let arr = Array.from(sections) 
// console.log(arr) 
// for(let a of arr){ 
//     console.log(a) 
// } 
 
 
// // getElementsByTagName(tagname) : multiple elements with specified tagname 
// // returns html collection : array like object 
// let btns = document.getElementsByTagName('button') 
// console.log(btns) 
 
// // Array.from() : convert html collection ---> array 
// let arr1 = Array.from(btns) 
// console.log(arr1) 
// for(let a of arr1){ 
//     console.log(a) 
// } 
 
// // querySelector(selector) : tagrgets the element with specified css selector 
// // returns single element 
// let main = document.querySelector('.main_container') 
// console.log(main) 
 
// // ! querySelectorAll(selector) : tagrgets multiple elements with specified css selector 
// // returns nodelist -- very similar to html collection --- iterable 
// let buttons = document.querySelectorAll('#btn_blk button') 
// console.log(buttons) 
 
// for(let btn of buttons){ 
//     console.log(btn) 
// } 
 
// ? DOM Manipulation 
let heading = document.getElementById('greet') 
console.log(heading) 
 
// ! innerHTML : change the inner html of the element 
// element.innerHtml = new content 
// heading.innerHTML = '<i>Hlo Good Night🌟</i>' 
 
// ! innerText : change the content 
// heading.innerText = '<i>Good Night</i>' 
 
// ! changing the value of an attribute 
// element.attributename = newval 
heading.id = 'greetings' 
 
// ! style : Changing the style 
heading.style.color = 'red' 
// document.body.style.backgroundColor = 'black' 
 
// ! setAttribute(attr_name,attr_val) : add the attribute to the element 
heading.setAttribute('class','demo') 
 
// ! createElement(element) : create the element 
let btn = document.createElement('button') 
btn.innerText = 'click' 
 
// ! appendChild() : adding element 
document.body.appendChild(btn) 
 
// ! removeChild() : deleteing the existing element 
// document.body.removeChild(heading) 
 
// ! remove() : delete the element 
// heading.remove() 
// btn.remove() 
 
// ! replaceChild() 
// let parent = document.createElement('section') 
// parent.setAttribute('class','parent') 
 
// document.body.appendChild(parent) 
 
// let pic = document.createElement('img') 
// pic.src = 'https://media.istockphoto.com/id/180699358/photo/peacock.jpg?s=612x612&w=0&k=20&c=10hdZK3_qCEWp4-cPm4cXFBVXm2GxOS1nXYZB8kmYBQ=' 
// pic.style.height = '300px' 
// pic.style.width = '200px' 
 
// parent.appendChild(pic) 
 
// let text = document.createElement('h2') 
// text.innerText = 'Hello I am Peacock' 
 
// parent.replaceChild(text,pic)