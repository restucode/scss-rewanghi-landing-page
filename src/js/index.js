import '../scss/main.scss'


const nav = document.querySelector('.nav')
const burger = document.querySelector('.nav-burger')
const menu = document.querySelector('.nav-menu')

window.addEventListener('scroll', function() {
 nav.classList.toggle('active', window.scrollY > 0)
})

let prevScrollpos = window.pageYOffset;
window.addEventListener('scroll', function() {
 let currentScrollPos = window.pageYOffset;
 if (prevScrollpos > currentScrollPos) {
  nav.classList.remove('hide') 
 } else {
  nav.classList.add('hide')
 }
 prevScrollpos = currentScrollPos;
})

burger.addEventListener('click', function() {
 menu.classList.toggle('active')
 document.body.classList.toggle('active')
})