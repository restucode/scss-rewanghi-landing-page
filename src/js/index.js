import '../scss/main.scss'


const nav = document.querySelector('.nav');

window.addEventListener('scroll', function() {
 nav.classList.toggle('active', window.scrollY > 0)
})