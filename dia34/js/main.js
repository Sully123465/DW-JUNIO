// ---------- 1-1: Guardar enlace pulsado en localStorage ----------
const menuLinks = document.querySelectorAll('header nav a[data-name]');
const selectedName = document.getElementById('selectedName');

// Mostrar guardado al recargar
const savedName = localStorage.getItem('selectedMenuName');
if (savedName) {
  selectedName.textContent = savedName;
}

menuLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault(); // evita navegación
    const name = link.dataset.name;
    selectedName.textContent = name;
    localStorage.setItem('selectedMenuName', name);
  });
});

// ---------- 2-1: Lightbox ----------
const thumbs = document.querySelectorAll('.thumb');
const lightbox = document.getElementById('lightbox');
const lbImage = document.getElementById('lb-image');
const lbClose = document.getElementById('lb-close');

thumbs.forEach(img => {
  img.addEventListener('click', () => {
    lbImage.src = img.dataset.large;
    lightbox.setAttribute('aria-hidden', 'false');
  });
});
lbClose.addEventListener('click', () => {
  lightbox.setAttribute('aria-hidden', 'true');
  lbImage.src = '';
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    lightbox.setAttribute('aria-hidden', 'true');
    lbImage.src = '';
  }
});
lightbox.addEventListener('click', e => {
  if (e.target === lightbox) {
    lightbox.setAttribute('aria-hidden', 'true');
    lbImage.src = '';
  }
});

// ---------- 3-1: Lazy Loading ----------
const lazyImgs = document.querySelectorAll('.lazy');
if ('IntersectionObserver' in window) {
  const obs = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        observer.unobserve(img);
      }
    });
  });
  lazyImgs.forEach(img => obs.observe(img));
} else {
  lazyImgs.forEach(img => {
    img.src = img.dataset.src;
    img.removeAttribute('data-src');
  });
}

// ---------- 3-2: Accesibilidad ----------
const toggleButton = document.getElementById('toggleSection');
const panel = document.getElementById('panel');

toggleButton.addEventListener('click', () => {
  const expanded = toggleButton.getAttribute('aria-expanded') === 'true';

  // alternar atributos
  toggleButton.setAttribute('aria-expanded', String(!expanded));
  panel.setAttribute('aria-hidden', String(expanded));

  // alternar visibilidad con display
  panel.style.display = expanded ? 'none' : 'block';

  // cambiar texto del botón
  toggleButton.textContent = !expanded ? 'Ocultar sección' : 'Mostrar sección';
});
