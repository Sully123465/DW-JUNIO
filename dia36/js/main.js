// ---------------------- 1-1: Cambiar Tabs ----------------------
const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // desactivar todas las tabs
    tabs.forEach(t => t.setAttribute('aria-selected', 'false'));
    // activar la seleccionada
    tab.setAttribute('aria-selected', 'true');

    // ocultar todo contenido
    contents.forEach(c => c.classList.remove('active'));
    // mostrar contenido correspondiente
    document.getElementById(tab.dataset.tab).classList.add('active');
  });
});

// ---------------------- 2-2: Juego Número Aleatorio ----------------------
const checkBtn = document.getElementById('checkNumber');
checkBtn.addEventListener('click', () => {
  const userNum = parseInt(document.getElementById('userNumber').value);
  const randomNum = Math.floor(Math.random() * 9) + 1;
  const result = document.getElementById('result');

  if (userNum === randomNum) {
    result.textContent = `¡Felicidades! Acertaste, era ${randomNum}.`;
  } else {
    result.textContent = `Fallaste, el número era ${randomNum}. Intenta otra vez.`;
  }
});
