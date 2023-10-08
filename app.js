const headerWrapper = document.querySelector('.header_wrapper')
const menuToggler = document.querySelector('.menu_toggler')
const menuClose = document.querySelector('.menu_close')
const navigation = document.querySelector('.nav_list')

window.addEventListener('scroll', () => {
  if (document.documentElement.scrollTop > 100) {
    headerWrapper.classList.add('fixed_header')
    navigation.classList.remove('active')
  } else {
    headerWrapper.classList.remove('fixed_header')
  }
})

menuToggler.addEventListener('click', () => {
  navigation.classList.add('active')
})
menuClose.addEventListener('click', () => {
  navigation.classList.remove('active')
})

// for animation

const animateLeft = document.querySelectorAll('.animate_left')
const animateRight = document.querySelectorAll('.animate_right')
const animateTop = document.querySelectorAll('.animate_top')

let options = {
  root: document.querySelector('body'),
  rootMargin: '0px',
  threshold: 1,
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)

    if (entry.isIntersecting) {
      entry.target.classList.add('show')
    }
  })
})

animateLeft.forEach((element) => {
  observer.observe(element)
}, options)
animateRight.forEach((element) => {
  observer.observe(element)
}, options)

animateTop.forEach((element) => {
  observer.observe(element)
}, options)

// else {
//       entry.target.classList.remove('show')
//     }
