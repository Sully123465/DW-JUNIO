//Header blanco encima div

const headerLinks = document.querySelectorAll('header a');

window.addEventListener('scroll', () => {
    headerLinks.forEach(link => {
        const linkRect = link.getBoundingClientRect();

        
        if (linkRect.left < window.innerWidth / 2) {
            link.style.color = 'white'; 
        } else {
            link.style.color = 'black'; 
        }
    });
});

headerLinks.forEach(link => {
    const linkRect = link.getBoundingClientRect();
    if (linkRect.left < window.innerWidth / 2) {
        link.style.color = 'white';
    } else {
        link.style.color = 'black';
    }
});


//Slider
const homeSlider = document.querySelector('.home-slider .slides'); // Ajusta si tu slider de inicio tiene una clase específica
if (homeSlider) {
    const homeSlides = homeSlider.querySelectorAll('img'); 
    let homeIndex = 0;

    function moveHomeSlides() {
        homeIndex = (homeIndex + 1) % homeSlides.length;
        homeSlider.style.transition = 'transform 0.5s ease';
        homeSlider.style.transform = `translateX(${-homeIndex * 100}%)`;
    }

    setInterval(moveHomeSlides, 3000); // Cambia cada 3 segundos
}


//Grid posters
document.querySelectorAll(".poster-card").forEach(card => {
  const slides = card.querySelector(".slides");
  const images = slides.querySelectorAll("img");
  let index = 0;

  // Botones slider
  const nextBtn = card.querySelector(".next");
  const prevBtn = card.querySelector(".prev");

  nextBtn.addEventListener("click", () => {
    index = (index + 1) % images.length;
    slides.style.transform = `translateX(${-index * 100}%)`;
  });

  prevBtn.addEventListener("click", () => {
    index = (index - 1 + images.length) % images.length;
    slides.style.transform = `translateX(${-index * 100}%)`;
  });

  // Boton info
  const info = card.querySelector(".poster-info");
  const toggleBtn = card.querySelector(".toggle-info");

  toggleBtn.addEventListener("click", () => {
    info.classList.toggle("hidden");
    toggleBtn.textContent = info.classList.contains("hidden") ? "Ver más" : "Ver menos";
  });
});

//Validacion formulario
const formulario = document.querySelector('.contacto-form');
const mensaje = document.getElementById('mensaje-confirmacion');

formulario.addEventListener('submit', function(e) {
    e.preventDefault(); // evita que se recargue la página

    // Mostrar mensaje
    mensaje.style.display = 'block';

    // ocultar el mensaje después de 5 segundos
    setTimeout(() => {
        mensaje.style.display = 'none';
    }, 5000);

    // Limpiar formulario
    formulario.reset();
});




