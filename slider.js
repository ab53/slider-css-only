const text = {
  0: 'a little disappointed',
  1: 'waiting for good',
  2: 'very surprised',
  3: 'angry',
}

let right = document.querySelector('.right')
let left = document.querySelector('.left')
let carousel = document.querySelector('.carousel')

let items = document.querySelectorAll('.carousel-item')

let currentSlide = 0



right.addEventListener('click', (e) => {
  console.log(e, carousel.style)
  currentSlide += 1

  console.log(e, currentSlide)
  carousel.style.transform = `translateX(${-720 * currentSlide}px)`;
})

left.addEventListener('click', (e) => {
  console.log(e, carousel.style)
  currentSlide -= 1

  console.log(e, currentSlide)
  carousel.style.transform = `translateX(${-720 * currentSlide}px)`;
})
