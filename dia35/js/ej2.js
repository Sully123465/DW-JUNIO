const slider = document.getElementById('slider');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

const slideWidth = 310; // ancho imagen + margen

prev.addEventListener('click', () => {
  slider.scrollLeft -= slideWidth;
});

next.addEventListener('click', () => {
  slider.scrollLeft += slideWidth;
});
