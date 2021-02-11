var ham = document.getElementById('ham')
var cross = document.getElementById('cross')
var ul = document.getElementById('ul')


if(window,screen.width <= 500){

ham.addEventListener('click',()=>{
    ul.style.transition = 'all ease-in-out 2s'
    ham.style.display = 'none'
    ul.style.display = 'block'
    cross.style.display = 'block'
})

cross.addEventListener('click', ()=>{
    ul.style.transition = 'all ease-in-out 2s'
    ham.style.display = 'block'
    ul.style.display = 'none'
    cross.style.display = 'none'
})
}

