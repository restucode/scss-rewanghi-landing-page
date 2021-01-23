import '../scss/main.scss'


const nav = document.querySelector('.nav')
const menu = document.querySelector('.nav-menu')
const burger = document.querySelector('.nav-burger')
const closeMenu = document.querySelector('.nav-menu-close')

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
 menu.classList.add('active')
 document.body.classList.add('active')
})

closeMenu.addEventListener('click', function() {
  menu.classList.remove('active')
  document.body.classList.remove('active')
})