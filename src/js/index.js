import '../scss/main.scss'


const nav = document.querySelector('.nav')
const menu = document.querySelector('.nav-menu')
const burger = document.querySelector('.nav-burger')
const closeMenu = document.querySelector('.nav-menu-close')
const toTop = document.querySelector('.to-top')
const clickMenuScroll = document.querySelectorAll('.click-menu-scroll')


window.addEventListener('scroll', function() {
 nav.classList.toggle('active', window.scrollY > 0)

  if(window.pageYOffset > 300) {
   toTop.classList.add('active')
  } else {
   toTop.classList.remove('active')
  }

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


toTop.addEventListener('click', () => {
 window.scrollTo(0, 0);
})


clickMenuScroll.forEach(link => {
 link.addEventListener('click', (e) => {
  let el = document.getElementById(e.target.getAttribute("link"))
  el.scrollIntoView({behavior: 'smooth', block:'start'})
  menu.classList.remove('active')
 })
})


// Observer API

const sliders = document.querySelectorAll(".slide-in");

// const appearOptions = {
//   threshold: 0,
//   rootMargin: "0px 0px -250px 0px"
// };

const appearOnScroll = new IntersectionObserver(function(
  entries,
  appearOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
});

sliders.forEach(slider => {
  appearOnScroll.observe(slider);
});