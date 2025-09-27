const slides = document.querySelectorAll('.slide');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
let current = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active', 'prev', 'next');

    if (i === index) {
      slide.classList.add('active');
    } else if (i < index) {
      slide.classList.add('prev');
    } else {
      slide.classList.add('next');
    }
  });
}

prev.addEventListener('click', () => {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
});

next.addEventListener('click', () => {
  current = (current + 1) % slides.length;
  showSlide(current);
});

// mostrar la primera slide al inicio
showSlide(current);
