// const text = {
//   0: 'a little upset',
//   1: 'waiting for good',
//   2: 'very surprised',
//   3: 'angry',
// }

// let carousel = document.querySelector('.carousel')
// let slideText = document.querySelector('.carousel-text')
// let dots = document.querySelectorAll('.carousel-control');
// let slideIndex = 0;

// // console.log(document.querySelector('.carousel-item').clientWidth)

// let image = document.querySelector('.carousel-item');
// let imageWidth = image.clientWidth;

// slideText.textContent = text[slideIndex];

// dots.forEach(dot => {
//   dot.addEventListener('click', e => {
//     slideText.classList.add('to-left')
//     let el;
//     if(e.target.classList.contains('carousel-control')) {
//       el = e.target;
//     } else {
//       el = e.target.closest('.carousel-control');
//     }

//     dots[slideIndex].classList.remove('active');
//     slideIndex = el.dataset.slide;
//     dots[slideIndex].classList.add('active');
//     el.classList.add('active');
//     slideText.textContent = text[slideIndex];
//     carousel.style.transform = `translateX(${-100 * slideIndex}%)`;
//   })
// })

// window.addEventListener('resize', e => {
//   imageWidth = image.clientWidth;
//   carousel.style.transform = `translateX(${-100 * slideIndex}%)`;
// })

// slideText.addEventListener('animationend', () => {
//   slideText.classList.remove('to-left')
// })
