// let local = document.querySelectorAll('.project')
// let local2 = local

// function hoverEffect(local, local2) {

//     for (let index = 0; index < local2.length; index++) {

//         local[index].addEventListener('mouseenter', () => {
//             var num = local2[index].children
//             var count = 0
//             // console.log(num[index])
//             // local2[index].style.backgroundColor = 'white'
//             // local2[index].style.transition = 'all 1s ease-in-out'
//             num[count].style.display = 'none'
//             num[count + 1].style.transform = 'translateY(0px)'
//             num[count + 1].style.display = 'block'
//         })
        
//         local[index].addEventListener('mouseleave', () => {
//             var num = local2[index].children
//             var count = 0
//             // console.log(num[index])
//             // local2[index].style.backgroundColor = 'transparent'
//             // local2[index].style.transition = 'all 1s ease-in-out'
//             num[count].style.display = 'block'

//             num[count+1].style.display = 'none'
//             num[count + 1].style.transform = 'translateY(400px)'
//         })

//     }
// }

// hoverEffect(local, local2)

// let skill = document.querySelectorAll('.skill')
// let skill2 = skill

// hoverEffect(skill, skill2)
var mail = document.getElementById('mail')

mail.addEventListener('click', ()=>{
    window.location.href = 'mailto:pranjalsrivastav07@gmail.com'
})