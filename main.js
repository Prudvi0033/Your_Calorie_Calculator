let c1 = document.querySelector("#cpop")
let c2 = document.querySelector("#box")
let c3 = document.querySelector("#opop")
let c4 = document.querySelector("#but")
c2.style.visibility = 'hidden'
c3.addEventListener('click',()=>{
    c2.classList.add('adut')
    c2.style.visibility = 'visible'
    c4.style.display = 'none'
    c2.style.transform = 'scale(1)'
})
c1.addEventListener('click',()=>{
    c2.classList.remove('adut')
    c4.style.display = 'inherit'
    c2.style.transform = 'scale(0)'
    c2.style.visibility = 'hidden'
})
