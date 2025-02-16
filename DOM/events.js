// ! click 
// let btn = document.querySelector('button') 
// console.log(btn) 
// let text = document.querySelector('input') 
// console.log(text) 
 
// btn.addEventListener('click',()=>{ 
//     // console.log(text.value) 
//     document.body.style.backgroundColor = text.value 
//     text.value = '' 
// }) 
 
// ! mouseover and mouseout 
// let btn = document.querySelector('button') 
// btn.addEventListener('mouseover',()=>{ 
//     document.body.style.backgroundColor = 'black' 
//     document.body.style.color = 'white'; 
//     btn.innerText = 'LIGHT' 
// }) 
 
// btn.addEventListener('mouseout',()=>{ 
//     document.body.style.backgroundColor = 'white' 
//     document.body.style.color = 'black'; 
//     btn.innerText = 'DARK' 
// }) 
 
// ! mousedown and mouseup 
// let heart = document.getElementById('heart') 
// heart.addEventListener('mousedown',()=>{ 
//     heart.innerText = '🤩' 
// }) 
 
// heart.addEventListener('mouseup',()=>{ 
//     heart.innerText = '💖' 
// }) 
 
// ! contextMenu -- onrightclick 
// let q = document.getElementById('qsp') 
// console.log(q) 
 
// q.addEventListener('contextmenu',()=>{ 
//     q.innerHTML += 'The best platform to get the coding knowledge from basics'; 
//     document.body.style.backgroundColor = 'black' 
//     document.body.style.color = 'orange' 
// }) 
 
// ! dblclick 
// let btn = document.querySelector('button'); 
// btn.addEventListener('dblclick',()=>{ 
//     // document.write('Btn has been clicked') 
//     let h2 = document.createElement('h2') 
//     h2.innerHTML = 'btn has been clicked' 
 
//     document.body.appendChild(h2) 
//     btn.style.display = 'none' 
// }) 
 
 
// ! submit 
let login = document.forms[0] 
console.log(login) 
 
login.addEventListener('submit',(e)=>{  
    console.log(e) 
    // alert("Form submitted successfully...!") 
    e.preventDefault(); 
    document.body.style.backgroundColor = 'green' 
}) 
 
//  prevent default action of event on the particular element --- preventDefault() 
 
// ! key events 
 
// addEventListener('keypress',()=>{ 
//     console.log('Key pressed') 
// }) 
 
// addEventListener('keydown',()=>{ 
//     console.log('key long pressed...') 
// }) 
 
 
// event handler(function) takes a parameter --- > event object--represents information of the event 
// addEventListener('keyup',(e)=>{ 
//     console.log(e) 
//     console.log('key released...!'+e.key) 
// })