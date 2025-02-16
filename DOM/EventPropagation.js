//! event propagation
let child = document.getElementById('child')
let parent = document.getElementById('parent')
let gp = document.getElementById('gp')

child.addEventListener('click', (e) => {
    e.stopPropagation()
    console.log('Child clicked')
    child.style.backgroundColor = 'red'
}, false)

parent.addEventListener('click', (e) => {
    e.stopPropagation()
    console.log('Parent clicked')
    parent.style.backgroundColor = 'blue'
}, false)

gp.addEventListener('click', (e) => {
    e.stopPropagation()
    console.log('gp clicked')
    gp.style.backgroundColor = 'yellow'
}, false)

//! time delays
//console.log('Hello')

//? setTimeOut(function,delay)
//setTimeout(()=> {
    //console.log('bye....')},5000)

    //console.log('Good evening.....')


    //?setInterval(function,delay)

    console.log('Helllo')
    setInterval(() => {
        console.log('bye..........')
    },2000)

    console.log('Good evening......')



    //!clearTimeOut()
    let mysetimeout = setTimeout(() => {
        document.write('Happy Birthday.....!')
    }, 3000);

    function stop() {
        clearTimeout(mysetimeout)
    }

    stop()