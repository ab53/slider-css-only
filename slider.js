const text = {
  0: 'a little upset',
  1: 'waiting for good',
  2: 'very surprised',
  3: 'angry',
}

let carousel = document.querySelector('.carousel')
let slideText = document.querySelector('.carousel-text')
let dots = document.querySelectorAll('.carousel-control');
let slideIndex = 0;

slideText.textContent = text[slideIndex];

dots.forEach(dot => {
  dot.addEventListener('click', e => {

    let el;
    if(e.target.classList.contains('carousel-control')) {
      el = e.target;
    } else {
      el = e.target.closest('.carousel-control');
    }

    dots[slideIndex].classList.remove('active');
    slideIndex = el.dataset.slide;
    dots[slideIndex].classList.add('active');
    el.classList.add('active');
    slideText.textContent = text[slideIndex];
    carousel.style.transform = `translateX(${-720 * slideIndex}px)`;
  })
})
