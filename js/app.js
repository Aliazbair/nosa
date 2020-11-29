// menu show y hidden
 const navMenu=document.getElementById('nav-menu'),
       toggleMenu=document.getElementById('nav-toggle'),
       closeMenu=document.getElementById('nav-close');


// show
toggleMenu.addEventListener('click',()=>{
    // togle class show
    navMenu.classList.toggle('show');
})
//hidden
closeMenu.addEventListener('click',()=>{
    // remove class show
    navMenu.classList.remove('show');
})

// remove menu
const navLink= document.querySelectorAll('.nav-link')
function linkAction(){
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click',linkAction))


// scroll section active link

// const sections= document.querySelectorAll('section[id]')
// window.addEventListener('scroll',scrollActive)

// function scrollActive(){
//     const scrollY= window.pageYOffset;
    
//     // loop throw section
//     sections.forEach(current=>{
//         const sectionHeight= current.offsetHeight;
//         const sectionTop= current.offsetTop - 50 ,
//          sectionId = current.getAttribute('id')
//         if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
//             document.querySelector('.nav-menu a[href*='+ sectionId + ']').classList.add('active');
//         }
//         else{
//             document.querySelector('.nav-menu a[href*='+ sectionId + ']').classList.remove('active')
//         }
//     })
// }